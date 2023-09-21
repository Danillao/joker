/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import {readdirSync, unlinkSync, existsSync, promises as fs, rmSync} from 'fs';
import path from 'path';

const handler = async (m, {conn, usedPrefix}) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*[❗] Utilize o comando diretamente no número principal do Bot*'}, {quoted: m});
  }
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = './MysticSession/';
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*[❗] Não foi encontrado nenhum arquivo que inclua o ID do chat*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*[❗] Eliminando ${filesDeleted} arquivos da session*`}, {quoted: m});
    }
  } catch (err) {
    console.error('Error ao ler a pasta com os arquivos da session:', err);
    await conn.sendMessage(m.chat, {text: '*[❗]Ocorreu um erro ao eliminar os arquivos da session*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*👋 ¡Olá! Agora me Percebe ?*\n\n*[❗] Se o Bot não responde aos comandos por favor faça um pequeno spam*\n\n*—◉ Exemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['fixmsgespera'];
handler.tags = ['fix'];
handler.command = /^(fixmsgespera|ds)$/i;
export default handler;
