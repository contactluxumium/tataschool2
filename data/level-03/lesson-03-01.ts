import { Lesson, QuestionType, Difficulty } from '../../types';

export const lesson: Lesson = {
  id: 'lesson-03-01',
  title: 'الضرب والقسمة',
  questions: [
    // Easy
    { id: 'q-03-01-e1', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أوجد حاصل الضرب:', mathExpression: '8 × 4', correctAnswer: '32', explanation: 'الخاصية: الضرب.\nالشرح:\n8 × 4 = 32' },
    { id: 'q-03-01-e2', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أوجد خارج القسمة:', mathExpression: '21 ÷ 3', correctAnswer: '7', explanation: 'الخاصية: القسمة.\nالشرح:\n21 ÷ 3 = 7\nلأن:\n7 × 3 = 21' },
    { id: 'q-03-01-e3', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'اختر الإجابة الصحيحة:', mathExpression: '9 × 5', options: ['40', '45', '50'], correctAnswer: '45', explanation: 'الخاصية: الضرب.\nالشرح:\n9 × 5 = 45' },
    { id: 'q-03-01-e4', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل هذه العملية صحيحة؟', mathExpression: '30 ÷ 6 = 5', correctAnswer: 'true', explanation: 'الخاصية: القسمة (عكس الضرب).\nالشرح: نعم، العملية صحيحة لأن:\n5 × 6 = 30' },
    { id: 'q-03-01-e5', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أوجد حاصل الضرب:', mathExpression: '7 × 10', correctAnswer: '70', explanation: 'الخاصية: الضرب في 10.\nالشرح: عند الضرب في 10، نضيف صفراً إلى يمين العدد.' },
    { id: 'q-03-01-e6', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'اختر خارج القسمة:', mathExpression: '40 ÷ 8', options: ['4', '5', '6'], correctAnswer: '5', explanation: 'الخاصية: القسمة.\nالشرح:\n40 ÷ 8 = 5' },
    { id: 'q-03-01-e7', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل 15 ÷ 1 = 1؟', correctAnswer: 'false', explanation: 'الخاصية: القسمة على 1.\nالشرح:\nالعبارة خاطئة.\nأي عدد يقسم على 1 يبقى كما هو، إذن:\n15 ÷ 1 = 15' },
    { id: 'q-03-01-e8', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'وزعت معلمة 18 قطعة حلوى على 6 تلاميذ بالتساوي. كم نصيب كل واحد؟', correctAnswer: '3', explanation: 'الخاصية: القسمة.\nالشرح:\nنقسم العدد الإجمالي للحلوى على عدد التلاميذ:\n18 ÷ 6 = 3\nنصيب كل تلميذ هو 3 قطع.' },
    // Medium
    { id: 'q-03-01-m1', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'أوجد حاصل الضرب:', mathExpression: '12 × 7', correctAnswer: '84', explanation: 'الخاصية: الضرب.\nالشرح:\n12 × 7 = 84' },
    { id: 'q-03-01-m2', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'أوجد خارج القسمة والباقي:', mathExpression: '38 ÷ 5', options: ['الخارج 7 والباقي 3', 'الخارج 6 والباقي 8', 'الخارج 7 والباقي 0'], correctAnswer: 'الخارج 7 والباقي 3', explanation: 'الخاصية: القسمة الإقليدية.\nالشرح:\nأقرب مضاعف للعدد 5 وأصغر من 38 هو 35.\n5 × 7 = 35\nإذن الخارج هو 7.\nالباقي هو:\n38 - 35 = 3' },
    { id: 'q-03-01-m3', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'في قاعة 8 صفوف من الكراسي، في كل صف 9 كراسي. كم كرسياً في القاعة؟', correctAnswer: '72', explanation: 'الخاصية: الضرب.\nالشرح:\nنضرب عدد الصفوف في عدد الكراسي في كل صف:\n8 × 9 = 72\nإذن، يوجد 72 كرسياً في القاعة.' },
    { id: 'q-03-01-m4', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'أوجد حاصل الضرب:', mathExpression: '25 × 4', correctAnswer: '100', explanation: 'الخاصية: الضرب.\nالشرح:\n25 × 4 = 100' },
    { id: 'q-03-01-m5', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'ما هو العدد المجهول؟', mathExpression: '? × 8 = 48', options: ['5', '6', '7'], correctAnswer: '6', explanation: 'الخاصية: القسمة (عكس الضرب).\nالشرح:\nلمعرفة العدد، نقسم 48 على 8:\n48 ÷ 8 = 6' },
    { id: 'q-03-01-m6', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'يريد بستاني زرع 45 شتلة في صفوف، كل صف به 5 شتلات. كم صفاً سيحتاج؟', correctAnswer: '9', explanation: 'الخاصية: القسمة.\nالشرح:\nنقسم العدد الإجمالي للشتلات على عدد الشتلات في كل صف:\n45 ÷ 5 = 9\nإذن، سيحتاج 9 صفوف.' },
    // Hard
    { id: 'q-03-01-h1', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'أوجد حاصل الضرب:', mathExpression: '125 × 5', correctAnswer: '625', explanation: 'الخاصية: الضرب.\nالشرح:\n125 × 5 = 625' },
    { id: 'q-03-01-h2', type: QuestionType.MultipleChoice, difficulty: Difficulty.Hard, text: 'في مخيم، تم تقسيم 75 طفلاً إلى فرق من 10 أطفال. كم فريقاً كاملاً يمكن تكوينه؟', options: ['6 فرق', '7 فرق', '8 فرق'], correctAnswer: '7 فرق', explanation: 'الخاصية: القسمة الإقليدية.\nالشرح:\nنقسم 75 على 10:\n75 ÷ 10 = 7\nوالباقي 5.\nيمكن تكوين 7 فرق كاملة، ويبقى 5 أطفال.' },
    { id: 'q-03-01-h3', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'اشترى تاجر 6 صناديق من المشروبات، في كل صندوق 24 قنينة. كم قنينة اشترى بالمجموع؟', correctAnswer: '144', explanation: 'الخاصية: الضرب.\nالشرح:\nنضرب عدد الصناديق في عدد القنينات في كل صندوق:\n6 × 24 = 144\nإذن، اشترى 144 قنينة.' },
    { id: 'q-03-01-h4', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'أوجد ناتج العملية:', mathExpression: '(50 ÷ 10) + (3 × 8)', correctAnswer: '29', explanation: 'الخاصية: أسبقية العمليات.\nخطوات الحل:\n1. نحسب ما بين الأقواس أولاً:\n50 ÷ 10 = 5\n3 × 8 = 24\n2. نجمع الناتجين:\n5 + 24 = 29' },
    { id: 'q-03-01-h5', type: QuestionType.MultipleChoice, difficulty: Difficulty.Hard, text: 'ما هو العدد الذي إذا قسم على 8 كان الخارج 7 والباقي 3؟', options: ['53', '56', '59'], correctAnswer: '59', explanation: 'الخاصية: القسمة الإقليدية (المقسوم = المقسوم عليه × الخارج + الباقي).\nخطوات الحل:\n1. نضرب المقسوم عليه في الخارج:\n8 × 7 = 56\n2. نضيف الباقي:\n56 + 3 = 59' },
    { id: 'q-03-01-h6', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'سيارة تستهلك لتراً واحداً من البنزين لقطع 12 كم. كم لتراً تحتاج لقطع 120 كم؟', correctAnswer: '10', explanation: 'الخاصية: القسمة.\nالشرح:\nلمعرفة عدد اللترات، نقسم المسافة الإجمالية على المسافة المقطوعة بلتر واحد:\n120 ÷ 12 = 10\nإذن، تحتاج 10 لترات.' },
  ]
};