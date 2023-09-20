import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`);
    const $ = cheerio.load(link.data);
    const judul = $('#firstHeading').text().trim();
    const thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
    const isi = [];
    $('#mw-content-text > div.mw-parser-output').each(function(rayy, Ra) {
      const penjelasan = $(Ra).find('p').text().trim();
      isi.push(penjelasan);
    });
    for (const i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i}};
      return data;
    }
  } catch (err) {
    const notFond = {
      status: link.status,
      Pesan: eror};
    return notFond;
  }
}
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗️𝐈𝐍𝐅𝐎❗️] ESTA USANDO ERRADO O COMANDO 𝙲𝙾𝙼𝙰𝙽𝙳𝙾!!*\n*𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝚃𝙾:*\n*${usedPrefix + command} 𝙿𝚊𝚕𝚊𝚋𝚛𝚊 𝚌h𝚊𝚟𝚎 para 𝚋𝚞𝚜𝚌𝚊𝚛*\n\n*𝙴X𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Estrelas*`;
  wikipedia(`${text}`).then((res) => {
    m.reply(`*𝙰𝚀𝚄𝙸 TEM A INFORMAÇÃO ENCONTRADA:*\n\n` + res.result.isi);
  }).catch(() => {
    m.reply('*[❗️𝐈𝐍𝐅𝐎❗️] NÃO FOI ENCONTRADO NENHUMA INFORMAÇÃO, PESQUISE NOVAMENTE ATENÇÃO A 𝙴𝚂𝙲𝚁𝙸TA DA PALAVRA*');
  });
};
handler.help = ['wikipedia'].map((v) => v + ' <apa>');
handler.tags = ['internet'];
handler.command = /^(wiki|wikipedia)$/i;
export default handler;
