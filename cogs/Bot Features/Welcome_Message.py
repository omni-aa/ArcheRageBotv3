import discord
from discord.ext import commands


class WelcomeCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_member_join(self, member):
        # Create a welcome Embed
        welcome_embed = discord.Embed(
            title=f"Welcome to the server, {member.display_name}!",
            description="We're glad to have you here!",
            color=0x00ff00  # Green color
        )

        # Add a field to explain verification process
        welcome_embed.add_field(
            name="**Welcome**",
            value="Welcome to the Aurora Discord a repository for all things ArcheRage Related \n"
            "- https://discord.com/channels/1271649288791003217/1271660354061074432 Guides/Links"
        )

        # Fetch avatar URL from member.avatar
        avatar_url = member.avatar.url if member.avatar else member.default_avatar.url
        welcome_embed.set_thumbnail(url=avatar_url)

        # Send the welcome Embed via Direct Message
        try:
            await member.send(embed=welcome_embed)
        except discord.errors.Forbidden:
            print(f"Failed to send welcome DM to {member.name}#{member.discriminator}. Direct Messages are disabled.")

        # Get the welcome channel (you need to replace 'welcome_channel_id' with the actual ID of your welcome channel)
        welcome_channel = member.guild.get_channel(1271671670175830036)

        if welcome_channel:
            # Send the welcome Embed in the welcome channel
            await welcome_channel.send(embed=welcome_embed)


async def setup(bot):
    await bot.add_cog(WelcomeCog(bot))
