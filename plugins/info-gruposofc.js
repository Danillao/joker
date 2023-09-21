const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝙾𝙻Á 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 👋🏻, 𝚃𝙴 CONVIDO A SE UNIR 𝙰𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰IS 𝙳O JOKER BOT - 𝚃𝙴𝙰𝙼 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅IVER E EXPLORAR A 𝙲𝙾𝙼𝚄𝙽𝙸𝙳𝙰𝙳E :D*

*➤ 𝙶𝚛𝚞𝚙𝚘𝚜 Oficiais 𝚍o 𝙱𝚘𝚝:*
*1.-* https://chat.whatsapp.com/

*2.-* https://chat.whatsapp.com/

*3.-* https://chat.whatsapp.com/

*4.-* https://chat.whatsapp.com/

*5.-* https://chat.whatsapp.com/`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'o melhor ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.youtube.com/channel/'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
