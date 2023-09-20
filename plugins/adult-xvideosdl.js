import fetch from 'node-fetch';
import axios from 'axios';
import cheerio from 'cheerio';
const handler = async (m, {conn, args, command, usedPrefix, text}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] OS 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 ESTÃO DESATIVADOS NESSE 𝙶𝚁𝚄𝙿𝙾, SE É 𝙰𝙳𝙼𝙸𝙽 E DESEJA ATIVAR 𝚄𝚂𝙴 O 𝙲𝙾𝙼𝙰𝙽𝙳𝙾  #enable modohorny*';
  if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] INSITA 𝚄M LINK 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝚇𝚅𝙸𝙳𝙴𝙾𝚂, EXEMPLO: ${usedPrefix + command} https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`;
  try {
    conn.reply(m.chat, '[❗] 𝑜 𝑣𝑖𝑑𝑒𝑜 𝑒𝑠𝑡𝑎 𝑠𝑒𝑛𝑑𝑜 𝑝𝑟𝑜𝑐𝑒𝑠𝑠𝑎𝑑𝑜, 𝑒𝑠𝑝𝑒𝑟𝑒 𝑢𝑚 𝑚𝑜𝑚𝑒𝑛𝑡𝑜..\n\n﹣ O tempo de envio depende do peso e duração do video', m);
    const res = await xvideosdl(args[0]);
    conn.sendMessage(m.chat, {document: {url: res.result.url}, mimetype: 'video/mp4', fileName: res.result.title}, {quoted: m});
  } catch (e) {
    throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 TENTE NOVAMENTE*\n\n*- ESCREVA UMA URL 𝚂𝙸𝙼𝙸𝙻𝙰𝚁 𝙰:*\n*◉ https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*';
  }
};
handler.command = /^(xvideosdl)$/i;
export default handler;

async function xvideosdl(url) {
  return new Promise((resolve, reject) => {
    fetch(`${url}`, {method: 'get'})
        .then((res) => res.text())
        .then((res) => {
          const $ = cheerio.load(res, {xmlMode: false});
          const title = $('meta[property=\'og:title\']').attr('content');
          const keyword = $('meta[name=\'keywords\']').attr('content');
          const views = $('div#video-tabs > div > div > div > div > strong.mobile-hide').text()+' views';
          const vote = $('div.rate-infos > span.rating-total-txt').text();
          const likes = $('span.rating-good-nbr').text();
          const deslikes = $('span.rating-bad-nbr').text();
          const thumb = $('meta[property=\'og:image\']').attr('content');
          const url = $('#html5video > #html5video_base > div > a').attr('href');
          resolve({status: 200, result: {title, url, keyword, views, vote, likes, deslikes, thumb}});
        });
  });
};

async function xvideosSearch(url) {
  return new Promise(async (resolve) => {
    await axios.request(`https://www.xvideos.com/?k=${url}&p=${Math.floor(Math.random() * 9) +1}`, {method: 'get'}).then(async (result) => {
      const $ = cheerio.load(result.data, {xmlMod3: false});
      const title = [];
      const duration = [];
      const quality = [];
      const url = [];
      const thumb = [];
      const hasil = [];

      $('div.mozaique > div > div.thumb-under > p.title').each(function(a, b) {
        title.push($(this).find('a').attr('title'));
        duration.push($(this).find('span.duration').text());
        url.push('https://www.xvideos.com'+$(this).find('a').attr('href'));
      });
      $('div.mozaique > div > div.thumb-under').each(function(a, b) {
        quality.push($(this).find('span.video-hd-mark').text());
      });
      $('div.mozaique > div > div > div.thumb > a').each(function(a, b) {
        thumb.push($(this).find('img').attr('data-src'));
      });
      for (let i=0; i < title.length; i++) {
        hasil.push({
          title: title[i],
          duration: duration[i],
          quality: quality[i],
          thumb: thumb[i],
          url: url[i],
        });
      }
      resolve(hasil);
    });
  });
};
