import React, { useState, useMemo, useEffect } from 'react';
import { Student, STUDY_LEVELS, LessonResult } from '../types';
import { lmsService } from '../services/lmsService';
import { Users, Target, Percent, BarChart, SlidersHorizontal } from 'lucide-react';

interface BarChartProps {
    title: string;
    data: { name: string; value: number; numerator?: number; denominator?: number }[];
    color: string;
}

const BarChartComponent: React.FC<BarChartProps> = ({ title, data, color }) => {
    const maxValue = Math.max(...data.map(d => d.value), 0);
    return (
        <div className="bg-white p-4 rounded-lg shadow-md h-full">
            <h3 className="text-lg font-bold mb-4 text-center">{title}</h3>
            <div className="space-y-2">
                {data.map(item => (
                    <div key={item.name} className="flex items-center">
                        <div className="w-1/4 text-sm text-gray-600 text-right pr-2">{item.name}</div>
                        <div className="w-3/4 bg-gray-200 rounded-full h-6">
                            <div
                                className="h-6 rounded-full text-white text-xs flex items-center justify-center gap-2 transition-all duration-500 px-2"
                                style={{ width: `${(item.value / (maxValue || 1)) * 100}%`, backgroundColor: color }}
                            >
                                <span className="font-bold">{item.value.toFixed(1)}%</span>
                                {item.denominator !== undefined && item.denominator > 0 && (
                                    <span className="text-gray-200 text-[10px] opacity-80">({item.numerator}/{item.denominator})</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const PerformanceAnalytics: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [filters, setFilters] = useState({
        studyLevelId: 'all',
        schoolType: 'all' as 'all' | 'pioneer' | 'regular',
        gender: 'all' as 'all' | 'male' | 'female',
        schoolName: '',
        birthYearStart: '',
        birthYearEnd: ''
    });

    useEffect(() => {
        setStudents(lmsService.getStudents());
    }, []);

    const enhancedStudents = useMemo(() => {
        return students.map(student => {
            const progressValues = Object.values(student.progress);
            const totalPoints = progressValues.reduce((sum, p) => sum + p.score, 0);
            const totalAttemptedPoints = progressValues.reduce((sum, p) => sum + p.totalQuestions, 0);
            const scorePercentage = totalAttemptedPoints > 0 ? Math.round((totalPoints / totalAttemptedPoints) * 100) : 0;
            const completedLessons = progressValues.filter(p => p.passed).length;
            return {
                ...student,
                scorePercentage,
                completedLessons,
                totalPoints,
                totalAttemptedPoints
            };
        });
    }, [students]);

    const filteredStudents = useMemo(() => {
        return enhancedStudents.filter(student => {
            const levelMatch = filters.studyLevelId === 'all' || student.studyLevelId === filters.studyLevelId;
            const schoolTypeMatch = filters.schoolType === 'all' || student.schoolType === filters.schoolType;
            const genderMatch = filters.gender === 'all' || student.gender === filters.gender;
            const schoolNameMatch = !filters.schoolName || student.schoolName.toLowerCase().includes(filters.schoolName.toLowerCase());
            const birthYearStartMatch = !filters.birthYearStart || student.birthYear >= parseInt(filters.birthYearStart, 10);
            const birthYearEndMatch = !filters.birthYearEnd || student.birthYear <= parseInt(filters.birthYearEnd, 10);

            return levelMatch && schoolTypeMatch && genderMatch && schoolNameMatch && birthYearStartMatch && birthYearEndMatch;
        });
    }, [enhancedStudents, filters]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const kpis = useMemo(() => {
        const totalLessonsWithQuestions = lmsService.getContent().levels.flatMap(l => l.lessons).filter(l => l.questions.length > 0).length;
        
        // Completion stats
        const totalCompletedLessons = filteredStudents.reduce((sum, s) => sum + s.completedLessons, 0);
        const possibleTotalCompletedLessons = filteredStudents.length * totalLessonsWithQuestions;
        const avgCompletion = possibleTotalCompletedLessons > 0 ? Math.round((totalCompletedLessons / possibleTotalCompletedLessons) * 100) : 0;

        // Score stats
        const totalPoints = filteredStudents.reduce((sum, s) => sum + s.totalPoints, 0);
        const totalAttemptedPoints = filteredStudents.reduce((sum, s) => sum + s.totalAttemptedPoints, 0);
        const avgScore = totalAttemptedPoints > 0 ? Math.round((totalPoints / totalAttemptedPoints) * 100) : 0;

        // Other stats
        const totalAttempts = filteredStudents.reduce((sum, s) => sum + Object.values(s.progress).reduce((attSum, p) => attSum + p.attempts, 0), 0);
        
        return {
            studentCount: filteredStudents.length,
            avgCompletion,
            avgScore,
            totalAttempts,
            totalCompletedLessons,
            possibleTotalCompletedLessons,
            totalPoints,
            totalAttemptedPoints
        };
    }, [filteredStudents]);

    const performanceBySchoolType = useMemo(() => {
        const pioneers = filteredStudents.filter(s => s.schoolType === 'pioneer');
        const regulars = filteredStudents.filter(s => s.schoolType === 'regular');

        const pioneerTotalPoints = pioneers.reduce((sum, s) => sum + s.totalPoints, 0);
        const pioneerTotalAttemptedPoints = pioneers.reduce((sum, s) => sum + s.totalAttemptedPoints, 0);
        const pioneerAvg = pioneerTotalAttemptedPoints > 0 ? (pioneerTotalPoints / pioneerTotalAttemptedPoints) * 100 : 0;

        const regularTotalPoints = regulars.reduce((sum, s) => sum + s.totalPoints, 0);
        const regularTotalAttemptedPoints = regulars.reduce((sum, s) => sum + s.totalAttemptedPoints, 0);
        const regularAvg = regularTotalAttemptedPoints > 0 ? (regularTotalPoints / regularTotalAttemptedPoints) * 100 : 0;

        return [
            { name: 'رائدة', value: pioneerAvg, numerator: pioneerTotalPoints, denominator: pioneerTotalAttemptedPoints },
            { name: 'غير رائدة', value: regularAvg, numerator: regularTotalPoints, denominator: regularTotalAttemptedPoints },
        ];
    }, [filteredStudents]);

    const performanceByGender = useMemo(() => {
        const males = filteredStudents.filter(s => s.gender === 'male');
        const females = filteredStudents.filter(s => s.gender === 'female');

        const maleTotalPoints = males.reduce((sum, s) => sum + s.totalPoints, 0);
        const maleTotalAttemptedPoints = males.reduce((sum, s) => sum + s.totalAttemptedPoints, 0);
        const maleAvg = maleTotalAttemptedPoints > 0 ? (maleTotalPoints / maleTotalAttemptedPoints) * 100 : 0;

        const femaleTotalPoints = females.reduce((sum, s) => sum + s.totalPoints, 0);
        const femaleTotalAttemptedPoints = females.reduce((sum, s) => sum + s.totalAttemptedPoints, 0);
        const femaleAvg = femaleTotalAttemptedPoints > 0 ? (femaleTotalPoints / femaleTotalAttemptedPoints) * 100 : 0;

        return [
            { name: 'ذكور', value: maleAvg, numerator: maleTotalPoints, denominator: maleTotalAttemptedPoints },
            { name: 'إناث', value: femaleAvg, numerator: femaleTotalPoints, denominator: femaleTotalAttemptedPoints },
        ];
    }, [filteredStudents]);
    
    const performanceByAge = useMemo(() => {
        const ageGroups: { [key: string]: { totalPoints: number; totalAttemptedPoints: number; } } = {};
        const currentYear = new Date().getFullYear();

        filteredStudents.forEach(student => {
            const age = currentYear - student.birthYear;
            if (isNaN(age)) return;
            const groupName = `${age} سنة`;
            if (!ageGroups[groupName]) {
                ageGroups[groupName] = { totalPoints: 0, totalAttemptedPoints: 0 };
            }
            ageGroups[groupName].totalPoints += student.totalPoints;
            ageGroups[groupName].totalAttemptedPoints += student.totalAttemptedPoints;
        });

        return Object.entries(ageGroups)
            .map(([name, data]) => ({ 
                name, 
                value: data.totalAttemptedPoints > 0 ? (data.totalPoints / data.totalAttemptedPoints) * 100 : 0,
                numerator: data.totalPoints,
                denominator: data.totalAttemptedPoints,
            }))
            .sort((a, b) => parseInt(a.name) - parseInt(b.name));
    }, [filteredStudents]);


    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">إحصائيات أداء التلاميذ</h2>
            
            <div className="p-4 bg-gray-50 rounded-lg border">
                <h3 className="font-bold mb-4 flex items-center gap-2"><SlidersHorizontal size={20} /> فلترة النتائج</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <select name="studyLevelId" value={filters.studyLevelId} onChange={handleFilterChange} className="w-full p-2 border border-gray-300 rounded-lg bg-white">
                        <option value="all">كل المستويات</option>
                        {STUDY_LEVELS.map(level => <option key={level.id} value={level.id}>{level.name}</option>)}
                    </select>
                    <select name="schoolType" value={filters.schoolType} onChange={handleFilterChange} className="w-full p-2 border border-gray-300 rounded-lg bg-white">
                        <option value="all">كل أنواع المؤسسات</option>
                        <option value="pioneer">رائدة</option>
                        <option value="regular">غير رائدة</option>
                    </select>
                    <select name="gender" value={filters.gender} onChange={handleFilterChange} className="w-full p-2 border border-gray-300 rounded-lg bg-white">
                        <option value="all">كلا الجنسين</option>
                        <option value="male">ذكر</option>
                        <option value="female">أنثى</option>
                    </select>
                    <input type="text" name="schoolName" placeholder="اسم المؤسسة..." value={filters.schoolName} onChange={handleFilterChange} className="w-full p-2 border border-gray-300 rounded-lg" />
                    <div className="flex items-center gap-2">
                        <input type="number" name="birthYearStart" placeholder="سنة ازدياد (من)" value={filters.birthYearStart} onChange={handleFilterChange} className="w-1/2 p-2 border border-gray-300 rounded-lg" />
                        <input type="number" name="birthYearEnd" placeholder="سنة ازدياد (إلى)" value={filters.birthYearEnd} onChange={handleFilterChange} className="w-1/2 p-2 border border-gray-300 rounded-lg" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-blue-100 rounded-lg text-center flex flex-col justify-center">
                    <p className="font-bold text-3xl text-blue-600">{kpis.studentCount}</p>
                    <p className="text-sm text-blue-800 mt-1">إجمالي التلاميذ</p>
                </div>
                <div className="p-4 bg-green-100 rounded-lg text-center flex flex-col justify-center">
                    <div className="flex items-baseline justify-center gap-2">
                        <p className="font-bold text-3xl text-green-600">{kpis.avgCompletion}%</p>
                        {kpis.possibleTotalCompletedLessons > 0 && (
                            <span className="text-sm text-gray-600 font-mono">({kpis.totalCompletedLessons}/{kpis.possibleTotalCompletedLessons})</span>
                        )}
                    </div>
                    <p className="text-sm text-green-800 mt-1">متوسط الإنجاز</p>
                </div>
                <div className="p-4 bg-yellow-100 rounded-lg text-center flex flex-col justify-center">
                     <div className="flex items-baseline justify-center gap-2">
                        <p className="font-bold text-3xl text-yellow-600">{kpis.avgScore}%</p>
                        {kpis.totalAttemptedPoints > 0 && (
                            <span className="text-sm text-gray-600 font-mono">({kpis.totalPoints}/{kpis.totalAttemptedPoints})</span>
                        )}
                    </div>
                    <p className="text-sm text-yellow-800 mt-1">متوسط التقييم</p>
                </div>
                <div className="p-4 bg-red-100 rounded-lg text-center flex flex-col justify-center">
                    <p className="font-bold text-3xl text-red-600">{kpis.totalAttempts}</p>
                    <p className="text-sm text-red-800 mt-1">إجمالي المحاولات</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <BarChartComponent title="متوسط النجاح حسب نوع المؤسسة" data={performanceBySchoolType} color="#3b82f6" />
                <BarChartComponent title="متوسط النجاح حسب الجنس" data={performanceByGender} color="#ec4899" />
                <div className="lg:col-span-2">
                    <BarChartComponent title="متوسط النجاح حسب العمر" data={performanceByAge} color="#8b5cf6" />
                </div>
            </div>
        </div>
    );
};