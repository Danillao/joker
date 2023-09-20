import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!/image/g.test(mime)) throw '*[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙾U MARQUE 𝚄M𝙰 𝙸𝙼𝙰𝙶𝙴M*';
  m.reply('*[❗] 𝙲𝙾𝙽𝚅ERTENDO 𝙸𝙼𝙰𝙶𝙴M EM 𝙰𝙽𝙸𝙼𝙴, 𝚂𝙴J𝙰 𝙿𝙰𝙲𝙸𝙴𝙽𝚃𝙴 𝙴 ESPERE O 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾*');
  const data = await q.download?.();
  const image = await uploadImage(data);
  try {
    const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
    await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
  } catch (i) {
    try {
      const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
      await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
    } catch (a) {
      try {
        const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
        await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
      } catch (e) {
        throw '*[❗] 𝙴𝚁𝚁𝙾𝚁, VERIFIQUE SE A IMAGEM ESTA VISIVEL NO 𝚁𝙾𝚂𝚃𝙾 𝙳O PERSONAGEM*';
      }
    }
  }
};
handler.help = ['toanime'];
handler.tags = ['tools'];
handler.command = /^(jadianime|toanime)$/i;
export default handler;
