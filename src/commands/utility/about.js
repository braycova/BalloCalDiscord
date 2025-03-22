const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('about')
      .setDescription('View why this bot is a thing'),

  async execute(interaction){
    const embed = new EmbedBuilder()
        .setColor(0xb46d3e)
        .setAuthor({ name: "About Ballocal", iconURL: interaction.client.user.displayAvatarURL() })
        .setDescription("Ballocal is a discord bot, tasked with keeping track of events for Ballistimite Paradise, or Ballodise, as it's often referred to :3")
        .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })

    interaction.reply({embeds: [embed]})
  }
}