import fetch from 'node-fetch';
import cheerio from 'cheerio';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] OS 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 ESTÃO DESATIVADOS NESSE 𝙶𝚁𝚄𝙿𝙾, SE É 𝙰𝙳𝙼𝙸𝙽 E DESEJA ATIVAR 𝚄𝚂𝙴 O 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*';
  if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] INSITA 𝚄M LINK 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝚇𝙽𝚇𝚇, 𝙴X𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`;
  try {
    await conn.reply(m.chat, '[❗] o 𝑣𝑖𝑑𝑒𝑜 𝑒𝑠𝑡𝑎 𝑠𝑒𝑛𝑑𝑜 𝑝𝑟𝑜𝑐𝑒𝑠𝑠𝑎𝑑𝑜. \n𝑒𝑛𝑣𝑖𝑎𝑑𝑜..\n\n﹣ o ᴛᴇᴍᴘᴏ ᴅᴇ ᴇɴᴠɪᴏ ᴅᴇᴘᴇɴᴅᴇ ᴅo ᴘᴇsᴏ e ᴅᴜʀᴀção ᴅo ᴠɪᴅᴇᴏ', m);
    let xnxxLink = '';
    if (args[0].includes('xnxx')) {
      xnxxLink = args[0];
    } else {
      const index = parseInt(args[0]) - 1;
      if (index >= 0) {
        if (Array.isArray(global.videoListXXX) && global.videoListXXX.length > 0) {
          const matchingItem = global.videoListXXX.find((item) => item.from === m.sender);
          if (matchingItem) {
            if (index < matchingItem.urls.length) {
              xnxxLink = matchingItem.urls[index];
            } else {
              throw `*[❗] NÃO SE ENCONTROU UM LINK 𝙿𝙰𝚁𝙰 𝙴S𝚂𝙴 𝙽𝚄𝙼𝙴𝚁𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽SIRA 𝚄M 𝙽𝚄𝙼𝙴𝚁𝙾 𝙴𝙽𝚃𝚁𝙴 1 E ${matchingItem.urls.length}*`;
            }
          } else {
            throw `*[❗] 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙳𝙴𝚂𝚃𝙰 𝙵𝙾𝚁𝙼𝙰 (${usedPrefix + command} <numero>), 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚁𝙴𝙰𝙻𝙸𝚉𝙰 A 𝙱𝚄𝚂CA 𝙳𝙴 𝚅𝙸𝙳𝙴𝙾𝚂 𝙲𝙾M O 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix}xnxxsearch <texto>*`;
          }
        } else {
          throw `*[❗] 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙳𝙴𝚂𝚃𝙰 𝙵𝙾𝚁𝙼𝙰 (${usedPrefix + command} <numero>), 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚁𝙴𝙰𝙻𝙸𝚉𝙰 A 𝙱𝚄𝚂CA 𝙳𝙴 𝚅𝙸𝙳𝙴𝙾𝚂 𝙲𝙾M O 𝙲𝙾𝙼𝙰𝙽𝙳𝙾  ${usedPrefix}xnxxsearch <texto>*`;
        }
      }
    }
    const res = await xnxxdl(xnxxLink);
    const json = await res.result.files;
    conn.sendMessage(m.chat, {document: {url: json.high}, mimetype: 'video/mp4', fileName: res.result.title}, {quoted: m});
  } catch {
    throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 TENTE NOVAMENTE*\n\n*- ESCREVA UMA URL 𝚂𝙸𝙼𝙸𝙻𝙰𝚁 𝙰:*\n*◉ https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*';
  }
};
handler.command = /^(xnxxdl)$/i;
export default handler;

async function xnxxdl(URL) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = $('meta[property="og:title"]').attr('content');
      const duration = $('meta[property="og:duration"]').attr('content');
      const image = $('meta[property="og:image"]').attr('content');
      const videoType = $('meta[property="og:video:type"]').attr('content');
      const videoWidth = $('meta[property="og:video:width"]').attr('content');
      const videoHeight = $('meta[property="og:video:height"]').attr('content');
      const info = $('span.metadata').text();
      const videoScript = $('#video-player-bg > script:nth-child(6)').html();
      const files = {
        low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
        high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
        HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
        thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
        thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
        thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
        thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1]};
      resolve({status: 200, result: {title, URL, duration, image, videoType, videoWidth, videoHeight, info, files}});
    }).catch((err) => reject({code: 503, status: false, result: err}));
  });
}
