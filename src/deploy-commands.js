import { REST, Routes } from 'discord.js';
import fs from 'node:fs'; 
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import config from '../config.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = await import(pathToFileURL(filePath).href);
    if ('data' in command && 'execute' in command) {
      commands.push(command.data.toJSON());
    } else {
      console.log(`[WARNING] The command at ${filePath} is missing a "data" or "execute" property, which is required!`);
    }
  }
}

const rest = new REST().setToken(config.token);

(async () => {
  try {
    console.log(`Refreshing ${commands.length} application (/) commands..`);

    const data = await rest.put(
        Routes.applicationCommands(config.clientId),
        { body: commands },
    );

    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {
    console.error(error);
  }
})();
