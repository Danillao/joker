const handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = + new Date;
  user.afkReason = text;
  m.reply(`*[❗𝐈𝐍𝐅𝐎❗] O 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 ${conn.getName(m.sender)} 𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝚃𝙸𝚅𝙾 (𝙰𝙵𝙺), 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙽ÃO 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴M*\n\n*—◉ 𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴 𝙸𝙽𝙰𝚃𝙸𝚅𝙸𝙳𝙰𝙳E (𝙰𝙵𝙺)${text ? ': ' + text : ''}*
`);
};
handler.help = ['afk [alasan]'];
handler.tags = ['main'];
handler.command = /^afk$/i;
export default handler;
