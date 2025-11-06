import { Lesson, QuestionType, Difficulty } from '../../types';

export const lesson: Lesson = {
  id: 'lesson-02-02',
  title: 'الضرب',
  questions: [
    // Easy
    { id: 'q-02-02-e1', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أوجد حاصل الضرب:', mathExpression: '3 × 5', correctAnswer: '15', explanation: 'الخاصية: الضرب كجمع متكرر.\nالشرح:\n3 × 5\nتعني:\n5 + 5 + 5 = 15' },
    { id: 'q-02-02-e2', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أوجد حاصل الضرب:', mathExpression: '6 × 2', correctAnswer: '12', explanation: 'الخاصية: الضرب.\nالشرح:\n6 × 2 = 12' },
    { id: 'q-02-02-e3', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'اختر الإجابة الصحيحة:', mathExpression: '10 × 4', options: ['14', '40', '41'], correctAnswer: '40', explanation: 'الخاصية: الضرب في 10.\nالشرح: عند الضرب في 10، نضيف صفراً إلى يمين العدد:\n4 × 10 = 40' },
    { id: 'q-02-02-e4', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل 5 × 1 = 5؟', correctAnswer: 'true', explanation: 'الخاصية: العنصر المحايد في الضرب (الواحد).\nالشرح: أي عدد يضرب في 1 يبقى كما هو.' },
    { id: 'q-02-02-e5', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أوجد حاصل الضرب:', mathExpression: '7 × 3', correctAnswer: '21', explanation: 'الخاصية: الضرب.\nالشرح:\n7 × 3 = 21' },
    { id: 'q-02-02-e6', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'في 4 أطباق، وفي كل طبق 3 تفاحات. كم تفاحة بالمجموع؟', options: ['7', '12', '13'], correctAnswer: '12', explanation: 'الخاصية: الضرب.\nالشرح:\nلمعرفة المجموع، نضرب عدد الأطباق في عدد التفاحات في كل طبق:\n4 × 3 = 12\nإذن، يوجد 12 تفاحة بالمجموع.' },
    { id: 'q-02-02-e7', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل 9 × 0 = 9؟', correctAnswer: 'false', explanation: 'الخاصية: الضرب في صفر.\nالشرح: العملية خاطئة، لأن أي عدد يضرب في صفر يساوي صفر.' },
    { id: 'q-02-02-e8', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أوجد حاصل الضرب:', mathExpression: '8 × 5', correctAnswer: '40', explanation: 'الخاصية: الضرب.\nالشرح:\n8 × 5 = 40' },
    // Medium
    { id: 'q-02-02-m1', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'أوجد حاصل الضرب:', mathExpression: '9 × 6', correctAnswer: '54', explanation: 'الخاصية: الضرب.\nالشرح:\n9 × 6 = 54' },
    { id: 'q-02-02-m2', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'اختر الإجابة الصحيحة:', mathExpression: '7 × 7', options: ['42', '49', '56'], correctAnswer: '49', explanation: 'الخاصية: الضرب (مربع العدد).\nالشرح:\n7 × 7 = 49' },
    { id: 'q-02-02-m3', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'في عمارة 5 طوابق، في كل طابق 4 شقق. كم شقة في العمارة؟', correctAnswer: '20', explanation: 'الخاصية: الضرب.\nالشرح:\nنضرب عدد الطوابق في عدد الشقق في كل طابق:\n5 × 4 = 20\nإذن، يوجد 20 شقة في العمارة.' },
    { id: 'q-02-02-m4', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'أوجد حاصل الضرب:', mathExpression: '12 × 4', correctAnswer: '48', explanation: 'الخاصية: الضرب.\nالشرح:\n12 × 4 = 48' },
    { id: 'q-02-02-m5', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'ما هو العدد المجهول؟', mathExpression: '8 × ? = 24', options: ['3', '4', '5'], correctAnswer: '3', explanation: 'الخاصية: القسمة (عكس الضرب).\nالشرح:\nلمعرفة العدد المجهول، نقسم 24 على 8:\n24 ÷ 8 = 3' },
    { id: 'q-02-02-m6', type: QuestionType.TrueFalse, difficulty: Difficulty.Medium, text: 'هل 11 × 5 = 55؟', correctAnswer: 'true', explanation: 'الخاصية: الضرب.\nالشرح: نعم، العملية صحيحة.' },
    // Hard
    { id: 'q-02-02-h1', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'أوجد حاصل الضرب:', mathExpression: '15 × 6', correctAnswer: '90', explanation: 'الخاصية: الضرب.\nالشرح:\nيمكن حسابها كالتالي:\n(10 × 6) + (5 × 6) = 60 + 30 = 90' },
    { id: 'q-02-02-h2', type: QuestionType.MultipleChoice, difficulty: Difficulty.Hard, text: 'اختر الإجابة الصحيحة:', mathExpression: '23 × 4', options: ['82', '92', '102'], correctAnswer: '92', explanation: 'الخاصية: الضرب.\nخطوات الحل:\n1. نضرب 4 في الآحاد:\n4 × 3 = 12\n2. نضرب 4 في العشرات:\n4 × 20 = 80\n3. نجمع الناتجين:\n12 + 80 = 92' },
    { id: 'q-02-02-h3', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'يدخر أحمد 5 دراهم كل يوم. كم درهماً سيدخر في شهر (30 يوماً)؟', correctAnswer: '150', explanation: 'الخاصية: الضرب.\nالشرح:\nنضرب المبلغ اليومي في عدد الأيام:\n5 × 30 = 150\nإذن، سيدخر 150 درهماً.' },
    { id: 'q-02-02-h4', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'أوجد حاصل الضرب:', mathExpression: '25 × 5', correctAnswer: '125', explanation: 'الخاصية: الضرب.\nالشرح:\n25 × 5 = 125' },
    { id: 'q-02-02-h5', type: QuestionType.MultipleChoice, difficulty: Difficulty.Hard, text: 'ما هو ناتج (10 × 8) + (5 × 5)؟', options: ['95', '105', '115'], correctAnswer: '105', explanation: 'الخاصية: أسبقية العمليات.\nخطوات الحل:\n1. نحسب عمليات الضرب أولاً:\n10 × 8 = 80\n5 × 5 = 25\n2. ثم نحسب عملية الجمع:\n80 + 25 = 105' },
    { id: 'q-02-02-h6', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'اشترى أب 3 تذاكر سينما بثمن 30 درهماً للتذكرة. كم دفع بالمجموع؟', correctAnswer: '90', explanation: 'الخاصية: الضرب.\nالشرح:\nنضرب عدد التذاكر في ثمن التذكرة الواحدة:\n3 × 30 = 90\nإذن، دفع 90 درهماً.' },
  ]
};