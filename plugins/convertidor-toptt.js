import {toPTT} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
  if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰O 𝚅𝙸𝙳𝙴𝙾 𝙾U 𝙰𝚄𝙳𝙸𝙾 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴JA 𝙲𝙾𝙽𝚅𝙴𝚁𝚃ER EM 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*`;
  const media = await q.download?.();
  if (!media && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, OCORREU UM 𝙴𝚁𝚁𝙾𝚁 AO BAIXAR 𝚂E𝚄 𝚅𝙸𝙳𝙴𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 TENTE NOVAMENTE*';
  if (!media && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, OCORREU UM 𝙴𝚁𝚁𝙾𝚁 𝙰O BAIXAR 𝚂E𝚄 𝙰𝚄𝙳𝙸𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 TENTE NOVAMENTE*';
  const audio = await toPTT(media, 'mp4');
  if (!audio.data && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, OCORREU UM 𝙴𝚁𝚁𝙾𝚁 AO CONVERTER SEU 𝙰𝚄𝙳𝙸𝙾 EM 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 TENTE NOVAMENTE*';
  if (!audio.data && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, OCORREU UM 𝙴𝚁𝚁𝙾𝚁 AO CONVERTER SEU 𝚅𝙸𝙳𝙴𝙾 EM 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 TENTE NOVAMENTE*';
  const aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, {mimetype: 'audio/mpeg'});
  if (!aa) return conn.sendMessage(m.chat, {audio: {url: media}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};
handler.help = ['tovn (reply)'];
handler.tags = ['audio'];
handler.command = /^to(vn|(ptt)?)$/i;
export default handler;
