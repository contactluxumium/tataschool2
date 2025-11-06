import { Lesson, QuestionType, Difficulty } from '../../types';

export const lesson: Lesson = {
  id: 'lesson-04-04',
  title: 'الأعداد الصحيحة: العمليات الأربع',
  questions: [
    // Easy
    { id: 'q-04-04-e1', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أوجد ناتج الجمع:', mathExpression: '2000 + 3500', correctAnswer: '5500', explanation: 'الخاصية: الجمع.\nالشرح:\n2000 + 3500 = 5500' },
    { id: 'q-04-04-e2', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أوجد ناتج الطرح:', mathExpression: '1000 - 300', correctAnswer: '700', explanation: 'الخاصية: الطرح.\nالشرح:\n1000 - 300 = 700' },
    { id: 'q-04-04-e3', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أوجد ناتج الضرب:', mathExpression: '40 × 100', correctAnswer: '4000', explanation: 'الخاصية: الضرب في 100.\nالشرح: عند الضرب في 100، نضيف صفرين إلى يمين العدد.' },
    { id: 'q-04-04-e4', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أوجد ناتج القسمة:', mathExpression: '200 ÷ 10', correctAnswer: '20', explanation: 'الخاصية: القسمة على 10.\nالشرح: عند القسمة على 10، نحذف صفراً من يمين العدد.' },
    { id: 'q-04-04-e5', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل 50 * 30 = 1500؟', correctAnswer: 'true', explanation: 'الخاصية: الضرب.\nالشرح:\n5 × 3 = 15\nنضيف الصفرين من 50 و 30.\nالنتيجة: 1500' },
    { id: 'q-04-04-e6', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'اختر الإجابة الصحيحة:', mathExpression: '360 ÷ 6', options: ['6', '60', '36'], correctAnswer: '60', explanation: 'الخاصية: القسمة.\nالشرح:\n36 ÷ 6 = 6\nثم نضيف الصفر من 360.\nالنتيجة: 60' },
    { id: 'q-04-04-e7', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أوجد ناتج الجمع:', mathExpression: '999 + 1', correctAnswer: '1000', explanation: 'الخاصية: الجمع.\nالشرح: 999 زائد 1 يساوي 1000.' },
    { id: 'q-04-04-e8', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل 5000 - 2500 = 2500؟', correctAnswer: 'true', explanation: 'الخاصية: الطرح.\nالشرح: نعم، العملية صحيحة.' },
    // Medium
    { id: 'q-04-04-m1', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'أوجد ناتج الجمع:', mathExpression: '9876 + 1234', correctAnswer: '11110', explanation: 'الخاصية: الجمع بالاحتفاظ.\nالشرح: يتم جمع الآحاد ثم العشرات ثم المئات ثم الآلاف مع الاحتفاظ عند الحاجة.' },
    { id: 'q-04-04-m2', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'أوجد ناتج الطرح:', mathExpression: '5432 - 1987', correctAnswer: '3445', explanation: 'الخاصية: الطرح بالاستلاف.\nالشرح: يتم طرح الآحاد ثم العشرات ثم المئات ثم الآلاف مع الاستلاف عند الحاجة.' },
    { id: 'q-04-04-m3', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'أوجد ناتج الضرب:', mathExpression: '250 × 20', correctAnswer: '5000', explanation: 'الخاصية: الضرب.\nالشرح:\n25 × 2 = 50\nنضيف الصفرين من 250 و 20.\nالنتيجة: 5000' },
    { id: 'q-04-04-m4', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'أوجد خارج القسمة والباقي: 125 ÷ 10', correctAnswer: 'الخارج 12 والباقي 5', explanation: 'الخاصية: القسمة الإقليدية.\nالشرح:\n125 = (10 × 12) + 5\nإذن الخارج هو 12 والباقي هو 5.' },
    { id: 'q-04-04-m5', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'أوجد ناتج العملية:', mathExpression: '20 + 10 × 5', correctAnswer: '70', explanation: 'الخاصية: أسبقية العمليات.\nالشرح: الضرب له الأسبقية على الجمع.\n1. نحسب الضرب أولاً:\n10 × 5 = 50\n2. ثم نجمع:\n20 + 50 = 70' },
    { id: 'q-04-04-m6', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'يوجد في مكتبة 1000 كتاب، تم ترتيبها على 20 رفاً بالتساوي. كم كتاباً في كل رف؟', options: ['20', '50', '100'], correctAnswer: '50', explanation: 'الخاصية: القسمة.\nالشرح: نقسم العدد الإجمالي للكتب على عدد الرفوف:\n1000 ÷ 20 = 50\nكتاباً لكل رف.' },
    // Hard
    { id: 'q-04-04-h1', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'أوجد ناتج الضرب:', mathExpression: '456 × 32', correctAnswer: '14592', explanation: 'الخاصية: عملية الضرب العمودية.\nالشرح:\n456 × 2 = 912\n456 × 30 = 13680\nنجمع الناتجين:\n912 + 13680 = 14592' },
    { id: 'q-04-04-h2', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'أوجد ناتج القسمة:', mathExpression: '2525 ÷ 25', correctAnswer: '101', explanation: 'الخاصية: القسمة.\nالشرح: يمكن تفكيك العدد:\n2525 = 2500 + 25\n2500 ÷ 25 = 100\n25 ÷ 25 = 1\nالنتيجة:\n100 + 1 = 101' },
    { id: 'q-04-04-h3', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'أوجد ناتج العملية:', mathExpression: '500 - (50 × 4) ÷ 2', correctAnswer: '400', explanation: 'الخاصية: أسبقية العمليات.\nخطوات الحل:\n1. القوس أولاً: 50 × 4 = 200\n2. القسمة ثانياً: 200 ÷ 2 = 100\n3. الطرح أخيراً: 500 - 100 = 400' },
    { id: 'q-04-04-h4', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'يقطع قطار 120 كم في الساعة. كم كيلومتراً يقطع في يوم كامل (24 ساعة)؟', correctAnswer: '2880', explanation: 'الخاصية: الضرب.\nالشرح: نضرب المسافة المقطوعة في ساعة واحدة في عدد ساعات اليوم:\n120 × 24 = 2880 كم' },
    { id: 'q-04-04-h5', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'مجموع عددين 100، وأحدهما يزيد عن الآخر بـ 20. ما هو العدد الأصغر؟', correctAnswer: '40', explanation: 'الخاصية: حل المسائل.\nخطوات الحل:\n1. نطرح الفرق من المجموع:\n100 - 20 = 80\n2. نقسم الباقي على 2 لنجد العدد الأصغر:\n80 ÷ 2 = 40\n(التحقق: العدد الأكبر هو 40+20=60. \n40+60=100).' },
    { id: 'q-04-04-h6', type: QuestionType.MultipleChoice, difficulty: Difficulty.Hard, text: 'اشترى تاجر 25 حاسوباً بسعر 3000 درهم للحاسوب الواحد. إذا باعها كلها بمبلغ 90000 درهم، فكم ربح في المجموع؟', options: ['10000', '15000', '20000'], correctAnswer: '15000', explanation: 'الخاصية: الربح = ثمن البيع - ثمن الشراء.\nخطوات الحل:\n1. نحسب ثمن الشراء الإجمالي:\n25 × 3000 = 75000\n2. نحسب الربح:\n90000 - 75000 = 15000' },
  ]
};