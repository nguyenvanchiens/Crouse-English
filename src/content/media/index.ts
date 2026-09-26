import type { LessonMedia } from "../types";
import { MEDIA_PHAT_AM_IPA } from "./phat-am-ipa";
import { MEDIA_TIENG_ANH_A1 } from "./tieng-anh-a1";
import { MEDIA_TIENG_ANH_A2 } from "./tieng-anh-a2";
import { MEDIA_TIENG_ANH_B1 } from "./tieng-anh-b1";
import { MEDIA_TIENG_ANH_B2 } from "./tieng-anh-b2";
import { MEDIA_TIENG_ANH_C1 } from "./tieng-anh-c1";

/** Lesson videos and links, by course slug then lesson slug. */
export const LESSON_MEDIA: Record<string, Record<string, LessonMedia>> = {
  "phat-am-ipa": MEDIA_PHAT_AM_IPA,
  "tieng-anh-a1": MEDIA_TIENG_ANH_A1,
  "tieng-anh-a2": MEDIA_TIENG_ANH_A2,
  "tieng-anh-b1": MEDIA_TIENG_ANH_B1,
  "tieng-anh-b2": MEDIA_TIENG_ANH_B2,
  "tieng-anh-c1": MEDIA_TIENG_ANH_C1,
};
