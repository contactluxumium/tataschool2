import { Lesson, QuestionType, Difficulty } from '../../types';

export const lesson: Lesson = {
  id: 'lesson-02-03',
  title: 'الأعداد حتى 999',
  questions: [
    // Easy
    { id: 'q-02-03-e1', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: "اكتب العدد 'مئتان وعشرة' بالأرقام.", correctAnswer: '210', explanation: 'الخاصية: كتابة الأعداد.\nالشرح: "مئتان" تعني 2 في خانة المئات، و "عشرة" تعني 1 في خانة العشرات، وصفر في الوحدات، إذن العدد هو 210.' },
    { id: 'q-02-03-e2', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'ما هو العدد الذي يأتي بعد 299؟', options: ['298', '300', '301'], correctAnswer: '300', explanation: 'الخاصية: تتابع الأعداد.\nالشرح: بعد العدد 299 يأتي مباشرة العدد 300.' },
    { id: 'q-02-03-e3', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل 410 أكبر من 401؟', correctAnswer: 'true', explanation: 'الخاصية: مقارنة الأعداد.\nالشرح: نعم، لأن رقم العشرات (1) في 410 أكبر من رقم العشرات (0) في 401.' },
    { id: 'q-02-03-e4', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'ما هو رقم العشرات في العدد 567؟', correctAnswer: '6', explanation: 'الخاصية: القيمة المكانية.\nالشرح: في العدد 567، الرقم 7 هو للوحدات، 6 للعشرات، و 5 للمئات.' },
    { id: 'q-02-03-e5', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: "اكتب العدد 'ثمانمئة واثنان' بالأرقام.", correctAnswer: '802', explanation: 'الخاصية: كتابة الأعداد.\nالشرح: 8 في المئات، 0 في العشرات، و 2 في الوحدات.' },
    { id: 'q-02-03-e6', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'اختر العدد الأكبر:', options: ['789', '798', '780'], correctAnswer: '798', explanation: 'الخاصية: مقارنة الأعداد.\nالشرح: جميع الأعداد لها نفس رقم المئات (7). نقارن العشرات، فنجد أن 9 هو الأكبر، إذن 798 هو العدد الأكبر.' },
    { id: 'q-02-03-e7', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل العدد 999 هو أكبر عدد مكون من 3 أرقام؟', correctAnswer: 'true', explanation: 'الخاصية: تعريف الأعداد.\nالشرح: نعم، أي عدد أكبر منه سيكون مكوناً من 4 أرقام على الأقل (مثل 1000).' },
    { id: 'q-02-03-e8', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'ما هو العدد الذي يسبق 700؟', correctAnswer: '699', explanation: 'الخاصية: تتابع الأعداد.\nالشرح: العدد الذي يأتي مباشرة قبل 700 هو 699.' },
    // Medium
    { id: 'q-02-03-m1', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'أوجد ناتج الجمع:', mathExpression: '350 + 200', correctAnswer: '550', explanation: 'الخاصية: الجمع.\nالشرح: نجمع المئات (3+2=5) ونحتفظ بالعشرات والوحدات، فتكون النتيجة 550.' },
    { id: 'q-02-03-m2', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'أوجد ناتج الطرح:', mathExpression: '900 - 450', correctAnswer: '450', explanation: 'الخاصية: الطرح.\nالشرح: 900 ناقص 400 يساوي 500، ثم نطرح 50، فنحصل على 450.' },
    { id: 'q-02-03-m3', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'رتب الأعداد من الأصغر للأكبر: 607, 706, 670', options: ['607, 670, 706', '706, 670, 607', '607, 706, 670'], correctAnswer: '607, 670, 706', explanation: 'الخاصية: ترتيب الأعداد.\nالشرح: نبدأ بالأصغر (607)، ثم الذي يليه (670)، ثم الأكبر (706).' },
    { id: 'q-02-03-m4', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'ما هو العدد المكون من 9 مئات و 5 عشرات و 0 وحدات؟', correctAnswer: '950', explanation: 'الخاصية: القيمة المكانية.\nالشرح:\n900 + 50 + 0 = 950' },
    { id: 'q-02-03-m5', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'ما هو العدد الذي يقل عن 500 بـ 10؟', options: ['490', '510', '499'], correctAnswer: '490', explanation: 'الخاصية: الطرح.\nالشرح: "يقل عن" تعني عملية طرح.\n500 - 10 = 490' },
    { id: 'q-02-03-m6', type: QuestionType.TrueFalse, difficulty: Difficulty.Medium, text: 'هل 400 + 50 + 6 = 456؟', correctAnswer: 'true', explanation: 'الخاصية: تفكيك الأعداد.\nالشرح: نعم، هذه هي الكتابة المفككة للعدد 456.' },
    // Hard
    { id: 'q-02-03-h1', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'أوجد ناتج الجمع:', mathExpression: '478 + 231', correctAnswer: '709', explanation: 'الخاصية: الجمع بالاحتفاظ.\nالشرح: 8+1=9 (آحاد). 7+3=10 (عشرات، نكتب 0 ونحتفظ بـ1). 4+2+1=7 (مئات). النتيجة 709.' },
    { id: 'q-02-03-h2', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'أوجد ناتج الطرح:', mathExpression: '815 - 342', correctAnswer: '473', explanation: 'الخاصية: الطرح بالاستلاف.\nالشرح: 5-2=3 (آحاد). 1-4 غير ممكن، نستلف 1 من 8 فتصبح 11-4=7 (عشرات). 7-3=4 (مئات). النتيجة 473.' },
    { id: 'q-02-03-h3', type: QuestionType.MultipleChoice, difficulty: Difficulty.Hard, text: 'ما هو أصغر عدد يمكن تكوينه من الأرقام 9، 2، 7؟', options: ['972', '279', '297'], correctAnswer: '279', explanation: 'الخاصية: القيمة المكانية.\nالشرح: لتكوين أصغر عدد، نضع أصغر رقم (2) في خانة المئات، ثم الذي يليه (7) في العشرات، ثم الأكبر (9) في الوحدات.' },
    { id: 'q-02-03-h4', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'في مكتبة 350 كتاباً علمياً و 420 قصة. كم كتاباً في المكتبة؟', correctAnswer: '770', explanation: 'الخاصية: الجمع.\nالشرح: نجمع عدد الكتب العلمية مع عدد القصص:\n350 + 420 = 770\nكتاباً.' },
    { id: 'q-02-03-h5', type: QuestionType.MultipleChoice, difficulty: Difficulty.Hard, text: 'ما هو ضعف العدد 350؟', options: ['600', '650', '700'], correctAnswer: '700', explanation: 'الخاصية: الضرب في 2.\nالشرح: ضعف العدد يعني ضربه في 2.\n350 × 2 = 700' },
    { id: 'q-02-03-h6', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'سعر تلفاز 980 درهماً، وسعر مذياع 250 درهماً. بكم يزيد ثمن التلفاز عن المذياع؟', correctAnswer: '730', explanation: 'الخاصية: الطرح.\nالشرح: لمعرفة الفرق، نطرح ثمن المذياع من ثمن التلفاز:\n980 - 250 = 730\nدرهماً.' },
  ]
};