import { Lesson, QuestionType, Difficulty } from '../../types';

export const lesson: Lesson = {
  id: 'lesson-10-03',
  title: 'المعادلات والمتراجحات من الدرجة الثانية',
  questions: [
    // Easy
    { id: 'q-10-03-e1', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل x=0 حل للمعادلة x²-x=0؟', correctAnswer: 'true', explanation: 'الخاصية: التحقق من الحل.\nالشرح: نعوض x بصفر في المعادلة:\n0² - 0 = 0\nبما أن 0=0، فالعبارة صحيحة.' },
    { id: 'q-10-03-e2', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'لحل معادلة من الدرجة الثانية ax²+bx+c=0، نحسب أولاً ...', options: ['المميز دلتا', 'الجذر المربع', 'الأس'], correctAnswer: 'المميز دلتا', explanation: 'الخاصية: منهجية حل معادلة من الدرجة الثانية.\nالشرح: المميز Δ = b² - 4ac هو الخطوة الأولى لتحديد عدد ونوع الحلول.' },
    { id: 'q-10-03-e3', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'أحسب مميز المعادلة x² - 4x + 3 = 0.', correctAnswer: '4', explanation: 'الخاصية: حساب المميز Δ = b² - 4ac.\nالشرح: هنا a=1, b=-4, c=3. إذن:\nΔ = (-4)² - 4(1)(3) = 16 - 12 = 4' },
    { id: 'q-10-03-e4', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'إذا كان Δ > 0، فإن للمعادلة حلين حقيقيين مختلفين.', correctAnswer: 'true', explanation: 'الخاصية: تفسير إشارة المميز.\nالشرح: نعم، هذا هو التعريف. الحلان هما (-b ± √Δ) / 2a.' },
    { id: 'q-10-03-e5', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'إذا كان Δ < 0، فإن للمعادلة حلولاً في IR.', correctAnswer: 'false', explanation: 'الخاصية: تفسير إشارة المميز.\nالشرح: إذا كان المميز سالباً، فإن المعادلة لا تقبل أي حل في مجموعة الأعداد الحقيقية IR.' },
    { id: 'q-10-03-e6', type: QuestionType.NumericInput, difficulty: Difficulty.Easy, text: 'ما هو حل المعادلة x² = 16؟ (أعط الحل الموجب)', correctAnswer: '4', explanation: 'الخاصية: حل معادلة من الشكل x²=k.\nالشرح: الحلان هما √16 و -√16، أي 4 و -4. الحل الموجب هو 4.' },
    { id: 'q-10-03-e7', type: QuestionType.MultipleChoice, difficulty: Difficulty.Easy, text: 'إذا كان Δ = 0، فإن للمعادلة ...', options: ['حل وحيد', 'حلين', 'لا حلول'], correctAnswer: 'حل وحيد', explanation: 'الخاصية: تفسير إشارة المميز.\nالشرح: عندما يكون المميز منعدماً، يوجد حل وحيد (أو حل مزدوج) وهو:\nx = -b / 2a' },
    { id: 'q-10-03-e8', type: QuestionType.TrueFalse, difficulty: Difficulty.Easy, text: 'هل x=1 حل للمتراجحة x² - 1 > 0؟', correctAnswer: 'false', explanation: 'الخاصية: التحقق من الحل.\nالشرح: نعوض x بواحد:\n1² - 1 = 0\nبما أن 0 ليس أكبر قطعاً من 0، فالعبارة خاطئة.' },
    // Medium
    { id: 'q-10-03-m1', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'ما هما حلا المعادلة x² - 5x + 6 = 0؟', options: ['(2,3)', '(-2,-3)', '(1,6)'], correctAnswer: '(2,3)', explanation: 'الخاصية: حل معادلة من الدرجة الثانية.\nالشرح: Δ = (-5)²-4(1)(6) = 25-24=1. الحلان هما x₁=(5-1)/2=2 و x₂=(5+1)/2=3.' },
    { id: 'q-10-03-m2', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'ما هو حل المعادلة 2x² - 8 = 0؟', options: ['(2, -2)', '(4, -4)', '(2, 0)'], correctAnswer: '(2, -2)', explanation: 'الخاصية: حل معادلة.\nالشرح:\n2x² = 8 => x² = 4\nالحلان هما 2 و -2.' },
    { id: 'q-10-03-m3', type: QuestionType.NumericInput, difficulty: Difficulty.Medium, text: 'ما هو الحل المزدوج للمعادلة x² - 6x + 9 = 0؟', correctAnswer: '3', explanation: 'الخاصية: المتطابقة الهامة وحل المعادلات.\nالشرح: المعادلة تكتب على شكل (x-3)² = 0. إذن الحل الوحيد هو x=3. (المميز Δ=0).' },
    { id: 'q-10-03-m4', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'مجموع جذري المعادلة ax²+bx+c=0 هو:', options: ['-b/a', 'c/a', '-Δ/a'], correctAnswer: '-b/a', explanation: 'الخاصية: علاقات فيتا (مجموع الجذرين).\nالشرح: هذه صيغة معروفة لمجموع جذري معادلة من الدرجة الثانية.' },
    { id: 'q-10-03-m5', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'إشارة حدودية من الدرجة الثانية تكون ... بين الجذرين.', options: ['نفس إشارة a', 'عكس إشارة a', 'دائماً موجبة'], correctAnswer: 'عكس إشارة a', explanation: 'الخاصية: إشارة حدودية من الدرجة الثانية.\nالشرح: عندما يكون للمعادلة جذران، فإن إشارة الحدودية تكون عكس إشارة المعامل a بين الجذرين، ونفس إشارة a خارجهما.' },
    { id: 'q-10-03-m6', type: QuestionType.MultipleChoice, difficulty: Difficulty.Medium, text: 'ما هو حل المتراجحة x² + 1 > 0؟', options: ['IR', 'لا يوجد حل', '] -1,1['], correctAnswer: 'IR', explanation: 'الخاصية: حل المتراجحات.\nالشرح: x² هو دائماً عدد موجب أو يساوي صفر. بإضافة 1، يصبح التعبير x²+1 دائماً أكبر من أو يساوي 1، وبالتالي هو دائماً موجب قطعاً. الحل هو مجموعة الأعداد الحقيقية IR.' },
    // Hard
    { id: 'q-10-03-h1', type: QuestionType.MultipleChoice, difficulty: Difficulty.Hard, text: 'حل المتراجحة x² - x - 2 ≤ 0.', options: ['[-1,2]', ']-∞,-1] U [2,+∞[', '[-2,1]'], correctAnswer: '[-1,2]', explanation: 'الخاصية: حل متراجحة من الدرجة الثانية.\nالشرح: 1. نحل المعادلة x² - x - 2 = 0. Δ=9. الجذران هما -1 و 2. 2. إشارة الحدودية تكون عكس إشارة a (موجبة) بين الجذرين. 3. بما أننا نريدها أصغر من أو تساوي صفر، نأخذ المجال المغلق بين الجذرين: [-1, 2].' },
    { id: 'q-10-03-h2', type: QuestionType.NumericInput, difficulty: Difficulty.Hard, text: 'مستطيل مساحته 24 سم² ومحيطه 20 سم. ما هو طوله؟', correctAnswer: '6', explanation: 'الخاصية: حل المسائل بالمعادلات.\nالشرح: ليكن L الطول و w العرض.\n2(L+w)=20 => L+w=10\nو Lw=24. نبحث عن عددين مجموعهما 10 وجداؤهما 24. هما 6 و 4. الطول هو الأكبر، إذن 6.' },
    // FIX: Completed the malformed question object and added missing questions.
    {
      id: 'q-10-03-h3',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'ما هي قيم m التي تجعل للمعادلة x² - 2x + m = 0 حلين حقيقيين مختلفين؟',
      options: ['m < 1', 'm = 1', 'm > 1'],
      correctAnswer: 'm < 1',
      explanation: 'الخاصية: إشارة المميز.\nالشرح: لكي يكون للمعادلة حلان حقيقيان مختلفان، يجب أن يكون المميز Δ موجباً قطعاً. Δ = b²-4ac = (-2)²-4(1)(m) = 4-4m. نحل المتراجحة 4-4m > 0 => 4 > 4m => 1 > m.'
    },
    {
      id: 'q-10-03-h4',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'ما هي المعادلة من الدرجة الثانية التي جذراها 2 و -3؟',
      options: ['x² + x - 6 = 0', 'x² - x - 6 = 0', 'x² + x + 6 = 0'],
      correctAnswer: 'x² + x - 6 = 0',
      explanation: 'الخاصية: تكوين معادلة من جذورها.\nالشرح: المعادلة تكتب على شكل x² - (مجموع الجذرين)x + (جداء الجذرين) = 0. مجموع الجذرين = 2 + (-3) = -1. جداء الجذرين = 2 × (-3) = -6. إذن المعادلة هي x² - (-1)x + (-6) = 0، أي x² + x - 6 = 0.'
    },
    {
      id: 'q-10-03-h5',
      type: QuestionType.MultipleChoice,
      difficulty: Difficulty.Hard,
      text: 'حل المتراجحة -x² + 5x - 4 ≥ 0.',
      options: ['[1,4]', ']-∞,1] U [4,+∞[', '[-4,-1]'],
      correctAnswer: '[1,4]',
      explanation: 'الخاصية: حل متراجحة من الدرجة الثانية.\nالشرح: 1. نحل المعادلة -x² + 5x - 4 = 0. الجذران هما 1 و 4. 2. إشارة الحدودية تكون نفس إشارة a (سالبة) خارج الجذرين، وعكس إشارة a (موجبة) بين الجذرين. 3. بما أننا نريدها أكبر من أو تساوي صفر، نأخذ المجال المغلق بين الجذرين: [1, 4].'
    },
    {
      id: 'q-10-03-h6',
      type: QuestionType.NumericInput,
      difficulty: Difficulty.Hard,
      text: 'مجموع مربعي عددين صحيحين موجبين متتاليين هو 25. ما هو العدد الأصغر؟',
      correctAnswer: '3',
      explanation: 'الخاصية: حل المسائل بالمعادلات.\nالشرح: ليكن العددان x و x+1. المعادلة هي x² + (x+1)² = 25. بعد النشر والتبسيط، نحصل على 2x² + 2x - 24 = 0، أو x² + x - 12 = 0. الحلان هما 3 و -4. بما أن العدد موجب، فالحل هو 3. العددان هما 3 و 4، والأصغر هو 3.'
    }
  ]
};
