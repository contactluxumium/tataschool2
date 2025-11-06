import { Lesson, QuestionType, Difficulty } from '../../types';

export const lesson: Lesson = {
  id: 'lesson-05-02',
  title: 'الزوايا',
  questions: [
    // Easy
    { id: 'q-05-02-e1', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'ما هو قياس الزاوية المستقيمة؟', options: ['90°', '180°', '360°'], correctAnswer: '180°', explanation: 'الخاصية: تعريف الزاوية المستقيمة.\nالشرح: الزاوية التي يشكلها خط مستقيم قياسها 180 درجة.' },
    { id: 'q-05-02-e2', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'الزاوية التي قياسها 45° تسمى زاوية ...', options: ['حادة', 'قائمة', 'منفرجة'], correctAnswer: 'حادة', explanation: 'الخاصية: تعريف الزاوية الحادة.\nالشرح: الزاوية الحادة هي أي زاوية قياسها أصغر من 90 درجة.' },
    { id: 'q-05-02-e3', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'الزاوية التي قياسها 135° تسمى زاوية ...', options: ['حادة', 'قائمة', 'منفرجة'], correctAnswer: 'منفرجة', explanation: 'الخاصية: تعريف الزاوية المنفرجة.\nالشرح: الزاوية المنفرجة هي أي زاوية قياسها أكبر من 90 درجة وأصغر من 180 درجة.' },
    { id: 'q-05-02-e4', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل الزاوية القائمة تساوي 90°؟', correctAnswer: 'true', explanation: 'الخاصية: تعريف الزاوية القائمة.\nالشرح: نعم، هذا هو تعريف الزاوية القائمة.' },
    { id: 'q-05-02-e5', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'ما نوع الزاوية التي تشكلها أركان الكتاب؟', options: ['حادة', 'قائمة', 'منفرجة'], correctAnswer: 'قائمة', explanation: 'الخاصية: تمييز الزوايا في الواقع.\nالشرح: أركان الكتاب تشكل زوايا قائمة (90 درجة).' },
    { id: 'q-05-02-e6', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'ماذا نسمي الزاويتين اللتين مجموعهما 90°؟', options: ['متتامتين', 'متكاملتين', 'متجاورتين'], correctAnswer: 'متتامتين', explanation: 'الخاصية: تعريف الزاويتين المتتامتين.\nالشرح: الزاويتان المتتامتان هما زاويتان مجموع قياسهما 90 درجة.' },
    { id: 'q-05-02-e7', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل يمكن أن يكون قياس زاوية 0°؟', correctAnswer: 'true', explanation: 'الخاصية: تعريف الزاوية المنعدمة.\nالشرح: نعم، وتسمى الزاوية المنعدمة، حيث ينطبق ضلعاها على بعضهما.' },
    { id: 'q-05-02-e8', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'الأداة المستخدمة لرسم دائرة هي ...', options: ['المسطرة', 'المنقلة', 'الفرجار'], correctAnswer: 'الفرجار', explanation: 'الخاصية: الأدوات الهندسية.\nالشرح: الفرجار (البركار) هو الأداة المستخدمة لرسم الدوائر والأقواس الدائرية.' },
    // Medium
    { id: 'q-05-02-m1', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'زاويتان متكاملتان، قياس إحداهما 70°. ما هو قياس الأخرى؟', correctAnswer: '110', explanation: 'الخاصية: الزاويتان المتكاملتان.\nالشرح: الزاويتان المتكاملتان مجموعهما 180°. إذن قياس الزاوية الأخرى هو:\n180° - 70° = 110°' },
    { id: 'q-05-02-m2', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'زاويتان متتامتان، قياس إحداهما 35°. ما هو قياس الأخرى؟', correctAnswer: '55', explanation: 'الخاصية: الزاويتان المتتامتان.\nالشرح: الزاويتان المتتامتان مجموعهما 90°. إذن قياس الزاوية الأخرى هو:\n90° - 35° = 55°' },
    { id: 'q-05-02-m3', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'ما هو مجموع قياس زوايا المثلث؟', options: ['90°', '180°', '360°'], correctAnswer: '180°', explanation: 'الخاصية: مجموع زوايا المثلث.\nالشرح: مجموع الزوايا الداخلية لأي مثلث هو 180 درجة.' },
  ]
};