import { Typography } from '@material-ui/core';
import Ability from 'components/Ability';
import ItemLink from 'components/Item/ItemLink';
import Link from 'components/Link';
import MapEmbed from 'components/MapEmbed';
import SkillLink from 'components/Skill/SkillLink';
import { GUIDE_CATEGORY } from 'constants/guides';
import { ITEM } from 'constants/items';
import { ZONE } from 'constants/map';
import { SKILL } from 'constants/skills';
import React from 'react';

export const name = 'Red Dragon\'s Keep';

const meta = {
  author: 'Mokulu',
  lastUpdated: 'Nov 25, 2019',
};

const category = GUIDE_CATEGORY.INSTANCES;

export const sections = Object.freeze([
  {
    title: 'Overview',
    paragraphs: [
      'Red Dragon\'s Keep is an instanced raid of 50 players, requiring 6000 equipment points to enter, fighting against the coveted Red Dragon of Karkasse Ridgelands.',
      <Typography>This instance is only available on certain days of the week. To see when it's
        available next, please see the <Link to="/schedule">Event Schedule</Link> page.</Typography>,
      <Typography>For successfully killing the Red Dragon, you'll receive a <ItemLink
        id={ITEM.RED_DRAGON_POUCH} /> that contains a bunch of goodies.</Typography>,
      'The fight has several phases, switching back and forth between the dragon being in flight and grounded.',
    ],
  },
  {
    title: 'Preparation',
    paragraphs: [
      <MapEmbed
        zone={ZONE.RED_DRAGONS_KEEP}
        points={[
          { label: 'Red Dragon', icon: 'boss', coords: [{ x: 41, y: 38.5 }] },
          { label: 'Workbench', icon: 1, coords: [{ x: 51.5, y: 51.5 }] },
        ]}
      />,
      'While the server is looking to fill your instance with 50 players (it won\'t start with less), you are able to craft your Red Dragon Harpoon from the workbench near the spawn point, which is free to craft. Every player should get a harpoon.',
      <Typography variant="subtitle2">A note from Legacy: Due to how instances work, when players are spawning in,
        everyone is friendly with one another. It's not until all 50 players are in the instance that they are put into
        a raid and onto a team that's an enemy of the Red Dragon's "team". As a result, any vehicles you summon before
        the raid is formed will stay on the neutral-friendly team. This means that you can summon a car and it will stay
        friendly with the Red Dragon, unable to be harmed by it. This is very useful for mobility during Phase 1. Have
        players stand on a car, with the owner driving it.</Typography>,
    ],
  },
  {
    title: 'Phase 1',
    paragraphs: [
      'The Red Dragon starts the fight flying in the air, making counter-clockwise laps around the keep. This phase ends when the Red Dragon goes below 90% HP.',
      <Typography variant="h6">Abilities</Typography>,
      <Ability
        name="Summon Meteorite"
        description="The Red Dragon will periodically bombard locations near enemies, dealing medium magic damage to enemies caught in the blast and inflicting a Burning debuff for 18 seconds."
        counters={[
          'The delay between the red circle appearing and the explosion hitting is long enough that it can be side-stepped easily.',
          'Players can cleanse the Burning debuff or healers can use heal over time effects to counter its damage.',
        ]}
      />,
      <Ability
        name="Slave of Fire"
        description="The Red Dragon summons Slaves of Fire around players. After a short duration, the slaves will cast Destiny of Fire, causing them towards players and explode, dealing light magic damage around their impact location."
        counters={[
          'The Slaves of Fire can be killed before they impact, preventing the damage from Destiny of Fire. Using a skill like Vicious Implosion can help control them.',
          'The damage from Destiny of Fire can be split by spreading away from other players.',
        ]}
      />,
      <Typography variant="h6">Tactics</Typography>,
      'The only way to damage the Red Dragon is by using the Harpoon that you get from the workbench. It doesn\'t deal a lot of damage and has a 5 seconds cooldown. This phase will most likely take the longest amount of time.',
      'Avoid getting hit by the Summon Meteorite by side-stepping the red circles when you see them and killing Slaves of Fire when they are summoned.',
      'Use your mount or movement speed boosts to run around the center area of the keep to stay within 200m range for the harpoon attack.',
      <Typography variant="subtitle2">If you're using the car trick, you can fire the harpoon while standing on a moving
        car. The driver should be able to keep up with the Red Dragon while driving counter-clockwise around the keep.
        This method can greatly accelerate the speed of getting through this phase, as you will always be in range of
        the Red Dragon to fire your harpoon.</Typography>,
    ],
  },
  {
    title: 'Phase 2',
    paragraphs: [
      'The Red Dragon will land in the center of the keep and become stationary at the start of the phase. Phase 2 ends when the Red Dragon goes below 50% HP.',
      'The abilities above from Phase 1 persist into Phase 2.',
      <Typography variant="h6">Abilities</Typography>,
      <Ability
        name="Summon Red Dragon Worshiper"
        description="The Red Dragon summons a horde of Red Dragon Worshipers to attack its foes."
        counters={[
          'Kill these enemies as fast as you can to not get overwhelmed.',
        ]}
      />,
      <Ability
        name="Earth's Fury"
        description="The Red Dragon stomps the ground around his target, dealing heavy damage to all enemies around in the impact zone."
      />,
      <Ability
        name="Reverse Gravity"
        description="The Red Dragon frequently confines nearby players and lifts them into the air. After a short delay, all players are slammed into the ground, taking heavy damage from Fall Shock."
        counters={[
          <>You can cancel the damage of Fall Shock on yourself to prevent the slam by using <SkillLink
            id={SKILL.SHRUG_IT_OFF} />. You will still take partial damage.</>,
        ]}
      />,
      <Ability
        name="Whiptail"
        description="The Red Dragon turns around, whipping his tail and dealing medium damage to all enemies behind him."
      />,
      <Ability
        name="Typhoon Wings"
        description="The Red Dragon flaps his wings twice, creating massive gusts of wind and knocking back players 30 meters each time."
      />,
      <Ability
        name="Self-Recovery"
        description="The Red Dragon rapidly regenerates health during the duration of the buff. Normally this buff lats for 20 seconds, however the second time its cast it lasts for 60 seconds."
      />,
      <Typography variant="h6">Tactics</Typography>,
      'The tanking player should be facing the Red Dragon away from the raid while everyone else should be stacking behind the Red Dragon\'s legs. The tank will need heavy healing.',
      'It is key here to burn the boss down to around 55%, switching targets to focus the Slaves of Fire and Red Dragon Worshipers when they spawn.',
      'While burning the boss down to phase him, he will undoubtedly cast Self-Recovery at least once, the first cast lasting for 20 seconds. After Self-Recovery expires, DO NOT ATTEMPT TO PUSH FOR PHASE 3. Shortly after the first, he will cast Self-Recovery a second time, but this time lasting for 60 seconds. Keep damaging him through this. If you phase him before he casts this ability, he could cast it while flying in the air which will make it hard to bring him back down into phase 4.',
      'If you are able to out-damage the healing from his second Self-Recovery, try to keep him around 52%. Once it ends, burn him as close as you can to 40%. Pushing him past 50% will trigger phase 3, but the more damage dealt to him before he lifts off will reduce the amount of time spent harpooning in phase 3.',
    ],
  },
  {
    title: 'Phase 3',
    paragraphs: [
      'The Red Dragon will fly back into the sky, continuing his counter-clockwise flight around the keep. This phase will end when he goes below 40% health.',
      'This phase is similar to Phase 1. However, the Red Dragon will continue to cast Reverse Gravity from Phase 2.',
    ],
  },
  {
    title: 'Phase 4',
    paragraphs: [
      'The Red Dragon will land back in the center of the keep. This is the final phase of the fight. He will take less damage due to Burning Revenge.',
      'There are a few additional abilities that he casts that are new from Phase 2, however I don\'t know much about them.',
      <Typography variant="h6">Abilities</Typography>,
      <Ability
        name="Burning Revenge"
        description="Upon landing, the Red Dragon seeks revenge. His hatred causes him to take 50% reduced damage for the next 10 minutes."
      />,
      <Ability
        name="Red Dragon's Pull"
        description="???"
      />,
      <Typography variant="h6">Tactics</Typography>,
      'Continue the fight as you did in Phase 2.',
      'DPS that are still alive or whose Rebirth Trauma has lifted need to burn the boss down in between Self-Recovery windows.',
    ],
  },
]);

export default { name, meta, category, sections };
