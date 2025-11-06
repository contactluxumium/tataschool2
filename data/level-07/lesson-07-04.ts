import { Lesson, QuestionType, Difficulty } from '../../types';

export const lesson: Lesson = {
  id: 'lesson-07-04',
  title: 'القوى',
  questions: [
    // Easy
    { id: 'q-07-04-e1', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أحسب:', mathExpression: '10²', correctAnswer: '100', explanation: 'الخاصية: تعريف القوة.\nالشرح:\n10² = 10 × 10 = 100' },
    { id: 'q-07-04-e2', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أحسب:', mathExpression: '3³', correctAnswer: '27', explanation: 'الخاصية: تعريف القوة.\nالشرح:\n3³ = 3 × 3 × 3 = 27' },
    { id: 'q-07-04-e3', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'التعبير 7 × 7 × 7 × 7 يكتب على شكل قوة:', options: ['7⁴', '4⁷', '7+4'], correctAnswer: '7⁴', explanation: 'الخاصية: الكتابة على شكل قوة.\nالشرح: الأساس هو 7، وقد تكرر 4 مرات، إذن الأس هو 4.' },
    { id: 'q-07-04-e4', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل (-2)² = 4؟', correctAnswer: 'true', explanation: 'الخاصية: قوة عدد سالب.\nالشرح: نعم، (-2) × (-2) = 4. عندما يكون الأس زوجياً، تكون النتيجة موجبة.' },
    { id: 'q-07-04-e5', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أحسب:', mathExpression: '(-1)⁵', correctAnswer: '-1', explanation: 'الخاصية: قوة عدد سالب.\nالشرح: عندما يكون الأس فردياً، تكون نتيجة قوة العدد السالب سالبة.' },
    { id: 'q-07-04-e6', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أحسب:', mathExpression: '5⁰', correctAnswer: '1', explanation: 'الخاصية: الأس صفر.\nالشرح: أي عدد غير منعدم مرفوع للأس صفر يساوي 1.' },
    { id: 'q-07-04-e7', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'ما هي الكتابة على شكل قوة للعدد 8؟', options: ['2³', '3²', '4²'], correctAnswer: '2³', explanation: 'الخاصية: تفكيك الأعداد.\nالشرح:\n8 = 2 × 2 × 2 = 2³' },
    { id: 'q-07-04-e8', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل 0 أس أي عدد (غير الصفر) يساوي 0؟', correctAnswer: 'true', explanation: 'الخاصية: قوة الصفر.\nالشرح: نعم،\n0ⁿ = 0\nلأي عدد n موجب.' },
    // Medium
    { id: 'q-07-04-m1', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'بسط:', mathExpression: '5⁴ × 5²', options: ['5⁶', '5⁸', '25⁶'], correctAnswer: '5⁶', explanation: 'الخاصية: جداء قوتين لهما نفس الأساس.\nالشرح: نحتفظ بالأساس (5) ونجمع الأسس (4+2=6).' },
    { id: 'q-07-04-m2', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'بسط:', mathExpression: '(10³)⁵', options: ['10⁸', '10¹⁵', '30⁵'], correctAnswer: '10¹⁵', explanation: 'الخاصية: قوة قوة.\nالشرح: نحتفظ بالأساس (10) ونضرب الأسس (3×5=15).' },
    { id: 'q-07-04-m3', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'بسط:', mathExpression: 'a⁹ / a³', options: ['a³', 'a⁶', 'a¹²'], correctAnswer: 'a⁶', explanation: 'الخاصية: خارج قوتين لهما نفس الأساس.\nالشرح: نحتفظ بالأساس (a) ونطرح الأسس (9-3=6).' },
    { id: 'q-07-04-m4', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'أحسب:', mathExpression: '10⁻²', correctAnswer: '0.01', explanation: 'الخاصية: الأس السالب.\nالشرح:\n10⁻² = 1 / 10² = 1 / 100 = 0.01' },
    { id: 'q-07-04-m5', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'أحسب:', mathExpression: '3² + 4²', correctAnswer: '25', explanation: 'الخاصية: أسبقية العمليات.\nالشرح: نحسب القوى أولاً:\n9 + 16 = 25' },
    { id: 'q-07-04-m6', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'ما هي الكتابة العلمية للعدد 58000؟', options: ['5.8 × 10³', '5.8 × 10⁴', '58 × 10³'], correctAnswer: '5.8 × 10⁴', explanation: 'الخاصية: الكتابة العلمية.\nالشرح: نحرك الفاصلة 4 مراتب إلى اليسار، لذا نضرب في 10⁴.' },
    // Hard
    { id: 'q-07-04-h1', type: QuestionType.MultipleChoice, difficulty: Difficulty.Hard, text: 'بسط:', mathExpression: '(3x)²', options: ['3x²', '6x²', '9x²'], correctAnswer: '9x²', explanation: 'الخاصية: قوة جداء.\nالشرح:\n(ab)ⁿ = aⁿbⁿ\nإذن\n(3x)² = 3² × x² = 9x²' },
    { id: 'q-07-04-h2', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'أحسب:', mathExpression: '(2/5)⁻¹', correctAnswer: '2.5', explanation: 'الخاصية: الأس السالب.\nالشرح:\n(a/b)⁻ⁿ = (b/a)ⁿ\nإذن\n(2/5)⁻¹ = 5/2 = 2.5' },
    { id: 'q-07-04-h3', type: QuestionType.MultipleChoice, difficulty: Difficulty.Hard, text: 'بسط:', mathExpression: '(x³y⁴)⁵', options: ['x⁸y⁹', 'x¹⁵y²⁰', 'xy³⁵'], correctAnswer: 'x¹⁵y²⁰', explanation: 'الخاصية: قوة قوة وقوة جداء.\nالشرح:\n(x³)^5 = x¹⁵\nو\n(y⁴)^5 = y²⁰' },
    { id: 'q-07-04-h4', type: QuestionType.MultipleChoice, difficulty: Difficulty.Hard, text: 'ما هي الكتابة العلمية للعدد 0.00019؟', options: ['1.9 × 10⁻³', '1.9 × 10⁻⁴', '19 × 10⁻⁵'], correctAnswer: '1.9 × 10⁻⁴', explanation: 'الخاصية: الكتابة العلمية.\nالشرح: نحرك الفاصلة 4 مراتب إلى اليمين، لذا نضرب في 10⁻⁴.' },
    { id: 'q-07-04-h5', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'أحسب:', mathExpression: '5³ - 10²', correctAnswer: '25', explanation: 'الخاصية: أسبقية العمليات.\nالشرح:\n125 - 100 = 25' },
    { id: 'q-07-04-h6', type: QuestionType.MultipleChoice, difficulty: Difficulty.Hard, text: 'ما هو ثلث العدد 3¹²؟', options: ['1¹²', '3⁴', '3¹¹'], correctAnswer: '3¹¹', explanation: 'الخاصية: قسمة القوى.\nالشرح: ثلث العدد يعني قسمته على 3.\n3¹² / 3¹ = 3¹²⁻¹ = 3¹¹' },
  ]
};