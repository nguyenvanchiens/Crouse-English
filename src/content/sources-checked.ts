/**
 * Live-checked 2026-10-04 with Playwright (each URL loaded, HTTP 200, real content read).
 *
 * Network note: from the checking machine every www.bbc.co.uk / www.bbc.com URL
 * failed with ERR_CONNECTION_RESET (BBC Learning English, BBC Future, BBC Sounds).
 * BBC Learning English loaded fine on the BBC's own mirror host feeds.bbci.co.uk,
 * so those URLs are listed below. BBC Radio 4 podcasts were confirmed via Apple Podcasts.
 */
export const SOURCES_CHECKED = {
  checkedOn: "2026-10-04",

  exams: {
    A2: {
      exam: "A2 Key",
      papers: [
        { name: "Reading and Writing", minutes: 60, parts: 7 },
        { name: "Listening", minutes: 30, parts: 5, note: "includes 6 minutes' transfer time" },
        { name: "Speaking", minutes: 10, parts: 2, note: "8–10 min per pair; 13–15 min per group of three" },
      ],
      writingGenres: [
        "Part 6: short email or note (25+ words)",
        "Part 7: short story from three pictures (35+ words)",
      ],
      speaking:
        "Paired (face to face with one or two other candidates and two examiners); 8–10 min per pair, 13–15 min per group of three; 2 parts.",
      note: "A2 Key paper-based exam withdrawn after December 2026; still available as a digital exam.",
      source: "https://www.cambridgeenglish.org/exams-and-tests/qualifications/key/format/",
    },
    B1: {
      exam: "B1 Preliminary",
      papers: [
        { name: "Reading", minutes: 45, parts: 6 },
        { name: "Writing", minutes: 45, parts: 2 },
        { name: "Listening", minutes: 30, parts: 4, note: "includes 6 minutes' transfer time" },
        { name: "Speaking", minutes: 12, parts: 4, note: "10–12 min per pair; 15–17 min per group of three" },
      ],
      writingGenres: [
        "Part 1: email (about 100 words), answering an email and notes",
        "Part 2: choice of article or story (about 100 words)",
      ],
      speaking:
        "Paired (with one or two other candidates and two examiners); 10–12 min per pair, 15–17 min per group of three; 4 parts (interview, photo description, discussion, general conversation).",
      source: "https://www.cambridgeenglish.org/exams-and-tests/qualifications/preliminary/format/",
    },
    B2: {
      exam: "B2 First",
      papers: [
        { name: "Reading and Use of English", minutes: 75, parts: 7 },
        { name: "Writing", minutes: 80, parts: 2 },
        { name: "Listening", minutes: 40, parts: 4, note: "about 40 minutes" },
        { name: "Speaking", minutes: 14, parts: 4, note: "14 min per pair; 20 min per group of three" },
      ],
      writingGenres: [
        "Part 1 (compulsory): essay, 140–190 words, giving an opinion using two given ideas plus one's own",
        "Part 2 (choose one): article, email / letter, review, or report (report is B2 First only; story is B2 First for Schools only), 140–190 words",
      ],
      speaking:
        "Paired (with one or two other candidates and two examiners); 14 min per pair, 20 min per group of three; 4 parts.",
      source: "https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/format/",
    },
    C1: {
      exam: "C1 Advanced",
      papers: [
        { name: "Reading and Use of English", minutes: 90, parts: 8 },
        { name: "Writing", minutes: 90, parts: 2 },
        { name: "Listening", minutes: 40, parts: 4, note: "about 40 minutes" },
        { name: "Speaking", minutes: 15, parts: 4, note: "15 min per pair; 23 min per group of three" },
      ],
      writingGenres: [
        "Part 1 (compulsory): essay, 220–260 words, based on points in a text",
        "Part 2 (choose one of three): letter / email, proposal, report, or review, 220–260 words",
      ],
      speaking:
        "Paired (usually face to face with one or two other candidates and two examiners); 15 min per pair, 23 min per group of three; 4 parts.",
      source: "https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/format/",
    },
  },

  reading: [
    {
      level: "A2",
      name: "British Council LearnEnglish – A2 reading",
      url: "https://learnenglish.britishcouncil.org/free-resources/reading/a2",
      free: true,
      use: "Short everyday texts (emails, notices, messages) with a preparation task and two comprehension tasks each.",
    },
    {
      level: "B1",
      name: "British Council LearnEnglish – B1 reading",
      url: "https://learnenglish.britishcouncil.org/free-resources/reading/b1",
      free: true,
      use: "Articles, travel guides, adverts and reviews with comprehension tasks; one lesson per study session.",
    },
    {
      level: "B2",
      name: "British Council LearnEnglish – B2 reading",
      url: "https://learnenglish.britishcouncil.org/free-resources/reading/b2",
      free: true,
      use: "Longer articles, reports and short stories where you judge the writer's opinion.",
    },
    {
      level: "C1",
      name: "British Council LearnEnglish – C1 reading",
      url: "https://learnenglish.britishcouncil.org/free-resources/reading/c1",
      free: true,
      use: "Long, complex texts (specialised articles, biographies) with exam-style tasks.",
    },
    {
      level: "A2–B1 / B2–C1",
      name: "British Council LearnEnglish – Story zone",
      url: "https://learnenglish.britishcouncil.org/free-resources/general/story-zone",
      free: true,
      use: "Short stories written for learners in two bands (A2/B1 and B2/C1) with exercises; read one a week for fluency.",
    },
    {
      level: "B1–B2",
      name: "British Council LearnEnglish – Magazine zone",
      url: "https://learnenglish.britishcouncil.org/free-resources/general/magazine-zone",
      free: true,
      use: "Intermediate magazine articles on culture, society and lifestyle, designed for extensive reading.",
    },
    {
      level: "A2–B1",
      name: "News in Levels",
      url: "https://www.newsinlevels.com/",
      free: true,
      use: "The same news story in Level 1, 2 and 3, updated twice a day; read your level then the next one up.",
    },
    {
      level: "A2–C1",
      name: "Breaking News English",
      url: "https://breakingnewsenglish.com/",
      free: true,
      use: "3,600+ free news lessons in 7 levels (0–6), new twice a week; levels 0–3 for A2–B1, 4–6 for B2+.",
    },
    {
      level: "A2–B2",
      name: "VOA Learning English – American Stories (archive)",
      url: "https://learningenglish.voanews.com/z/1581",
      free: true,
      use: "Classic American short stories read slowly with text; archive only – newest episode is dated 14 March 2025.",
    },
    {
      level: "B2–C1",
      name: "The Guardian – The long read",
      url: "https://www.theguardian.com/news/series/the-long-read",
      free: true,
      use: "Modern long-form essays and reporting (a sampled article was ~4,800 words, no paywall); some pieces also have a podcast version.",
    },
    {
      level: "C1",
      name: "Aeon – Essays",
      url: "https://aeon.co/essays",
      free: true,
      use: "Long essays on philosophy, science, psychology and society; Aeon states its content is completely free.",
    },
    {
      level: "B2–C1",
      name: "The Conversation (Global)",
      url: "https://theconversation.com/global",
      free: true,
      use: "Research-based articles by academics, free to read under Creative Commons; good for academic vocabulary.",
    },
  ],

  listening: [
    {
      level: "A2",
      name: "BBC Learning English – Real Easy English",
      url: "https://feeds.bbci.co.uk/learningenglish/english/features/real-easy-english",
      free: true,
      use: "Weekly easy-level conversations with words explained (latest episode 2 Oct 2026).",
    },
    {
      level: "A1–C1",
      name: "British Council LearnEnglish – Listening",
      url: "https://learnenglish.britishcouncil.org/free-resources/listening",
      free: true,
      use: "Levelled recordings (A1–C1) with interactive exercises; pick your level and do one per session.",
    },
    {
      level: "B1–B2",
      name: "BBC Learning English – 6 Minute English",
      url: "https://feeds.bbci.co.uk/learningenglish/english/features/6-minute-english",
      free: true,
      use: "Weekly 6-minute intermediate discussions with key vocabulary and transcript (latest episode 1 Oct 2026).",
    },
    {
      level: "B1–B2",
      name: "BBC Learning English – The English We Speak",
      url: "https://feeds.bbci.co.uk/learningenglish/english/features/the-english-we-speak",
      free: true,
      use: "Under-3-minute episodes on current idioms and phrases, weekly.",
    },
    {
      level: "B2",
      name: "BBC Learning English – Learning English from the News",
      url: "https://feeds.bbci.co.uk/learningenglish/features/learning-english-from-the-news_2026",
      free: true,
      use: "Upper-intermediate weekly news vocabulary programme (latest 30 Sep 2026); replaces News Review.",
    },
    {
      level: "A2–B2",
      name: "VOA Learning English (archive)",
      url: "https://learningenglish.voanews.com/",
      free: true,
      use: "Slow-speed news and Let's Learn English video course; archive only – 'As It Is' newest item is 12 March 2025.",
    },
    {
      level: "B2–C1",
      name: "TED Talks",
      url: "https://www.ted.com/talks",
      free: true,
      use: "Talks filterable by topic, subtitles and duration; watch with English subtitles, then without.",
    },
    {
      level: "B2–C1",
      name: "TED Podcasts (TED Talks Daily etc.)",
      url: "https://www.ted.com/podcasts",
      free: true,
      use: "Audio-only versions of talks every weekday for commuting.",
    },
    {
      level: "C1",
      name: "BBC Radio 4 – In Our Time (Apple Podcasts)",
      url: "https://podcasts.apple.com/us/podcast/in-our-time/id73330895",
      free: true,
      use: "New episode every Thursday: academics discuss history, science, philosophy and literature; native speed, demanding.",
    },
    {
      level: "B2–C1",
      name: "BBC Radio 4 – All in the Mind (Apple Podcasts)",
      url: "https://podcasts.apple.com/gb/podcast/all-in-the-mind/id643660675",
      free: true,
      use: "Fortnightly ~28-minute psychology and mental-health programme; good C1 listening Part 3/4 style.",
    },
  ],

  speaking: [
    {
      level: "A2–C1",
      name: "Speak & Improve (University of Cambridge)",
      url: "https://speakandimprove.com/",
      free: true,
      use: "Answer speaking prompts and get an automatic CEFR estimate in seconds; retry to improve. Free research project; tests based on Linguaskill Speaking; no target level is stated – it grades any learner on the CEFR scale and says its score is only an estimate.",
      sources: [
        "https://help.writeandimprove.com/en/articles/4412322-how-much-does-speak-improve-cost",
        "https://help.writeandimprove.com/en/articles/4401879-about-speak-improve-a-research-project",
        "https://help.writeandimprove.com/en/articles/4397300-about-your-speak-improve-scores",
      ],
    },
    {
      level: "B1+",
      name: "Tandem",
      url: "https://tandem.net/en",
      free: true,
      use: "Freemium language-exchange app: free sign-up, text/voice/video with a partner who wants your language; Pro tier adds extra tools.",
    },
    {
      level: "B1+",
      name: "HelloTalk",
      url: "https://www.hellotalk.com/",
      free: true,
      use: "Freemium language exchange: free chat, voice, Moments corrections and Voicerooms; VIP raises daily caps.",
      sources: ["https://www.hellotalk.com/en/blog/is-hellotalk-free"],
    },
  ],

  pronunciation: [
    {
      level: "A2–C1",
      name: "BBC Learning English – Pronunciation (Tim's Pronunciation Workshop + The Sounds of English)",
      url: "https://feeds.bbci.co.uk/learningenglish/english/features/pronunciation/",
      free: true,
      use: "The Sounds of English videos for every vowel/consonant (watch, listen, repeat), then Tim's Workshop for connected speech (75 episodes, finished 2017, still online).",
    },
  ],

  wordLists: [
    {
      level: "A1–C1",
      name: "Oxford 3000 and 5000",
      url: "https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000",
      free: true,
      use: "Free to view without signing in; each word shows its CEFR level (A1–B2 for the 3000, B2–C1 for the extra 2000) and can be filtered; learn the words for your next level.",
      sources: [
        "https://www.oxfordlearnersdictionaries.com/about/wordlists/oxford3000-5000",
        "https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf",
      ],
    },
    {
      level: "B2–C1",
      name: "Academic Word List (Coxhead) – Victoria University of Wellington",
      url: "https://www.wgtn.ac.nz/lals/resources/academicwordlist",
      free: true,
      use: "570 academic word families (excluding the most frequent 2,000 words) in sublists; study one sublist at a time for C1 essays and reports.",
      sources: ["https://www.wgtn.ac.nz/lals/resources/academicwordlist/information"],
    },
  ],

  guidedHoursQuote:
    "It takes approximately 200 guided learning hours for a language learner to progress from one level of the Common European Framework of Reference (CEFR) to the next. For example, a candidate who has passed B2 First … might need approximately 200 hours of lessons and supervised study to prepare for the C1 Advanced … However, there are a number of factors that can affect how long it will take to increase your level of English, including: your language learning background; the intensity of your study; your age; the amount of study/exposure outside of lesson times.",
  guidedHoursTable: { A2: "180–200", B1: "350–400", B2: "500–600", C1: "700–800", C2: "1,000–1,200" },
  guidedHoursNote:
    "The hours are cumulative from beginner and 'intended as a guideline only'. The page does not count self-study in the guided hours: they are 'lessons and supervised study', and study outside lessons is listed as a separate factor. Cambridge's Total qualification time page says TQT figures 'include all supervised or direct contact time (guided learning hours) and an estimated amount of independent study time'.",
  guidedHoursSource: "https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours",
  totalQualificationTimeSource: "https://www.cambridgeenglish.org/help/total-qualification-time/",

  /** Added in plan review round 2; each loaded live on 2026-10-04 (HTTP 200, content read). */
  addedRound2: [
    { level: "A2–B1", name: "ELLLO – English Listening Lesson Library Online", url: "https://www.elllo.org/", use: "Short real conversations by level with questions; new lessons in 2026." },
    { level: "B2", name: "TED-Ed lessons", url: "https://ed.ted.com/lessons", use: "Short animated lectures with Think/Dig deeper questions." },
    { level: "C1", name: "Psyche (by Aeon)", url: "https://psyche.co/", use: "Essays and guides; argument analysis and written response." },
    { level: "B2", name: "BBC Learning English homepage (links the current year's Learning English from the News)", url: "https://feeds.bbci.co.uk/learningenglish/english/", use: "Series pages are per year (…_2026); the homepage always links the current one." },
    { level: "all", name: "Write & Improve", url: "https://writeandimprove.com/", use: "'Hundreds of tasks at all levels' with CEFR feedback: writing practice once the free sample sets are used." },
    { level: "all", name: "Speak & Improve", url: "https://speakandimprove.com/", use: "Practise a skill or 'a complete test' with an automatic CEFR grade." },
    { level: "all", name: "Cambridge English – Activities for learners", url: "https://www.cambridgeenglish.org/learning-english/activities-for-learners/", use: "175 short activities by skill and level (A1–A2, B1–B2, C1–C2); not exam papers." },
  ],

  failedOrExcluded: [
    "www.bbc.co.uk and www.bbc.com (Learning English, BBC Future, BBC Sounds): ERR_CONNECTION_RESET from the checking network; BBC Future and BBC Sounds therefore not confirmed.",
    "BBC Learning English News Review: 404 (replaced by Learning English from the News).",
    "BBC Learning English Lingohack: page loads but last episode 25 May 2022 (discontinued).",
    "bbclearningenglish.org: unofficial third-party copy, excluded.",
    "VOA Learning English: loads, but no new content since March 2025.",
  ],
} as const;
