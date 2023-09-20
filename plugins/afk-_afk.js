export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  *[❗𝐈𝐍𝐅𝐎❗] DESEJA FICAR INATIVO (𝙰𝙵𝙺)${user.afkReason ? ' ESTA INATIVO (𝙰𝙵𝙺) 𝙿𝙾𝚁 𝙼𝙾𝚃𝙸𝚅𝙾: ' + user.afkReason : ''}*
  
  *—◉ 𝚃𝙴𝙼𝙿𝙾 𝙳𝙴 𝙸𝙽𝙰𝚃𝙸𝚅𝙸𝙳𝙰𝙳E (𝙰𝙵𝙺): ${(new Date - user.afk).toTimeString()}*
  `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`*[❗] MARQUE O USUARIO [❗]*

*—◉ O 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚀𝚄𝙴 VOCE 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙾U 𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝚃𝙸𝚅𝙾 (𝙰𝙵𝙺)*      
*—◉ ${reason ? '𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴 𝙸𝙽𝙰𝚃𝙸𝚅𝙸𝙳𝙰𝙳E (𝙰𝙵𝙺): ' + reason : '𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴 𝙸𝙽𝙰𝚃𝙸𝚅𝙸𝙳𝙰𝙳E (𝙰𝙵𝙺): _O 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 NÃO TEM 𝙼𝙾𝚃𝙸𝚅𝙾_'}*
*—◉ 𝚃𝙴𝙼𝙿𝙾 𝚃𝚁𝙰𝙽𝚂𝙲O𝚁𝚁𝙸𝙳𝙾 𝙳𝙴 𝙸𝙽𝙰𝚃𝙸𝚅𝙸𝙳𝙰𝙳E (𝙰𝙵𝙺): ${(new Date - afkTime).toTimeString()}*
  `.trim());
  }
  return true;
}
