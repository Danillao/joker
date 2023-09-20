import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] INSIRA O NOME DE UM USUARIO DO 𝚃𝙸𝙺𝚃𝙾𝙺*';
  const res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
  conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ] 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙰 𝙵𝙾𝚃𝙾 𝙳𝙴 𝙿𝙴𝚁𝙵𝙸𝙻 𝙳𝙴 ${text}*`, m, false);
};
handler.help = ['tiktokfoto'].map((v) => v + ' <username>');
handler.tags = ['downloader'];
handler.command = /^(tiktokfoto|pptiktok)$/i;
export default handler;
