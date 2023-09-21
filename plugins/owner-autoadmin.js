/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '*[❗] 𝙾𝙻Á HA HA HA 𝙲𝙾𝙼𝙾 𝙴𝚂𝚃𝙰? VOCÊ JA É 𝙰𝙳𝙼𝙸𝙽 𝙳𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾*';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙽ÃO FOI POSSIVEL UPAR PARA 𝙰𝙳𝙼𝙸𝙽*');
  }
};
handler.command = /^autoadmin$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
