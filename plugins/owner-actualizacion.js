// adartado por mario (Aka: un ladrón de código)

import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
let previousCommitUser = '';
const owner = 'Danillao';
const repo = 'joker';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  conn.sendMessage(m.chat, {text: `*[❗] Comando ativado com êxito, te notificaremos quando acontecer algo com o repositorio oficial.*`}, {quoted: m});
  try {
    async function checkRepoUpdates() {
      try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
        const {sha, commit: {message}, html_url, author: {login}} = response.data[0];

        if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
          previousCommitSHA = sha;
          previousUpdatedAt = message;
          previousCommitUser = login;
          conn.sendMessage(m.chat, {text: `*[❗] ¡O repositorio foi atualizado!*\n*- Repositorio:* ${html_url}\n*- Mensagem de commit:* ${message}\n*- Commit por:* ${login}`}, {quoted: m});
        }
      } catch (error) {
        console.error(error);
        m.reply('*[❗] Error ao verificar o repositorio*');
      }
    }
    setInterval(checkRepoUpdates, 6000);
  } catch (e) {
    m.reply(e);
  }
};
handler.command = /^(actualizar|actualizacion)/i;
handler.rowner = true;
export default handler;
