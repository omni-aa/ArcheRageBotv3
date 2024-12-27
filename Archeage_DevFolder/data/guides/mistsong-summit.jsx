/* eslint react/jsx-key: 0 */
import { Typography } from '@material-ui/core';
import Ability from 'components/Ability';
import Item from 'components/Item';
import ItemLink from 'components/Item/ItemLink';
import MapEmbed from 'components/MapEmbed';
import SkillLink from 'components/Skill/SkillLink';
import { GUIDE_CATEGORY } from 'constants/guides';
import { ITEM } from 'constants/items';
import { ZONE } from 'constants/map';
import { SKILL } from 'constants/skills';
import React from 'react';

const name = 'Mistsong Summit';

const meta = {
  author: 'Mokulu',
  lastUpdated: 'Dec 1, 2019',
};

const category = GUIDE_CATEGORY.INSTANCES;

const sections = [
  {
    title: 'Overview',
    paragraphs: [
      <MapEmbed
        zone={ZONE.DIAMOND_SHORES}
        points={[{ icon: 'port', label: '[Dungeon] Mistsong Summit', coords: [{ x: 48.6, y: 43.3 }] }]}
      />,
      'Mistsong Summit is a 5-man dungeon located in the Aurorian mountains of Mistmerrow. The entrance of the instance is located in Diamond Shores.',
      'I recommend an average group gear score of 5000 to attempt this dungeon on Easy, 6000 for Normal, and 7000 for Hard.',
      'Each boss can be done on any difficulty. However, you will only have access to the fourth boss if the other three bosses are killed on Hard mode.',
      'Difficulty increases the amount of health and damage of a boss, while also modifying existing mechanics.',
    ],
  },
  {
    title: 'Daily Quests',
    paragraphs: [
      'There are four daily quests available in Mistsong Summit.',
      <Typography>Each quest rewards one <ItemLink item={ITEM.SUNSET_PORTALSTONE} />, which are used in creating Gallant
        mount upgrades and upgrades for other Mistsong gear.</Typography>,
      '1. Gargantuan Guardians: Kill 12 Oni in the avenue paths.',
      '2. Hidden Dangers: Kill 14 enemies on Whispering Street.',
      '3. The Mistsong Masters: Defeat one of the three Mistsong bosses.',
      '4. Undying Vengeance: Kill Taris (the final Hard Mode boss).',
    ],
  },
  {
    title: 'Dochul',
    paragraphs: [
      'Dochul is located in the Glaring Court.',
      <Typography variant="h6">Notable Loot</Typography>,
      <div className="quest-items">
        <Item {...ITEM.SUPERIOR_DOOMSHADOW_NODACHI} />
      </div>,
      <Typography variant="h6">Abilities</Typography>,
      <Ability
        name="Hold Until Death"
        description="Dochul pins his target down, repeatedly stabbing them."
        counters={[
          'Healer needs to keep the target healthy.',
        ]}
        deadly
      />,
      <Ability
        name="Earth Wave"
        description=""
      />,
      <Ability
        name="Fulsome Face"
        description=""
      />,
      <Ability
        name="Triple Murder"
        description="Dochul throws three spheres of energy at his target, dealing moderate damage."
      />,
      <Ability
        name="Snake Strike"
        description=""
      />,
      <Ability
        name="Slaughter Dance"
        description="Dochul summons servants. After 30 seconds, the servants buff Dochul."
        counters={[
          'Switch to the adds and kill them.',
        ]}
      />,
      <Typography variant="h6">Tactics</Typography>,
      <Typography>
        When Dochul leaps onto a nearby wall, he will cast Triple Murder on a player. Shortly after, he will leap back
        into the arena and knock all players back towards the edges. Use any kind of displacement ability to cancel the
        knockback and keep yourself in the center, such as <SkillLink id={SKILL.DROP_BACK} /> or
        &nbsp;<SkillLink id={SKILL.TELEPORTATION} />.
      </Typography>,
      'When Dochul spawns adds, kill them first then go back to attacking Dochul.',
      'When Dochul pins down a player, the healer needs to keep them topped off.',
      <Typography variant="h6">Difficulty Differences</Typography>,
      'The amount of spike traps is drastically increased on Hard Mode.',
    ],
  },
  {
    title: 'Sojung',
    paragraphs: [
      'Sojung is located in the Vineviper Gardens.',
      <Typography variant="h6">Notable Loot</Typography>,
      <Typography variant="h6">Abilities</Typography>,
      <Ability
        name="Wild Lightning"
        description=""
      />,
      <Ability
        name="Black Lightning"
        description=""
      />,
      <Ability
        name="Chain Lightning"
        description=""
      />,
      <Ability
        name="Small Protective Talisman"
        description="Sojung places protective talismans on herself. Her lamplight guards spawn to protect them."
        counters={[
          'Players must kill the lamp guards in the blue circle areas.',
          'When all guards are destroyed, ladders will appear that lead up to the talismans.',
          'Players must climb the ladders and interact with the talismans to destroy them, removing one stack each from Sojung.',
          'When all stacks are removed, she can be damaged again.',
        ]}
        deadly
      />,
      <Ability
        name="Cursed Talismans"
        description="Sojung curses all players except for one. Red talismans revolve around the cursed, while a green one revolves around the last. When a cursed player touches the blessed player, the cursed player is freed. Should the curse erupt, the player will take tremendous damage."
        counters={[
          'Keep an eye on who is the blessed (green talisman) player.',
          'It\'s usually easier to have the blessed player stay still while the cursed players move towards him/her.',
        ]}
        deadly
      />,
      <Ability
        name="Petrifying Poison"
        description="Sojungs poisons affect all enemies that it comes in contact with. Upon reaching 10 stacks, they are petrified for a long duration."
        counters={[
          'Avoid standing in poison.',
          'The debuff lasts for 30 seconds.',
          'The debuff can be cleansed.',
        ]}
      />,
      <Ability
        name="Transformed Sudden Attack"
        description="Sojung dives into the ground and erupts near her target, knocking players up and dealing damage."
      />,
      <Ability
        name="Poison Ball"
        description="Sojung spits globs of poison at nearby players, which lingers on the ground and applies Petrifying Poison stacks."
      />,
      <Typography variant="h6">Tactics</Typography>,
      <Typography variant="subtitle1">Phase 1</Typography>,
      'Sojung only uses her lightning and talisman abilities listed above.',
      'Run to the player with the green talisman when Sojung casts Cursed Talismans. Stay still if you\'re the player with the green one.',
      'Kill the lamp adds when they\'re within their blue circle to reveal the ladders. DPS should climb the ladders and interact with the talismans at the top to remove Sojung\'s protective talisman buff.',
      'At around 50%, she will transform into a hideous serpent.',
      <Typography variant="subtitle1">Phase 2</Typography>,
      'Starting again at full health, she will now use all of her abilities. Watch out for her poison attacks as they will linger and apply stacks of Petrifying Poison. At 10 stacks, you will be petrified, but the stacks can be cleansed by Healers or with Purge.',
      <Typography variant="h6">Difficulty Differences</Typography>,
    ],
  },
  {
    title: 'Aria',
    paragraphs: [
      'Aria is located in the Music Hall.',
      <Typography variant="h6">Notable Loot</Typography>,
      <Typography variant="h6">Abilities</Typography>,
      <Ability
        name="When I say jump"
        description="Aria instructs everyone to jump. Those not in the air when this ability finishes its cast take moderate damage."
        counters={[
          'Jump right as this ability is about to cast.',
        ]}
      />,
      <Ability
        name="Harmonious Melody"
        description=""
      />,
      <Ability
        name="I'm rubber and you're glue"
        description="Aria forces the target to dance for a few seconds. They are incapable of performing any other action."
        counters={[
          'Healers need to keep the dancing player healthy during their dance.',
        ]}
        deadly
      />,
      <Ability
        name="Love is an open door"
        description="Aria opens one of the side doors, allowing her servants to join in the performance."
        counters={[
          'The add will walk down the path and start running in circles in the round pathway. After it does a few laps, it will become hostile and run towards the nearest player.',
          'A player can interact with the drum nearest to the round pathway, which will instantly kill an add that its running its circular laps. It has no affect on an already hostile add.',
        ]}
      />,
      <Ability
        name="Love from me"
        description=""
      />,
      <Typography variant="h6">Tactics</Typography>,
      'Work in progress',
      <Typography variant="h6">Difficulty Differences</Typography>,
    ],
  },
  {
    title: 'Taris',
    paragraphs: [
      'Work in progress...',
    ],
  },
];

export default { name, meta, category, sections };
