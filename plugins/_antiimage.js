import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = await (await fetch(pp)).arrayBuffer();
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];

  if (!m.messageStubType || !m.isGroup) return !0;

  // Verifique se a mensagem é do tipo imagem (tipo 3)
  if (m.messageStubType === 3) {
    // A mensagem é uma imagem, faça o que você precisa aqui
    console.log(`Mensagem de imagem recebida em ${m.chat}`);
    let txt7 = `*Foi enviado uma imagem no grupo.*\n\n`;
    txt7 += `*◦  Grupo:* ${groupName}\n`;
    txt7 += `*◦  Executado por:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsContentM});
  }
}
