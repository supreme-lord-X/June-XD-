=const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "p",
    alias: "speed",
    desc: "Check bot's response time.",
    category: "main",
    react: "💫",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        const startTime = Date.now();

        // Add a short delay
        await new Promise(resolve => setTimeout(resolve, 100)); // 100M/s delay

        const endTime = Date.now();
        const ping = endTime - startTime;

        // Send the ping result
        await conn.sendMessage(from, { 
            text: `*⚡JUNE⚡ SPEED: ${ping}M/s*`, 
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363288304618280@newsletter',
                    newsletterName: '🪀🌏 JUNE-XD PING SPEED ⚡',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});

// ping2 

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "🚀",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '> *SPEED...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*JUNE-XD🚀 SPEED : ${ping}M/s*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
