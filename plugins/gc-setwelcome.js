const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('*[❗] MENSAGEM 𝙳𝙴 BOASVINDAS 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙳𝙾 CORRETAMENTE 𝙿𝙰𝚁𝙰 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾*');
  } else throw `*[❗] 𝙸𝙽𝙶𝚁𝙴S𝚂𝙴 A MENSAGEM 𝙳𝙴 BOASVINDAS 𝚀𝚄𝙴 DESEJA USAR, 𝚄𝚂𝙴:*\n*- @user (mención)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setwelcome'];
handler.admin = true;
export default handler;
