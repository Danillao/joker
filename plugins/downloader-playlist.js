import yts from 'yt-search';
import fs from 'fs';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] FALTA O NOME DA CANÇÃO, POR FAVOR INSIRA O COMANDO MAIS O NOME / TITULO  DE UMA CANÇÃO*\n\n*—◉ Exemplo:*\n*${usedPrefix + command} Begin you*`;
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoList) {
      global.videoList = [];
    }
    if (global.videoList[0]?.from == m.sender) {
      global.videoList.splice(0, global.videoList.length);
    }
    const results = await yts(text);
    const textoInfo = `*[❗] Pode baixar o video que quiser da seguinte forma:*
◉ ${usedPrefix}audio <numero>
◉ ${usedPrefix}video <numero> 

*—◉ Exemplos:*
*◉ ${usedPrefix}audio 5*
*◉ ${usedPrefix}video 8*`.trim();
    const teks = results.all.map((v, i) => {
      const link = v.url;
      vids_.urls.push(link);
      return `[${i + 1}] ${v.title}
↳ 🫐 *_Link :_* ${v.url}
↳ 🕒 *_Duração :_* ${v.timestamp}
↳ 📥 *_Upload :_* ${v.ago}
↳ 👁 *_Vizualizações :_* ${v.views}`;
    }).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
    conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m);
    global.videoList.push(vids_);
  } catch {
    await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 ESPERE UM INTERVALO DE TEMPO E TENTE NOVAMENTE 𝙲𝙾M 𝙾U𝚃𝚁𝙾 𝙽𝙾𝙼𝙴 𝙳𝙴 𝚄MA 𝙲𝙰𝙽ÇÃO*');
  }
};
handler.help = ['playlist *<texto>*'];
handler.tags = ['search'];
handler.command = /^playlist|playlist2$/i;
export default handler;
