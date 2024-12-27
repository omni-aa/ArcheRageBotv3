/* eslint react/jsx-key: 0 */
import { Typography } from '@material-ui/core';
import Ability from 'components/Ability';
import Item from 'components/Item';
import MapEmbed from 'components/MapEmbed';
import SkillLink from 'components/Skill/SkillLink';
import { GUIDE_CATEGORY } from 'constants/guides';
import { ITEM } from 'constants/items';
import { ZONE } from 'constants/map';
import { SKILL } from 'constants/skills';
import React from 'react';

const name = 'Serpentis';

const meta = {
  author: 'Mokulu',
  lastUpdated: 'Mar 24, 2021',
};

const category = GUIDE_CATEGORY.INSTANCES;

const sections = [
  {
    title: 'Overview',
    paragraphs: [
      <MapEmbed
        zone={ZONE.EXELOCH}
        points={[{ icon: 'port', label: '[Dungeon] Serpentis', coords: [{ x: 46.9, y: 29.1 }] }]}
        floatRight
      />,
      'Serpentis is a 5-man dungeon located in Exeloch of Auroria, though it can be queued for through the Instance window under the Dungeons tab. It requires level 50, and I\'d recommend an average gear score of at least 4000 for your group.',
      'Your composition will need at least one healer. If your group\'s average gear score is less than 5000, you should definitely have a dedicated tank.',
      <Typography>I recommend that at least one person take <SkillLink id={SKILL.PROTECTIVE_WINGS} />
        &nbsp;if your group&apos;s average gear score is less than 5000.</Typography>,
      'There are a total of 6 rooms to progress through. Three rooms are always the same, and the other three have their own sets of possible rooms.',
      'The boss from room 5 will drop armor and the boss from room 6 will drop weapons.',
      'Note that when a boss is spawned in a room, other players are prevented from entering that room. Should your group fail to defeat a boss, all players must die to fully reset the boss.',
    ],
  },
  {
    title: 'Room 1',
    paragraphs: [
      <Typography variant="h5">Abyssal Trap</Typography>,
      'The Abyssal Trap will always be the first room you get in every run of Serpentis.',
      'In ths room, there will be two Serpentis Keepers, located on the left and right sides of the room. When engaged, they will leash together.',
      <Typography variant="h6">Notable Loot</Typography>,
      <Typography variant="caption" color="primary">You will get one of these every run:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.REDTALON_HELM} />
        <Item id={ITEM.REDTALON_ARMOR} />
        <Item id={ITEM.REDTALON_SADDLE} />
        <Item id={ITEM.REDTALON_LEGGUARDS} />
      </div>,
      <Typography variant="h6">Abilities</Typography>,
      <Ability
        name="Serpentis Keeper's Trampling"
        description="The Keeper tramples its target, dealing heavy physical damage to enemies around its target."
        counters={[
          'The player tanking the keeper should keep it faced away from the party.',
        ]}
      />,
      <Ability
        name="Angry Serpentis Keeper"
        description="The Keeper enrages when it falls to one-third health, briefly knocking down all enemies in the room."
      />,
      <Typography variant="h6">Tactics</Typography>,
      'If there is a designated tank, have that player deal damage to both Keepers before the rest of the party begins attacking in order to stack some aggro.',
      'Have the player who is tanking face the keepers away from the rest of melee of the party, as to not cause Trampling to splash onto them.',
      'The healer should be prepared by having everyone nearly topped off before everyone is tripped at around the one-third health mark for a single Keeper.',
    ],
  },
  {
    title: 'Room 2',
    paragraphs: [
      'There are three different possible encounters for this room.',
      <Typography variant="h5">1. Creature&apos;s Vault</Typography>,
      'In this room, you will have to defeat five waves of enemies. Each wave will have a larger, more powerful enemy that usually will have a random buff.',
      'Interact with the box in the center of the room to spawn the first wave. After a box has been interacted with, a wave of enemies will spawn and the next box will appear. The final box is located in the north-east corner.',
      'The final wave includes the boss Balius. There really isn\'t anything difficult about it. Engaging with all area of effect will kill most of the adds.',
      <Typography variant="h6">Possible Buffs</Typography>,
      <Ability
        name="Savage"
        description="Casts Savage Passion with each attack. Savage Passion increases all Attacks +10%, stacks up to 10 times, and lasts for 30 seconds."
        counters={['Focus this enemy first.']}
      />,
      <Ability
        name="Mettle"
        description="Increases HP +100%. When your HP falls below 10%, this buff restores full HP every 30 seconds."
        counters={['If you can\'t deal this enemy\'s full health in under 30 seconds, kill it last.']}
      />,
      <Ability
        name="Defense"
        description="Increases Physical Defense +100%. Casts Impenetrable Barrier every 30 seconds to shield you for the next 10 seconds every time you receive Melee Damage."
        counters={['Magic damage dealers need to focus this enemy.']}
      />,
      <Typography variant="h5">2. Nightmare&apos;s Embrace</Typography>,
      'The goal of this room is to protect Lerman while he performs his ritual. During this time there are 8 waves of enemies to fend off, with wave 8 also including an Awakened Keeper (that acts exactly like a Serpentis Keeper from the Abyssal Trap).',
      'The waves will approach you automatically, and there is a chance that a wave will have a Lost Tribe Shade King. When this enemy dies, he will drop a Stun Bomb at his location.',
      <Ability
        name="Stun Bomb"
        description="Interact with the Stun Bomb to briefly stun all enemies."
      />,
      'Use the Stun Bomb when you feel like you\'re overwhelmed.',
      <Typography variant="h5">3. Mouth of Chaos</Typography>,
      'When you interact with the box to start this room, Conqueror Cellus will instantly spawn and begin attacking.',
      <Typography variant="h6">Abilities</Typography>,
      <Ability
        name="Fire Armor"
        description="Cellus is immune to damage."
      />,
      <Ability
        name="Fireball"
        description="Cellus calls down meteors all around him, dealing medium-high magic damage."
      />,
      <Ability
        name="Ice Shard"
        description="Drops on the ground when one of Cellus' minions is slain. Step on top of it to remove Cellus' Fire Armor for a short duration"
      />,
      <Typography variant="h6">Tactics</Typography>,
      'Stack on Cellus to make healing and cleaving easier.',
      'Step on the ice shards (blue orb) that spawn after killing the adds Cellus summons to remove his Fire Armor temporarily.',
      'Use Protective Wings when Cellus casts Fireball if the damage is too rough.',
    ],
  },
  {
    title: 'Room 3',
    paragraphs: [
      <Typography variant="h5">Sanctuary of Darkness</Typography>,
      'The Distorted Duaxini deals magic damage with two primary attacks and has a stacking damage buff as the fight goes on.',
      <Typography variant="h6">Notable Loot</Typography>,
      <div className="quest-items">
        <Item id={ITEM.LABYRINTH_VALUABLES_CHEST} />
      </div>,
      <Typography variant="caption" color="primary">Chance of:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.CARMILAS_MEMORY} />
      </div>,
      <Typography variant="h6">Abilities</Typography>,
      <Ability
        name="Distorted Duaxini's Flamebolt"
        description="The Distorted Duaxini's basic attack dealing minor magic damage. Upon hitting its target, it splashes into 3 pools of fire around its target."
      />,
      <Ability
        name="Distorted Duaxini's Blazing Twister"
        description="The Duaxini spins around, flinging fire all around. Each fire projectile leaves a pool of fire on the ground that deals magic damage."
        counters={[
          'Don\'t stand still when you see the Duaxini spin to avoid taking massive damage from this ability.',
          <Typography component="span">Stack and stand in <SkillLink id={SKILL.PROTECTIVE_WINGS} /> to
            mitigate the damage taken.</Typography>,
        ]}
        deadly
      />,
      <Ability
        name="Distorted Duaxini's Judgement"
        description="The Distorted Duaxini increases the damage it deals, stacking."
      />,
      <Ability
        name="Distorted Duaxini's Ward"
        description="The Duaxini puts up a ward. Unknown effect."
      />,
      <Typography variant="h6">Tactics</Typography>,
      <Typography>This fight is simple. You either want to stay completely still and stack while using&nbsp;
        <SkillLink id={SKILL.PROTECTIVE_WINGS} /> to mitigate the Blazing Twister, or keep moving and
        spread out.</Typography>,
      'As long as you burn the boss as fast as possible, you won\'t need to worry about getting high Judgement stacks.',
      'I don\'t know what the Ward does. I\'ve only seen it once and didn\'t get a good look at what it does.',
    ],
  },
  {
    title: 'Room 4',
    paragraphs: [
      'There are three different possible encounters for this room.',
      <Typography variant="h5">1. Laboratory of Terrors</Typography>,
      'During this fight, you will face a single boss at a time along with many adds. The adds have a lot of crowd control, so cleave them down with the active boss.',
      <Typography variant="h6">Freman</Typography>,
      'Freman awakens first.',
      <Typography variant="h6">Frostcaster Bashu</Typography>,
      'Bashu will awaken after Freman is slain.',
      <Typography variant="h6">Kaizo the Gambler</Typography>,
      'Kaizo awakens last, once you\'ve defeated Bashu.',
      <Typography variant="h5">2. Womb of the Crimson Dream</Typography>,
      <Typography variant="h5">3. Duskfallen Hall</Typography>,
    ],
  },
  {
    title: 'Room 5',
    paragraphs: [
      'There are three different possible encounters for this room. The loot pool is the same regardless of the encounter.',
      <Typography variant="h6">Notable Loot</Typography>,
      <Typography variant="caption">You will get one piece of magic cloth, healing cloth, leather, and plate
        armor.</Typography>,
      <br />,
      <Typography variant="caption" color="primary">You can get up to 2 of one of these:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.SUNPOINT} />
        <Item id={ITEM.MOONPOINT} />
        <Item id={ITEM.STARPOINT} />
      </div>,
      <Typography variant="h5">Lerman</Typography>,
      <Typography variant="h5">Carmilla</Typography>,
      <Typography variant="h5">Fangbow</Typography>,
    ],
  },
  {
    title: 'Room 6',
    paragraphs: [
      'To enter this room, you must spend 100 Labor to open the gateway. If no one needs anything from this boss, it\'s wise to end the run early to save labor.',
      <Typography variant="h5">Sirothe the Infernal</Typography>,
      <Typography variant="h6">Notable Loot</Typography>,
      <div className="quest-items">
        <Item id={ITEM.SUNGLOW_LUNAGEM} />
        <Item id={ITEM.MYSTERIOUS_GEM} />
      </div>,
      <Typography variant="h6">Abilities</Typography>,
      <Ability
        name="Melee, Magic, and Ranged Shield"
        description="Sirothe becomes immune to a single damage type for 20 seconds."
      />,
      <Ability
        name="Hazing Flamebolt"
        description="Sirothe hurls a deadly flamebolt at his ranged target."
      />,
      <Ability
        name="Unknown three-flame strike name"
        description="Occasionally, when attacking, Sirothe will hurl three balls of flame. One in front and one at each 45 degree angle in front of him."
      />,
      <Ability
        name="Madness"
        description="Sirothe becomes stronger. Stacks."
        counters={[
          'One stack can be removed by moving Sirothe over the pools left behind by Sirothe\'s Fireballs when killed.',
        ]}
      />,
      <Ability
        name="Apocalypse Inferno"
        description="Sirothe calls down an apocalyptic inferno, putting a deadly curse on random players. When the debuff expires, the target takes lethal damage."
        counters={[
          'Briefly walk into a  to cleanse the debuff. Don\'t stay too long; when the box disappears it will kill you instead.',
          'Spread from other players, as the landing area of the effect can hit multiple players',
          <Typography component="span">Use <SkillLink id={SKILL.STEALTH} /> during the cast to prevent
            it from targeting you.</Typography>,
        ]}
        deadly
      />,
      <Typography variant="h6">Tactics</Typography>,
      'Starting from full health to around 80%, Sirothe will only attack his target, used his pronged flame attack, and rotate his shielding. It\'d be wise to let the tank or tankiest player get some aggro before everyone starts dealing damage.',
      'From 80% onwards, Sirothe will start gaining stacks of Madness frequently along with spawning Sirothe\'s Fireballs. When the Fireballs are killed, they will leave a pool of magma behind that will remove one stack of Madness when Sirothe steps in it.',
      'At around 40%, Sirothe will start using Apocalypse Inferno every 45 seconds. Should you be hit by it, you\'ll need to run to one of the boxes in one of the corners of the room (they rotate) and step on it when the light appears in the air over it. Get off it quickly, because it will kill you when it moves again.',
    ],
  },
];

export default { name, meta, category, sections };
