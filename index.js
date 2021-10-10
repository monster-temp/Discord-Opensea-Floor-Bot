
const axios = require("axios");
const config = require('dotenv').config()
const Discord = require("discord.js")
const client = new Discord.Client()
const OpenseaScraper = require("./src/OpenseaScraper.js");
const puppeteer = require('puppeteer-extra');



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  
  client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "Using !help",  //The message shown
            type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
  
  
  
  
})
client.login(process.env.TOKEN)


const bot = "895653902865805333";

const slug = "northern-guilds-guild-of-thor";
console.log(`=== ${slug} ===`);


/*const getfloor = async () => {
  const fl = await axios.get(
    `https://api.opensea.io/api/v1/asset/0xc2b3daf1b51238bd13afcef6e713813e6c2574e8/1`
  );

  return `Current Floor Price is \`${fl.data.collection.stats.floor_price} ETH\``;
};*/


const example1 = 'Chicken';
const example2 = 'Nuggets';
console.log(`My favorite food is ${example1} salted ${example2}.`); 






client.on("message", async (message) => {
  if((message.author.id !== bot)) {

 if(message.content === "!floor") {
if (message.channel.id === '894858032150896640') {


const basicInfo = await OpenseaScraper.basicInfo(slug);
  console.log(`basic info (taken from the opensea API):`);
  console.log(basicInfo);

  // get the current floor price
  console.log("scraping floor price...")
  const floorPrice = await OpenseaScraper.floorPrice(slug, "debug");
  console.log(`...done! 🔥 \nfloor price = ${floorPrice} ETH`);

message.channel.send(
       
   
            new Discord.MessageEmbed()
                .setTimestamp()
.setColor ('#fa8072')

                .setTitle("The current floor is "+ `${floorPrice}` +" ETH")
                .setDescription(`${basicInfo}` + " Holders")
    




     );

 //  const channelId = '895445810609807431'
 // client.channels.cache.get('895445810609807431').setName(`${floorPrice}` +" ETH")


 }
  }

  }
});
/*(async () => {
const basicInfo = await OpenseaScraper.basicInfo(slug);
  console.log(`basic info (taken from the opensea API):`);
  console.log(basicInfo);

  // get the current floor price
  console.log("scraping floor price...")
  const floorPrice = await OpenseaScraper.floorPrice(slug, "debug");
  console.log(`...done! 🔥 \nfloor price = ${floorPrice} ETH`);



   const channelId = '895445810609807431'
  client.channels.cache.get('895445810609807431').setName(`${floorPrice}` +" ETH")
})();
*/




/*

client.on("message", async (message) => {
  if((message.author.id !== bot)) {

 if(message.content === "!floor") {
       const floor = await getfloor();
    console.log(floor);
return     message.channel.send(
       
   
            new Discord.MessageEmbed()
                .setTimestamp()
.setColor ('#fa8072')

                .setTitle(floor)
	.
                




     );
  }

  }
});
*/