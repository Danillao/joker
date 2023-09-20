import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗]RESPONDA AO 𝚅𝙸𝙳𝙴𝙾 𝚀𝚄𝙴 DESEJA CONVERTER 𝙰 𝙰𝚄𝙳𝙸𝙾/𝙼𝙿𝟹*`;
  const media = await q.download();
  if (!media) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, OCORREU UM ERRO AO BAIXAR 𝚂E𝚄 𝚅𝙸𝙳𝙴𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 TENTE NOVAMENTE*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, OCORREU UM ERRO 𝙰O 𝙲𝙾𝙽𝚅𝙴𝚁𝚃E𝚁 𝚂𝚄A 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉 EM 𝙰𝚄𝙳𝙸𝙾/𝙼𝙿𝟹, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 TENTE NOVAMENTE*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^to(mp3|audio)$/i;
export default handler;
