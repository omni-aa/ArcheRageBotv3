import { Typography } from '@material-ui/core';
import Item from 'components/Item';
import ItemLink from 'components/Item/ItemLink';
import Link from 'components/Link';
import MapEmbed from 'components/MapEmbed';
import TabContent from 'components/TabContent/TabContent';
import { GUIDE_CATEGORY } from 'constants/guides';
import { ITEM } from 'constants/items';
import { ZONE } from 'constants/map';
import React from 'react';

const name = 'Getting to Level 55';

const meta = {
  author: 'Mokulu',
  lastUpdated: 'Mar 24, 2021',
};

const category = GUIDE_CATEGORY.GAMEPLAY;

const sections = [
  {
    title: 'Levels 1 - 30',
    paragraphs: [
      <Typography variant="h6">Leveling</Typography>,
      'From levels 1 to 30, you\'ll be doing exclusively the green (story) quests, with minor exception for pets. These quests were recently updated in 6.0 to give large amounts of experience to the point where the side quests became a waste of time.',
      'In a later section, you can see where to obtain your mount and battle pet, based on your faction and race, which will happen during this level 1 to 30 journey.',
      <Typography variant="h6">Weapons</Typography>,
      <Typography>From your first story quest, you'll receive your first set of Explorer weapons at basic
        quality.</Typography>,
      <Typography variant="subtitle1">Rewards</Typography>,
      <div className="quest-items">
        <Item id={ITEM.EXPLORERS_BOW} />
      </div>,
      <Typography variant="caption" color="primary">Choose One:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.EXPLORERS_1H_WEAPON_CRATE} count={2} />
        <Item id={ITEM.EXPLORERS_2H_WEAPON_CRATE} count={1} />
      </div>,
      'The weapon that you pick is pertinent to your class. For classes that scale off of Magic Attack, you\'ll want a Staff (from 2H) or a Scepter (from 1H). Healers use Healing Power, so a Club (1H) or Greatclub (2H) is desired.',
      'There are also different "Weapon Types" that affect melee attacks: Piercing, Slashing, and Crushing.',
      ' - Piercing gives your melee attacks a 50% chance to deal 15% increased damage against cloth wearers.',
      ' - Slashing gives your melee attacks a 50% chance to deal 15% increased damage against leather wearers.',
      ' - Crushing gives your melee attacks a 50% chance to deal 20% increased damage against plate wearers.',
      'Due to this, your weapon type matters. Attack speed also affects how fast you can use your melee skills and attacks, as well as their damage.',
      'This Explorer\'s weapon that you choose will be your weapon all the way through leveling and into end game. You will have the option to switch your weapon and class before level 50, when you get locked in. More on that later.',
      <Typography variant="h6">Armor</Typography>,
      'Around your 4th story quest, you\'ll receive your first set of armor rewards. Sometime in chapter 2 of story quests, you\'ll receive the last few pieces.',
      <Typography variant="caption" color="primary">Choose One:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.EXPLORERS_CLOTH_CRATE} count={1} />
        <Item id={ITEM.EXPLORERS_LEATHER_CRATE} count={1} />
        <Item id={ITEM.EXPLORERS_PLATE_CRATE} count={1} />
      </div>,
      <Typography variant="caption" color="primary">Choose One:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.EXPLORERS_CLOTH_COMPONENT_CRATE} count={1} />
        <Item id={ITEM.EXPLORERS_LEATHER_COMPONENT_CRATE} count={1} />
        <Item id={ITEM.EXPLORERS_PLATE_COMPONENT_CRATE} count={1} />
      </div>,
      'Cloth armor offers high magic defense, 3% increased move speed, 20% reduced debuff duration (except Silence and Shackle), 30% reduced silence duration, and 10% reduced mana costs.',
      'Leather armor provides a balance of both physical and magic defense, 3% increased evasion, increased bow range by 3m, and 20% reduced shackle and trip duration.',
      'Plate armor gives high physical defense, 5% increased health, 20% reduced stun and shackle duration, and 10% increased mana costs.',
      'These effects are considered set bonuses and are only granted when wearing all 7 pieces of the same type of armor.',
    ],
  },
  {
    title: 'Upgrading your Explorer\'s Gear',
    paragraphs: [
      <Typography>Every so often while doing your story quests, you'll receive <ItemLink
        id={ITEM.STORY_QUEST_INFUSION_RANK_1} plural="s" />. Use these on your equipment to get them to Arcane
        quality. You will have all of your infusions by around level 25.</Typography>,
      <Typography>After you've acquired all of your infusions, you'll start getting <ItemLink
        id={ITEM.STORY_AWAKENING_SCROLL_RANK_1} plural="s" />. Do not use them until you get to level 28, or you will
        not be able to equip the upgraded gear. These scrolls will turn your Explorer's gear into Brilliant Explorer's
        equipment, increasing the stats but lowing the quality back down to Grand. Every piece of equipment will also
        gain a main stat (ie. Strength, Agility, Stamina, Intelligence, or Spirit). These are acquired at random. Every
        time your equipment gains a grade, it gains 1 free stat reroll. These can be used to roll the one stat on a
        piece of gear to get a more desirable one, if needed. You will have 1 extra if you are using a two handed
        weapon.</Typography>,
      <Typography>After you've been given all the rank 1 scrolls, story quests will start giving out <ItemLink
        id={ITEM.STORY_QUEST_INFUSION_RANK_2} plural="s" />. Use these on your equipment to get them to Heroic
        quality. You will have all of your infusions by around level 36 and have exactly enough if using one-handers,
        and 3 extra if using a two-hander.</Typography>,
      <Typography>Once again, you'll slowly get <ItemLink id={ITEM.STORY_AWAKENING_SCROLL_RANK_2} plural="s" /> until
        you have enough to turn all your equipment into Radiant Explorer's. This upgrade will require level 40 to equip,
        so don't awaken to Radiant until you're level 40! The Radiant Awakening will add a secondary stat to each piece,
        such as resilience, reduced Melee/Magic/Ranged damage received, or critical chance and damage for weapons while
        setting them back to Rare quality. You will have 1 extra scroll if using a two-hander.</Typography>,
      <Typography>After the rank 2 scrolls, story quests will start reward you with <ItemLink
        id={ITEM.STORY_QUEST_INFUSION_RANK_3} plural="s" />. You will be given enough to get all your gear to Unique
        quality, or have 4 extra if using a two-hander.</Typography>,
      <Typography>At level 50, you'll have two story quests in Diamond Shores that give <ItemLink
        id={ITEM.STORY_AWAKENING_SCROLL_RANK_3} plural="s" />. Do not use these until you have perfect stats on your
        Radiant Explorer's gear. More on that below. These scrolls upgrade your gear to the first tier of Hiram gear. It
        cannot be undone. Your armor type or weapons cannot be swapped easily after this (you will have to grind mobs to
        get a new set).</Typography>,
    ],
  },
  {
    title: 'Levels 30 - 45',
    paragraphs: [
      'This is the most mundane part of the leveling experience. Continue doing only story quests until you get to Halcyona. From here, you need to start doing every side (yellow) quest that you see.',
      'Story quests before Cinderstone and Ynystere give large amounts of experience, but in Cinderstone and Ynystere they start giving normal, "minimal" amounts of experience.',
      'Around the time you get to level 45, you could be anywhere from Perinoor Ruins to Karkasse Ridgelands. I recommend at least continuing your story quests after you reach level 45 to finish getting your infusions.',
    ],
  },
  {
    title: 'Getting the Perfect Stats',
    paragraphs: [
      <TabContent
        tabs={[
          {
            label: 'Nuia',
            content:
              <MapEmbed
                zone={ZONE.MARIANOPLE_CITY}
                points={[
                  { label: 'Blacksmith', coords: [{ x: 43.6, y: 59 }] },
                  { label: 'Weapon Merchant', coords: [{ x: 42.1, y: 57.9 }] },
                  { label: 'Armor Merchant', coords: [{ x: 41.9, y: 60.1 }] },
                ]}
              />,
          },
          {
            label: 'Haranya',
            content:
              <MapEmbed
                zone={ZONE.AUSTERA}
                points={[
                  { label: 'Blacksmith', coords: [{ x: 48.3, y: 45.8 }] },
                  { label: 'Weapon Merchant', coords: [{ x: 47.3, y: 44 }] },
                  { label: 'Armor Merchant', coords: [{ x: 46.7, y: 43.6 }] },
                ]}
              />,
          },
        ]}
      />,
      'Once you\'re level 45, now is the time to make sure the stats on your Explorer\'s gear is perfect.',
      'For all equipment, your main damage stat (Strength, Agility, Intelligence, or Spirit for healers) is what you want on every piece of gear. However, I\'d recommend Stamina on a shield if that\'s what you\'re running.',
      'For your armor, Resilience or your biggest counter\'s Received Damage reduction are the better secondary stats. If you get one but you really wanted the other, don\'t worry. When awakening Radiant Explorer\'s to Hiram, it unlocks a second secondary stat (for 3 effects total).',
      'For your weapon, after changes to stat caps and critical strike, you want defense or magic defense penetration on the main weapon, bow, and off-hand if you\'re running one. Healers will still prefer critical heal rate and bonus. Shields and instruments will prefer evasion and flat attack.',
      'Should you not get lucky and get your main stat and one of your desired secondary stats on a piece of gear, you can buy a new piece from a Weapon or Armor merchant and new infusions and upgrade scrolls from a General Merchant.',
      'You can also use this time to switch your armor type or weapons that you\'re using.',
      'Since upgrading your gear can be gold and labor intensive, the best course of action for rolling your stats is:',
      '- Infuse and awaken item to Radiant.',
      '- Did it roll your main stat?',
      <Typography>&nbsp;&nbsp;&gt; No? Restart</Typography>,
      '- Infuse and awaken item to Brilliant.',
      '- Use your rerolls to get one of you two good secondary stats.',
      '- Do you now have your main stat and one good secondary?',
      <Typography>&nbsp;&nbsp;&gt; No? Restart</Typography>,
      <Typography>&nbsp;&nbsp;&gt; Yes? That piece is done, infuse it to Unique.</Typography>,
      'Unused weapons and armor can be safely discarded.',
      'This will prevent you from wasting labor and gold rerolling your pieces all the the way to T3 Unique only for your rerolls to leave you short of the stats you want. When you do it this way you also keep extra rerolls for when you awaken to Hiram, allowing you to use those to reroll a potential unwanted stat from your third stat.',
    ],
  },
  {
    title: 'Levels 45 - 50',
    paragraphs: [
      'Starting at level 45, you can now grind Ancestral level mobs for experience. Usually you can\'t get experience from enemies that are more than 10 levels higher than your own, however Ancestral levels don\'t count in that equation (so they\'re technically level 55).',
      'Find a group and grind mobs in Aegis Island or Western Hiram Mountains and grind until 50.',
      <Typography>At level 50, your green story quests will be available again in Diamond Shores and grant
        your <ItemLink id={ITEM.STORY_AWAKENING_SCROLL_RANK_3} plural="s" /> to awaken your Explorer gear into Hiram
        gear, which is the endgame gear for most players.</Typography>,
    ],
  },
  {
    title: 'Levels 50 - 55',
    paragraphs: [
      'Grinding in a group will be the best course of action for most players until you get more gear.',
      'At level 50, you can start doing the Hiram weekly for Hiram Infusions in Diamond Shores.',
      'At level 52, the Sungold Fields, Exeloch, and Reedwind weeklies unlock.',
      'At level 55, the Western Hiram Mountain weeklies and Eastern Hiram Mountains dailies unlock.',
      <Typography>You can see all of the Hiram dailies at the <Link to="/guides/hiram-dailies">Hiram Dailies
        guide</Link>.</Typography>,
    ],
  },
];

export default { name, meta, category, sections };
