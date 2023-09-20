// Code by Xnuvers007 ft. Jikarinka
// https://github.com/Xnuvers007/
//
// Mejorado por @BrunoSobrino
// //////////////////////////////////

import axios from 'axios';
import cheerio from 'cheerio';
const handler = async (m, {conn, text: tiktok, args, command, usedPrefix}) => {
  if (!tiktok) throw '*[❗] Insira um link do TikTok Images, exemplo: "https://vm.tiktok.com/ZM2cqBRVS/".*';
  let imagesSent;
  if (imagesSent) return;
  imagesSent = true;
  try {
    const tioShadow = await ttimg(tiktok);
    const result = tioShadow?.data;
    for (const d of result) {
      await conn.sendMessage(m.chat, {image: {url: d}}, {quoted: m});
    };
    imagesSent = false;
  } catch {
    imagesSent = false;
    throw '*[❗] Não se obteve resposta da pagina, tente novamente mais tarde.*';
  }
};
handler.command = /^(ttimg|tiktokimg)$/i;
export default handler;

async function ttimg(link) {
  try {
    const url = `https://dlpanda.com/es?url=${link}&token=G7eRpMaa`;
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const imgSrc = [];
    $('div.col-md-12 > img').each((index, element) => {
      imgSrc.push($(element).attr('src'));
    });
    if (imgSrc.length === 0) {
      return {data: '*[❗] Não foi encontrado imagens no link fornecido.*'};
    }
    return {data: imgSrc};
  } catch (error) {
    console.lo(error);
    return {data: '*[❗] Não se obteve resposta da página, tente novamente mais tarde.*'};
  };
};
