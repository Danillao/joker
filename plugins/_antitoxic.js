const toxicRegex = /puto|puta|viado|estupido|imbecil|cu|cú|foder|fuder|burro/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `Olá *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, Decidir a palavra (${isToxic}) está proibida nessee grupo *${user.warn}/5* advertencia`, false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`Hola *@${m.sender.split`@`[0]}*, superou as 5 advertencias será bloqueado e eliminado do grupo`, false, {mentions: [m.sender]});
    user.banned = true;
    await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
