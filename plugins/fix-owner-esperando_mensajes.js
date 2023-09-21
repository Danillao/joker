/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import {readdirSync, unlinkSync, existsSync, promises as fs, rmSync} from 'fs';
import path from 'path';

const handler = async (m, {conn, usedPrefix}) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*[❗] Utilize o comando diretamente no número principal do Bot.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: '*[❗] Iniciando processo de eliminação de todos os arquivos da session, exceto o arquivo creds.json...*'}, {quoted: m});
  const sessionPath = './MysticSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, {text: '*[❗] A pasta MysticSession não existe ou está vazia.*'}, {quoted: m});
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*[❗]  Não foi encontrado nenhum arquivo na pasta MysticSession.*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*[❗] Foi eliminado ${filesDeleted} arquivos da session, exceto o arquivo creds.json.*`}, {quoted: m});
    }
  } catch (err) {
    console.error('Error ao ler a pasta e os arquivos da session:', err);
    await conn.sendMessage(m.chat, {text: '*[❗] Ocorreu um error ao eliminar os arquivos da session.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*👋 ¡Olá! Agora me Percebe ?*\n\n*[❗] Se o Bot não responde aos comandos por favor faça um pequeno spam*\n\n*—◉ Exemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|dsowner|clearallsession)$/i;
handler.rowner = true;
export default handler;
