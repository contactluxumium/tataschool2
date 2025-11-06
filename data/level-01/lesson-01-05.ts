import { Lesson, QuestionType, Difficulty } from '../../types';

export const lesson: Lesson = {
  id: 'lesson-01-05',
  title: 'مقارنة الأعداد',
  questions: [
    // Easy
    {
      id: 'q-01-05-e1',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'أي عدد هو الأكبر؟',
      mathExpression: '9, 6',
      options: ['9', '6', 'متساويان'],
      correctAnswer: '9',
      explanation: 'الخاصية: مقارنة الأعداد.\nالشرح: العدد 9 يأتي بعد العدد 6 في الترتيب، لذا 9 هو الأكبر.'
    },
    {
      id: 'q-01-05-e2',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Easy,
      text: 'هل 10 أكبر من 12؟',
      correctAnswer: 'false',
      explanation: 'الخاصية: مقارنة الأعداد.\nالشرح: العبارة خاطئة، لأن 10 أصغر من 12.'
    },
    {
      id: 'q-01-05-e3',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'أي عدد هو الأصغر؟',
      mathExpression: '5, 8',
      options: ['5', '8', 'متساويان'],
      correctAnswer: '5',
      explanation: 'الخاصية: مقارنة الأعداد.\nالشرح: العدد 5 يأتي قبل العدد 8، لذا 5 هو الأصغر.'
    },
    {
      id: 'q-01-05-e4',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'اختر العلامة الصحيحة:',
      mathExpression: '7 ... 4',
      options: ['<', '>', '='],
      correctAnswer: '>',
      explanation: 'الخاصية: رموز المقارنة.\nالشرح:\nبما أن 7 أكبر من 4، فإن الرمز المناسب هو:\n>'
    },
    {
      id: 'q-01-05-e5',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Easy,
      text: 'هل 13 أصغر من 18؟',
      correctAnswer: 'true',
      explanation: 'الخاصية: مقارنة الأعداد.\nالشرح: العبارة صحيحة، لأن 13 يأتي قبل 18.'
    },
    {
      id: 'q-01-05-e6',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'اختر العلامة الصحيحة:',
      mathExpression: '15 ... 15',
      options: ['<', '>', '='],
      correctAnswer: '=',
      explanation: 'الخاصية: رموز المقارنة.\nالشرح: العددان متساويان، لذلك نستخدم الرمز =.'
    },
    {
      id: 'q-01-05-e7',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'أي عدد هو الأكبر؟',
      mathExpression: '17, 14',
      correctAnswer: '17',
      explanation: 'الخاصية: مقارنة الأعداد.\nالشرح: 17 أكبر من 14.'
    },
    {
      id: 'q-01-05-e8',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Easy,
      text: 'هل 19 يساوي 20؟',
      correctAnswer: 'false',
      explanation: 'الخاصية: المساواة.\nالشرح: 19 لا يساوي 20.'
    },
    // Medium
    {
      id: 'q-01-05-m1',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Medium,
      text: 'اختر المقارنة الصحيحة.',
      options: ['15 > 19', '16 < 14', '18 > 17'],
      correctAnswer: '18 > 17',
      explanation: 'الخاصية: مقارنة الأعداد.\nالشرح:\nالخياران الأول والثاني خاطئان.\nالخيار الصحيح هو:\n18 > 17\nلأن 18 أكبر من 17.'
    },
    {
      id: 'q-01-05-m2',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Medium,
      text: 'هل هذه العملية صحيحة؟',
      mathExpression: '12 = 10 + 2',
      correctAnswer: 'true',
      explanation: 'الخاصية: الجمع والمساواة.\nالشرح:\nنعم، الطرف الأيمن:\n10 + 2 = 12\nوهو نفس قيمة الطرف الأيسر.'
    },
    {
      id: 'q-01-05-m3',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Medium,
      text: 'رتب الأعداد التالية من الأصغر إلى الأكبر:',
      mathExpression: '17, 9, 20',
      options: ['9, 17, 20', '20, 17, 9', '9, 20, 17'],
      correctAnswer: '9, 17, 20',
      explanation: 'الخاصية: ترتيب الأعداد.\nالشرح:\nأصغر عدد هو 9، يليه 17، ثم الأكبر هو 20.\nالترتيب الصحيح هو:\n9, 17, 20'
    },
    {
      id: 'q-01-05-m4',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Medium,
      text: 'رتب الأعداد من الأكبر إلى الأصغر:',
      mathExpression: '14, 11, 19',
      options: ['19, 14, 11', '11, 14, 19', '19, 11, 14'],
      correctAnswer: '19, 14, 11',
      explanation: 'الخاصية: ترتيب الأعداد.\nالشرح:\nأكبر عدد هو 19، يليه 14، ثم الأصغر هو 11.\nالترتيب الصحيح هو:\n19, 14, 11'
    },
    {
      id: 'q-01-05-m5',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Medium,
      text: 'هل هذه المقارنة صحيحة؟ 9 + 5 > 13',
      correctAnswer: 'true',
      explanation: 'الخاصية: العمليات الحسابية والمقارنة.\nخطوات الحل:\n1. نحسب الطرف الأيسر:\n9 + 5 = 14\n2. نقارن النتيجة بالطرف الأيمن:\n14 > 13\n3. المقارنة صحيحة.'
    },
    {
      id: 'q-01-05-m6',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'ما هو العدد الذي يقع مباشرة بعد 19؟',
      correctAnswer: '20',
      explanation: 'الخاصية: تتابع الأعداد.\nالشرح: العدد الذي يلي 19 في خط الأعداد هو 20.'
    },
    // Hard
    {
      id: 'q-01-05-h1',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'ما هي العلامة التي تجعل الجملة صحيحة؟',
      mathExpression: '8 + 6 ___ 20 - 5',
      options: ['<', '>', '='],
      correctAnswer: '<',
      explanation: 'الخاصية: العمليات الحسابية والمقارنة.\nخطوات الحل:\n1. نحسب الطرف الأيسر:\n8 + 6 = 14\n2. نحسب الطرف الأيمن:\n20 - 5 = 15\n3. نقارن النتيجتين: 14 أصغر من 15، لذا نستخدم الرمز <.'
    },
    {
      id: 'q-01-05-h2',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Hard,
      text: 'عدد الأولاد (8) أكبر من عدد البنات (5+4).',
      correctAnswer: 'false',
      explanation: 'الخاصية: العمليات الحسابية والمقارنة.\nخطوات الحل:\n1. عدد الأولاد = 8.\n2. عدد البنات:\n5 + 4 = 9\n3. نقارن: 8 ليس أكبر من 9. إذن العبارة خاطئة.'
    },
    {
      id: 'q-01-05-h3',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'أي من العبارات التالية خاطئة؟',
      options: ['12 < 14', '16 = 8 + 8', '19 < 17'],
      correctAnswer: '19 < 17',
      explanation: 'الخاصية: مقارنة الأعداد.\nالشرح: العبارة "19 < 17" خاطئة لأن 19 أكبر من 17. العبارتان الأخريان صحيحتان.'
    },
    {
      id: 'q-01-05-h4',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'اختر العلامة الصحيحة:',
      mathExpression: '18 - 6 ___ 10 + 2',
      options: ['<', '>', '='],
      correctAnswer: '=',
      explanation: 'الخاصية: العمليات الحسابية والمقارنة.\nخطوات الحل:\n1. نحسب الطرف الأيسر:\n18 - 6 = 12\n2. نحسب الطرف الأيمن:\n10 + 2 = 12\n3. النتيجتان متساويتان، لذا نستخدم الرمز =.'
    },
    {
      id: 'q-01-05-h5',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Hard,
      text: 'لدى أحمد 14 درهماً ولدى ليلى 11 درهماً. هل ما يملكه أحمد أكثر مما تملكه ليلى؟',
      correctAnswer: 'true',
      explanation: 'الخاصية: مقارنة الأعداد.\nالشرح: نعم، لأن 14 أكبر من 11.'
    },
    {
      id: 'q-01-05-h6',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'ما هو أصغر عدد يمكن تكوينه من الرقمين 2 و 1؟',
      correctAnswer: '12',
      explanation: 'الخاصية: القيمة المكانية.\nالشرح: لتكوين أصغر عدد، نضع الرقم الأصغر (1) في خانة العشرات والرقم الأكبر (2) في خانة الوحدات، فنحصل على 12.'
    }
  ]
};