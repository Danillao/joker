const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull = `*Opção:* ✨ | WELCOME
*Comando:* ${usedPrefix + command} welcome
*Descrição:* Ativa ou Desativa as boas vindas do grupo.

--------------------------------

*Opção:* 🌎 | MODO PUBLICO
*Comando:* ${usedPrefix + command} public
*Descrição:* O Bot esta em uso publico e/ou privado.
*Nota:* Este comando so pode ser usado por owners do Bot.

--------------------------------

*Opção:* 🥵 | MODO HORNY
*Comando:* ${usedPrefix + command} modohorny
*Descrição:* Ativa ou Desativa os comandos +18 do grupo.

--------------------------------

*Opção:* 🔗 | ANTILINK
*Comando:* ${usedPrefix + command} antilink
*Descrição:* Ativa ou Desativa o anti-link de WhatsApp.
*Nota:*Se necessario mantenha ativo ou restrito.

--------------------------------

*Opção:* 🔗 | ANTILINK 2
*Comando:* ${usedPrefix + command} antilink2
*Descrição:* Ativa ou Desativa o anti-link que inician en HTTPS.
*Nota:* Se necessario mantenha ativo ou restrito.

--------------------------------

*Opção:* 🔎 | DETECT
*Comando:* ${usedPrefix + command} detect
*Descrição:* Ativa ou desativa as notificações do grupo.

--------------------------------

*Opção:* 🔎 | DETECT 2
*Comando:* ${usedPrefix + command} detect2
*Descrição:* Detecta modificações do grupo e mantem uma melhor gestão.

--------------------------------

*Opção:* ❗ | RESTRICT
*Comando:* ${usedPrefix + command} restrict
*Descrição:* Ativa ou Desativa as restrições do Bot, como de kikar ou adicionar pessoas a um grupo.
*Nota:* Este comando so poderá ser usado por owners do Bot.

--------------------------------

*Opção:* ☑️ | AUTOREAD
*Comando:* ${usedPrefix + command} autoread
*Descrição:* Marca como lido as mensajes e os estados automáticamente.
*Nota:* Este comando so poderá ser usado por owners do Bot.

--------------------------------

*Opção:* 🔊 | AUDIOS
*Comando:* ${usedPrefix + command} audios
*Descrição:* Ativa ou Desativa os comandos de audios sem prefixos, no grupo.

--------------------------------

*Opção:* 👾 | AUTOSTICKER
*Comando:* ${usedPrefix + command} autosticker 
*Descrição:* Todas as imagens ou videos enviados no grupo se convertem em stickers. 

--------------------------------

*Opção:* 💬 | PCONLY
*Comando:* ${usedPrefix + command} pconly
*Descrição:* O Bot só responderá aos comandos caso seja um chat privado.
*Nota:* Este comando solo poderá ser usado por owners dO Bot.

--------------------------------

*Opção:* 🏢 | GCONLY
*Comando:* ${usedPrefix + command} gconly
*Descrição:* O Bot só responderá aos comandos caso seja um grupo. 
*Nota:* Este comando so poderá ser usado por owners do Bot.

--------------------------------

*Opção:* ❌ | ANTIVIEWONCE 
*Comando:* ${usedPrefix + command} antiviewonce
*Descrição:* As imagens enviadas com vizualização unica, são reenviadas normal pelo Bot. 

--------------------------------

*Opção:* 📵 | ANTILLAMADAS
*Comando:* ${usedPrefix + command} anticall
*Descrição:* O Bot bloqueará as pessoas que liguem pro Bot. 
*Nota:*  Este comando so poderá ser usado por owners do Bot.

--------------------------------

*Opção:* 💬 | ANTIPRIVADO
*Comando:* ${usedPrefix + command} antiprivado
*Descrição:* O Bot bloqueia as pessoas que escrevam mensagensno privado do Bot. 
*Nota:*  Este comando so poderá ser usado por owners do Bot.

--------------------------------

*Opção:* 🤬 | ANTITOXIC
*Comando:* ${usedPrefix + command} antitoxic
*Descrição:* Detecta palavrões e adverte o participante do grupo, antes de ser eliminado.
*Nota:* Se necessario mantenha ativo ou restrito.

--------------------------------

*Opção:* 🕸️ | ANTITRABAS
*Comando:* ${usedPrefix + command} antitraba
*Descrição:* O Bot detecta textos largos que poderiam ser virus e causar lag no chat e elimina o usuario.
*Nota:* Se necessario mantenha ativo ou restrito.

--------------------------------

*Opção:* 👎 | ANTIARABES
*Comando:* ${usedPrefix + command} antiarabes
*Descrição:* Se um numero árabe entrar no grupo, o Bot o elimina automaticamente.
*Nota:* Se necessario mantenha ativo o welcome ou restrito.

--------------------------------

*Opção:* 👎 | ANTIARABES 2
*Comando:* ${usedPrefix + command} antiarabes2
*Descrição:* Se um numero árabe escrever e mandar mensagem no grupo, o Bot o elimina automaticamente.
*Nota:* Se necessario mantenha ativo ou restrito.

--------------------------------

*Opção:* 🤖 | MODEJADIBOT
*Comando:* ${usedPrefix + command} modejadibot
*Descrição:* Ativa ou Desativa o uso do comando para sub bots (${usedPrefix}serbot / ${usedPrefix}jadibot). 
*Nota:* Este comando so poderá ser usado por owners do Bot.

--------------------------------

*Opção:* 👑 | MODOADMIN
*Comando:* ${usedPrefix + command} modoadmin
*Descrição:* O Bot só responderá aos admins do grupo.

--------------------------------

*Opção:* 😃 | SIMSIMI
*Comando:* ${usedPrefix + command} simsimi
*Descrição:* O Bot irá responder as mensagens usando a IA de SimSimi.

--------------------------------

*Opção:* ⏳ | ANTISPAM
*Comando:* ${usedPrefix + command} antispam
*Descrição:* O Bot detecta quando um usuario faz spam de comando e o bane por 5 segundos e o adverte.
*Nota:* Este comando so poderá ser usado por owners do Bot.

--------------------------------

*Opção:* 🛡️ | ANTIDELETE
*Comando:* ${usedPrefix + command} antidelete
*Descrição:* O Bot detecta quando um usuario deleta uma mensagem e a reenvia.

--------------------------------

*Opção:* 🔊 | AUDIOS_BOT
*Comando:* ${usedPrefix + command} audios_bot
*Descrição:* Desativa os audios do Bot do menuaudios para todos os chats privados.
*Nota:* Este comando so poderá ser usado por owners do Bot.`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;
      break;
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `🗂️ OPÇÃO: ${type}\n🎚️ ESTADO: ${isEnable ? 'ATIVADO' : 'DESATIVADO'}\n📣 𝐏𝐀𝐑𝐀: ${isAll ? 'ESTE BOT' : isUser ? '' : 'ESTE CHAT'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;
