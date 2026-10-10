/**
 * English for the owner's job (a programmer), learned in 20-hour sprints after Josh Kaufman's "The first 20
 * hours" (TEDxCSU): deconstruct the skill, learn just enough to self-correct, remove the barriers to practice,
 * and commit to 20 hours of focused practice. One sprint at a time, in the order the job needs them; each
 * session replaces that weekday's self-study, so the day stays about two hours.
 *
 * Every link was loaded live on 2026-10-10 (HTTP 200, content read); both podcasts publish transcripts and
 * had episodes in September–October 2026.
 */
export interface SprintLink { href: string; label: string }
export interface SprintSession { title: string; steps: string[] }
export interface WorkSprint {
  id: string;
  title: string;
  /** what the learner can do after 20 hours */
  goal: string;
  /** sessions taken in turn, one a day */
  sessions: SprintSession[];
  links: SprintLink[];
}

export const SPRINT_HOURS = 20;
export const SPRINT_MINUTES = 45;
export const SESSIONS_PER_SPRINT = Math.ceil((SPRINT_HOURS * 60) / SPRINT_MINUTES);

/** Kaufman's third step: take the friction out before starting */
export const SPRINT_START = "Trước khi bắt đầu: để điện thoại ở phòng khác, tắt thông báo, mở sẵn tài liệu và một tab AI để hỏi. Hẹn giờ 45 phút.";
export const SPRINT_END = "Xong thì tích việc này: lộ trình cộng 45 phút vào 20 giờ của đợt. Những giờ đầu thấy chậm và khó là bình thường, cứ luyện đủ giờ.";

const MDN = { href: "https://developer.mozilla.org/en-US/docs/Web", label: "MDN Web Docs" };
const GITHUB_TRENDING = { href: "https://github.com/trending", label: "GitHub Trending" };
const COMMIT = { href: "https://cbea.ms/git-commit/", label: "How to Write a Git Commit Message" };
const TECH_WRITING = { href: "https://developers.google.com/tech-writing/one", label: "Google Technical Writing One" };
const SPEAK = { href: "https://speakandimprove.com/", label: "Speak & Improve" };
const CHANGELOG = { href: "https://changelog.com/podcast", label: "The Changelog (có bản ghi lời)" };
const SO_PODCAST = { href: "https://stackoverflow.blog/podcast/", label: "Stack Overflow Podcast" };
const GOOGLE_DEV = { href: "https://www.youtube.com/@GoogleDevelopers", label: "Google for Developers (YouTube)" };

export const WORK_SPRINTS: WorkSprint[] = [
  {
    id: "read-docs",
    title: "Đọc tài liệu kỹ thuật",
    goal: "Đọc hiểu một trang tài liệu chính thức hoặc một GitHub issue mà không phải dịch cả bài.",
    links: [MDN, GITHUB_TRENDING],
    sessions: [
      {
        title: "một mục tài liệu chính thức",
        steps: [
          "Mở tài liệu chính thức của công nghệ bạn đang dùng ở công ty (hoặc MDN), chọn một mục bạn cần cho việc đang làm.",
          "Đọc lướt các tiêu đề, đoán mục này nói gì trước khi đọc kỹ.",
          "Tách 3 câu dài nhất theo 4 bước (động từ chính, chủ ngữ, dạng động từ, từ nối), viết nghĩa ra giấy.",
          "Tóm tắt mục đó bằng 3 câu tiếng Anh, nhờ AI sửa.",
          "Thêm 5 thuật ngữ hoặc cụm từ mới vào Từ của tôi (trang Ôn từ vựng).",
        ],
      },
      {
        title: "một GitHub issue",
        steps: [
          "Mở một issue đã đóng của thư viện bạn dùng (hoặc một repo trên GitHub Trending), đọc từ đầu đến cuối luồng thảo luận.",
          "Trả lời bằng tiếng Anh: lỗi là gì, nguyên nhân là gì, sửa thế nào.",
          "Gạch dưới các cụm hay gặp: steps to reproduce, expected behavior, workaround, regression, fixed in…",
          "Tách 2 câu khó nhất theo 4 bước.",
          "Thêm 5 cụm từ mới vào Từ của tôi.",
        ],
      },
      {
        title: "release notes và thông báo lỗi",
        steps: [
          "Mở release notes (changelog) bản mới nhất của một thư viện bạn dùng.",
          "Chọn 3 thay đổi, viết lại mỗi thay đổi bằng một câu tiếng Anh của bạn.",
          "Chép 3 thông báo lỗi bạn hay gặp khi làm việc, dịch và giải thích nguyên nhân bằng tiếng Anh.",
          "Thêm 5 từ mới vào Từ của tôi.",
        ],
      },
      {
        title: "một bài hỏi đáp kỹ thuật",
        steps: [
          "Tìm một câu hỏi trên Stack Overflow đúng vấn đề bạn từng gặp, đọc câu hỏi và câu trả lời được chấp nhận.",
          "Nói to bằng tiếng Anh trong 1 phút: câu hỏi là gì, câu trả lời giải quyết thế nào.",
          "Tách 2 câu dài trong câu trả lời theo 4 bước.",
          "Thêm 5 cụm từ mới vào Từ của tôi.",
        ],
      },
    ],
  },
  {
    id: "write-work",
    title: "Viết trong công việc: commit, PR, ticket, tin nhắn, email",
    goal: "Viết commit, mô tả PR, báo lỗi và tin nhắn công việc ngắn gọn, đúng và lịch sự.",
    links: [COMMIT, TECH_WRITING],
    sessions: [
      {
        title: "commit message",
        steps: [
          "Đọc 7 quy tắc trong bài How to Write a Git Commit Message (lần đầu đọc kỹ, các lần sau chỉ xem lại).",
          "Viết lại bằng tiếng Anh 5 commit gần nhất của bạn theo đúng quy tắc: dòng đầu là câu mệnh lệnh, dưới 50 ký tự.",
          "Nhờ AI sửa, chép các lỗi lặp lại vào sổ lỗi.",
        ],
      },
      {
        title: "mô tả pull request",
        steps: [
          "Chọn một PR gần đây của bạn, viết mô tả tiếng Anh theo 3 phần: Summary, Changes, How to test.",
          "Viết thêm 2 câu bình luận review lịch sự cho code người khác (gợi ý sửa, hỏi lý do).",
          "Nhờ AI sửa và giải thích từng lỗi, chép lỗi vào sổ.",
        ],
      },
      {
        title: "báo lỗi (bug ticket)",
        steps: [
          "Viết một ticket báo lỗi bằng tiếng Anh cho một lỗi bạn từng gặp: Title, Steps to reproduce, Expected result, Actual result, Environment.",
          "Viết lại tiêu đề 3 lần, mỗi lần ngắn và rõ hơn.",
          "Nhờ AI sửa, chép lỗi vào sổ.",
        ],
      },
      {
        title: "tin nhắn Slack/Teams",
        steps: [
          "Viết 4 tin nhắn tiếng Anh: báo tiến độ, nhờ giúp một vấn đề, xin thêm thời gian, từ chối lịch sự một yêu cầu.",
          "Mỗi tin không quá 3 câu, có đủ bối cảnh để người đọc không phải hỏi lại.",
          "Nhờ AI sửa cho tự nhiên hơn, ghi lại các cụm hay dùng.",
        ],
      },
      {
        title: "email công việc",
        steps: [
          "Viết một email tiếng Anh khoảng 100 từ: gửi cập nhật dự án hoặc hỏi lại một yêu cầu chưa rõ.",
          "Kiểm tra: tiêu đề rõ, câu đầu nói ngay mục đích, kết thúc bằng việc cần người nhận làm.",
          "Nhờ AI sửa, chép lỗi vào sổ.",
        ],
      },
      {
        title: "một bài của Google Technical Writing One",
        steps: [
          "Làm bài tiếp theo của khóa Technical Writing One (miễn phí, của Google), gồm cả phần bài tập.",
          "Áp dụng ngay: viết lại một đoạn README hoặc tài liệu của dự án bạn theo điều vừa học.",
          "Ghi lại 3 quy tắc viết bạn sẽ dùng từ nay.",
        ],
      },
    ],
  },
  {
    id: "speak-work",
    title: "Nói trong công việc: họp daily, giải thích code, giới thiệu bản thân",
    goal: "Báo cáo daily, giải thích một đoạn code và giới thiệu bản thân, dự án trôi chảy trong 1–2 phút.",
    links: [SPEAK],
    sessions: [
      {
        title: "báo cáo họp daily",
        steps: [
          "Viết dàn ý 3 dòng: Yesterday I…, Today I'm going to…, Blockers: …",
          "Nói không nhìn dàn ý trong 1 phút, ghi âm. Nghe lại, sửa chỗ vấp.",
          "Nói lại 2 lần nữa, mỗi lần trôi chảy hơn.",
          "Nhờ AI kiểm tra bản ghi lời (hoặc bạn tự chép lại) và sửa ngữ pháp.",
        ],
      },
      {
        title: "giải thích một đoạn code",
        steps: [
          "Chọn một hàm bạn viết gần đây. Nói trong 2 phút bằng tiếng Anh: hàm làm gì, vì sao viết như vậy, có điểm gì cần lưu ý.",
          "Ghi âm, nghe lại, ghi ra 3 chỗ bạn không biết nói thế nào, hỏi AI cách nói đúng.",
          "Nói lại toàn bộ một lần nữa, dùng các cách nói vừa học.",
        ],
      },
      {
        title: "giới thiệu bản thân và dự án",
        steps: [
          "Chuẩn bị 2 phút: bạn là ai, làm vị trí gì, dự án đang làm giải quyết vấn đề gì, bạn phụ trách phần nào.",
          "Nói và ghi âm 3 lần, lần sau ít nhìn ghi chú hơn lần trước.",
          "Nhờ AI đóng vai người phỏng vấn, hỏi tiếp 3 câu về dự án; trả lời bằng lời nói.",
        ],
      },
      {
        title: "câu dùng trong cuộc họp",
        steps: [
          "Học 8 cụm: xin nhắc lại, hỏi cho rõ, đồng ý, không đồng ý lịch sự, đề xuất, xin thời gian suy nghĩ, tóm tắt lại, chốt việc.",
          "Nhờ AI đóng vai đồng nghiệp trong một cuộc họp lập kế hoạch sprint; bạn nói (dùng nhận diện giọng nói), cố dùng hết 8 cụm.",
          "Ghi lại các cụm bạn chưa dùng được, mai dùng lại.",
        ],
      },
      {
        title: "một bài nói trên Speak & Improve",
        steps: [
          "Làm một bài luyện nói trên Speak & Improve, chọn chủ đề gần với công việc nếu có.",
          "Nghe lại câu yếu nhất, nói lại cho đến khi trôi chảy.",
          "Ghi điểm CEFR vào sổ để theo dõi tiến bộ.",
        ],
      },
    ],
  },
  {
    id: "listen-work",
    title: "Nghe trong công việc: podcast, talk kỹ thuật, cuộc họp",
    goal: "Nghe hiểu ý chính của một cuộc trao đổi kỹ thuật bằng tiếng Anh ở tốc độ thật.",
    links: [CHANGELOG, SO_PODCAST, GOOGLE_DEV],
    sessions: [
      {
        title: "một đoạn podcast có bản ghi lời",
        steps: [
          "Chọn một tập The Changelog về chủ đề bạn quan tâm, nghe 10 phút đầu không nhìn chữ, ghi ý chính.",
          "Nghe lại đoạn đó với bản ghi lời, gạch dưới chỗ chưa nghe ra.",
          "Chọn 5 câu, nghe từng câu rồi nói nhại lại (shadowing) cho đến khi theo kịp.",
          "Thêm 5 cụm từ mới vào Từ của tôi.",
        ],
      },
      {
        title: "một bài talk kỹ thuật",
        steps: [
          "Xem một video talk ngắn trên kênh Google for Developers với phụ đề tiếng Anh.",
          "Tóm tắt nội dung thành tiếng trong 1 phút, ghi âm.",
          "Xem lại không phụ đề một đoạn 3 phút, đếm xem hiểu được bao nhiêu.",
        ],
      },
      {
        title: "chép chính tả 2 phút",
        steps: [
          "Chọn 2 phút trong một tập Stack Overflow Podcast có bản ghi lời.",
          "Nghe từng câu và chép lại từng chữ, nghe lại tối đa 3 lần mỗi câu.",
          "So với bản ghi lời, đánh dấu các từ bị nuốt âm, nối âm mà bạn nghe sai.",
          "Đọc to đoạn đó theo đúng nhịp của người nói.",
        ],
      },
    ],
  },
];
