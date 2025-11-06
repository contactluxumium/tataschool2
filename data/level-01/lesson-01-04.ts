import { Lesson, QuestionType, Difficulty } from '../../types';

export const lesson: Lesson = {
  id: 'lesson-01-04',
  title: 'الأشكال الهندسية الأساسية',
  questions: [
    // Easy
    {
      id: 'q-01-04-e1',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'أي من هذه الأشكال له 4 أضلاع متساوية و 4 زوايا قائمة؟',
      options: ['الدائرة', 'المربع', 'المثلث'],
      correctAnswer: 'المربع',
      explanation: 'الخاصية: تعريف المربع.\nالشرح: المربع هو شكل رباعي يتميز بأن جميع أضلاعه متساوية في الطول وجميع زواياه قائمة (90 درجة).'
    },
    {
      id: 'q-01-04-e2',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'ما هو اسم الشكل الذي له ثلاثة أضلاع وثلاث زوايا؟',
      options: ['المستطيل', 'المربع', 'المثلث'],
      correctAnswer: 'المثلث',
      explanation: 'الخاصية: تعريف المثلث.\nالشرح: المثلث هو مضلع يتكون من ثلاثة أضلاع وثلاث زوايا.'
    },
    {
      id: 'q-01-04-e3',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Easy,
      text: 'هل الكرة شكل مسطح؟',
      correctAnswer: 'false',
      explanation: 'الخاصية: الفرق بين الأشكال المسطحة والمجسمات.\nالشرح: الكرة هي مجسم ثلاثي الأبعاد، وليست شكلاً مسطحاً (ثنائي الأبعاد) مثل الدائرة أو المربع.'
    },
    {
      id: 'q-01-04-e4',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'كم عدد زوايا المستطيل؟',
      correctAnswer: '4',
      explanation: 'الخاصية: خصائص المستطيل.\nالشرح: المستطيل هو شكل رباعي له أربع زوايا، وكلها زوايا قائمة.'
    },
    {
      id: 'q-01-04-e5',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'ما هو شكل عجلة السيارة؟',
      options: ['مربع', 'دائرة', 'مثلث'],
      correctAnswer: 'دائرة',
      explanation: 'الخاصية: التعرف على الأشكال في الواقع.\nالشرح: عجلة السيارة لها شكل دائري.'
    },
    {
      id: 'q-01-04-e6',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Easy,
      text: 'هل أضلاع المستطيل كلها متساوية؟',
      correctAnswer: 'false',
      explanation: 'الخاصية: خصائص المستطيل.\nالشرح: في المستطيل، كل ضلعين متقابلين متساويان في الطول، ولكن ليس بالضرورة أن تكون جميع الأضلاع الأربعة متساوية.'
    },
    {
      id: 'q-01-04-e7',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Easy,
      text: 'ما هو شكل إشارة المرور المثلثة؟',
      options: ['دائرة', 'مستطيل', 'مثلث'],
      correctAnswer: 'مثلث',
      explanation: 'الخاصية: التعرف على الأشكال في الواقع.\nالشرح: من اسمها، إشارة المرور المثلثة لها شكل مثلث.'
    },
    {
      id: 'q-01-04-e8',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Easy,
      text: 'كم عدد أضلاع المثلث؟',
      correctAnswer: '3',
      explanation: 'الخاصية: تعريف المثلث.\nالشرح: المثلث هو مضلع له ثلاثة أضلاع.'
    },
    // Medium
    {
      id: 'q-01-04-m1',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Medium,
      text: 'ما هو الشكل الذي له ضلعان طويلان متقابلان وضلعان قصيران متقابلان؟',
      options: ['المربع', 'المعين', 'المستطيل'],
      correctAnswer: 'المستطيل',
      explanation: 'الخاصية: تعريف المستطيل.\nالشرح: هذه هي الخاصية المميزة للمستطيل، حيث كل ضلعين متقابلين متساويان ومتوازيان.'
    },
    {
      id: 'q-01-04-m2',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Medium,
      text: 'هل يمكن رسم مثلث له زاويتان قائمتان؟',
      correctAnswer: 'false',
      explanation: 'الخاصية: مجموع زوايا المثلث.\nالشرح: مجموع زوايا أي مثلث هو 180 درجة. إذا كان هناك زاويتان قائمتان (90+90=180)، فإن الزاوية الثالثة ستكون 0، وهذا مستحيل.'
    },
    {
      id: 'q-01-04-m3',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'كم عدد الرؤوس في المستطيل؟',
      correctAnswer: '4',
      explanation: 'الخاصية: مكونات المضلعات.\nالشرح: الرؤوس هي نقاط التقاء الأضلاع. للمستطيل 4 أضلاع تلتقي في 4 رؤوس (زوايا).'
    },
    {
      id: 'q-01-04-m4',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Medium,
      text: 'أي من هذه الأشياء ليس دائري الشكل؟',
      options: ['طبق', 'كتاب', 'عملة نقدية'],
      correctAnswer: 'كتاب',
      explanation: 'الخاصية: التعرف على الأشكال.\nالشرح: الكتاب عادة ما يكون شكله مستطيلاً، بينما الطبق والعملة النقدية لهما شكل دائري.'
    },
    {
      id: 'q-01-04-m5',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Medium,
      text: 'هل كل مربع هو مستطيل؟',
      correctAnswer: 'true',
      explanation: 'الخاصية: العلاقة بين الأشكال الرباعية.\nالشرح: نعم، لأن المربع يحقق كل شروط المستطيل (أربع زوايا قائمة وكل ضلعين متقابلين متساويان). المربع هو حالة خاصة من المستطيل تكون فيها جميع الأضلاع متساوية.'
    },
    {
      id: 'q-01-04-m6',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Medium,
      text: 'كم عدد الزوايا الحادة في مثلث متساوي الأضلاع؟',
      correctAnswer: '3',
      explanation: 'الخاصية: خصائص المثلث المتساوي الأضلاع.\nالشرح: في المثلث المتساوي الأضلاع، تكون جميع الزوايا متساوية وقياس كل منها 60 درجة. وبما أن 60 أصغر من 90، فجميع الزوايا الثلاث حادة.'
    },
    // Hard
    {
      id: 'q-01-04-h1',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'إذا قمت بضم مربعين متطابقين جنبًا إلى جنب، على أي شكل ستحصل؟',
      options: ['مربع أكبر', 'مستطيل', 'مثلث'],
      correctAnswer: 'مستطيل',
      explanation: 'الخاصية: تركيب الأشكال الهندسية.\nالشرح: عند وضع مربعين بجانب بعضهما، ستحصل على شكل له ضلعان طويلان (مجموع ضلعي المربعين) وضلعان قصيران (ضلعا المربعين الأصليان)، وهذا هو تعريف المستطيل.'
    },
    {
      id: 'q-01-04-h2',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Hard,
      text: 'هل كل مستطيل هو مربع؟',
      correctAnswer: 'false',
      explanation: 'الخاصية: العلاقة بين الأشكال الرباعية.\nالشرح: لا، فالمربع يجب أن تكون أضلاعه الأربعة متساوية، وهذا ليس شرطاً في المستطيل.'
    },
    {
      id: 'q-01-04-h3',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'ما هو اسم الشكل الذي له خمسة أضلاع؟',
      options: ['سداسي', 'خماسي', 'رباعي'],
      correctAnswer: 'خماسي',
      explanation: 'الخاصية: تسمية المضلعات.\nالشرح: المضلع الذي له خمسة أضلاع يسمى مضلعاً خماسياً.'
    },
    {
      id: 'q-01-04-h4',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'إذا قمت بقص ورقة مربعة من زاوية إلى الزاوية المقابلة، على كم مثلث ستحصل؟',
      options: ['1', '2', '4'],
      correctAnswer: '2',
      explanation: 'الخاصية: الأقطار في المضلعات.\nالشرح: الخط الذي يصل بين زاويتين متقابلتين في المربع هو القطر. القطر يقسم المربع إلى مثلثين قائمي الزاوية.'
    },
    {
      id: 'q-01-04-h5',
      type: QuestionType.TrueFalse,
      difficulty: Difficulty.Hard,
      text: 'هل يمكن أن يكون للمثلث أضلاع بأطوال 3 سم، 4 سم، و 7 سم؟',
      correctAnswer: 'false',
      explanation: 'الخاصية: متباينة المثلث.\nالشرح: لكي يتشكل مثلث، يجب أن يكون مجموع طولي أي ضلعين أكبر من طول الضلع الثالث. هنا،\n3 + 4 = 7\nوهو ليس أكبر من 7. لذا لا يمكن بناء هذا المثلث.'
    },
    {
      id: 'q-01-04-h6',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'ما هو الخط الذي يصل بين رأسين غير متتاليين في المربع؟',
      options: ['ضلع', 'قطر', 'ارتفاع'],
      correctAnswer: 'قطر',
      explanation: 'الخاصية: تعريف القطر.\nالشرح: القطر هو قطعة مستقيمة تصل بين رأسين (زاويتين) غير متجاورين في مضلع.'
    },
  ]
};