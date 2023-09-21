const handler = async (m, {conn}) => {
  let txt = '';
  for (const [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n—◉ ${await conn.getName(jid)}\n➤ ${jid} [${chat?.metadata?.read_only ? '𝙽Ã𝙾 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿A' : '𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰'}]\n\n`;
  m.reply(`*𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 EM QUE O 𝙱𝙾𝚃 ESTÁ PRESENTE:*
${txt}
`.trim());
};
handler.help = ['groups', 'grouplist'];
handler.tags = ['info'];
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos)$/i;
export default handler;
