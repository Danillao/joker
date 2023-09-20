/* By https://github.com/ALBERTO9883 */
import fs from 'fs';
import fetch from 'node-fetch';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {text, usedPrefix, command, conn}) => {
  try {
    const res2 = await googleImage(text);
    const sfoto = res2.getRandom();
    if (!text) throw `*[❗] INSIRA O NOME DA FIGURINHA 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴JA 𝙱𝚄𝚂𝙲𝙰𝚁*`;
    const json = await fetch(`https://api.akuari.my.id/search/sticker?query=${text}`);
    const jsons = await json.json();
    const res = jsons.result.map((v, index) => `*🪴 • Resultado:* ${1 + index}\n*🌵 • Nome:* ${v.title}\n*🍂 • Url:* ${v.url}`).join`\n\n───\n\n`;
    await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m);
  } catch {
    await m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁,POR FAVOR TENTE NOVAMENTE*');
  }
};
handler.tags = ['sticker', 'search'];
handler.command = ['stickersearch', 'searchsticker', 'stickerssearch', 'searchstickers'];
export default handler;
