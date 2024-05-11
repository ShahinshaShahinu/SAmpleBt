const bot = require("./Api/Bot_Token");
const fs=require('fs')
const path = require("path");
const MoonDir = path.resolve(__dirname, "./img/Moon");
function SunFunction(chatId, username) {
  console.log(" SunFunction  working ", username);
  bot.sendMessage(chatId, username + " is a SunFunction ");

  fs.readdir(MoonDir, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    // Loop through the files and add them to the media array
    for (let i = 0; i < files.length; i += 10) {
      const batch = files.slice(i, i + 10);

      const media = [];

      batch.forEach((file) => {
        media.push({
          type: "photo",
          media: `${MoonDir}/${file}`,
        });
      });

      bot.sendMediaGroup(chatId, media);
    }
  });
}

module.exports = SunFunction;

    