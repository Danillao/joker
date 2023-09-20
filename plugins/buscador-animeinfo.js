import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] INSIRA O NOME DE ALGUM ANIME A BUSCAR*`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `
🎀 • *Título:* ${result.title}
🎋 • *Formato:* ${result.type}
📈 • *Estado:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
🍥 • *Episodios total:* ${result.episodes}
🎈 • *Duração: ${result.duration}*
✨ • *Lançado em:* ${result.source.toUpperCase()}
💫 • *Estreia* ${result.aired.from}
🎗 • *Finalizado:* ${result.aired.to}
🎐 • *Popularidade:* ${result.popularity}
🎏 • *Favoritos:* ${result.favorites}
🎇 • *Classificação:* ${result.rating}
🏅 • *Rango:* ${result.rank}
♦ • *Trailer:* ${result.trailer.url}
🌐 • *URL:* ${result.url}
🎆 • *Background:* ${resultes.text}
❄ • *Ringkasan:* ${resultes2.text}`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*[❗] ERROR, TENTE NOVAMENTE*`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;
