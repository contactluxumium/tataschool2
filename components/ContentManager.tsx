import React, { useState, useMemo, useEffect } from 'react';
import { lmsService } from '../services/lmsService';
import { EducationalContent, Lesson, Level, QuestionType, Difficulty, Question } from '../types';
import { Pencil, Trash2, PlusCircle, X, ChevronDown, ChevronRight, FileJson, Download, Upload } from 'lucide-react';

export const ContentManager: React.FC = () => {
    const [content, setContent] = useState<EducationalContent>(() => lmsService.getContent());
    const [activeLevelId, setActiveLevelId] = useState<string | null>(null);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    
    // State for modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<Partial<Lesson> | Partial<Question> | null>(null);
    const [editingType, setEditingType] = useState<'lesson' | 'question' | null>(null);

    const refreshContent = () => {
        const newContent = lmsService.getContent();
        setContent(newContent);

        // If a lesson was selected, update its data
        if (selectedLesson) {
            const updatedLesson = newContent.levels
                .flatMap(l => l.lessons)
                .find(l => l.id === selectedLesson.id);
            setSelectedLesson(updatedLesson || null);
        }
    };
    
    const handleExport = () => {
        try {
            const currentContent = lmsService.getContent();
            const jsonString = JSON.stringify(currentContent, null, 2); // Pretty print JSON
            const blob = new Blob([jsonString], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'lms-content.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            alert('حدث خطأ أثناء تصدير المحتوى.');
            console.error("Export failed:", error);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!window.confirm('سيؤدي هذا إلى استبدال كل المحتوى التعليمي الحالي. هل أنت متأكد من المتابعة؟')) {
            e.target.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const text = event.target?.result;
                if (typeof text !== 'string') throw new Error("فشل قراءة الملف.");
                const importedContent = JSON.parse(text);

                if (!importedContent || !Array.isArray(importedContent.levels)) {
                    throw new Error("تنسيق الملف غير صالح. يجب أن يحتوي على مصفوفة 'levels'.");
                }

                lmsService.saveContent(importedContent);
                setActiveLevelId(null);
                setSelectedLesson(null);
                refreshContent();
                alert('تم استيراد المحتوى بنجاح!');
            } catch (error) {
                alert(`فشل استيراد المحتوى: ${error instanceof Error ? error.message : 'Unknown error'}`);
            } finally {
                e.target.value = '';
            }
        };
        reader.onerror = () => {
            alert('حدث خطأ أثناء قراءة الملف.');
            e.target.value = '';
        };
        reader.readAsText(file);
    };

    const handleLessonSelect = (lesson: Lesson) => {
        setSelectedLesson(lesson);
    };

    const handleDeleteLesson = (lessonId: string) => {
        if (window.confirm('هل أنت متأكد من رغبتك في حذف هذا الدرس وجميع أسئلته؟ هذا الإجراء لا يمكن التراجع عنه.')) {
            lmsService.deleteLesson(lessonId);
            if (selectedLesson?.id === lessonId) {
                setSelectedLesson(null);
            }
            refreshContent();
        }
    };

    const handleDeleteQuestion = (lessonId: string, questionId: string) => {
        if (window.confirm('هل أنت متأكد من رغبتك في حذف هذا السؤال؟')) {
            lmsService.deleteQuestion(lessonId, questionId);
            refreshContent();
        }
    };
    
    const openModalForEdit = (item: Lesson | Question, type: 'lesson' | 'question') => {
        setEditingItem({ ...item }); // Create a copy for editing
        setEditingType(type);
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (!editingItem || !editingType) return;
        
        if (editingType === 'lesson') {
            lmsService.updateLesson(editingItem as Lesson);
        } else if (editingType === 'question' && selectedLesson) {
            lmsService.updateQuestion(selectedLesson.id, editingItem as Question);
        }
        
        closeModal();
        refreshContent();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingItem(null);
        setEditingType(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        if (!editingItem) return;
        const { name, value } = e.target;
        
        if (name === 'options') {
            setEditingItem({ ...editingItem, [name]: value.split('\n') });
        } else {
            setEditingItem({ ...editingItem, [name]: value });
        }
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-end items-center mb-4 gap-4">
                <button
                    onClick={handleExport}
                    className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Download size={18} />
                    <span>تصدير المحتوى</span>
                </button>
                <label className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors cursor-pointer">
                    <Upload size={18} />
                    <span>استيراد المحتوى</span>
                    <input
                        type="file"
                        accept=".json"
                        className="hidden"
                        onChange={handleFileChange}
                        onClick={(e) => (e.currentTarget.value = '')} 
                    />
                </label>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Panel: Levels and Lessons */}
                <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 border-b pb-2">المستويات والدروس</h3>
                    <div className="space-y-2">
                        {content.levels.map(level => (
                            <div key={level.id}>
                                <button
                                    onClick={() => setActiveLevelId(activeLevelId === level.id ? null : level.id)}
                                    className="w-full flex justify-between items-center text-right p-2 font-semibold bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                >
                                    <span>{level.title}</span>
                                    <ChevronRight size={20} className={`transition-transform duration-300 ${activeLevelId === level.id ? 'rotate-90' : ''}`} />
                                </button>
                                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeLevelId === level.id ? 'max-h-[500px] opacity-100 pt-2' : 'max-h-0 opacity-0'}`}>
                                    <div className="pr-4 space-y-1">
                                        {level.lessons.map(lesson => (
                                            <div key={lesson.id} className="group flex items-center justify-between">
                                                <button 
                                                    onClick={() => handleLessonSelect(lesson)}
                                                    className={`w-full text-right p-2 rounded-md transition-colors ${selectedLesson?.id === lesson.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                                                >
                                                    {lesson.title}
                                                </button>
                                                <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={() => openModalForEdit(lesson, 'lesson')} className="p-1 text-gray-500 hover:text-blue-600"><Pencil size={16} /></button>
                                                    <button onClick={() => handleDeleteLesson(lesson.id)} className="p-1 text-gray-500 hover:text-red-600"><Trash2 size={16} /></button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Panel: Questions */}
                <div className="w-full md:w-2/3 bg-white p-4 rounded-lg shadow-md">
                    {selectedLesson ? (
                        <div>
                            <div className="flex justify-between items-center mb-4 border-b pb-2">
                                <h3 className="text-xl font-bold text-blue-700">{selectedLesson.title}</h3>
                                {/* Future: Add Question Button */}
                                {/* <button className="flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"><PlusCircle size={18} /> إضافة سؤال</button> */}
                            </div>
                            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                                {selectedLesson.questions.map((q, index) => (
                                    <div key={q.id} className="p-4 border rounded-lg bg-gray-50 group">
                                        <div className="flex justify-between items-start">
                                            <p className="font-semibold text-gray-800">{index + 1}. {q.text}</p>
                                            <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => openModalForEdit(q, 'question')} className="p-1 text-gray-600 hover:text-blue-600"><Pencil size={18} /></button>
                                                <button onClick={() => handleDeleteQuestion(selectedLesson.id, q.id)} className="p-1 text-gray-600 hover:text-red-600"><Trash2 size={18} /></button>
                                            </div>
                                        </div>
                                        {q.mathExpression && <p className="text-lg font-mono text-center my-2 text-slate-600" dir="ltr">{q.mathExpression}</p>}
                                        <div className="mt-2 text-sm text-gray-600 grid grid-cols-2 gap-x-4">
                                            <p><span className="font-semibold">النوع:</span> {q.type}</p>
                                            <p><span className="font-semibold">الصعوبة:</span> {q.difficulty}</p>
                                        </div>
                                        {q.options && <div className="mt-2 text-sm"><p className="font-semibold">الخيارات:</p><ul className="list-disc pl-5"> {q.options.map(opt => <li key={opt}>{opt}</li>)} </ul></div>}
                                        <p className="mt-2 text-sm"><span className="font-semibold text-green-700">الإجابة الصحيحة:</span> {q.correctAnswer}</p>
                                        {q.explanation && <p className="mt-2 text-xs italic bg-yellow-50 p-2 rounded-md"><span className="font-semibold">الشرح:</span> {q.explanation}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <FileJson size={48} className="mb-4" />
                            <p className="text-lg font-semibold">اختر درساً من القائمة</p>
                            <p>لعرض بنك الأسئلة الخاص به وتعديله.</p>
                        </div>
                    )}
                </div>

                {/* Modal for Editing */}
                {isModalOpen && editingItem && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
                        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-fade-in-up">
                            <div className="flex justify-between items-center p-4 border-b">
                                <h4 className="text-xl font-bold">تعديل {editingType === 'lesson' ? 'الدرس' : 'السؤال'}</h4>
                                <button onClick={closeModal}><X size={24} /></button>
                            </div>
                            <div className="p-6 space-y-4 overflow-y-auto">
                                {editingType === 'lesson' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">عنوان الدرس</label>
                                        <input type="text" name="title" value={(editingItem as Lesson).title || ''} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                                    </div>
                                )}
                                {editingType === 'question' && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">نص السؤال</label>
                                            <textarea name="text" value={(editingItem as Question).text || ''} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" rows={3}></textarea>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">التعبير الرياضي (اختياري)</label>
                                            <input type="text" name="mathExpression" value={(editingItem as Question).mathExpression || ''} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" dir="ltr" placeholder="e.g., 2x + 5 = 10" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">الصعوبة</label>
                                                <select name="difficulty" value={(editingItem as Question).difficulty || ''} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                                    {Object.values(Difficulty).map(d => <option key={d} value={d}>{d}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">النوع</label>
                                                <select name="type" value={(editingItem as Question).type || ''} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                                    {Object.values(QuestionType).map(t => <option key={t} value={t}>{t}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        {(editingItem as Question).type === QuestionType.MultipleChoice && (
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">الخيارات (كل خيار في سطر)</label>
                                                <textarea name="options" value={(editingItem as Question).options?.join('\n') || ''} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" rows={4}></textarea>
                                            </div>
                                        )}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">الإجابة الصحيحة</label>
                                            <input type="text" name="correctAnswer" value={(editingItem as Question).correctAnswer || ''} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">الشرح (اختياري)</label>
                                            <textarea name="explanation" value={(editingItem as Question).explanation || ''} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" rows={4}></textarea>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="flex justify-end p-4 border-t bg-gray-50 rounded-b-lg">
                                <button onClick={closeModal} className="px-4 py-2 bg-gray-200 rounded-md mr-2">إلغاء</button>
                                <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-md">حفظ التغييرات</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};