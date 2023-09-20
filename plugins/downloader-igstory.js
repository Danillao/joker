const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] INSIRA UM NOME DE 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙳O 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼:*\n\n*𝙴X𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} luisitocomunica*`;
  await m.reply(global.wait);
  const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`);
  const anu = await res.json();
  const anuku = anu.result;
  if (anuku == '') return m.reply('*[❗] 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 INVALIDO OU SEM STORIES*');
  for (const i of anuku) {
    const res = await axios.head(i);
    const mime = res.headers['content-type'];
    if (/image/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => {
        return m.reply('*[❗] 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 INVALIDO OU SEM STORIES*');
      });
    }
    if (/video/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => {
        return m.reply('*[❗] 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 INVALIDO OU SEM STORIES*');
      });
    }
  }
};
handler.help = ['igstory <username>'];
handler.tags = ['downloader'];
handler.command = ['igstory', 'ighistoria'];
export default handler;
