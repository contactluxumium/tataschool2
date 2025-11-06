// أسامة وعراب	
// P202502031993	
// 14584135

// حساب افتراضي
// E202512345678	
// 12345678

import React, { useState, useEffect } from 'react';
import { StudentView } from './components/StudentView';
import { TeacherView } from './components/TeacherView';
import { lmsService } from './services/lmsService';
import { BookOpen, KeyRound, ShieldCheck, User, Eye, EyeOff, Upload, Download } from 'lucide-react';

// Initialize data on app load
lmsService.initializeData();

const App: React.FC = () => {
  const [role, setRole] = useState<'student' | 'teacher' | null>(null);
  const [showTeacherLogin, setShowTeacherLogin] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [failedLoginAttempts, setFailedLoginAttempts] = useState(0);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [lockoutTimeLeft, setLockoutTimeLeft] = useState(0);

  const TEACHER_CODE = '14584135';
  const LOCKOUT_SECONDS = 30;
  const FAILED_ATTEMPTS_KEY = 'teacherLoginFailedAttempts';
  const LOCKOUT_END_TIME_KEY = 'teacherLoginLockoutEndTime';

  useEffect(() => {
    // Check for an active lockout whenever the login screen is shown
    if (!showTeacherLogin) return;

    const lockoutEnd = sessionStorage.getItem(LOCKOUT_END_TIME_KEY);
    if (lockoutEnd) {
        const endTime = parseInt(lockoutEnd, 10);
        const remainingTime = Math.ceil((endTime - Date.now()) / 1000);

        if (remainingTime > 0) {
            setIsLockedOut(true);
            setLockoutTimeLeft(remainingTime);
            setLoginError(`لقد حاولت عدة مرات بشكل خاطئ. يرجى الانتظار.`);
            setFailedLoginAttempts(3);
        } else {
            // Lockout has expired, clear storage
            sessionStorage.removeItem(FAILED_ATTEMPTS_KEY);
            sessionStorage.removeItem(LOCKOUT_END_TIME_KEY);
            setFailedLoginAttempts(0); // Reset attempts
        }
    } else {
        const attempts = sessionStorage.getItem(FAILED_ATTEMPTS_KEY);
        setFailedLoginAttempts(attempts ? parseInt(attempts, 10) : 0);
    }
  }, [showTeacherLogin]);

  useEffect(() => {
    if (!isLockedOut) return;

    if (lockoutTimeLeft <= 0) {
        setIsLockedOut(false);
        setFailedLoginAttempts(0);
        setLoginError('');
        sessionStorage.removeItem(FAILED_ATTEMPTS_KEY);
        sessionStorage.removeItem(LOCKOUT_END_TIME_KEY);
        return;
    }

    const timerId = setInterval(() => {
      setLockoutTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval
  }, [isLockedOut, lockoutTimeLeft]);

  const clearLoginAttemptsState = () => {
    setPasswordInput('');
    setLoginError('');
    setFailedLoginAttempts(0);
    setIsLockedOut(false);
    setLockoutTimeLeft(0);
    sessionStorage.removeItem(FAILED_ATTEMPTS_KEY);
    sessionStorage.removeItem(LOCKOUT_END_TIME_KEY);
  };

  const handleTeacherLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLockedOut) return;

    if (passwordInput === TEACHER_CODE) {
      // Successful login
      setRole('teacher');
      setShowTeacherLogin(false);
      clearLoginAttemptsState();
    } else {
      // Failed login
      const newAttemptCount = failedLoginAttempts + 1;
      setFailedLoginAttempts(newAttemptCount);
      sessionStorage.setItem(FAILED_ATTEMPTS_KEY, newAttemptCount.toString());
      setPasswordInput('');

      if (newAttemptCount >= 3) {
        // Lockout
        const lockoutEndTime = Date.now() + LOCKOUT_SECONDS * 1000;
        sessionStorage.setItem(LOCKOUT_END_TIME_KEY, lockoutEndTime.toString());
        setIsLockedOut(true);
        setLockoutTimeLeft(LOCKOUT_SECONDS);
        setLoginError(`لقد حاولت عدة مرات بشكل خاطئ. يرجى الانتظار.`);
      } else {
        setLoginError('الرمز السري غير صحيح. الرجاء المحاولة مرة أخرى.');
      }
    }
  };
  
  const returnToRoleSelectionScreen = () => {
    setShowTeacherLogin(false);
    setPasswordInput('');
    setLoginError('');
  };

  const resetToRoleSelection = () => {
    setRole(null);
    setShowTeacherLogin(false);
    // Do NOT clear login attempts state here. This prevents bypassing the lockout.
    // The state is only cleared on successful login.
  };

  const handleExportAll = () => {
    try {
        const content = lmsService.getContent();
        const students = lmsService.getStudents();
        const rememberedStudents = lmsService.getRememberedStudents();
        
        const allData = { content, students, rememberedStudents };
        
        const jsonString = JSON.stringify(allData, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'platform-backup.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (error) {
        alert('حدث خطأ أثناء تصدير البيانات.');
    }
  };

  const handleImportAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!window.confirm('سيؤدي هذا إلى استبدال كل بيانات المنصة الحالية (المحتوى والتلاميذ). هذا الإجراء لا يمكن التراجع عنه. هل أنت متأكد من المتابعة؟')) {
        e.target.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const text = event.target?.result;
            if (typeof text !== 'string') throw new Error("فشل قراءة الملف.");
            lmsService.importAllData(text);
            alert('تم استيراد البيانات بنجاح! سيتم إعادة تحميل المنصة الآن.');
            window.location.reload();
        } catch (error) {
            alert(`فشل استيراد البيانات: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            e.target.value = '';
        }
    };
    reader.readAsText(file);
  };

  if (!role) {
    if (showTeacherLogin) {
      return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-sm text-center">
            <KeyRound className="h-16 w-16 text-slate-500 mb-4 mx-auto" />
            <h2 className="text-3xl font-bold text-slate-800 mb-4">الدخول لحساب الأستاذ</h2>
            <p className="text-md text-slate-600 mb-6">الرجاء إدخال الرمز السري للمتابعة.</p>
            <form onSubmit={handleTeacherLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="الرمز السري"
                  className="w-full p-3 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-200 disabled:cursor-not-allowed pl-10"
                  aria-label="الرمز السري"
                  autoFocus
                  disabled={isLockedOut}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? "إخفاء الرمز السري" : "إظهار الرمز السري"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {loginError && !isLockedOut && <p className="text-red-500 text-sm">{loginError}</p>}
              {isLockedOut && (
                  <p className="text-yellow-600 text-sm font-bold bg-yellow-100 p-2 rounded-md">
                      محاولات كثيرة خاطئة. يرجى الانتظار لمدة {lockoutTimeLeft} ثانية.
                  </p>
              )}
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
                disabled={isLockedOut}
              >
                دخول
              </button>
              <button
                type="button"
                onClick={returnToRoleSelectionScreen}
                className="w-full p-3 bg-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-300 transition-colors"
              >
                رجوع
              </button>
            </form>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 animate-fade-in">
        <div className="w-full max-w-md text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">مرحباً بك في منصة الرياضيات</h1>
          <p className="text-lg text-slate-600 mb-8">اختر دورك للمتابعة</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => setRole('student')}
              className="group flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <User className="h-16 w-16 text-blue-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-2xl font-bold text-slate-700">أنا تلميذ</span>
            </button>
            <button
              onClick={() => setShowTeacherLogin(true)}
              className="group flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <ShieldCheck className="h-16 w-16 text-emerald-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-2xl font-bold text-slate-700">أنا أستاذ</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 animate-fade-in">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-600">منصة الرياضيات من إعداد الأستاذ : وعراب أسامة</h1>
          </div>
          <div className="flex items-center gap-2">
            {role === 'teacher' ? (
              <>
                <button
                    onClick={handleExportAll}
                    title="تصدير كل شيء"
                    className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                >
                    <Download size={16} />
                    <span>تصدير الكل</span>
                </button>
                <label 
                    title="استيراد كل شيء"
                    className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm cursor-pointer"
                >
                    <Upload size={16} />
                    <span>استيراد الكل</span>
                    <input type="file" accept=".json" className="hidden" onChange={handleImportAll} />
                </label>
                <button
                  onClick={resetToRoleSelection}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
                >
                  <User size={18} />
                  <span>الانتقال الى حساب التلميذ</span>
                </button>
              </>
            ) : (
              <button
                onClick={resetToRoleSelection}
                className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
              >
                <ShieldCheck size={18} />
                <span>الانتقال الى حساب الاستاذ</span>
              </button>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-4 md:p-6">
        {role === 'student' ? <StudentView /> : <TeacherView />}
      </main>
    </div>
  );
};


export default App;