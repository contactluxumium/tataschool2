export enum QuestionType {
  MultipleChoice = 'MCQ',
  NumericInput = 'NUMERIC',
  TrueFalse = 'TF',
}

export enum Difficulty {
    Easy = 'مبتدئ',
    Medium = 'متوسط',
    Hard = 'صعب',
}

export const STUDY_LEVELS = [
  { id: 'level-01', name: 'الأولى ابتدائي' },
  { id: 'level-02', name: 'الثاني ابتدائي' },
  { id: 'level-03', name: 'الثالث ابتدائي' },
  { id: 'level-04', name: 'الرابع ابتدائي' },
  { id: 'level-05', name: 'الخامس ابتدائي' },
  { id: 'level-06', name: 'السادس ابتدائي' },
  { id: 'level-07', name: 'الأولى إعدادي' },
  { id: 'level-08', name: 'الثانية إعدادي' },
  { id: 'level-09', name: 'الثالثة إعدادي' },
  { id: 'level-10', name: 'الجذع المشترك' },
  { id: 'level-11', name: 'الأولى باكالوريا' },
  { id: 'level-12', name: 'الثانية باكالوريا' },
];

export interface Question {
  id: string;
  type: QuestionType;
  difficulty: Difficulty;
  text: string;
  mathExpression?: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface Lesson {
  id: string;
  title: string;
  questions: Question[];
}

export interface Level {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface EducationalContent {
  levels: Level[];
}

export interface LessonResult {
  score: number;
  totalQuestions: number;
  passed: boolean;
  firstAttemptDate?: string;
  lastAttemptDate: string;
  answers: Record<string, string>;
  attempts: number;
  durationInSeconds?: number;
}

export interface StudentProgress {
  [lessonId: string]: LessonResult;
}

export interface Student {
  id: string; // e.g., E202512345678
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  birthYear: number;
  schoolName: string;
  schoolType: 'pioneer' | 'regular';
  password: string; // 8 digits
  studyLevelId: string; // The student's declared grade level
  progressLevelId: string; // The level they've unlocked through progress
  progress: StudentProgress;
}