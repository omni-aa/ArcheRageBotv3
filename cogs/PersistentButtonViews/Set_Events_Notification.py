import discord
from discord.ext import commands
from discord import ui
from configparser import ConfigParser

config = ConfigParser()
config.read('config.ini')
ping_role = config['BotSettings']['Allow_Ping_Role']


class Roles(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    @commands.has_permissions(manage_messages=True)  # Adjust permissions as needed
    async def d(self, ctx):
        embed = discord.Embed(title="ArcheRage Event Pings",
                              description="Click the Button below if you would like to receive Event Pings")
        embed.set_image(url="https://static.wikia.nocookie.net/archeage/images/a/a8/Marianople_ingame.jpg/revision/latest/scale-to-width-down/1000?cb=20140809202321")
        message = await ctx.send(embed=embed, view=ArcheRage_Event_Notification())
        await ctx.message.delete()

    @d.error
    async def d_error(self, ctx, error):
            await ctx.send(str(error), ephemeral=True)


class ArcheRage_Event_Notification(discord.ui.View):
    def __init__(self):
        super().__init__(timeout=None)

    # This is the persistent B
    @discord.ui.button(label="Set Event Notification", custom_id="Notif", style=discord.ButtonStyle.blurple)
    async def button1(self, interaction, button):
        role_id = ping_role
        user = interaction.user
        role = interaction.guild.get_role(role_id)
        if role:
            if role in user.roles:
                await user.remove_roles(role)
                await interaction.response.send_message("❌ You have removed a role!", ephemeral=True)
            else:
                await user.add_roles(role)
                await interaction.response.send_message("✅ You have added a role!", ephemeral=True)
        else:
            await interaction.response.send_message("Role not found.", ephemeral=True)


async def setup(client):
    await client.add_cog(Roles(client))
