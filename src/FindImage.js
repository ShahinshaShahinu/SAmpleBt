const bot = require("./Api/Bot_Token");
const fs=require('fs')
const path = require("path");
const aslamDir = path.resolve(__dirname, "./img/Salim");
function salimFunction(chatId, username) {
  console.log(" salim function working ", username);
  bot.sendMessage(chatId, username + " is a Va... Vasuuu");

  fs.readdir(aslamDir, (err, files) => {
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
          media: `${aslamDir}/${file}`,
        });
      });

      bot.sendMediaGroup(chatId, media);
    }
  });
}

module.exports =  salimFunction ;

    