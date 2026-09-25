export type Level = "A1" | "A2" | "B1" | "B2" | "C1";
export type PlacementLevel = Exclude<Level, "C1">;
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
  audioText: string;
  options: string[];
  answer: number;
  explain?: string;
}
export type Exercise =
  | MultipleChoiceExercise
  | FillBlankExercise
  | ReorderExercise
  | ListenChooseExercise;

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
export interface SpeakingStep {
  type: "speaking";
  sentences: { text: string; meaningVi: string }[];
}
export type Step = LectureStep | VideoStep | VocabStep | DialogueStep | ExerciseStep | SpeakingStep | TaskStep;

export interface Lesson {
  slug: string;
  title: string;
  minutes: number;
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
  durationWeeks: number;
  rating: number;
  reviews: { name: string; role: string; quote: string }[];
  faqs: { q: string; a: string }[];
  status: "open" | "soon";
  modules: Module[];
}

export interface PlacementQuestion {
  id: string;
  level: PlacementLevel;
  skill: "vocab" | "grammar" | "listening";
  prompt: string;
  audioText?: string;
  options: string[];
  answer: number;
}
