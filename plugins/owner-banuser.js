const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `[❗] INSIRA  A @𝚝𝚊𝚐 𝙳𝙰 𝙿𝙴S𝚂𝙾𝙰 𝙾U 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝙰𝙻𝙶𝚄MA 𝙼𝙴𝙽𝚂𝙰GEM 𝙳𝙰 𝙿𝙴S𝚂𝙾𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴JA BANIR\n\n*—◉ 𝙴X𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, {mentions: conn.parseMention(BANtext)});
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('*[❗𝐈𝐍𝐅𝐎❗] O 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙵OI 𝙱𝙰𝙽I𝙳𝙾 𝙲𝙾M ÊXITO*\n*—◉ O 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 PODERA 𝚄𝚂𝙰𝚁 O 𝙱𝙾𝚃 ATE QUE SEJA 𝙳𝙴𝚂𝙱𝙰𝙽I𝙳𝙾*');
};
handler.command = /^banuser$/i;
handler.rowner = true;
export default handler;
