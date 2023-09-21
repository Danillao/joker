const handler = async (m, {command, usedPrefix, text}) => {
  const M = m.constructor;
  const which = command.replace(/agregar/i, '');
  if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] RESPONDA UM TEXTO, MENSAGEM, IMAGEM, 𝙴𝚃𝙲. E USE 𝚃𝙴𝚇𝚃𝙾 𝙲𝙾𝙼𝙾 PALAVRA CHAVE*';
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝚁 *${usedPrefix}list${which}* 𝙿𝙰𝚁𝙰 𝚅𝙴𝚁 𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 MENSAGEN𝚂`;
  const msgs = global.db.data.msgs;
  if (text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' FOI 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 𝙽𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 MENSAGEN𝚂`;
  msgs[text] = M.toObject(await m.getQuotedObj());
  m.reply(`*[❗𝐈𝐍𝐅𝐎❗] MENSAGEM 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 CORRETAMENTE 𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 MENSAGEN𝚂 𝙲𝙾𝙼𝙾 '${text}'*\n*𝙰𝙲𝙲𝙴𝙳𝙴 𝙲𝙾𝙽 ${usedPrefix}ver${which} ${text}*`);
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'add' + v + ' <text>');
handler.tags = ['database'];
handler.command = /^agregar(vn|msg|video|audio|img|sticker)$/;
handler.rowner = true;
export default handler;
