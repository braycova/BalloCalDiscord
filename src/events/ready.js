import { Events, ActivityType } from 'discord.js';
import { MongoClient } from 'mongodb';
import config from '../../config.json' with { type: 'json' };

let statusList = [
  {
    type: ActivityType.Custom,
    name: "cat melon",
    state: ":3"
  },
  {
    type: ActivityType.Custom,
    name: "woah, i can do this?",
    state: "i have a rotating status :D"
  },
  {
    type: ActivityType.Custom,
    name: "lucia noise complaints",
    state: "balls"
  },
  {
    type: ActivityType.Streaming,
    name: "palo cereal.",
    url: 'https://www.youtube.com/watch?v=pKVzd8k7VsA',
    state: "best ad known to man"
  },
]

async function connectToDB() {
  const client = new MongoClient(config.mongoUri);

  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 })
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error(`(X) MongoDB Connection failed. Please review:\n${error}`);
  }
}

export const name = Events.ClientReady;
export const once = true;

export async function execute(client) {
  // client.user.setPresence({
  //   status: "online",
  //   activities: [{
  //     type: ActivityType.Custom,
  //     state: "test state test lol"
  //   }]
  // })
  let index = 0;
  setInterval(() => {
    client.user.setActivity(statusList[index]);
    index = (index + 1) % statusList.length;
  }, 15000);

  await connectToDB();
  console.log(`${client.user.username} is now online!`);
}