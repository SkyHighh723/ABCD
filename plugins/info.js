let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: SkY
Script: @Nurotomo(Repost)
Github: 
https://github.com/ABCD/wa-aq

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @skyhighh72
➥ YouTube:
youtube.com/----------

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Xl: 0878-7745-1059
╠➥ Xl2: 0819-4990-4856
╠➥ Indosat: 0857-1364-3454
║>Request? Wa.me/6287877451059
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

