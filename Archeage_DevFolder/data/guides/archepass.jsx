import { Typography } from '@material-ui/core';
import Ability from 'components/Ability';
import Currency from 'components/Currency';
import ItemLink from 'components/Item/ItemLink';
import Lightbox from 'components/Lightbox';
import { GUIDE_CATEGORY } from 'constants/guides';
import {
  CURRENCY,
  ITEM,
} from 'constants/items';
import ArchePass from 'images/guides/ArchePass.png';
import ArchePassChange from 'images/guides/ArchePass_Change.png';
import React from 'react';

const name = 'ArchePass';

const meta = {
  author: 'Mokulu',
  lastUpdated: 'Apr 19, 2020',
};

const category = GUIDE_CATEGORY.GAMEPLAY;

const sections = [
  {
    title: 'The ArchePass',
    paragraphs: [
      <Lightbox
        title="ArchePass Window"
        image={ArchePass}
        float="right"
      />,
      <Typography>The ArchePass is a weekly mission system unique to ArcheAge Unchained with the main rewards consisting
        of <ItemLink id={ITEM.DILIGENCE_COIN} plural="s" /> and&nbsp;
        <ItemLink id={ITEM.BOUND_LABOR_RECHARGER} plural="s" />.</Typography>,
      'There are four passes: a Basic pass (which has ludicrous point requirements for the rewards), and quarterly rotating Combat, Equipment, and Vocation passes.',
      'The quarterly passes will change every 3 months. The basis pass is refreshed every year.',
      <Lightbox
        title="Change ArchePass Window"
        image={ArchePassChange}
        float="right"
      />,
      'Each pass has its own progress and you can only have one pass active at a time. Swapping to another pass will force you to unlock its missions again and will resume its progress.',
      'There are three different types of missions available, each when completed will grant you progress towards your active pass.',
      'When your pass increases in tier, rewards become available in the free track. Rewards must be claimed in order. There is also a premium track of rewards that must be unlocked for 1500 Credits on a per-pass basis for the quarterly passes.',
    ],
  },
  {
    title: 'Passes',
    paragraphs: [
      <Typography variant="h6">Basic Pass</Typography>,
      <Typography>
        This pass costs <Currency type={CURRENCY.COIN} count={1} inline /> to unlock, and can be upgraded to
        premium for only <Currency type={CURRENCY.COIN} count={100000} inline />.
      </Typography>,
      'Each tier requires a whopping 3000 ArchePass points to progress and has 98 tiers to progress through. When compared to the quarterly passes, this pass will take you a lot more time per tier and has twice the number of tiers.',
      'The free track has sparing rewards of Honor Potions, Vocation Potions, and Hiram Infusions.',
      'The premium track rewards 3 Gilda Stars at every tier.',
      <Typography color="primary">Completion Breakdown</Typography>,
      'You can acquire 6 tiers per week. It requires 196 ArchePass missions to complete the entire pass, which would take you 12 full weeks of missions and then 4 missions on the 13th week.',
      <Typography variant="h6">Quarterly Passes</Typography>,
      <Typography>
        These passes costs <Currency type={CURRENCY.COIN} count={50000} inline /> each to unlock, and can be
        upgraded to premium for <Currency type={CURRENCY.CREDIT} count={1500} inline />.
      </Typography>,
      'Each tier requires 1268 ArchePass points to progress and each have 44 tiers to progress through.',
      'All free tracks have Diligence Coins every 5th tier and Bound Labor Rechargers spread throughout.',
      '- The Combat free track also has Kyrios Badges and potions that increase Honor gain. The final reward is an exclusive glider.',
      '- The Equipment free track also has Honor Potions, potions that increase loot drop rate, a couple of tempers, and Hiram infusions. The final reward is an exclusive battle pet.',
      '- The Vocation free track also has Vocation Potions, potions that increase Vocation Badge gain, and a couple Expansion Scrolls. The final reward is an exclusive costume.',
      'The premium tracks awards something cosmetic every 5 tiers with an exclusive title for the final reward.',
      <Typography color="primary">Completion Breakdown</Typography>,
      'You can acquire 14 tiers per week. It requires 38 ArchePass missions to complete an entire pass, which would take you 3 full weeks of missions and then 1 mission on the 4th week.',
    ],
  },
  {
    title: 'Missions',
    paragraphs: [
      <Typography>
        Every mission rewards 1500 ArchePass points and either 1 or 2 <ItemLink id={ITEM.DILIGENCE_COIN} />.
      </Typography>,
      'You can complete 12 missions per week, which is shared across all passes.',
      'You are allotted 6 mission change attempts per day, also shared across all passes.',
      <Typography variant="h6">With the Watch</Typography>,
      <Typography variant="subtitle2">Requires <ItemLink id={ITEM.GILDA_STAR} count={5} /> to unlock.</Typography>,
      <Ability
        name="Kill 10 Hostile Players"
        description="Hostile faction kills only count towards this mission, if the level gap is below 4 levels."
        counters={[
          'It appears that kills in War will always count, but outside of war the player cannot be lower than 4 levels from you.',
        ]}
      />,
      <Ability
        name="Kill 20 Hostile Players"
        description="Hostile faction kills only count towards this mission, if the level gap is below 4 levels."
        counters={[
          'It appears that kills in War will always count, but outside of war the player cannot be lower than 4 levels from you.',
        ]}
      />,
      <Ability
        name="Kill 50 Monsters"
        description="Kill monster that are level 30+"
        counters={[
          'Insignificant monsters do not count (such as ones that have heavily reduced health for their level).',
          'Can easily be completed during a Hiram daily raid.',
        ]}
      />,
      <Ability
        name="Kill 100 Monsters"
        description="Kill monster that are level 30+"
        counters={[
          'Insignificant monsters do not count (such as ones that have heavily reduced health for their level).',
          'Can easily be completed during a Hiram daily raid.',
        ]}
      />,
      <Ability
        name="Obtain 500 Honor Points"
        counters={[
          'This can easily be completed by using Honor Points obtained from events such as Golden Plains Battle, the Fall of Hiram City, or Red Dragon\'s Keep.',
        ]}
      />,
      <Ability
        name="Obtain 1,000 Honor Points"
        counters={[
          'This can easily be completed by using Honor Points obtained from events such as Golden Plains Battle, the Fall of Hiram City, or Red Dragon\'s Keep.',
        ]}
      />,
      <Ability
        name="Kill 5 Higher Grade Monsters"
        description="Kill 'Legendary or Mythic Monsters'"
        counters={[
          'This is referring to world bosses.',
          'Warning - It appears that this mission may not always count every boss.',
          'Rerolling is advised.',
        ]}
      />,
      <Ability
        name="Kill 10 Higher Grade Monsters"
        description="Kill 'Legendary or Mythic Monsters'"
        counters={[
          'This is referring to world bosses.',
          'Warning - It appears that this mission may not always count every boss.',
          'Rerolling is advised.',
        ]}
      />,
      <Typography variant="h6">Til It Like It Is</Typography>,
      <Typography variant="subtitle2">Requires <ItemLink id={ITEM.BLUE_SALT_HAMMER} count={2} /> to
        unlock.</Typography>,
      <Ability
        name="Obtain 500 Vocation Badges"
        counters={[
          'All vocation gains count towards this mission. Easily completed by doing family quests.',
        ]}
      />,
      <Ability
        name="Obtain 1,000 Vocation Badges"
        counters={[
          'All vocation gains count towards this mission. Easily completed by doing family quests.',
        ]}
      />,
      <Ability
        name="Workin' Overtime"
        description="Use 500 Labor"
      />,
      <Ability
        name="Nose to the Grindstone"
        description="Use 1000 Labor"
      />,
      <Ability
        name="Blue Salt Bond Quest x1"
        description="Complete 1 Supply Demand quest at a Community Center."
      />,
      <Ability
        name="Blue Salt Bond Quest x2"
        description="Complete 2 Supply Demand quests at Community Centers."
      />,
      <Typography variant="h6">ArcheMaster Challenges</Typography>,
      <Typography variant="subtitle2">Requires <ItemLink id={ITEM.GILDA_STAR} count={10} /> to unlock.</Typography>,
      <Ability
        name="10k XP"
        description="Only available for non-ancestral level players."
      />,
      <Ability
        name="30k XP"
        description="Only available for non-ancestral level players."
      />,
      <Ability
        name="50k XP"
        description="Only available for ancestral level players."
      />,
      <Ability
        name="Temper a Piece of Gear x3"
        counters={[
          'You must use 3 of the same temper type to complete this mission.',
        ]}
      />,
      <Ability
        name="Equipment Synthesis x10"
        counters={[
          'This counts each time a synthesis is completed.',
          'Buy 10 green infusions from a general merchant and 5 2H weapon crates; use one infusion at a time.',
        ]}
      />,
      <Ability
        name="Equipment Synthesis x20"
        counters={[
          'This counts each time a synthesis is completed.',
          'Buy 20 green infusions from a general merchant and 10 2H weapon crates; use one infusion at a time.',
        ]}
      />,
      <Ability
        name="Open 20 Coin Purses"
        counters={[
          'Coin purses of any type count, but crates do not.',
          'You can easily farm Jester\'s Coin Purses while doing the kill monsters mission in zones such as Sanddeep, Perinoor, etc.',
        ]}
      />,
      <Ability
        name="Open 40 Coin Purses"
        counters={[
          'Coin purses of any type count, but crates do not.',
          'You can easily farm Jester\'s Coin Purses while doing the kill monsters mission in zones such as Sanddeep, Perinoor, etc.',
        ]}
      />,
    ],
  },
  {
    title: 'Known Issues',
    paragraphs: [
      'There are a few issues that are currently known about the ArchePass. You should try to avoid these situations if you can:',
      <Typography component="div">
        <ul>
          <li>
            When purchasing a pass, it won't be swapped to automatically. You need to go back to the Change menu and
            register it for it to switch.
          </li>
          <li>
            Switching your active pass will lock its missions again, forcing you to pay again to unlock each mission.
          </li>
          <li>
            Rarely upon logging in, an ArchePass mission will be marked as at 100% progress, but can not be
            completed. <span className="alert-red">A mission in this state must be re-rolled.</span>
          </li>
          <li>
            When at 11/12 weekly missions, completing 2 missions at the same time will both give your pass points as
            normal, technically reaching 13/12 for the week.
          </li>
        </ul>
      </Typography>,
    ],
  },
];

export default { name, meta, category, sections };
