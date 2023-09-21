const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙵OI 𝙱𝙰𝙽I𝙳𝙾 𝙲𝙾M Ê𝚇𝙸𝚃𝙾*\n\n*—◉ O 𝙱𝙾𝚃 𝙽Ã𝙾 RESPONDERÁ A NENHUM 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ATE SER DESBANIDO 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
