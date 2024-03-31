const bot = require("./Api/Bot_Token");
const fs = require("fs");
const salimFunction = require("./FindImage");
const path=require('path')
const aslamDir = path.resolve(__dirname, "./img/Aslam");
const validNames = ["Aslam", "aslam", "Akku", "Muhammed Aslam"];
const SalimNames = [
  "salim",
  "Salim Suhail",
  "salim suhail",
  "salim","salim ",
  "salu",
  "Muhammed salim suhail",
];
let username = ""; // Changed from const to let
let waitingForName = false;

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  console.log(chatId);
  const messageText = msg.text;
  if (messageText === "/Whoiam") {
    waitingForName = true;
    bot.sendMessage(chatId, "Please enter your name:");
  } else if (waitingForName) {
    console.log("tur");
    if (
      validNames.some((name) => {
        if (messageText.toLowerCase().trim() === name.toLowerCase().trim()) {
          username = name;
          return true; // Added return true when match is found
        }
      })
    ) {
      bot.sendMessage(chatId, username + " is a Va... Vasuuu");
    

      fs.readdir(aslamDir, (err, files) => {
        if (err) {
          console.error("Error reading directory:", err);
          console.error("Current directory:", __dirname);

          return;
        }

        // Loop through the files and add them to the media array
        for (let i = 0; i < files.length; i += 10) {
          const batch = files.slice(i, i + 10);

          // Create media and captions arrays for the current batch
          const media = [];
          // const captions = [];

          // Loop through the files in the current batch
          batch.forEach((file) => {
            media.push({
              type: "photo",
              media: `${aslamDir}/${file}`, // Full path to the photo
            });
            // captions.push({ caption: "Your caption here" }); // Add your caption for each photo
          });

          // Send the media group containing the current batch of photos with captions
          bot.sendMediaGroup(chatId, media);
        }
      });
    } else if (
      SalimNames.some((name) => {
        console.log(messageText)
        if (messageText.toLowerCase() === name.toLowerCase()) {
          username = name;
          console.log(username,name ,'kkkk')
          return true;
        }
      })
    ) {
    console.log('function calling now')
      salimFunction(chatId,username);
    } else {
      bot.sendMessage(chatId, "sorry . I couldn't Find Your Details ");
    }
    waitingForName = false;
  } else if (messageText === "/start") {
    const username = msg.from.username;
    bot.sendMessage(
      chatId,
      `Hi ${username}\n` + "Welcome to the FlashFinder_Bot!"
    );
  } else if (
    validNames.some((name) => {
      if (messageText.toLowerCase() === "who is " + name.toLowerCase()) {
        username = name;
        return true; // Added return true when match is found
      }
    })
  ) {
    bot.sendMessage(chatId, username + " is a Vali Vasuuu");
    bot.sendPhoto(chatId, photoPaths);
  } else if (validNames.includes(messageText)) {
    console.log(messageText);
    bot.sendMessage(chatId, "Welcome to " + messageText);
  } else {
    console.log("I couldn't find anything");
    bot.sendMessage(chatId, "I couldn't find anything 😔🥺🥹🥲😭");
  }
});
// server created 
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, world!");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
