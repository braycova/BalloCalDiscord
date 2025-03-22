const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('help')
      .setDescription('View all available commands'),

  async execute(interaction){
    const embed = new EmbedBuilder()
        .setColor(0xb46d3e)
        .setAuthor({name: "Ballocal's Help Guide", iconURL: interaction.client.user.displayAvatarURL()})
        .addFields({name: "Utility", value: "- `/about` - View why this bot a thing\n- `/help` - You're viewing it right now\n- `/ping` - View latency"})
        .setFooter({text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL()})

    interaction.reply({embeds: [embed]})
  }
}