const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, {isAdmin, isBotAdmin}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://chat.whatsapp.com`;
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*𝙷𝙴𝚈!! O 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝙴𝚂𝚃𝙰 𝙰𝚃𝙸𝚅𝙾 😎, 𝚂𝙰𝙻𝚅𝙾/𝙰!*');
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝙷𝙰𝚂𝚃𝙰 𝙻𝙰 𝚅𝙸𝚂𝚃𝙰 𝙱𝙰𝙱𝚈 👋 ${user} ROMPEU AS REGRAS DO GRUPO, SERÁ 𝙴𝚇𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙳𝙾...!!*`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] O 𝙱𝙾𝚃 𝙽Ã𝙾 É 𝙰𝙳𝙼𝙸𝙽, NÃO PODE E𝚇𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚁 AS PESSOAS*');
    if (isBotAdmin && bot.restrict) { // Qualquer coisa retirar validação restrict
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] O PROPRIETÁRIO DO 𝙱𝙾𝚃 𝙽ÃO HABILITOU AS RESTRIÇÕES (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) ENTRE EM CONTATO PARA QUE 𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙴*');
  }
  return !0;
}
