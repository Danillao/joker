import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] ESCREVA UM LINK DO 𝙶𝙸𝚃𝙷𝚄𝙱, 𝙴X𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://github.com/Danillao/joker*`;
  if (!regex.test(args[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙸𝙽𝙺 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝚃𝙾!*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄M 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 ENQUANDO ENVIO 𝚂E𝚄 𝙰𝚁QU𝙸𝚅𝙾, SE NÃO FOI 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 PODE SER QUE O REPOSITORIO SEJA MUITO PESADO*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = /gitclone/i;
export default handler;
