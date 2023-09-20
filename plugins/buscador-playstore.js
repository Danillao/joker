import gplay from 'google-play-scraper';

const handler = async (m, {conn, text}) => {
  if (!text) throw '*[❗] INSIRA O NOME D𝙰 𝙰𝙿𝙺 𝚀𝚄𝙴 𝚀𝚄𝙴𝚁 𝙱𝚄𝚂𝙲𝙰𝚁*';
  let res = await gplay.search({term: text});
  if (!res.length) throw `*[❗] INSIRA O NOME D𝙰 𝙰𝙿𝙺 𝚀𝚄𝙴 𝚀𝚄𝙴𝚁 𝙱𝚄𝚂𝙲𝙰𝚁*`;
  const opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };
  await console.log(res);
  res = res.map(
      (v) =>
        `*🔍 Resultado:* ${v.title}
       *✍️ Developer:* ${v.developer}
       *💸 Preço:* ${v.priceText}
       *📈 Pontuaçãn:* ${v.scoreText}
        *⛓️ Link:* ${v.url}`,
  ).join`\n\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet'];
handler.command = /^(playstore)$/i;
export default handler;
