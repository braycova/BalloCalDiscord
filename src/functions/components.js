import { ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";

export const createEmbed = (desc, hex = null, title = null, footer = null, thumbnailURL = null, footerURL = null) => {
  return new EmbedBuilder()
      .setDescription(desc)
      .setColor(hex)
      .setTitle(title)
      .setFooter({ text: footer, iconURL: footerURL })
      .setThumbnail(thumbnailURL)
}

export const createButton = (id, label, style = ButtonStyle.Secondary, emoji = null) => {
  return new ButtonBuilder()
      .setCustomId(id)
      .setLabel(label)
      .setStyle(style)
      .setEmoji(emoji);
}