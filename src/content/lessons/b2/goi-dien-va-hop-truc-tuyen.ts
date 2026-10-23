import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "goi-dien-va-hop-truc-tuyen",
  title: "Gọi điện và họp trực tuyến",
  minutes: 35,
  lecture: {
    title: "Nhờ vả khéo, hỏi lại, xen lời và xử lý sự cố trong cuộc gọi",
    blocks: [
      p("Ở B1 các bạn đã biết gọi điện, để lại lời nhắn và hỏi gián tiếp. Lên B2, cái khó không còn là nói cho đúng mà là **nói cho khéo**: nhờ khách hàng gửi tài liệu mà không nghe như ra lệnh, xin ghi âm cuộc họp, hỏi lại khi không nghe rõ, xen vào khi người khác đang nói, và xử lý mạng chập chờn mà vẫn giữ được phong thái chuyên nghiệp. Trên mạng không có nét mặt, cử chỉ để đỡ lời, nên **chính câu chữ phải làm thay việc mềm mỏng**."),
      table(
        ["Mức độ", "Nhờ người khác làm", "Xin phép mình làm"],
        ["Thân mật, đồng nghiệp", "Can you send me the link?", "Can I share my screen?"],
        ["Lịch sự", "Could you send me the link?", "Is it OK if I share my screen?"],
        ["Rất lịch sự", "Would you mind sending me the link?", "Do you mind if I share my screen?"],
        ["Rất khéo, với khách hàng, cấp trên", "I was wondering if you could send me the link. / Would it be possible to send me the link?", "Would you mind if I shared my screen?"],
      ),
      p("Ba điểm ngữ pháp nằm trong bảng: **Would you mind + V-ing** (không dùng to V). **Do you mind if I + hiện tại đơn**, còn **Would you mind if I + quá khứ đơn** thì nhẹ nhàng hơn một bậc. **Would it be possible to + V?** không nhắc đến ai cả, nên nghe rất mềm: bạn hỏi về khả năng, không đòi hỏi người nghe."),
      ex("Would you mind sending us the slides before the call?", "Anh có phiền gửi trước cho chúng tôi các slide trước cuộc gọi không?"),
      ex("Would it be possible to move our call to Thursday morning?", "Liệu có thể dời cuộc gọi của chúng ta sang sáng thứ Năm không?", "Không cần chủ ngữ người: câu chỉ hỏi việc đó có khả thi không, nên người nghe dễ từ chối mà không mất mặt."),
      ex("Do you mind if I record the meeting? ~ Not at all, go ahead.", "Anh có phiền nếu tôi ghi âm cuộc họp không? ~ Không phiền gì cả, anh cứ ghi đi.", "Mind nghĩa là “thấy phiền”. Trả lời No hoặc Not at all mới là đồng ý."),
      mistake("Would you mind to send me the link?", "Would you mind sending me the link?", "Người Việt quen mẫu “nhờ ai làm gì” nên gắn to vào sau mọi động từ. Mind luôn đi với V-ing: would you mind sending, do you mind waiting."),
      mistake("Do you mind if I share my screen? ~ Yes, of course.", "Do you mind if I share my screen? ~ No, not at all. Go ahead.", "Tiếng Việt đáp “Vâng, được ạ” để đồng ý, nên học trò buột miệng Yes. Nhưng câu hỏi là “anh có thấy phiền không”, nên Yes nghĩa là “có, tôi thấy phiền”. Muốn đồng ý hãy nói No, not at all hoặc No, go ahead."),
      table(
        ["Việc cần làm", "Câu nên dùng"],
        ["Hỏi lại khi không nghe rõ", "Sorry, I didn't quite catch that. / Could you go over that again?"],
        ["Kiểm tra mình hiểu đúng", "Just to check, do you mean…? / So what you're saying is…"],
        ["Xen vào khi người khác đang nói", "Sorry to interrupt, but… / Can I just come in here?"],
        ["Trả lời cho người khác nói tiếp", "Sorry, go ahead. / You were saying?"],
        ["Mạng kém, tiếng rè, hình đứng", "You're breaking up. / Your screen has frozen. / I think you're on mute."],
        ["Mình bị rớt mạng", "I'll drop out and call back in. / Sorry, I lost you for a moment."],
      ),
      ex("Sorry to interrupt, but could I just come in here? I think the deadline is Friday, not Monday.", "Xin lỗi đã cắt ngang, nhưng cho tôi nói một chút được không? Tôi nghĩ hạn chót là thứ Sáu chứ không phải thứ Hai.", "Xin lỗi trước (Sorry to interrupt), xin phép (could I just…), rồi mới nói ý chính. Chữ just làm câu nhẹ đi rất nhiều."),
      p("Nhắc lại nhanh một điểm của B1: **Will you + V?** dễ nghe như **lời mời hoặc lời nhờ** (Will you join us for lunch? = mời anh ăn trưa cùng). Muốn **hỏi kế hoạch một cách trung tính**, không gây áp lực, hãy dùng tương lai tiếp diễn **Will you be + V-ing?**"),
      ex("Will you be joining the call with the Osaka team tomorrow?", "Mai anh có tham gia cuộc gọi với nhóm Osaka không?", "Chỉ hỏi lịch của người ta. Will you join the call…? lại nghe như đang mời hoặc nhờ anh ấy tham gia."),
      mistake("You are mute.", "You're on mute.", "Dịch từng chữ “bạn đang tắt tiếng” thành You are mute là một lỗi khá buồn cười: tính từ mute nghĩa là không nói được. Phải nói on mute: đang ở chế độ tắt tiếng."),
      tip("Câu lịch sự chỉ thật sự lịch sự khi **giọng đi xuống nhẹ nhàng ở cuối** và nhấn vào từ chính: Would you MIND sending… / Would it be POSsible… Nói đều đều, nhanh và cụt thì câu dài đến đâu cũng nghe như ra lệnh. Âm /t/ cuối trong **mute** /mjuːt/ phải bật ra, nếu không người nghe dễ hiểu thành **mew** (tiếng mèo kêu)."),
      teacher("Khi đứng lớp, tôi hay thấy học trò giỏi ngữ pháp vẫn đứng hình khi mạng chập chờn hoặc khi muốn xen vào, chỉ vì chưa có sẵn câu trong miệng. Tôi dặn các bạn viết **năm câu cứu cánh** ra một tờ giấy dán cạnh màn hình: **Sorry, I didn't quite catch that. You're breaking up. Sorry to interrupt, but… Would you mind…? Would it be possible to…?** Trước mỗi cuộc họp, đọc to một lượt. Chỉ sau hai tuần, các câu ấy sẽ tự bật ra đúng lúc. Và nhớ: **xen vào lịch sự không phải là bất lịch sự**, im lặng suốt buổi mới làm đối tác nghĩ bạn không có ý kiến."),
      summary(
        "Nhờ khéo: **Would you mind + V-ing?**, **I was wondering if you could…**, **Would it be possible to + V?**",
        "Xin phép: **Do you mind if I + hiện tại**, **Would you mind if I + quá khứ**. Đồng ý thì trả lời **No, not at all / No, go ahead**.",
        "Hỏi lại và kiểm tra: **Sorry, I didn't quite catch that.**, **Just to check, do you mean…?**",
        "Xen lời: **Sorry to interrupt, but…**, **Can I just come in here?**; nhường lời: **Sorry, go ahead.**",
        "Sự cố: **You're breaking up.**, **You're on mute.** (không nói You are mute). Hỏi kế hoạch trung tính: **Will you be + V-ing?**",
      ),
    ],
  },
  words: [
    word("mute", "/mjuːt/", "chế độ tắt tiếng; tắt tiếng", "Please put your microphone on mute when you're not speaking.", "mute", 0, "Bật rõ âm /t/ ở cuối, đừng đọc thành “miu”."),
    word("connection", "/kəˈnek.ʃən/", "đường truyền, kết nối", "My internet connection is quite slow today.", "con|nec|tion", 1),
    word("microphone", "/ˈmaɪ.krə.fəʊn/", "micrô", "Could you check your microphone? We can't hear you.", "mi|cro|phone", 0, "Trọng âm ở âm tiết đầu: MI-cro-phone. Âm đầu đọc là /maɪ/, không đọc là “mi”."),
    word("extension", "/ɪkˈsten.ʃən/", "số máy lẻ", "You can reach me on extension two four five.", "ex|ten|sion", 1),
    word("headset", "/ˈhed.set/", "tai nghe có micrô", "I'm using a headset now, so you should hear me more clearly.", "head|set", 0, "Trọng âm ở âm tiết đầu: HEAD-set. Chữ ea đọc là /e/ như trong bread."),
    word("reschedule", "/ˌriːˈʃed.juːl/", "dời lịch, sắp xếp lại lịch", "Would it be possible to reschedule the call for next Tuesday?", "re|sched|ule", 1, "Người Anh thường đọc /ˈʃed.juːl/, người Mỹ đọc /ˈskedʒ.uːl/. Chọn một cách và dùng nhất quán."),
    word("participant", "/pɑːˈtɪs.ɪ.pənt/", "người tham gia", "There are twelve participants in today's video call.", "par|tic|i|pant", 1),
    word("voicemail", "/ˈvɔɪs.meɪl/", "hộp thư thoại, tin nhắn thoại", "I left a voicemail, but she hasn't called me back.", "voice|mail", 0),
  ],
  exercises: [
    mc("b2-n04-1", "A: Do you mind if I share my screen?\nB: ___", ["Yes, of course. Go ahead.", "No, not at all. Go ahead.", "Yes, I do. Go ahead."], 1, "Do you mind…? hỏi “anh có thấy phiền không”. Muốn đồng ý phải trả lời No, not at all. Yes, of course nghĩa là “có, tất nhiên tôi thấy phiền”, mâu thuẫn với Go ahead."),
    mc("b2-n04-2", "You need some figures from a new client today. Which request sounds the most professional?", ["Send me the figures today.", "You must send me the figures today.", "I want the figures today, please.", "Would it be possible to send me the figures today?"], 3, "Ba câu đầu dịch thẳng từ tiếng Việt nên nghe như ra lệnh, dù có please. Would it be possible to…? hỏi về khả năng, lịch sự mà vẫn rõ ý."),
    fill("b2-n04-3", "Would you mind ___ the link in the chat? Some people can't find it. (put)", ["putting"], "Would you mind + V-ing: putting. Nhớ nhân đôi t: put → putting."),
    fill("b2-n04-4", "Would it be ___ to move the call to Thursday afternoon? (có thể, khả thi)", ["possible"], "Would it be possible to + V? là cách hỏi rất mềm, không đặt gánh nặng lên người nghe."),
    fill("b2-n04-5", "Sorry to ___, but I think that figure is wrong. (cắt ngang)", ["interrupt"], "Sorry to interrupt, but… là câu mở đầu chuẩn khi xen vào lúc người khác đang nói."),
    fill("b2-n04-6", "Will you ___ joining the call with the Osaka team tomorrow?", ["be"], "Will you be + V-ing? hỏi kế hoạch một cách trung tính. Will you join…? dễ nghe như lời mời hoặc lời nhờ."),
    reorder("b2-n04-7", "Could you go over the last point again?", "Go over = trình bày lại, giải thích lại. Again đứng cuối câu."),
    reorder("b2-n04-8", "Would it be possible to start a bit later?", "Would it be possible to + V: hỏi khả năng, rất lịch sự."),
    reorder("b2-n04-9", "Sorry, I didn't quite catch that.", "Catch ở đây là nghe kịp, nghe rõ. Quite làm câu nhẹ hơn: tôi chưa nghe rõ lắm."),
    correct("b2-n04-10", "Would you mind to send me the meeting link?", ["Would you mind sending me the meeting link?"], "Mind luôn đi với V-ing: would you mind sending."),
    correct("b2-n04-11", "Do you mind if I will turn my camera off?", ["Do you mind if I turn my camera off?", "Do you mind if I turn off my camera?"], "Sau if trong câu xin phép, dùng hiện tại đơn: if I turn, không dùng will."),
    correct("b2-n04-12", "Sorry, you are mute, so we can't hear you.", ["Sorry, you're on mute, so we can't hear you.", "Sorry, you are on mute, so we can't hear you.", "Sorry, you're on mute, so we cannot hear you."], "Phải nói on mute (đang ở chế độ tắt tiếng). You are mute nghĩa là bạn không nói được."),
    listen("b2-n04-13", "Sorry, you're breaking up. Could you repeat that?", ["Xin lỗi, tiếng của anh bị ngắt quãng. Anh nhắc lại được không?", "Xin lỗi, anh đang tắt mic. Anh bật lên được không?", "Xin lỗi, anh nói nhanh quá. Anh nói chậm lại được không?"], 0, "Break up khi nói về cuộc gọi nghĩa là tiếng bị rè, đứt quãng do đường truyền kém."),
    listen("b2-n04-14", "Can I just come in here? I think we're missing something.", ["Tôi vào phòng họp được không? Hình như tôi để quên đồ.", "Cho tôi xen vào một chút được không? Tôi nghĩ chúng ta đang bỏ sót điều gì đó.", "Tôi có thể tham gia cuộc gọi từ đây không? Tôi nghĩ mình đến muộn rồi."], 1, "Come in trong cuộc họp là xen vào, góp lời. Just làm lời xin phép nhẹ nhàng hơn."),
  ],
  speaking: [
    say("Would you mind sending me the slides before the call?", "Anh có phiền gửi tôi các slide trước cuộc gọi không?"),
    say("Sorry to interrupt, but could I just add something here?", "Xin lỗi đã cắt ngang, nhưng tôi bổ sung một ý được không?"),
    say("Would it be possible to move our meeting to Thursday morning?", "Liệu có thể dời cuộc họp của chúng ta sang sáng thứ Năm không?"),
  ],
  freeSpeaking: free(
    "During an important video call with a foreign client, your connection keeps failing. What do you say and do?",
    "Kể bạn sẽ nói gì khi mạng chập chờn giữa cuộc gọi quan trọng: báo sự cố, xin lỗi, đề nghị một giải pháp bằng Would it be possible… hoặc Would you mind…, và hỏi lại phần mình bị lỡ.",
    "First, I would apologise and tell the client what was happening, for example, sorry, I think my connection is very weak, so you might be breaking up on my side. Then I would turn off my camera, because that usually helps. If it still didn't work, I would ask, would it be possible to continue by phone for a few minutes? When the sound came back, I would say, sorry, I didn't quite catch the last part, would you mind going over it again?",
  ),
  dialogue: dialogue(
    "Cuộc gọi video với khách hàng Anh",
    "Chị Lan ở công ty Minh Phát gọi video cho ông Brown, khách hàng ở London, để bàn lịch gửi hàng mẫu. Đường truyền chập chờn, đồng nghiệp Hùng bị rớt khỏi cuộc gọi.",
    { A: "Lan, nhân viên kinh doanh", B: "Mr Brown, khách hàng" },
    A("Hi Mr Brown, it's Lan from Minh Phat. Can you hear me all right?", "Chào ông Brown, tôi là Lan ở Minh Phát. Ông có nghe rõ tôi không ạ?"),
    B("Hi Lan. Yes, but you're a bit quiet. Would you mind speaking up a little?", "Chào Lan. Có, nhưng tiếng chị hơi nhỏ. Chị nói to hơn một chút được không?"),
    A("Not at all. Is that better?", "Không sao ạ. Bây giờ đã rõ hơn chưa ạ?"),
    B("Much better, thanks. Do you mind if I record the call? It's for a colleague who couldn't join.", "Rõ hơn nhiều rồi, cảm ơn chị. Chị có phiền nếu tôi ghi âm cuộc gọi không? Để cho một đồng nghiệp không vào được."),
    A("No, go ahead. Hung was going to join us too, but I think we've lost him.", "Không ạ, ông cứ ghi. Anh Hùng cũng định vào, nhưng hình như anh ấy bị rớt mạng rồi."),
    B("Never mind. So, about the samples. I was wondering if you could send them a few days earlier.", "Không sao. Về hàng mẫu nhé. Tôi đang muốn hỏi liệu chị có thể gửi sớm hơn vài ngày không."),
    A("Sorry, you're breaking up. Could you say that again?", "Xin lỗi, tiếng ông bị ngắt quãng. Ông nói lại được không ạ?"),
    B("Of course. Would it be possible to send the samples before Thursday?", "Được chứ. Liệu có thể gửi hàng mẫu trước thứ Năm không?"),
    A("Just to check, do you mean this Thursday, the twelfth?", "Cho tôi kiểm tra lại, ý ông là thứ Năm tuần này, ngày mười hai ạ?"),
    B("Yes, exactly. Our designer will be visiting your factory on Friday, so she'd like to see them first.", "Đúng vậy. Thứ Sáu nhà thiết kế của chúng tôi sẽ đến thăm nhà máy của chị, nên cô ấy muốn xem hàng mẫu trước."),
    A("Sorry to interrupt, but I think Hung is back. Hung, you're on mute.", "Xin lỗi cắt ngang ông, hình như anh Hùng vào lại rồi. Anh Hùng ơi, anh đang tắt mic."),
    B("He's typing in the chat. It seems his microphone isn't working.", "Anh ấy đang gõ trong khung chat. Có vẻ micrô của anh ấy bị hỏng."),
    A("Then I'll check with the warehouse and email you this afternoon. Would you mind if I copied Hung in?", "Vậy tôi sẽ hỏi lại kho và gửi email cho ông chiều nay. Ông có phiền nếu tôi đồng gửi cho anh Hùng không?"),
    B("Not at all. Thanks, Lan. Speak soon.", "Không phiền gì. Cảm ơn Lan. Hẹn sớm nói chuyện tiếp."),
  ),
  dialogueQuestions: [
    listenQ("b2-n04-d1", "Why does Mr Brown want to record the call?", "Do you mind if I record the call? It's for a colleague who couldn't join.", ["To check what Lan promised", "For a colleague who couldn't join the call", "Because his connection is bad", "Because Hung asked him to"], 1, "Ông Brown giải thích ngay: It's for a colleague who couldn't join."),
    mc("b2-n04-d2", "What does Mr Brown ask Lan to do?", ["Send the samples before Thursday", "Visit the factory on Friday", "Call him back by phone", "Send the samples to his designer's home"], 0, "Would it be possible to send the samples before Thursday? Thứ Sáu là ngày nhà thiết kế đến nhà máy."),
    mc("b2-n04-d3", "When Mr Brown answers “Not at all” at the end, what does he mean?", ["He doesn't want Hung to receive the email.", "He didn't understand Lan's question.", "He is happy for Lan to copy Hung in.", "He wants Lan to call instead of emailing."], 2, "Câu suy luận: Lan hỏi Would you mind if I copied Hung in? (ông có phiền không). Not at all nghĩa là không phiền gì cả, tức là đồng ý."),
  ],
  reading: reading({
    title: "Why your video calls feel so tiring",
    text: `When offices closed during the pandemic, many companies moved their meetings online almost overnight. Several years later, the video call is still with us, but a recent survey of two thousand office workers in Asia suggests that we have not learned to use it well. Nearly two thirds of the people questioned said they left online meetings feeling more tired than after a face-to-face discussion.

According to the researchers, the problem is not the technology itself but the way we use it. Participants reported that the first five minutes of a typical call are wasted on the same questions: "Can you hear me?", "Can everyone see my screen?" and "Has everyone got the link?" A further ten per cent of meeting time, they claimed, disappears when someone forgets that they are on mute.

The report offers some simple advice. First, test your microphone and headset before the call, not during it. Second, if you know you will be late, tell the organiser in advance, so that the others can start without waiting. Third, the person chairing the meeting should share the agenda beforehand, so that everyone knows what will be discussed and in what order.

Perhaps the most interesting finding concerns the way people ask for things. Staff who used softer forms such as "Would you mind sending me the figures by Friday?" were rated as more professional by their colleagues than those who simply said "Send me the figures." However, the researchers warn that being too indirect can also cause confusion, especially when the speakers do not share a first language. One manager in the study admitted that she had waited a week for a report because her request had been so polite that her colleague in Germany thought it was optional. The recommendation is to be polite but clear: say exactly what you need and by when.

Interrupting turned out to be another challenge. On a screen, it is hard to see when someone is about to finish, so many people either talk over each other or say nothing at all. Several participants from Vietnam and Japan said they often had something to add but stayed silent because they did not want to seem rude. The researchers suggest agreeing on simple rules at the start: raise a hand on screen, or use a short phrase such as "Sorry to interrupt, but could I just add something?"

Finally, the authors suggest that not every discussion needs a video call. Before sending an invitation, they say, ask yourself whether an email or a quick phone call would do the job just as well. Your colleagues will probably thank you.`,
    glossary: [
      ["overnight", "chỉ sau một đêm, rất nhanh"],
      ["survey", "cuộc khảo sát"],
      ["in advance", "trước, sớm hơn"],
      ["chair (a meeting)", "chủ trì (cuộc họp)"],
      ["agenda", "chương trình họp"],
      ["confusion", "sự nhầm lẫn, bối rối"],
      ["optional", "không bắt buộc, tùy ý"],
      ["talk over (someone)", "nói chen lên lời người khác"],
    ],
    questions: [
      mc("b2-n04-r1", "What is the main point of the article?", ["Video calls should be replaced by emails.", "Many online meetings are tiring because of the way people use them, and a few simple changes can help.", "Workers in Asia prefer face-to-face meetings to video calls.", "New technology will soon solve the problems of online meetings."], 1, "Bài báo nói vấn đề không nằm ở công nghệ mà ở cách dùng (the way we use it), rồi đưa ra lời khuyên. Email chỉ được nhắc ở đoạn cuối như một lựa chọn."),
      mc("b2-n04-r2", "According to the survey, how much meeting time is lost because people forget they are on mute?", ["About five minutes", "Around ten per cent", "Nearly two thirds", "Half of every meeting"], 1, "A further ten per cent of meeting time… disappears when someone forgets that they are on mute. Năm phút đầu là thời gian mất vì hỏi đi hỏi lại chuyện kỹ thuật."),
      fill("b2-n04-r3", "The report advises you to test your microphone and headset ___ the call, not during it.", ["before"], "Câu gốc: test your microphone and headset before the call, not during it."),
      mc("b2-n04-r4", "Why did the manager in the study wait a week for a report?", ["Her colleague in Germany was on holiday.", "She forgot to send the request.", "Her request was so indirect that it did not sound necessary.", "The video call kept failing."], 2, "Her request had been so polite that her colleague in Germany thought it was optional: lời nhờ quá vòng vo nên người kia tưởng không bắt buộc."),
      mc("b2-n04-r5", "What can we infer about the participants from Vietnam and Japan?", ["They had nothing to say in most meetings.", "They found online meetings easier than face-to-face ones.", "They often interrupted their colleagues.", "Their ideas were sometimes lost because they did not know how to come in politely."], 3, "Câu suy luận: họ often had something to add but stayed silent because they did not want to seem rude. Vậy ý kiến của họ đã bị mất đi vì không biết cách xen vào lịch sự."),
      mc("b2-n04-r6", "What is the writer's purpose in the last paragraph?", ["To encourage readers to think before organising a video call", "To criticise colleagues who send too many emails", "To explain how to make a phone call", "To advertise a new video platform"], 0, "Đoạn cuối khuyên người đọc tự hỏi xem có thật cần họp video không trước khi gửi lời mời."),
    ],
  }),
  task: task({
    prompt: "Bạn cần dời cuộc gọi video với ông Wilson, một khách hàng ở Úc, vì trùng lịch kiểm tra nhà máy. Viết email khoảng 140–180 từ: xin dời lịch một cách khéo léo, đề nghị hai khung giờ khác, nhờ ông gửi trước một tài liệu, xin phép ghi âm cuộc gọi, và nói bạn sẽ làm gì nếu đường truyền kém.",
    hints: [
      "Xin dời lịch bằng Would it be possible to…? hoặc I was wondering if we could…",
      "Nhờ gửi tài liệu bằng Would you mind + V-ing…?",
      "Xin phép ghi âm bằng Would you mind if I + quá khứ đơn… hoặc Do you mind if I + hiện tại…",
      "Thêm một câu Will you be + V-ing? để hỏi ai sẽ tham gia, và một câu về phương án khi mạng yếu.",
    ],
    model: "Dear Mr Wilson,\n\nI'm afraid I have a problem with our video call on Tuesday. Our factory inspection has been moved to the same morning, and I need to be there in person. Would it be possible to reschedule the call? I could do Wednesday at nine or Thursday at two, your time, if either of those suits you.\n\nI also have a small favour to ask. Would you mind sending us the new product specifications before the call? It would give our engineers time to prepare some questions, so the meeting would be much shorter.\n\nWill you be joining alone, or will your colleague from the design team be there too? If she is coming, I'll add her to the invitation. And would you mind if I recorded the call? It's only for our internal notes.\n\nFinally, the internet at our factory is not always reliable. If the connection is poor, I'll switch to the phone so that we don't lose any time.\n\nApologies again for the change, and thank you for your understanding.\n\nBest regards,\nLan Nguyen",
    checklist: [
      "Có ít nhất một câu Would it be possible to + V hoặc I was wondering if we could…",
      "Có Would you mind + V-ing (không dùng to V).",
      "Có câu xin phép đúng thì: Do you mind if I + hiện tại hoặc Would you mind if I + quá khứ.",
      "Có một câu Will you be + V-ing? để hỏi kế hoạch của người nhận.",
      "Nói rõ lý do dời lịch, đề nghị khung giờ mới và phương án khi mạng kém.",
    ],
    minWords: 140,
  }),
});
