import { Lesson, QuestionType, Difficulty } from '../../types';

export const lesson: Lesson = {
  id: 'lesson-02-01',
  title: 'الجمع والطرح',
  questions: [
    // Easy
    {
      id: 'q-02-01-e1',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'أوجد ناتج الجمع:',
      mathExpression: '23 + 5',
      correctAnswer: '28',
      explanation: 'الخاصية: الجمع.\nالشرح:\nنجمع الآحاد (3+5=8) ونحتفظ بالعشرات (2)، فتكون النتيجة 28.'
    },
    {
      id: 'q-02-01-e2',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'كم يتبقى عندما نطرح 4 من 19؟',
      mathExpression: '19 - 4',
      correctAnswer: '15',
      explanation: 'الخاصية: الطرح.\nالشرح:\nنطرح الآحاد (9-4=5) ونحتفظ بالعشرات (1)، فتكون النتيجة 15.'
    },
    {
      id: 'q-02-01-e3',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'اختر الجواب الصحيح:',
      mathExpression: '30 + 20',
      options: ['40', '50', '60'],
      correctAnswer: '50',
      explanation: 'الخاصية: جمع العشرات.\nالشرح:\n3 عشرات + 2 عشرات = 5 عشرات\nالنتيجة هي 50.'
    },
    {
      id: 'q-02-01-e4',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Easy,
      text: 'هل العملية صحيحة؟',
      mathExpression: '25 + 10 = 35',
      correctAnswer: 'true',
      explanation: 'الخاصية: الجمع.\nالشرح: نعم، العملية صحيحة.'
    },
    {
      id: 'q-02-01-e5',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'أوجد ناتج الطرح:',
      mathExpression: '50 - 10',
      correctAnswer: '40',
      explanation: 'الخاصية: طرح العشرات.\nالشرح:\n5 عشرات - 1 عشرة = 4 عشرات\nالنتيجة هي 40.'
    },
    {
      id: 'q-02-01-e6',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'اختر الناتج الصحيح:',
      mathExpression: '18 + 10',
      options: ['19', '28', '38'],
      correctAnswer: '28',
      explanation: 'الخاصية: الجمع.\nالشرح: نضيف عشرة واحدة إلى 18، فتصبح 28.'
    },
    {
      id: 'q-02-01-e7',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Easy,
      text: 'هل العملية صحيحة؟',
      mathExpression: '40 - 20 = 10',
      correctAnswer: 'false',
      explanation: 'الخاصية: الطرح.\nالشرح:\nالعملية خاطئة.\nالحساب الصحيح هو:\n40 - 20 = 20'
    },
    {
      id: 'q-02-01-e8',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'في صف 20 ولداً و 15 بنتاً. كم تلميذاً في الصف؟',
      correctAnswer: '35',
      explanation: 'الخاصية: الجمع.\nالشرح:\nنجمع عدد الأولاد وعدد البنات:\n20 + 15 = 35\nإذن، يوجد 35 تلميذاً في الصف.'
    },
    // Medium
    {
      id: 'q-02-01-m1',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'احسب مجموع الأعداد:',
      mathExpression: '35 + 27',
      correctAnswer: '62',
      explanation: 'الخاصية: الجمع بالاحتفاظ.\nخطوات الحل:\n1. نجمع الآحاد:\n5 + 7 = 12\nنكتب 2 ونحتفظ بـ 1.\n2. نجمع العشرات مع الاحتفاظ:\n3 + 2 + 1 = 6\n3. النتيجة: 62.'
    },
    {
      id: 'q-02-01-m2',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Medium,
      text: 'ما هو الفرق الصحيح؟',
      mathExpression: '63 - 28',
      options: ['35', '45', '25'],
      correctAnswer: '35',
      explanation: 'الخاصية: الطرح بالاستلاف.\nخطوات الحل:\n1. نطرح الآحاد (3 - 8)، وهذا غير ممكن.\n2. نستلف 1 من العشرات (6)، فتصبح 5 عشرات و 13 وحدة.\n3. نطرح الآحاد:\n13 - 8 = 5\n4. نطرح العشرات:\n5 - 2 = 3\n5. النتيجة: 35.'
    },
    {
      id: 'q-02-01-m3',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'يوجد في كتاب 80 صفحة، قرأت منها 45. كم صفحة بقيت؟',
      correctAnswer: '35',
      explanation: 'الخاصية: الطرح.\nالشرح:\nلمعرفة عدد الصفحات المتبقية، نطرح عدد الصفحات المقروءة من العدد الإجمالي:\n80 - 45 = 35\nإذن، بقيت 35 صفحة.'
    },
    {
      id: 'q-02-01-m4',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'احسب مجموع الأعداد:',
      mathExpression: '56 + 34',
      correctAnswer: '90',
      explanation: 'الخاصية: الجمع بالاحتفاظ.\nخطوات الحل:\n1. نجمع الآحاد:\n6 + 4 = 10\nنكتب 0 ونحتفظ بـ 1.\n2. نجمع العشرات مع الاحتفاظ:\n5 + 3 + 1 = 9\n3. النتيجة: 90.'
    },
    {
      id: 'q-02-01-m5',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Medium,
      text: 'ما هو العدد المجهول؟',
      mathExpression: '50 - ? = 22',
      options: ['18', '28', '38'],
      correctAnswer: '28',
      explanation: 'الخاصية: الطرح.\nالشرح:\nلإيجاد العدد المجهول، نطرح 22 من 50:\n50 - 22 = 28'
    },
    {
      id: 'q-02-01-m6',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Medium,
      text: 'هل العملية صحيحة؟',
      mathExpression: '45 + 18 = 63',
      correctAnswer: 'true',
      explanation: 'الخاصية: الجمع بالاحتفاظ.\nالشرح: نعم، العملية صحيحة:\n45 + 18 = 63'
    },
    // Hard
    {
      id: 'q-02-01-h1',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'احسب:',
      mathExpression: '125 + 75',
      correctAnswer: '200',
      explanation: 'الخاصية: الجمع.\nالشرح:\n125 + 75 = 200'
    },
    {
      id: 'q-02-01-h2',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'كم يجب أن نضيف إلى 45 للحصول على 100؟',
      mathExpression: '45 + ? = 100',
      options: ['45', '55', '65'],
      correctAnswer: '55',
      explanation: 'الخاصية: الطرح.\nالشرح:\nنطرح 45 من 100:\n100 - 45 = 55'
    },
    {
      id: 'q-02-01-h3',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Hard,
      text: 'هل العملية التالية صحيحة؟',
      mathExpression: '150 - 65 = 85',
      correctAnswer: 'true',
      explanation: 'الخاصية: الطرح.\nالشرح: نعم، العملية صحيحة.'
    },
    {
      id: 'q-02-01-h4',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'أوجد ناتج الطرح:',
      mathExpression: '200 - 87',
      correctAnswer: '113',
      explanation: 'الخاصية: الطرح بالاستلاف.\nالشرح: 200 ناقص 87 يساوي 113.'
    },
    {
      id: 'q-02-01-h5',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'معك 100 درهم. اشتريت كرة بـ 40 درهماً و قصة بـ 25 درهماً. كم بقي معك؟',
      options: ['25', '35', '45'],
      correctAnswer: '35',
      explanation: 'الخاصية: الطرح المتعدد.\nخطوات الحل:\n1. أولاً نحسب المبلغ المتبقي بعد شراء الكرة:\n100 - 40 = 60\n2. ثم نطرح ثمن القصة من الباقي:\n60 - 25 = 35\nإذن، بقي معك 35 درهماً.'
    },
    {
      id: 'q-02-01-h6',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'ما هو العدد الذي إذا طرحت منه 50 كان الناتج 75؟',
      correctAnswer: '125',
      explanation: 'الخاصية: الجمع (عكس الطرح).\nالشرح:\nلإيجاد العدد الأصلي، نجمع الناتج مع العدد المطروح:\n75 + 50 = 125'
    },
  ]
};