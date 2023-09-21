import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] INSIRA O COMANDO MAIS O 𝙽𝙾𝙼E DE USUARIO DE ALGUEM DO 𝚃𝙸𝙺𝚃𝙾𝙺*', m);
  try {
    const res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`);
    const res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
    const json = await res.json();
    if (res.status !== 200) throw await res.text();
    if (!json.status) throw json;
    const thumb = await (await fetch(json.result.user_picture)).buffer();
    const Mystic = `
*𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* ${json.result.username}
*NOME:* ${json.result.nickname}
*𝚂𝙴𝙶𝚄𝙸𝙳𝙾𝚁𝙴𝚂:* ${json.result.followers}
*𝚂𝙴𝙶𝚄𝙸N𝙳𝙾:* ${json.result.followings}
*𝙻𝙸𝙺𝙴𝚂:* ${json.result.likes}
*𝚅𝙸𝙳𝙴𝙾𝚂:* ${json.result.video}
*DESCRIÇÃO:* ${json.result.bio}
`.trim();
    conn.sendFile(m.chat, res2, 'error.jpg', Mystic, m, false);
  } catch (e) {
    throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, NÃO FOI ENCONTRADO O NOME DE USUARIO INSERIDO*';
  }
};
handler.help = ['tiktokstalk'].map((v) => v + ' <username>');
handler.tags = ['stalk'];
handler.command = /^(tiktokstalk|ttstalk)$/i;
export default handler;
