const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Replies with server information'),
	async execute(interaction) {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nRoles: ${interaction.guild.roles}\nEmojis: ${interaction.guild.emojis}\n Icon: ${interaction.guild.icon}`);
	},
};