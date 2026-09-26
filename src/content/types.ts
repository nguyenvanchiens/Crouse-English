export type Level = "A1" | "A2" | "B1" | "B2" | "C1";
export type PlacementLevel = Level;
export type Goal = "phat-am" | "lo-trinh" | "ielts" | "toeic" | "tre-em";

export interface VocabWord {
  word: string;
  ipa: string;
  meaning: string;
  example: string;
  syllables: string[];
  /** index of the stressed syllable in `syllables` */
  stress: number;
  tip?: string;
}

export interface MultipleChoiceExercise {
  kind: "multiple-choice";
  id: string;
  prompt: string;
  options: string[];
  answer: number;
  explain?: string;
}
export interface FillBlankExercise {
  kind: "fill-blank";
  id: string;
  /** contains exactly one "___" */
  prompt: string;
  answers: string[];
  explain?: string;
}
export interface ReorderExercise {
  kind: "reorder";
  id: string;
  prompt: string;
  /** words in the correct order */
  words: string[];
  explain?: string;
}
export interface ListenChooseExercise {
  kind: "listen-choose";
  id: string;
  /** a question about what was heard (comprehension); without it the learner picks what the audio means */
  question?: string;
  audioText: string;
  options: string[];
  answer: number;
  explain?: string;
}
/** Error correction: the learner rewrites a sentence that contains one typical mistake. */
export interface ErrorCorrectionExercise {
  kind: "correct";
  id: string;
  /** the sentence with the mistake */
  wrong: string;
  /** every accepted corrected sentence; the first one is shown as the answer */
  answers: string[];
  explain?: string;
}
export type Exercise =
  | MultipleChoiceExercise
  | FillBlankExercise
  | ReorderExercise
  | ListenChooseExercise
  | ErrorCorrectionExercise;

export type LectureBlock =
  /** `body` may contain **bold** markers */
  | { kind: "text"; body: string }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "example"; en: string; vi: string; note?: string }
  | { kind: "tip"; body: string }
  | { kind: "mistake"; wrong: string; right: string; why: string }
  /** a veteran teacher's advice from years in the classroom; may contain **bold** */
  | { kind: "teacher"; body: string }
  /** "Ghi nhớ": the lesson's key points, closing the lecture; items may contain **bold** */
  | { kind: "summary"; points: string[] };

export interface LectureStep { type: "lecture"; title: string; blocks: LectureBlock[] }
export interface DialogueLine { speaker: "A" | "B"; en: string; vi: string }
/** A real-life conversation that uses the lesson's language; can be role-played. */
export interface DialogueStep {
  type: "dialogue";
  title: string;
  /** the situation, in Vietnamese */
  context: string;
  roles: { A: string; B: string };
  lines: DialogueLine[];
  /** comprehension check after the dialogue */
  questions?: Exercise[];
}
/** A short text to read, with comprehension questions. */
export interface ReadingStep {
  type: "reading";
  title: string;
  /** English paragraphs of the text */
  paragraphs: string[];
  /** harder words of the text, glossed in Vietnamese */
  glossary: { word: string; meaning: string }[];
  questions: Exercise[];
}
/** A real-world production task: the learner writes, then compares with a model and self-checks. */
export interface TaskStep {
  type: "task";
  /** what to do, in Vietnamese */
  prompt: string;
  hints: string[];
  /** model answer in English */
  model: string;
  /** self-assessment criteria, in Vietnamese */
  checklist: string[];
  /** minimum words before the model answer can be revealed */
  minWords: number;
}
export interface VideoStep { type: "video"; youtubeId: string; title: string }
export interface VocabStep { type: "vocab"; words: VocabWord[] }
export interface ExerciseStep { type: "exercise"; items: Exercise[] }
/** Open speaking: the learner answers a question aloud in their own words. */
export interface FreeSpeaking {
  /** English question, read aloud by the app */
  question: string;
  /** what to talk about, in Vietnamese */
  prompt: string;
  /** a sample spoken answer in English */
  model: string;
}
export interface SpeakingStep {
  type: "speaking";
  sentences: { text: string; meaningVi: string }[];
  free?: FreeSpeaking;
}
export type Step = LectureStep | VideoStep | VocabStep | DialogueStep | ReadingStep | ExerciseStep | SpeakingStep | TaskStep;

/**
 * Outside material that illustrates a lesson, shown with its lecture: a YouTube video played on the page,
 * or a page from a trusted source opened in a new tab. Every entry was checked to exist and to teach the
 * lesson's point; a lesson without a good match has none. Vietnamese explanations come first, English when
 * no Vietnamese one is good enough.
 */
export type LessonMedia =
  | { kind: "youtube"; youtubeId: string; title: string; source: string; minutes: number; lang: "vi" | "en"; note: string }
  | { kind: "link"; url: string; title: string; source: string; lang: "vi" | "en"; note: string };

export interface Lesson {
  slug: string;
  title: string;
  minutes: number;
  media?: LessonMedia;
  /** generated chapter review: a single exercise step drawn from the chapter's lessons */
  review?: boolean;
  /** generated end-of-course test; the certificate needs FINAL_PASS on it */
  final?: boolean;
  steps: Step[];
}
export interface Module { id: string; title: string; lessons: Lesson[] }

export interface Course {
  slug: string;
  title: string;
  level: Level;
  goal: Goal;
  summary: string;
  outcomes: string[];
  audience: string[];
  teacher: { name: string; bio: string; initials: string };
  faqs: { q: string; a: string }[];
  status: "open" | "soon";
  modules: Module[];
  /** items written only for the end-of-course test, never shown in a lesson: FINAL_PER_CHAPTER per chapter */
  finalTest?: Exercise[];
  /** extra vocabulary by topic, learned through the spaced-repetition review rather than in lessons */
  wordBank?: WordTopic[];
  /** what to do outside the course to actually reach the level */
  selfStudy?: SelfStudyPlan;
}

export interface WordTopic {
  /** unique within the course, kebab-case */
  id: string;
  /** Vietnamese topic name */
  title: string;
  words: VocabWord[];
}

export interface StudyResource {
  name: string;
  url: string;
  /** what it is and how to use it, in Vietnamese */
  how: string;
  kind: "listening" | "reading" | "speaking" | "writing" | "vocab";
}

export interface SelfStudyPlan {
  /** suggested hours per week outside the lessons */
  weeklyHours: number;
  /** a typical week, in Vietnamese */
  routine: string[];
  resources: StudyResource[];
}

export interface PlacementQuestion {
  id: string;
  level: PlacementLevel;
  skill: "vocab" | "grammar" | "listening" | "reading";
  /** reading questions: the short text the question is about */
  passage?: string;
  prompt: string;
  audioText?: string;
  options: string[];
  answer: number;
}
