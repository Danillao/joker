const handler = async (m, {conn, text, usedPrefix, command}) => {
  global.db.data.sticker = global.db.data.sticker || {};
  if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳A A FIGURINHA 𝙾U 𝙸𝙼𝙰𝙶𝙴M QUE DESEJA 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄M 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙾U 𝚃𝙴𝚇𝚃𝙾*';
  if (!m.quoted.fileSha256) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾 PODE DISPARAR 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙾U 𝚃𝙴𝚇𝚃𝙾𝚂 𝙰 FIGURINHAS 𝙴 𝙸𝙼𝙰𝙶𝙴𝙽𝚂*';
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁 𝙳𝙴 𝚄𝚂𝙾, 𝚃𝙴𝚇𝚃𝙾 𝙵𝙰𝙻𝚃𝙰𝙽DO*\n\n*𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝚃𝙾 𝙳O 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:*\n*—◉ ${usedPrefix + command} <texto> <responder a sticker oU imagem>*\n\n*𝙴X𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝚃𝙾 𝙳O 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:*\n*—◉ ${usedPrefix + command} <#menu> <responder a sticker ou imagem>*`;
  const sticker = global.db.data.sticker;
  const hash = m.quoted.fileSha256.toString('base64');
  if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂OMENTE O 𝙾𝚆𝙽𝙴𝚁 𝙿ODE REALIZAR 𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰ÇÃO*';
  sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false};
  m.reply(`*[ ✔ ] O 𝚃𝙴𝚇𝚃𝙾/𝙲𝙾𝙼𝙰𝙽𝙳𝙾 DISPARADO A FIGURINHA/𝙸𝙼𝙰𝙶𝙴M 𝙵OI SALVO NA 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰D𝙾𝚂 𝙲𝙾𝚁𝚁𝙴𝚃𝙰𝙼𝙴𝙽𝚃𝙴*`);
};
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset'];
handler.rowner = true;
export default handler;
