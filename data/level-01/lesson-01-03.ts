import { Lesson, QuestionType, Difficulty } from '../../types';

export const lesson: Lesson = {
  id: 'lesson-01-03',
  title: 'الأعداد حتى 20',
  questions: [
    // Easy
    {
      id: 'q-01-03-e1',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'ما هو العدد الذي يأتي بعد 12؟',
      options: ['11', '13', '14'],
      correctAnswer: '13',
      explanation: 'الخاصية: تتابع الأعداد الطبيعية.\nالشرح: في خط الأعداد، العدد الذي يلي 12 مباشرة هو 13.'
    },
    {
      id: 'q-01-03-e2',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'ما هو العدد الذي يسبق 15؟',
      correctAnswer: '14',
      explanation: 'الخاصية: تتابع الأعداد الطبيعية.\nالشرح: العدد الذي يأتي مباشرة قبل 15 هو 14.'
    },
    {
      id: 'q-01-03-e3',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Easy,
      text: 'هل العدد 18 أكبر من 16؟',
      correctAnswer: 'true',
      explanation: 'الخاصية: مقارنة الأعداد.\nالشرح: نعم، 18 يأتي بعد 16 في خط الأعداد، لذلك هو أكبر.'
    },
    {
      id: 'q-01-03-e4',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'اختر العدد الصحيح الذي يكمل السلسلة:',
      mathExpression: '10, 11, 12, ...',
      options: ['13', '9', '14'],
      correctAnswer: '13',
      explanation: 'الخاصية: تتابع الأعداد.\nالشرح: السلسلة تزيد بمقدار 1 في كل مرة. بعد 12 يأتي 13.'
    },
    {
      id: 'q-01-03-e5',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: "اكتب العدد 'سبعة عشر' بالأرقام.",
      correctAnswer: '17',
      explanation: 'الخاصية: تمثيل الأعداد.\nالشرح: العدد "سبعة عشر" يكتب رقمياً على الشكل 17.'
    },
    {
      id: 'q-01-03-e6',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'ما هو العدد الأصغر؟',
      options: ['19', '20', '18'],
      correctAnswer: '18',
      explanation: 'الخاصية: مقارنة الأعداد.\nالشرح: بمقارنة الأعداد الثلاثة، 18 هو الأصغر لأنه يأتي قبل 19 و 20.'
    },
    {
      id: 'q-01-03-e7',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Easy,
      text: 'هل العدد 11 عدد فردي؟',
      correctAnswer: 'true',
      explanation: 'الخاصية: الأعداد الزوجية والفردية.\nالشرح: نعم، العدد 11 فردي لأنه لا يمكن قسمته على 2 بدون باق.'
    },
    {
      id: 'q-01-03-e8',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'كم عشرة في العدد 20؟',
      correctAnswer: '2',
      explanation: 'الخاصية: القيمة المكانية.\nالشرح: العدد 20 يتكون من عشرتين (10 + 10)، أي 2 في خانة العشرات.'
    },
    // Medium
    {
      id: 'q-01-03-m1',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'كم عدد الوحدات في الرقم 13؟',
      correctAnswer: '3',
      explanation: 'الخاصية: القيمة المكانية.\nالشرح: في العدد 13, الرقم 1 يمثل العشرات والرقم 3 يمثل الوحدات.'
    },
    {
      id: 'q-01-03-m2',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Medium,
      text: 'ما هو العدد الأكبر؟',
      options: ['17', '12', '20'],
      correctAnswer: '20',
      explanation: 'الخاصية: مقارنة الأعداد.\nالشرح: بمقارنة الأعداد الثلاثة، 20 هو الأكبر.'
    },
    {
      id: 'q-01-03-m3',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Medium,
      text: 'هل العدد 14 أصغر من 12؟',
      correctAnswer: 'false',
      explanation: 'الخاصية: مقارنة الأعداد.\nالشرح: لا، العدد 14 أكبر من 12.'
    },
    {
      id: 'q-01-03-m4',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Medium,
      text: 'رتب الأعداد التالية من الأصغر إلى الأكبر:',
      mathExpression: '15, 11, 18',
      options: ['11, 15, 18', '18, 15, 11', '11, 18, 15'],
      correctAnswer: '11, 15, 18',
      explanation: 'الخاصية: ترتيب الأعداد.\nالشرح: الترتيب التصاعدي الصحيح هو:\n11, 15, 18'
    },
    {
      id: 'q-01-03-m5',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'ما هو العدد الذي يزيد عن 13 بـ 5؟',
      correctAnswer: '18',
      explanation: 'الخاصية: عملية الجمع.\nالشرح: "يزيد عن" تعني عملية جمع.\n13 + 5 = 18'
    },
    {
      id: 'q-01-03-m6',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Medium,
      text: 'العدد 19 هو 10 + 9.',
      correctAnswer: 'true',
      explanation: 'الخاصية: تفكيك الأعداد.\nالشرح: نعم، العدد 19 يتكون من عشرة واحدة (10) و 9 وحدات (9).'
    },
    // Hard
    {
      id: 'q-01-03-h1',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'إذا طرحنا 6 من العدد 19، ما العدد الناتج؟',
      mathExpression: '19 - 6',
      correctAnswer: '13',
      explanation: 'الخاصية: عملية الطرح.\nالشرح: 19 ناقص 6 يساوي 13.'
    },
    {
      id: 'q-01-03-h2',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'أي الأعداد التالية يقع بين 14 و 16؟',
      options: ['13', '15', '17'],
      correctAnswer: '15',
      explanation: 'الخاصية: موقع الأعداد على خط الأعداد.\nالشرح: العدد 15 هو العدد الصحيح الوحيد الذي يأتي بعد 14 وقبل 16.'
    },
    {
      id: 'q-01-03-h3',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Hard,
      text: 'هل العدد 20 هو ضعف العدد 10؟',
      correctAnswer: 'true',
      explanation: 'الخاصية: مفهوم الضعف.\nالشرح: نعم، ضعف عدد يعني ضربه في 2.\n10 × 2 = 20'
    },
    {
      id: 'q-01-03-h4',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'ما هو مجموع أكبر عدد زوجي أصغر من 20 وأصغر عدد فردي؟',
      correctAnswer: '19',
      explanation: 'الخاصية: الأعداد الزوجية والفردية والجمع.\nخطوات الحل:\n1. أكبر عدد زوجي أصغر من 20 هو 18.\n2. أصغر عدد فردي طبيعي هو 1.\n3. مجموعهما:\n18 + 1 = 19'
    },
    {
      id: 'q-01-03-h5',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'عدد يتكون من عشرة واحدة و 8 وحدات، فما هو؟',
      options: ['81', '18', '9'],
      correctAnswer: '18',
      explanation: 'الخاصية: القيمة المكانية.\nالشرح: عشرة واحدة (10) + 8 وحدات (8) = 18.'
    },
    {
      id: 'q-01-03-h6',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'ما هو العدد الذي إذا أضفنا له 4 كان الناتج 17؟',
      correctAnswer: '13',
      explanation: 'الخاصية: عملية الطرح (عكس الجمع).\nخطوات الحل:\n1. لإيجاد العدد المجهول، نطرح 4 من 17.\n2. النتيجة:\n17 - 4 = 13'
    },
  ]
};