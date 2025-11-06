import React, { useState, useEffect } from 'react';
import { Student, STUDY_LEVELS, LessonResult } from '../types';
import { lmsService } from '../services/lmsService';
import { StudentDashboard } from './StudentDashboard';
import { QuizView } from './QuizView';
import { UserPlus, LogIn, ArrowRight, ClipboardCopy, Check, Sparkles, FlaskConical, Eye, EyeOff, UserCheck, XCircle } from 'lucide-react';

type RememberedStudent = { id: string; firstName: string; lastName: string };

export const StudentView: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [view, setView] = useState<'initial' | 'login' | 'register'>('initial');

  // Registration state
  const [regData, setRegData] = useState({ 
    firstName: '', 
    lastName: '', 
    gender: 'male' as 'male' | 'female',
    birthYear: '',
    schoolName: '', 
    schoolType: 'pioneer' as 'pioneer' | 'regular',
    studyLevelId: 'level-01', 
    password: '', 
    confirmPassword: '' 
  });
  const [regErrors, setRegErrors] = useState<Record<string, string>>({});
  const [newlyRegisteredStudent, setNewlyRegisteredStudent] = useState<Student | null>(null);
  const [copied, setCopied] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Login state
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [rememberedStudents, setRememberedStudents] = useState<RememberedStudent[]>([]);

  useEffect(() => {
    // Load remembered students on initial mount
    if (view === 'login') {
      setRememberedStudents(lmsService.getRememberedStudents());
    }
  }, [view]);

  const refreshStudentData = () => {
    if (selectedStudent && selectedStudent.id !== 'DEMO_STUDENT') {
      const updatedStudent = lmsService.getStudent(selectedStudent.id);
      if (updatedStudent) setSelectedStudent(updatedStudent);
    }
  };
  
  const validateRegistration = (): boolean => {
      const errors: Record<string, string> = {};
      if (!regData.firstName.trim() || regData.firstName.length > 40) errors.firstName = 'الإسم الشخصي مطلوب (40 حرف كحد أقصى).';
      if (!regData.lastName.trim() || regData.lastName.length > 40) errors.lastName = 'الإسم العائلي مطلوب (40 حرف كحد أقصى).';
      if (!regData.birthYear.trim() || !/^\d{4}$/.test(regData.birthYear)) {
          errors.birthYear = 'سنة الازدياد مطلوبة ويجب أن تتكون من 4 أرقام.';
      } else {
          const year = parseInt(regData.birthYear, 10);
          const currentYear = new Date().getFullYear();
          if (year < 1950 || year > currentYear - 5) {
              errors.birthYear = 'سنة الازدياد غير منطقية.';
          }
      }
      if (!regData.schoolName.trim() || regData.schoolName.length > 80) errors.schoolName = 'اسم المؤسسة مطلوب (80 حرف كحد أقصى).';
      if (!/^\d{8}$/.test(regData.password)) errors.password = 'الرقم السري يجب أن يتكون من 8 أرقام بالضبط.';
      if (regData.password !== regData.confirmPassword) errors.confirmPassword = 'الرقمان السريان غير متطابقين.';
      setRegErrors(errors);
      return Object.keys(errors).length === 0;
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateRegistration()) {
      const { confirmPassword, ...studentInfo } = regData;
      const studentDataForService = {
        ...studentInfo,
        birthYear: parseInt(studentInfo.birthYear, 10)
      };
      const newStudent = lmsService.addStudent(studentDataForService);
      setNewlyRegisteredStudent(newStudent);
    }
  };
  
  const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      setLoginError('');
      const student = lmsService.authenticateStudent(loginId, loginPassword);
      if (student) {
          if (rememberMe) {
            lmsService.addRememberedStudent(student);
          }
          setSelectedStudent(student);
      } else {
          setLoginError('المعرّف أو الرقم السري غير صحيح.');
      }
  };

  const handleDemoLogin = () => {
    const demoStudent: Student = {
      id: 'DEMO_STUDENT', // A unique ID to identify the demo user
      firstName: 'تلميذ',
      lastName: 'تجريبي',
      gender: 'male',
      birthYear: 2015,
      schoolName: 'المدرسة التجريبية',
      schoolType: 'regular',
      password: '', // Not needed
      studyLevelId: 'level-01',
      progressLevelId: 'level-01', // Restricts access to level 1
      progress: {},
    };
    setSelectedStudent(demoStudent);
  };

  const resetForms = () => {
      setRegData({ 
        firstName: '', 
        lastName: '', 
        gender: 'male',
        birthYear: '',
        schoolName: '', 
        schoolType: 'pioneer',
        studyLevelId: 'level-01', 
        password: '', 
        confirmPassword: '' 
      });
      setRegErrors({});
      setLoginId('');
      setLoginPassword('');
      setLoginError('');
      setRememberMe(false);
  };

  const handleSwitchView = (newView: 'initial' | 'login' | 'register') => {
      resetForms();
      setView(newView);
  };
  
  const copyToClipboard = () => {
      if (newlyRegisteredStudent) {
          navigator.clipboard.writeText(newlyRegisteredStudent.id).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
          });
      }
  };

  const handleForgetStudent = (e: React.MouseEvent, studentId: string) => {
    e.stopPropagation(); // Prevent login when clicking the 'X'
    lmsService.removeRememberedStudent(studentId);
    setRememberedStudents(lmsService.getRememberedStudents());
  };
  
  const handleRememberedLogin = (studentId: string) => {
    const student = lmsService.getStudent(studentId);
    if (student) {
      setSelectedStudent(student);
    } else {
      setLoginError('لم يتم العثور على الحساب المحفوظ. قد يكون قد تم حذفه.');
      lmsService.removeRememberedStudent(studentId); // Clean up
      setRememberedStudents(lmsService.getRememberedStudents());
    }
  };

  const handleLogout = () => {
    if (selectedStudent) {
      lmsService.removeRememberedStudent(selectedStudent.id);
    }
    setSelectedStudent(null);
    setNewlyRegisteredStudent(null);
    handleSwitchView('initial');
  };

  const handleSwitchAccount = () => {
    setSelectedStudent(null);
    setNewlyRegisteredStudent(null);
    handleSwitchView('login');
  };

  if (activeLessonId && selectedStudent) {
    return (
      <QuizView
        lessonId={activeLessonId}
        student={selectedStudent}
        onQuizComplete={(newResult, lessonId) => {
          setActiveLessonId(null);
          if (selectedStudent?.id === 'DEMO_STUDENT' && newResult && lessonId) {
            setSelectedStudent(prevStudent => {
              if (!prevStudent) return null;
              const newProgress = { ...prevStudent.progress, [lessonId]: newResult };
              return { ...prevStudent, progress: newProgress };
            });
          } else {
            refreshStudentData();
          }
        }}
      />
    );
  }

  if (selectedStudent) {
    return (
      <StudentDashboard
        student={selectedStudent}
        onStartLesson={(lessonId) => setActiveLessonId(lessonId)}
        onSwitchStudent={handleLogout}
        onSwitchAccount={handleSwitchAccount}
        onStudentUpdate={(updatedStudent) => setSelectedStudent(updatedStudent)}
      />
    );
  }

  if (newlyRegisteredStudent) {
      return (
          <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center animate-fade-in-up">
              <h2 className="text-2xl font-bold text-green-600 mb-4">تم إنشاء الحساب بنجاح!</h2>
              <p className="text-gray-700 mb-2">مرحباً بك، {newlyRegisteredStudent.firstName}.</p>
              <p className="text-gray-700 mb-4">هذا هو معرّف الدخول الخاص بك. الرجاء الاحتفاظ به لتسجيل الدخول لاحقاً:</p>
              <div className="flex items-center justify-center gap-2 p-3 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 mb-6">
                  <span className="text-lg font-bold text-gray-800 tracking-wider">{newlyRegisteredStudent.id}</span>
                  <button onClick={copyToClipboard} className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                      {copied ? <Check className="w-5 h-5 text-green-600" /> : <ClipboardCopy className="w-5 h-5" />}
                  </button>
              </div>
              <button
                  onClick={() => setSelectedStudent(newlyRegisteredStudent)}
                  className="w-full flex items-center justify-center gap-2 p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                  <span>المتابعة إلى لوحة التحكم</span>
                  <ArrowRight className="w-5 h-5" />
              </button>
          </div>
      );
  }
  
  if (view === 'login') {
      return (
          <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg animate-fade-in-up">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">تسجيل الدخول</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                  <input
                      type="text"
                      value={loginId}
                      onChange={(e) => setLoginId(e.target.value)}
                      placeholder='اسم الحساب : E202512345678'
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                  />
                  <div className="relative">
                    <input
                        type={showLoginPassword ? 'text' : 'password'}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder='الرقم السري : "12345678"'
                        className="w-full p-3 border border-gray-300 rounded-lg pl-10"
                        required
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                      className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-gray-700"
                      aria-label={showLoginPassword ? "إخفاء الرقم السري" : "إظهار الرقم السري"}
                    >
                      {showLoginPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="mr-2 block text-sm text-gray-900">
                        تذكرني على هذا الجهاز
                    </label>
                  </div>
                  {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
                  <button type="submit" className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">دخول</button>
                  <button type="button" onClick={() => handleSwitchView('initial')} className="w-full p-3 bg-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-300 transition-colors">رجوع</button>
              </form>
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500 text-sm">أو</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <button 
                  type="button" 
                  onClick={handleDemoLogin} 
                  className="w-full flex items-center justify-center gap-3 p-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
              >
                  <FlaskConical className="w-5 h-5" />
                  <span>الدخول بحساب تجريبي</span>
              </button>

              {rememberedStudents.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-bold text-gray-600 mb-2 text-center">الحسابات المسجلة على هذا الجهاز</h3>
                  <div className="space-y-2">
                    {rememberedStudents.map(acc => (
                      <div key={acc.id} className="group relative flex items-center justify-between bg-gray-50 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-sm cursor-pointer hover:scale-105 transform" onClick={() => handleRememberedLogin(acc.id)}>
                        <div className="flex items-center gap-3 text-right w-full p-2">
                          <UserCheck className="w-6 h-6 text-gray-500" />
                          <div>
                            <p className="font-semibold text-gray-800">{acc.firstName} {acc.lastName}</p>
                            <p className="text-xs text-gray-500 font-mono">{acc.id}</p>
                          </div>
                        </div>
                        <button 
                           onClick={(e) => handleForgetStudent(e, acc.id)}
                           className="absolute left-1 top-1/2 -translate-y-1/2 p-2 mr-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                           aria-label={`إزالة حساب ${acc.firstName}`}
                        >
                          <XCircle className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
      );
  }

  if (view === 'register') {
      return (
          <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg animate-fade-in-up">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">إنشاء حساب تلميذ جديد</h2>
              <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                          <input type="text" placeholder="الإسم الشخصي" value={regData.firstName} onChange={e => setRegData({...regData, firstName: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" maxLength={40} />
                          {regErrors.firstName && <p className="text-red-500 text-xs mt-1">{regErrors.firstName}</p>}
                      </div>
                      <div>
                          <input type="text" placeholder="الإسم العائلي" value={regData.lastName} onChange={e => setRegData({...regData, lastName: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" maxLength={40} />
                          {regErrors.lastName && <p className="text-red-500 text-xs mt-1">{regErrors.lastName}</p>}
                      </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">الجنس</label>
                          <div className="flex items-center gap-x-6 pt-2">
                              <div className="flex items-center">
                                  <input id="gender-male" name="gender" type="radio" value="male" checked={regData.gender === 'male'} onChange={e => setRegData({...regData, gender: e.target.value as 'male' | 'female'})} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                                  <label htmlFor="gender-male" className="mr-2 block text-sm text-gray-900">ذكر</label>
                              </div>
                              <div className="flex items-center">
                                  <input id="gender-female" name="gender" type="radio" value="female" checked={regData.gender === 'female'} onChange={e => setRegData({...regData, gender: e.target.value as 'male' | 'female'})} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                                  <label htmlFor="gender-female" className="mr-2 block text-sm text-gray-900">أنثى</label>
                              </div>
                          </div>
                      </div>
                      <div>
                          <label htmlFor="birthYear" className="block text-sm font-medium text-gray-700 mb-1">سنة الازدياد</label>
                          <input type="number" id="birthYear" placeholder="مثال: 2015" value={regData.birthYear} onChange={e => setRegData({...regData, birthYear: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" />
                          {regErrors.birthYear && <p className="text-red-500 text-xs mt-1">{regErrors.birthYear}</p>}
                      </div>
                  </div>

                  <input type="text" placeholder="اسم المؤسسة" value={regData.schoolName} onChange={e => setRegData({...regData, schoolName: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" maxLength={80} />
                  {regErrors.schoolName && <p className="text-red-500 text-xs mt-1">{regErrors.schoolName}</p>}

                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">نوع المؤسسة</label>
                      <div className="flex items-center gap-x-6 pt-2">
                          <div className="flex items-center">
                              <input id="school-pioneer" name="schoolType" type="radio" value="pioneer" checked={regData.schoolType === 'pioneer'} onChange={e => setRegData({...regData, schoolType: e.target.value as 'pioneer' | 'regular'})} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                              <label htmlFor="school-pioneer" className="mr-2 block text-sm text-gray-900">رائدة</label>
                          </div>
                          <div className="flex items-center">
                              <input id="school-regular" name="schoolType" type="radio" value="regular" checked={regData.schoolType === 'regular'} onChange={e => setRegData({...regData, schoolType: e.target.value as 'pioneer' | 'regular'})} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                              <label htmlFor="school-regular" className="mr-2 block text-sm text-gray-900">غير رائدة</label>
                          </div>
                      </div>
                  </div>

                  <select value={regData.studyLevelId} onChange={e => setRegData({...regData, studyLevelId: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg bg-white">
                      {STUDY_LEVELS.map(level => <option key={level.id} value={level.id}>{level.name}</option>)}
                  </select>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                          <div className="relative">
                            <input type={showRegPassword ? 'text' : 'password'} placeholder="الرقم السري (8 أرقام)" value={regData.password} onChange={e => setRegData({...regData, password: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg pl-10" maxLength={8} />
                            <button
                              type="button"
                              onClick={() => setShowRegPassword(!showRegPassword)}
                              className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-gray-700"
                              aria-label={showRegPassword ? "إخفاء الرقم السري" : "إظهار الرقم السري"}
                            >
                              {showRegPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                          {regErrors.password && <p className="text-red-500 text-xs mt-1">{regErrors.password}</p>}
                      </div>
                      <div>
                          <div className="relative">
                            <input type={showConfirmPassword ? 'text' : 'password'} placeholder="تأكيد الرقم السري" value={regData.confirmPassword} onChange={e => setRegData({...regData, confirmPassword: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg pl-10" maxLength={8} />
                             <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-gray-700"
                              aria-label={showConfirmPassword ? "إخفاء الرقم السري" : "إظهار الرقم السري"}
                            >
                              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                          {regErrors.confirmPassword && <p className="text-red-500 text-xs mt-1">{regErrors.confirmPassword}</p>}
                      </div>
                  </div>
                  <button type="submit" className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">إنشاء الحساب</button>
                  <button type="button" onClick={() => handleSwitchView('initial')} className="w-full p-3 bg-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-300 transition-colors">رجوع</button>
              </form>
          </div>
      );
  }

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg text-center animate-fade-in-up">
      <Sparkles className="h-16 w-16 text-yellow-500 mb-4 mx-auto" />
      <h2 className="text-3xl font-bold mb-6 text-gray-800">مرحباً بك!</h2>
      <div className="space-y-4">
          <button onClick={() => handleSwitchView('login')} className="w-full flex items-center justify-center gap-3 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transition-transform hover:-translate-y-1 text-lg font-bold">
              <LogIn />
              <span>تسجيل الدخول</span>
          </button>
          <button onClick={() => handleSwitchView('register')} className="w-full flex items-center justify-center gap-3 p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors transition-transform hover:-translate-y-1 text-lg font-bold">
              <UserPlus />
              <span>إنشاء حساب جديد</span>
          </button>
      </div>
    </div>
  );
};