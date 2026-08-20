module.exports = {
  game: {
    url: process.env.GAME_URL || "https://idlemmo.com",
    updateInterval: parseInt(process.env.UPDATE_INTERVAL) || 5000
  },
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN,
    chatId: process.env.TELEGRAM_CHAT_ID
  },
  automation: {
    autoQuest: process.env.AUTO_QUEST === "true",
    autoCombat: process.env.AUTO_COMBAT === "true",
    autoFarm: process.env.AUTO_FARM === "true"
  }
};
