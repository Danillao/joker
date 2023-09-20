export async function before(m, {match}) {
  if (!m.chat.endsWith('@s.whatsapp.net')) {
    return !0;
  }
  this.anonymous = this.anonymous ? this.anonymous : {};
  const room = Object.values(this.anonymous).find((room) => [room?.a, room?.b].includes(m.sender) && room?.state === 'CHATTING');
  if (room) {
    if (/^(next|leave|start)/.test(m.text)) {
      const other = [room?.a, room?.b].find((user) => user !== m.sender);
      if (other) {
        await m.copyNForward(other, true);
      } else {
        conn.sendMessage(m.chat, {text: `*[❗] Não está em um chat, por favor espere estar em um.*`}, {quoted: m});
      }
    }
  } else {
    if (!/^(next|leave|start)/.test(m.text)) {
      return;
    }
    conn.sendMessage(m.chat, {text: `*[❗] Não está em um chat, por favor espere estar em um.*`}, {quoted: m});
  }
  return !0;
}
