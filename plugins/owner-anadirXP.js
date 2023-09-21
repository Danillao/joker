import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗]  𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 UM 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙲𝙾M @𝚝𝚊𝚐*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '*[❗𝐈𝐍𝐅𝐎❗]  INSIRA A QUANTIDADE DE EXPERIENCIA (XP) 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴J𝙰 ADQUIRIR*';
  if (isNaN(txt)) throw '*[❗𝐈𝐍𝐅𝐎❗]  𝚂𝙸𝙼𝙱𝙾𝙻𝙾 𝙽Ã𝙾 PERMITIDO, 𝚂𝙾MENTE 𝙽𝚄𝙼𝙴𝚁𝙾𝚂!*';
  const xp = parseInt(txt);
  let exp = xp;
  const pjk = Math.ceil(xp * pajak);
  exp += pjk;
  if (exp < 1) throw '*[❗𝐈𝐍𝐅𝐎❗]O 𝙽𝚄𝙼𝙴𝚁𝙾 𝙼𝙸𝙽𝙸𝙼𝙾 𝙳𝙴 EXPERIENCIA (XP) 𝙿𝙰𝚁𝙰 ADQUIRIR É 𝟷';
  const users = global.db.data.users;
  users[who].exp += xp;
  m.reply(`≡ *𝚇𝙿 ADQUIRID𝙾*
┌──────────────
▢  *𝚃𝚘𝚝𝚊𝚕:* ${xp}
└──────────────`);
};
handler.command = ['añadirxp', 'addexp'];
handler.rowner = true;
export default handler;
