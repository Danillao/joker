const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾 PODE DISPARAR 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙾U 𝚃𝙴𝚇𝚃𝙾𝚂 𝙰 FIGURINHAS 𝙴 𝙸𝙼𝙰𝙶𝙴𝙽𝚂, 𝙿𝙰𝚁𝙰 OBTER O 𝙲𝙾𝙳𝙸𝙶𝙾 𝙰𝚂SINADO 𝚄𝚂𝙴 O 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix}listcmd*`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂OMENTE O 𝙾𝚆𝙽𝙴𝚁 𝙿ODE REALIZAR 𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰ÇÃO*';
  delete sticker[hash];
  m.reply(`*[ ✔ ] O 𝚃𝙴𝚇𝚃𝙾/𝙲𝙾𝙼𝙰𝙽𝙳𝙾 DISPARADO A FIGURINHA/𝙸𝙼𝙰𝙶𝙴M 𝙵OI ELIMINADO NA 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰D𝙾𝚂 𝙲𝙾𝚁𝚁𝙴𝚃𝙰𝙼𝙴𝙽𝚃E*`);
};
handler.command = ['delcmd'];
handler.rowner = true;
export default handler;
