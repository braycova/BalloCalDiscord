const { Events, MessageFlags } = require('discord.js');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.error(`[X] No command was found for ${interaction.commandName}`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: '<:spike:1325681519230193735> Ballocal has dropped the ball. An error has occurred, issue reported.', flags: MessageFlags.Ephemeral });
      } else {
        await interaction.reply({ content: '<:spike:1325681519230193735> Ballocal has dropped the ball. An error has occurred, issue reported.', flags: MessageFlags.Ephemeral });
      }
    }
  },
};
