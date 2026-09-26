import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "goi-dien-va-hop-truc-tuyen",
  title: "Gọi điện và họp trực tuyến",
  minutes: 35,
  lecture: {
    title: "Tương lai tiếp diễn và lời hỏi gián tiếp lịch sự khi gọi điện, họp video",
    blocks: [
      p("Ngày nay rất nhiều bạn đi làm phải họp qua Zoom, Teams với đối tác nước ngoài. Trên mạng, bạn không có nét mặt, cử chỉ để đỡ lời. Mất tiếng, hình giật, quên bật mic… người Việt thường **im lặng chờ** hoặc nói cộc lốc **Hello? Hello?** Bài này trang bị cho bạn ba thứ: **cụm câu xử lý sự cố khi gọi**, **thì tương lai tiếp diễn** để báo lịch của mình, và **câu hỏi gián tiếp** để hỏi thật lịch sự."),
      table(
        ["Tình huống", "Câu nên dùng"],
        ["Mở đầu cuộc gọi", "Hi, it's Lan from Minh Phat. Is this a good time to talk?"],
        ["Người kia quên bật mic", "I think you're on mute. We can't hear you."],
        ["Tiếng bị ngắt quãng", "Sorry, you're breaking up. Could you repeat that?"],
        ["Nhờ nói to hoặc chậm hơn", "Could you speak up a little? / Could you slow down a bit?"],
        ["Mất một người trong cuộc họp", "I think we've lost Hung. Shall we wait a minute?"],
        ["Báo vào muộn, rời sớm", "I'll be joining late. / I'll have to leave at ten."],
        ["Người cần gặp không có mặt", "Could I leave a message for Ms Pham? / Could you ask her to call me back?"],
        ["Kết thúc cuộc gọi", "I'll send you a quick summary after the call. / Thanks for your time."],
      ),
      ex("Sorry, Mr Brown, you're on mute. Could you unmute yourself?", "Xin lỗi anh Brown, anh đang tắt mic. Anh bật mic lên được không ạ?", "Luôn nói on mute (có giới từ on), giống on hold (đang chờ máy), on the line (đang ở đầu dây)."),
      p("Ở B1, bài **Tương lai tiếp diễn và hoàn thành**, các bạn đã gặp **will be + V-ing**. Hôm nay ta đưa nó vào đúng chỗ người đi làm dùng nhiều nhất: báo lịch của mình trong một cuộc gọi. Thì này có hai công dụng chính: nói việc **đang diễn ra tại một thời điểm trong tương lai**, và nói việc **đã sắp xếp, sẽ diễn ra như một lẽ đương nhiên**. Khi dùng để hỏi, **Will you be + V-ing?** nghe nhẹ nhàng hơn hẳn, vì bạn chỉ hỏi kế hoạch của người ta chứ không ép ai làm gì."),
      table(
        ["Dạng câu", "Cấu trúc", "Ví dụ"],
        ["Khẳng định", "S + will ('ll) be + V-ing", "I'll be joining from the airport."],
        ["Phủ định", "S + won't be + V-ing", "I won't be attending the call tomorrow."],
        ["Nghi vấn", "Will + S + be + V-ing?", "Will you be presenting the figures today?"],
      ),
      ex("At ten tomorrow morning I'll be interviewing a candidate, so I won't be able to join the call.", "Mười giờ sáng mai tôi đang phỏng vấn một ứng viên, nên tôi không vào cuộc gọi được.", "Việc đang diễn ra dở dang tại một thời điểm cụ thể trong tương lai: at ten tomorrow morning."),
      ex("Will you be using the meeting room this afternoon?", "Chiều nay anh có dùng phòng họp không ạ?", "Hỏi kế hoạch một cách tế nhị. So sánh: Will you use the meeting room? nghe giống như đang đề nghị hoặc yêu cầu người ta dùng phòng."),
      mistake("I'll be join the call at ten.", "I'll be joining the call at ten.", "Tiếng Việt không bao giờ biến đổi động từ, nên học trò hay quên đuôi -ing sau be. Công thức luôn là will be + V-ing, thiếu -ing là sai."),
      mistake("You are mute.", "You're on mute.", "Dịch từng chữ “bạn đang tắt tiếng” thành You are mute là một lỗi khá buồn cười: tính từ mute nghĩa là người bị câm. Phải nói on mute: đang ở chế độ tắt tiếng."),
      p("Khi hỏi thông tin trong cuộc gọi, câu hỏi trực tiếp như **When does the meeting start?** không sai, nhưng hơi thẳng. Hãy bọc nó trong một câu mở đầu lịch sự, như các bạn đã học ở B1, bài **Hỏi một cách lịch sự**, và giống trật tự câu tường thuật ở bài trước: **Could you tell me…?**, **Do you know…?**, **I'd like to know…** Điều quan trọng nhất: phần sau cụm mở đầu dùng **trật tự câu kể** (chủ ngữ đứng trước động từ), không còn do/does/did, không đảo trợ động từ. Câu hỏi Có/Không thì dùng **if** hoặc **whether**."),
      ex("Could you tell me what time the webinar finishes?", "Anh có thể cho tôi biết mấy giờ buổi hội thảo trực tuyến kết thúc không?", "Câu trực tiếp là What time does the webinar finish? Khi hỏi gián tiếp, bỏ does và động từ thêm -es theo chủ ngữ."),
      ex("Do you know if the client has received the link?", "Anh có biết khách hàng đã nhận được đường link chưa?"),
      mistake("Could you tell me when does the meeting start?", "Could you tell me when the meeting starts?", "Học trò thuộc lòng công thức “từ để hỏi + does + S + V” rồi bê nguyên vào mọi câu. Trong câu hỏi gián tiếp, phần sau Could you tell me đã là câu kể: S + V, không còn does."),
      tip("Khi nói nhanh, **I'll be** đọc liền thành /aɪl bi/, và nhớ bật rõ âm /t/ cuối trong **mute** /mjuːt/. Nếu đọc thành “miu” thì người nghe dễ nhầm với **mew** (tiếng mèo kêu)."),
      teacher("Khi đứng lớp, tôi hay thấy học trò giỏi ngữ pháp vẫn đứng hình khi mạng chập chờn, chỉ vì chưa có sẵn câu trong miệng. Cách tôi dặn các bạn: viết **năm câu cứu cánh** (You're on mute. You're breaking up. Could you repeat that? I'll be joining late. Could you tell me…?) ra một tờ giấy nhỏ, dán ngay cạnh màn hình máy tính. Trước mỗi cuộc họp, đọc to một lượt. Chỉ sau hai tuần, các câu ấy sẽ tự bật ra đúng lúc, không cần nghĩ."),
      summary(
        "Câu cứu cánh khi gọi: **You're on mute.**, **You're breaking up.**, **Could you repeat that?**, **I think we've lost…** Nói on mute, không nói You are mute.",
        "Tương lai tiếp diễn **will be + V-ing**: việc đang diễn ra tại một lúc trong tương lai, hoặc việc đã sắp xếp sẵn: I'll be joining late.",
        "**Will you be + V-ing?** hỏi kế hoạch một cách tế nhị, không ép người nghe làm gì.",
        "Câu hỏi gián tiếp (**Could you tell me…?**, **Do you know…?**) dùng **trật tự câu kể**, bỏ do/does/did.",
        "Câu hỏi Có/Không trong câu gián tiếp thêm **if / whether**: Do you know if the client has the link?",
      ),
    ],
  },
  words: [
    word("mute", "/mjuːt/", "chế độ tắt tiếng; tắt tiếng", "Please put your microphone on mute when you're not speaking.", "mute", 0, "Bật rõ âm /t/ ở cuối, đừng đọc thành “miu”."),
    word("connection", "/kəˈnek.ʃən/", "đường truyền, kết nối", "My internet connection is quite slow today.", "con|nec|tion", 1),
    word("microphone", "/ˈmaɪ.krə.fəʊn/", "micrô", "Could you check your microphone? We can't hear you.", "mi|cro|phone", 0, "Trọng âm ở âm tiết đầu: MI-cro-phone. Âm đầu đọc là /maɪ/, không đọc là “mi”."),
    word("extension", "/ɪkˈsten.ʃən/", "số máy lẻ", "You can reach me on extension two four five.", "ex|ten|sion", 1),
    word("headset", "/ˈhed.set/", "tai nghe có micrô", "I'm using a headset now, so you should hear me more clearly.", "head|set", 0, "Trọng âm ở âm tiết đầu: HEAD-set. Chữ ea đọc là /e/ như trong bread."),
    word("reschedule", "/ˌriːˈʃed.juːl/", "dời lịch, sắp xếp lại lịch", "Could we reschedule the call for next Tuesday?", "re|sched|ule", 1, "Người Anh thường đọc /ˈʃed.juːl/, người Mỹ đọc /ˈskedʒ.uːl/. Chọn một cách và dùng nhất quán."),
    word("participant", "/pɑːˈtɪs.ɪ.pənt/", "người tham gia", "There are twelve participants in today's video call.", "par|tic|i|pant", 1),
    word("voicemail", "/ˈvɔɪs.meɪl/", "hộp thư thoại, tin nhắn thoại", "I left a voicemail, but she hasn't called me back.", "voice|mail", 0),
  ],
  exercises: [
    mc("b2-n04-1", "Sorry, we can't hear you. I think you're ___.", ["in mute", "on mute", "at mute", "mute"], 1, "Cụm cố định là on mute: đang tắt tiếng. You're mute lại có nghĩa là bạn bị câm."),
    mc("b2-n04-2", "Please don't call me at three o'clock. I ___ with a client then.", ["meet", "will have met", "will be meeting", "am meet"], 2, "Việc đang diễn ra tại một thời điểm trong tương lai (lúc ba giờ) dùng will be + V-ing."),
    fill("b2-n04-3", "Sorry, I'll be ___ the call about ten minutes late. (join)", ["joining"], "Will be + V-ing: sau be phải là động từ thêm -ing."),
    fill("b2-n04-4", "Do you know ___ the client has received the meeting link?", ["if", "whether"], "Câu hỏi gián tiếp dạng Có/Không dùng if hoặc whether, sau đó là trật tự câu kể."),
    reorder("b2-n04-5", "I'll be joining the meeting a bit late.", "Tương lai tiếp diễn dùng để báo trước một việc đã tính sẵn: I'll be joining late."),
    reorder("b2-n04-6", "Could you tell me where the meeting is?", "Sau Could you tell me là trật tự câu kể: where the meeting is, không phải where is the meeting."),
    listen("b2-n04-7", "Sorry, you're breaking up. Could you repeat that?", ["Xin lỗi, tiếng của anh bị ngắt quãng. Anh nhắc lại được không?", "Xin lỗi, anh đang tắt mic. Anh bật lên được không?", "Xin lỗi, anh nói nhanh quá. Anh nói chậm lại được không?"], 0, "Break up khi nói về cuộc gọi nghĩa là tiếng bị rè, đứt quãng do đường truyền kém."),
    listen("b2-n04-8", "Will you be using the meeting room this afternoon?", ["Chiều nay anh đã dùng phòng họp chưa?", "Chiều nay anh dọn giúp phòng họp nhé.", "Anh dùng phòng họp suốt cả buổi chiều à?", "Chiều nay anh có định dùng phòng họp không?"], 3, "Will you be + V-ing? là cách hỏi kế hoạch của người khác một cách tế nhị."),
    correct("b2-n04-9", "Do you know when does the webinar start?", ["Do you know when the webinar starts?"], "Câu hỏi gián tiếp dùng trật tự câu kể: bỏ does, chủ ngữ the webinar đứng trước động từ, và động từ thêm -s theo chủ ngữ số ít."),
    correct("b2-n04-10", "I'll be present the sales figures at the meeting.", ["I'll be presenting the sales figures at the meeting.", "I'll present the sales figures at the meeting."], "Sau will be phải là V-ing: I'll be presenting. Nếu bỏ be thì dùng will + V nguyên mẫu: I'll present."),
  ],
  speaking: [
    say("Sorry, I'll be joining the call a few minutes late.", "Xin lỗi, tôi sẽ vào cuộc gọi muộn vài phút."),
    say("I think you're on mute, so we can't hear you.", "Hình như anh đang tắt mic nên chúng tôi không nghe thấy gì."),
    say("Could you tell me when the next meeting is?", "Anh có thể cho tôi biết cuộc họp tiếp theo là khi nào không?"),
  ],
  freeSpeaking: free(
    "How do you usually prepare for an important online meeting?",
    "Kể bạn chuẩn bị thế nào cho một cuộc họp trực tuyến quan trọng: kiểm tra thiết bị, báo trước lịch của mình bằng will be + V-ing, và hỏi trước những thông tin cần biết bằng câu hỏi gián tiếp.",
    "Before an important online meeting, I always test my headset and microphone about ten minutes early. If I know I'll be joining late, I send the organiser a short message the day before. I also like to ask a few questions in advance, for example, could you tell me who will be attending, or do you know if the client has seen the slides? That way, I won't be wasting anyone's time when the call starts.",
  ),
  dialogue: dialogue(
    "Cuộc gọi video với khách hàng Anh",
    "Chị Lan ở công ty Minh Phát gọi video cho ông Brown, khách hàng ở London, để cập nhật về hàng mẫu. Đường truyền chập chờn, đồng nghiệp Hùng bị rớt khỏi cuộc gọi.",
    { A: "Lan, nhân viên kinh doanh", B: "Mr Brown, khách hàng" },
    A("Hi Mr Brown, it's Lan from Minh Phat. Can you hear me?", "Chào ông Brown, tôi là Lan ở Minh Phát. Ông có nghe thấy tôi không?"),
    B("Hi Lan. Yes, but you're a bit quiet. Could you speak up a little?", "Chào Lan. Có, nhưng tiếng chị hơi nhỏ. Chị nói to hơn một chút được không?"),
    A("Is that better now?", "Bây giờ đã rõ hơn chưa ạ?"),
    B("Much better, thanks. Where's Hung? I can't see him.", "Rõ hơn nhiều rồi, cảm ơn chị. Hùng đâu rồi? Tôi không thấy anh ấy."),
    A("I think we've lost him. He'll be joining us again in a minute.", "Hình như anh ấy bị rớt khỏi cuộc gọi. Một phút nữa anh ấy sẽ vào lại."),
    B("No problem. Could you tell me when the samples will arrive?", "Không sao. Chị có thể cho tôi biết khi nào hàng mẫu đến không?"),
    A("They'll be arriving at your office on Thursday morning.", "Hàng mẫu sẽ đến văn phòng ông vào sáng thứ Năm."),
    B("Great. Do you know if your manager has approved the new design?", "Tốt. Chị có biết quản lý của chị đã duyệt thiết kế mới chưa?"),
    A("She has, and she'll be presenting it to you herself next week.", "Chị ấy duyệt rồi, và tuần sau chị ấy sẽ tự trình bày thiết kế với ông."),
    B("Wonderful. Oh, Hung is back. Hung, I think you're on mute.", "Tuyệt vời. À, Hùng vào lại rồi. Hùng, hình như anh đang tắt mic."),
    A("He's writing in the chat that his microphone isn't working. I'll send you a quick summary after the call.", "Anh ấy đang nhắn trong khung chat là micrô bị hỏng. Tôi sẽ gửi ông bản tóm tắt ngắn sau cuộc gọi."),
    B("That's fine. Will you be sending the price list too?", "Được thôi. Chị có gửi kèm bảng giá không?"),
    A("Yes, I'll attach it to the summary. Thanks for your time, Mr Brown.", "Có ạ, tôi sẽ đính kèm vào bản tóm tắt. Cảm ơn ông đã dành thời gian."),
  ),
  dialogueQuestions: [
    listenQ("b2-n04-d1", "When will the samples arrive at Mr Brown's office?", "Could you tell me when the samples will arrive? They'll be arriving at your office on Thursday morning.", ["Right after the call", "Next week", "On Tuesday afternoon", "On Thursday morning"], 3, "Lan nói: They'll be arriving at your office on Thursday morning. Next week là lúc quản lý của Lan trình bày thiết kế mới."),
    mc("b2-n04-d2", "Why can't Hung speak when he comes back to the call?", ["His internet connection is too slow.", "His microphone isn't working.", "He has to leave for another meeting.", "Mr Brown has asked him to stay quiet."], 1, "Lan giải thích: He's writing in the chat that his microphone isn't working."),
    mc("b2-n04-d3", "What does Lan promise to do after the call?", ["Call Mr Brown again on Thursday", "Present the new design herself", "Send a summary with the price list attached", "Ask her manager to approve the design"], 2, "Lan hứa gửi bản tóm tắt và đính kèm bảng giá: I'll attach it to the summary."),
  ],
  reading: reading({
    title: "Why your video calls feel so tiring",
    text: `When offices closed during the pandemic, many companies moved their meetings online almost overnight. Several years later, the video call is still with us, but a recent survey of two thousand office workers in Asia suggests that we have not learned to use it well. Nearly two thirds of the people questioned said they left online meetings feeling more tired than after a face-to-face discussion.

According to the researchers, the problem is not the technology itself but the way we use it. Participants reported that the first five minutes of a typical call are wasted on the same questions: "Can you hear me?", "Can everyone see my screen?" and "Has everyone got the link?" A further ten per cent of meeting time, they claimed, disappears when someone forgets that they are on mute.

The report offers some simple advice. First, test your microphone and headset before the call, not during it. Second, if you know you will be late, tell the organiser in advance. A short message such as "I'll be joining at ten fifteen" allows the others to start without waiting. Third, the person chairing the meeting should share the agenda beforehand, so that everyone knows what they will be discussing and in what order.

Perhaps the most interesting finding concerns the way people ask questions. Staff who used polite, indirect forms such as "Could you tell me when the figures will be ready?" were rated as more professional by their colleagues than those who asked direct questions. However, the researchers warn that being too indirect can also cause confusion, especially when the speakers do not share a first language. Their recommendation is to be polite but clear: say exactly what you need and by when.

Finally, the authors suggest that not every discussion needs a video call. Before sending an invitation, they say, ask yourself whether an email or a quick phone call would do the job just as well. Your colleagues will probably thank you.`,
    glossary: [
      ["overnight", "chỉ sau một đêm, rất nhanh"],
      ["survey", "cuộc khảo sát"],
      ["in advance", "trước, sớm hơn"],
      ["chair (a meeting)", "chủ trì (cuộc họp)"],
      ["agenda", "chương trình họp"],
      ["confusion", "sự nhầm lẫn, bối rối"],
    ],
    questions: [
      mc("b2-n04-r1", "What is the main point of the article?", ["Video calls should be replaced by emails.", "Many online meetings are tiring because of the way people use them, and a few simple changes can help.", "Workers in Asia prefer face-to-face meetings to video calls.", "New technology will soon solve the problems of online meetings."], 1, "Bài báo nói vấn đề không nằm ở công nghệ mà ở cách dùng (the way we use it), rồi đưa ra lời khuyên. Email chỉ được nhắc ở đoạn cuối như một lựa chọn."),
      mc("b2-n04-r2", "According to the survey, how much meeting time is lost because people forget they are on mute?", ["About five minutes", "Around ten per cent", "Nearly two thirds", "Half of every meeting"], 1, "A further ten per cent of meeting time… disappears when someone forgets that they are on mute. Năm phút đầu là thời gian mất vì hỏi đi hỏi lại chuyện kỹ thuật."),
      fill("b2-n04-r3", "The report advises you to test your microphone and headset ___ the call, not during it.", ["before"], "Câu gốc: test your microphone and headset before the call, not during it."),
      mc("b2-n04-r4", "What can we infer about very indirect questions?", ["They are always the most professional choice.", "They make meetings shorter.", "They are only used by managers.", "They may be hard to understand for people who speak English as a second language."], 3, "Bài viết cảnh báo hỏi quá vòng vo dễ gây nhầm lẫn, especially when the speakers do not share a first language."),
      mc("b2-n04-r5", "What is the writer's purpose in the last paragraph?", ["To encourage readers to think before organising a video call", "To criticise colleagues who send too many emails", "To explain how to make a phone call", "To advertise a new video platform"], 0, "Đoạn cuối khuyên người đọc tự hỏi xem có thật cần họp video không trước khi gửi lời mời."),
    ],
  }),
  task: task({
    prompt: "Ngày mai bạn sẽ vào muộn cuộc họp trực tuyến với khách hàng vì đang trên đường đi công tác về. Viết email khoảng 140–180 từ gửi chị Hoa, người tổ chức cuộc họp: báo trước việc vào muộn và lý do, nói ai sẽ làm gì trong lúc bạn chưa vào, hỏi gián tiếp hai thông tin bạn cần, và nói bạn sẽ làm gì nếu đường truyền kém.",
    hints: [
      "Báo lịch của mình bằng will be + V-ing: I'll be joining… late, because I'll be driving…",
      "Nói việc của đồng nghiệp: My colleague… will be starting / presenting…",
      "Hỏi lịch sự bằng Could you tell me…? hoặc I'd like to know if…, nhớ dùng trật tự câu kể.",
      "Chia email thành ba, bốn đoạn ngắn: vào muộn, việc của đồng nghiệp, câu hỏi, phương án khi mạng yếu.",
    ],
    model: "Hi Hoa,\n\nJust a quick note about tomorrow's video call with the client from Osaka. I'm afraid I'll be joining about fifteen minutes late, because I'll be driving back from a supplier visit in Bac Ninh at that time. I'll stop at a petrol station and join from my laptop as soon as I can.\n\nIn the meantime, my colleague Hung will be starting the meeting. He'll be presenting the first item on the agenda, the delivery schedule, so the client won't have to wait for me. I'll be taking over from him when we reach the new prices.\n\nI have two quick questions. Could you tell me which platform we'll be using, Zoom or Teams? I'd also like to know if the client has received the updated agenda, because I made a few changes to it yesterday.\n\nIf my connection is poor, I'll switch off my camera and keep my microphone on mute until I need to speak.\n\nThanks, and speak soon.\nLan",
    checklist: [
      "Có ít nhất hai câu will be + V-ing, động từ sau be có đuôi -ing.",
      "Có ít nhất hai câu hỏi gián tiếp (Could you tell me…, Do you know…, I'd like to know…).",
      "Phần sau cụm hỏi gián tiếp dùng trật tự câu kể, không còn do/does/did.",
      "Câu hỏi Có/Không trong câu gián tiếp có if hoặc whether.",
      "Nói rõ lý do và vào muộn khoảng bao lâu.",
    ],
    minWords: 140,
  }),
});
