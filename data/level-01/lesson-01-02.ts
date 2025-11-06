import { Lesson, QuestionType, Difficulty } from '../../types';

export const lesson: Lesson = {
  id: 'lesson-01-02',
  title: 'الطرح',
  questions: [
    // Easy
    {
      id: 'q-01-02-e1',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'كان معك 5 قطع حلوى، أكلت قطعة واحدة. كم قطعة بقيت؟',
      mathExpression: '5 - 1',
      correctAnswer: '4',
      explanation: 'الخاصية: عملية الطرح.\nخطوات الحل:\n1. العدد الأصلي لقطع الحلوى: 5\n2. نطرح عدد القطع المأكولة: 1\n3. العملية:\n5 - 1 = 4\nإذن، بقيت 4 قطع.'
    },
    {
      id: 'q-01-02-e2',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'أوجد الناتج:',
      mathExpression: '8 - 3',
      correctAnswer: '5',
      explanation: 'الخاصية: عملية الطرح.\nالشرح:\n8 - 3 = 5'
    },
    {
      id: 'q-01-02-e3',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'اختر الإجابة الصحيحة:',
      mathExpression: '10 - 2',
      options: ['7', '8', '9'],
      correctAnswer: '8',
      explanation: 'الخاصية: عملية الطرح.\nالشرح:\n10 - 2 = 8'
    },
    {
      id: 'q-01-02-e4',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Easy,
      text: 'هل العملية صحيحة؟',
      mathExpression: '7 - 4 = 3',
      correctAnswer: 'true',
      explanation: 'الخاصية: عملية الطرح.\nالشرح: نعم، العملية صحيحة لأن:\n7 - 4 = 3'
    },
    {
      id: 'q-01-02-e5',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'ما هو ناتج طرح 0 من 9؟',
      mathExpression: '9 - 0',
      correctAnswer: '9',
      explanation: 'الخاصية: طرح الصفر.\nالشرح: عندما نطرح صفر من أي عدد، يبقى العدد كما هو.'
    },
    {
      id: 'q-01-02-e6',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'اختر الناتج الصحيح.',
      mathExpression: '6 - 6',
      options: ['0', '1', '6'],
      correctAnswer: '0',
      explanation: 'الخاصية: طرح العدد من نفسه.\nالشرح: أي عدد يُطرح من نفسه يساوي صفر.'
    },
    {
      id: 'q-01-02-e7',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Easy,
      text: 'هل هذه العملية صحيحة؟',
      mathExpression: '8 - 2 = 5',
      correctAnswer: 'false',
      explanation: 'الخاصية: عملية الطرح.\nالشرح:\nالعملية خاطئة.\nالحساب الصحيح هو:\n8 - 2 = 6\nوليس 5.'
    },
    {
      id: 'q-01-02-e8',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'في شجرة 9 عصافير، طار منها 3. كم عصفوراً بقي؟',
      correctAnswer: '6',
      explanation: 'الخاصية: عملية الطرح.\nخطوات الحل:\n1. العدد الأصلي للعصافير: 9\n2. نطرح عدد العصافير التي طارت: 3\n3. العملية:\n9 - 3 = 6\nإذن، بقي 6 عصافير.'
    },
    // Medium
    {
      id: 'q-01-02-m1',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'كم يساوي الفرق؟',
      mathExpression: '15 - 7',
      correctAnswer: '8',
      explanation: 'الخاصية: عملية الطرح.\nالشرح:\n15 - 7 = 8'
    },
    {
      id: 'q-01-02-m2',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Medium,
      text: 'اختر الناتج الصحيح:',
      mathExpression: '12 - 8',
      options: ['3', '4', '5'],
      correctAnswer: '4',
      explanation: 'الخاصية: عملية الطرح.\nالشرح:\n12 - 8 = 4'
    },
    {
      id: 'q-01-02-m3',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'في حافلة 18 راكباً، نزل منهم 5. كم راكباً بقي؟',
      correctAnswer: '13',
      explanation: 'الخاصية: عملية الطرح.\nخطوات الحل:\n1. العدد الأصلي للركاب: 18\n2. نطرح عدد الركاب الذين نزلوا: 5\n3. العملية:\n18 - 5 = 13\nإذن، بقي 13 راكباً.'
    },
    {
      id: 'q-01-02-m4',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'ما هو ناتج الطرح؟',
      mathExpression: '17 - 9',
      correctAnswer: '8',
      explanation: 'الخاصية: عملية الطرح.\nالشرح:\n17 - 9 = 8'
    },
    {
      id: 'q-01-02-m5',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Medium,
      text: 'ما هو العدد المجهول؟',
      mathExpression: '14 - ? = 6',
      options: ['7', '8', '9'],
      correctAnswer: '8',
      explanation: 'الخاصية: عملية الطرح (عكس الجمع).\nخطوات الحل:\n1. لإيجاد العدد المجهول، نطرح 6 من 14.\n2. العملية:\n14 - 6 = 8'
    },
    {
      id: 'q-01-02-m6',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Medium,
      text: 'هل هذه العملية صحيحة؟',
      mathExpression: '20 - 11 = 9',
      correctAnswer: 'true',
      explanation: 'الخاصية: عملية الطرح.\nالشرح: نعم، العملية صحيحة لأن:\n20 - 11 = 9'
    },
    // Hard
    {
      id: 'q-01-02-h1',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'أوجد ناتج الطرح:',
      mathExpression: '23 - 15',
      correctAnswer: '8',
      explanation: 'الخاصية: عملية الطرح.\nالشرح:\n23 - 15 = 8'
    },
    {
      id: 'q-01-02-h2',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'ما هو العدد المجهول؟',
      mathExpression: '? - 7 = 9',
      options: ['15', '16', '17'],
      correctAnswer: '16',
      explanation: 'الخاصية: عملية الجمع (عكس الطرح).\nخطوات الحل:\n1. لإيجاد العدد المجهول، نجمع 9 و 7.\n2. العملية:\n9 + 7 = 16'
    },
    {
      id: 'q-01-02-h3',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Hard,
      text: 'هل هذه العملية صحيحة؟',
      mathExpression: '25 - 12 = 14',
      correctAnswer: 'false',
      explanation: 'الخاصية: عملية الطرح.\nالشرح:\nالعملية خاطئة.\nالحساب الصحيح هو:\n25 - 12 = 13\nوليس 14.'
    },
    {
      id: 'q-01-02-h4',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'أوجد ناتج الطرح:',
      mathExpression: '21 - 8',
      correctAnswer: '13',
      explanation: 'الخاصية: عملية الطرح.\nالشرح:\n21 - 8 = 13'
    },
    {
      id: 'q-01-02-h5',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'ما هو العدد المجهول؟',
      mathExpression: '20 - ? = 13',
      options: ['7', '8', '9'],
      correctAnswer: '7',
      explanation: 'الخاصية: عملية الطرح.\nخطوات الحل:\n1. لإيجاد العدد المجهول، نطرح 13 من 20.\n2. العملية:\n20 - 13 = 7'
    },
    {
      id: 'q-01-02-h6',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'كان معك 20 درهماً، اشتريت قصة بـ 8 دراهم و قلماً بـ 3 دراهم. كم بقي معك؟',
      correctAnswer: '9',
      explanation: 'الخاصية: عملية الطرح المتعدد.\nخطوات الحل:\n1. المبلغ الأصلي: 20.\n2. نطرح ثمن القصة:\n20 - 8 = 12\n3. نطرح ثمن القلم من الباقي:\n12 - 3 = 9\nالنتيجة: بقي معك 9 دراهم.'
    },
  ]
};