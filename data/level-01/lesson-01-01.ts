import { Lesson, QuestionType, Difficulty } from '../../types';

export const lesson: Lesson = {
  id: 'lesson-01-01',
  title: 'الجمع',
  questions: [
    // Easy
    {
      id: 'q-01-01-e1',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'لديك تفاحتان، وأضافت لك والدتك تفاحة أخرى. كم عدد التفاحات لديك الآن؟',
      mathExpression: '2 + 1',
      correctAnswer: '3',
      explanation: 'الخاصية: عملية الجمع.\nخطوات الحل:\n1. عدد التفاحات الأصلي: 2\n2. عدد التفاحات الجديدة: 1\n3. العملية الحسابية:\n2 + 1 = 3\nالنتيجة هي 3 تفاحات.'
    },
    {
      id: 'q-01-01-e2',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'أوجد حاصل الجمع.',
      mathExpression: '4 + 2',
      correctAnswer: '6',
      explanation: 'الخاصية: عملية الجمع.\nخطوات الحل:\n1. نبدأ بالعدد 4.\n2. نضيف إليه 2.\n3. النتيجة:\n4 + 2 = 6'
    },
    {
      id: 'q-01-01-e3',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'اختر الإجابة الصحيحة.',
      mathExpression: '5 + 0',
      options: ['0', '5', '50'],
      correctAnswer: '5',
      explanation: 'الخاصية: العنصر المحايد في الجمع (الصفر).\nالشرح: أي عدد يضاف إليه صفر يبقى العدد نفسه.'
    },
    {
      id: 'q-01-01-e4',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Easy,
      text: 'هل هذه العملية صحيحة؟',
      mathExpression: '3 + 3 = 6',
      correctAnswer: 'true',
      explanation: 'الخاصية: عملية الجمع.\nالشرح: نعم، العملية صحيحة لأن:\n3 + 3 = 6'
    },
    {
      id: 'q-01-01-e5',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'في حديقة 5 فراشات، انضمت إليها فراشتان. كم فراشة في الحديقة الآن؟',
      correctAnswer: '7',
      explanation: 'الخاصية: عملية الجمع.\nخطوات الحل:\n1. عدد الفراشات الأصلي: 5\n2. عدد الفراشات التي انضمت: 2\n3. المجموع:\n5 + 2 = 7\nإذن، يوجد 7 فراشات في الحديقة.'
    },
    {
      id: 'q-01-01-e6',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'اختر المجموع الصحيح.',
      mathExpression: '6 + 4',
      options: ['9', '10', '11'],
      correctAnswer: '10',
      explanation: 'الخاصية: عملية الجمع.\nالشرح:\n6 + 4 = 10'
    },
    {
      id: 'q-01-01-e7',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Easy,
      text: 'هل هذه العملية خاطئة؟',
      mathExpression: '2 + 5 = 8',
      correctAnswer: 'true',
      explanation: 'الخاصية: عملية الجمع.\nالشرح:\nنعم، العملية المعطاة خاطئة.\nالحساب الصحيح هو:\n2 + 5 = 7\nوليس 8.'
    },
    {
      id: 'q-01-01-e8',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'أكمل السلسلة:',
      mathExpression: '2, 4, 6, ...',
      correctAnswer: '8',
      explanation: 'الخاصية: متتالية حسابية.\nالشرح: هذه السلسلة تزيد بمقدار 2 في كل مرة. العدد التالي هو:\n6 + 2 = 8'
    },
    // Medium
    {
      id: 'q-01-01-m1',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'ما هو ناتج الجمع؟',
      mathExpression: '9 + 7',
      correctAnswer: '16',
      explanation: 'الخاصية: عملية الجمع.\nالشرح:\n9 + 7 = 16'
    },
    {
      id: 'q-01-01-m2',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Medium,
      text: 'اختر المجموع الصحيح.',
      mathExpression: '8 + 8',
      options: ['15', '16', '17'],
      correctAnswer: '16',
      explanation: 'الخاصية: الجمع (مضاعفة).\nالشرح:\n8 + 8 = 16'
    },
    {
      id: 'q-01-01-m3',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'مع أحمد 6 كرات ومع أخته 7 كرات. كم كرة يملكان معاً؟',
      correctAnswer: '13',
      explanation: 'الخاصية: عملية الجمع.\nخطوات الحل:\n1. عدد كرات أحمد: 6\n2. عدد كرات أخته: 7\n3. المجموع:\n6 + 7 = 13\nإذن، يملكان معاً 13 كرة.'
    },
    {
      id: 'q-01-01-m4',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'ما هو ناتج الجمع؟',
      mathExpression: '5 + 11',
      correctAnswer: '16',
      explanation: 'الخاصية: عملية الجمع.\nالشرح:\n5 + 11 = 16'
    },
    {
      id: 'q-01-01-m5',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Medium,
      text: 'ما هو العدد الذي إذا أضفناه إلى 9 يصبح الناتج 15؟',
      mathExpression: '9 + ? = 15',
      options: ['5', '6', '7'],
      correctAnswer: '6',
      explanation: 'الخاصية: عملية الطرح (عكس الجمع).\nخطوات الحل:\n1. لإيجاد العدد المجهول، نطرح 9 من 15.\n2. العملية:\n15 - 9 = 6\nالعدد هو 6.'
    },
    {
      id: 'q-01-01-m6',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Medium,
      text: 'هل هذه العملية صحيحة؟',
      mathExpression: '12 + 6 = 18',
      correctAnswer: 'true',
      explanation: 'الخاصية: عملية الجمع.\nالشرح: نعم، العملية صحيحة لأن:\n12 + 6 = 18'
    },
    // Hard
    {
      id: 'q-01-01-h1',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'أوجد حاصل الجمع.',
      mathExpression: '14 + 8',
      correctAnswer: '22',
      explanation: 'الخاصية: عملية الجمع.\nالشرح:\n14 + 8 = 22'
    },
    {
      id: 'q-01-01-h2',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'ما هو ناتج جمع الأعداد الثلاثة؟',
      mathExpression: '7 + 5 + 8',
      options: ['19', '20', '21'],
      correctAnswer: '20',
      explanation: 'الخاصية: خاصية التجميع في الجمع.\nخطوات الحل:\n1. نجمع العددين الأولين:\n7 + 5 = 12\n2. نضيف العدد الثالث إلى المجموع:\n12 + 8 = 20'
    },
    {
      id: 'q-01-01-h3',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Hard,
      text: 'هل هذه العملية صحيحة؟',
      mathExpression: '13 + 9 = 21',
      correctAnswer: 'false',
      explanation: 'الخاصية: عملية الجمع.\nالشرح:\nالعملية خاطئة.\nالحساب الصحيح هو:\n13 + 9 = 22\nوليس 21.'
    },
    {
      id: 'q-01-01-h4',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'أوجد حاصل الجمع.',
      mathExpression: '11 + 13',
      correctAnswer: '24',
      explanation: 'الخاصية: عملية الجمع.\nالشرح:\n11 + 13 = 24'
    },
    {
      id: 'q-01-01-h5',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'في سلة 9 تفاحات، 6 برتقالات، و 5 إجاصات. كم فاكهة في السلة بالمجموع؟',
      options: ['19', '20', '21'],
      correctAnswer: '20',
      explanation: 'الخاصية: عملية الجمع المتعدد.\nخطوات الحل:\n1. نجمع عدد التفاحات والبرتقالات:\n9 + 6 = 15\n2. نضيف عدد الإجاصات إلى المجموع:\n15 + 5 = 20'
    },
    {
      id: 'q-01-01-h6',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'ما هو العدد الذي إذا أضفناه إلى 7 يصبح الناتج 20؟',
      mathExpression: '7 + ? = 20',
      correctAnswer: '13',
      explanation: 'الخاصية: عملية الطرح (عكس الجمع).\nخطوات الحل:\n1. لإيجاد العدد المجهول، نطرح 7 من 20.\n2. العملية:\n20 - 7 = 13\nالعدد هو 13.'
    },
  ]
};