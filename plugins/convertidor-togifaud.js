/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*[❗𝐈𝐍𝐅𝐎❗] RESPONDA AO 𝚅𝙸𝙳𝙴𝙾 𝚀𝚄𝙴 DESEJA CONVERTER EM 𝙶𝙸𝙵 𝙲𝙾M 𝙰𝚄𝙳𝙸𝙾*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*[❗] O 𝚃𝙸𝙿𝙾 𝙳𝙴 𝙰𝚁QU𝙸𝚅𝙾 ${mime} 𝙽ÃO É 𝙲𝙾𝚁𝚁𝙴𝚃𝙾, RESPONDA AO 𝚅𝙸𝙳𝙴𝙾 𝚀𝚄𝙴 DESEJA CONVERTER 𝙴M 𝙶𝙸𝙵 𝙲𝙾M 𝙰𝚄𝙳𝙸𝙾*`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*ᴀϙᴜɪ ᴇsᴛᴀ seᴜ ɢɪғ com ᴀᴜᴅɪᴏ, ao ᴀʙʀɪʀ ʀᴇᴘʀᴏᴅᴜz ᴏ ᴀᴜᴅɪᴏ*'}, {quoted: m});
};
handler.command = ['togifaud'];
export default handler;
