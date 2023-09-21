/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`
*┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┇          「 DOAR 」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┃ Olá ${name}*
*┃*
*┃ 👉🏻 𝙰𝚀𝚄𝙸 ALGUNS DADOS*
*┃ CASO QUEIRA APOIAR O PROJETO :𝟹*
*┃*
*┃ ➤ CHAVE:* 
*┃ 000000000000000000*
*┃ ➤ 𝙱𝙰𝙽𝙲𝙾: BR* 
*┃ ➤ 𝙱𝙴𝙽𝙴𝙵𝙸𝙲𝙸𝙰𝚁𝙸𝙾: JOKER BOT* 
*┃ ➤ TIPO: APOIO*  
*┃ ➤ 𝙿𝙰𝚈𝙿𝙰𝙻: https://www.paypal.me/
*┃*
*┃ 👉🏻 𝙲𝙾𝙽𝚃𝙰𝚃E-𝙼𝙴 𝚂E PRECISA DE *
*┃ 𝙼AIS DADOS OU AINDA NÃO TE AGRADECI*
*┃ wa.me/55998149521*
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|donar|apoyar$/i;
export default handler;
