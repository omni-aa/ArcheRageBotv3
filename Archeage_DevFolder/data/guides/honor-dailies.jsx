import { Typography } from '@material-ui/core';
import Currency from 'components/Currency';
import ItemLink from 'components/Item/ItemLink';
import Link from 'components/Link';
import MapEmbed from 'components/MapEmbed';
import TabContent from 'components/TabContent';
import { GUIDE_CATEGORY } from 'constants/guides';
import { ITEM } from 'constants/items';
import { ZONE } from 'constants/map';
import React from 'react';

const name = 'Honor Dailies';

const meta = {
  author: 'Mokulu',
  lastUpdated: 'Nov 14, 2019',
};

const category = GUIDE_CATEGORY.DAILIES;

const sections = [
  {
    title: 'Honor Points',
    paragraphs: [
      'Honor points are a currency that is associated with player-versus-player activities, but there is a lot of non-PvP content that rewards honor.',
      <Typography>To read about the static ways to gain honor and what to do with them, read the <Link
        to="/guides/honor-points">Honor Points</Link> guide.</Typography>,
      'From dailies activities, there is currently a total of up to 15,800 Honor Points attainable per day.',
      'Not documented in this guide are the Militia quests, which appear after killing the main world boss in contested zones in Nuia or Haranya. These quests give 300 Honor Points each, but the bosses have 12 hour respawn timers.',
    ],
  },
  {
    title: 'Crimson Rift',
    paragraphs: [
      <TabContent
        tabs={[
          {
            label: 'Cinderstone Moor',
            content:
              <MapEmbed
                zone={ZONE.CINDERSTONE_MOOR}
                points={[
                  {
                    label: 'Crimson Omens',
                    icon: 'daily',
                    coords: [
                      { x: 40.1, y: 73.8 },
                      { x: 65.8, y: 64.5 },
                    ],
                  },
                  {
                    label: 'Crimson Rift',
                    icon: 'boss',
                    coords: [
                      { x: 60.5, y: 69 },
                      { x: 67.7, y: 51.5 },
                      { x: 55.2, y: 22.4 },
                    ],
                  },
                ]}
              />,
          },
          {
            label: 'Ynystere',
            content:
              <MapEmbed
                zone={ZONE.YNYSTERE}
                points={[
                  {
                    label: 'Crimson Omens',
                    icon: 'daily',
                    coords: [
                      { x: 40.8, y: 69.2 },
                      { x: 71.9, y: 52.4 },
                      { x: 56.1, y: 24.4 },
                    ],
                  },
                  {
                    label: 'Crimson Rift',
                    icon: 'boss',
                    coords: [
                      { x: 40.5, y: 61.5 },
                      { x: 67.5, y: 45.8 },
                    ],
                  },
                ]}
              />,
          },
          {
            label: 'Sungold Fields',
            content:
              <MapEmbed
                zone={ZONE.SUNGOLD_FIELDS}
                points={[
                  {
                    label: 'Crimson Omens',
                    icon: 'daily',
                    coords: [
                      { x: 51.8, y: 51 },
                    ],
                  },
                  {
                    label: 'Crimson Rift',
                    icon: 'boss',
                    coords: [
                      { x: 36.5, y: 64.1 },
                    ],
                  },
                ]}
              />,
          },
        ]}
      />,
      'The Crimson Rift happens every in-game day at 12:00 in Cinderstone Moor and Ynystere, and at 18:00 in Sungold Fields. Some zones have multiple possible spawn-points, as indicated by the map above.',
      'There are three sequential quests for this content, Crimson Omens 1 thru 3. They can be obtained from Nui\'s Shield Recruiters at the locations indicated above.',
      'Each wave consists of mobs with increasing health and damage. You don\'t need a large number of players to do these dailies, but there\'s usually raids available every time it happens.',
      <Typography variant="subtitle1" color="primary">Rewards</Typography>,
      <Typography className="reward-list">
        <Currency type="Honor" count={900} inline />
        <ItemLink id={ITEM.IMPROVED_INFUSION_SUPPLY_KIT} count={9} />
      </Typography>,
    ],
  },
  {
    title: 'Grimghast Rift',
    paragraphs: [
      <TabContent
        tabs={[
          {
            label: 'Cinderstone Moor',
            content:
              <MapEmbed
                zone={ZONE.CINDERSTONE_MOOR}
                points={[
                  { label: 'Request Board', icon: 'daily', coords: [{ x: 66.3, y: 65.3 }] },
                  { label: 'Helping the War Effort', icon: 'daily', coords: [{ x: 40.8, y: 72.4 }] },
                  { label: 'Grimghast Rift', icon: 'boss', coords: [{ x: 60.5, y: 69 }] },
                ]}
              />,
          },
          {
            label: 'Ynystere',
            content:
              <MapEmbed
                zone={ZONE.YNYSTERE}
                points={[
                  { label: 'Request Board', icon: 'daily', coords: [{ x: 56.3, y: 24.5 }] },
                  { label: 'Helping the War Effort', icon: 'daily', coords: [{ x: 61, y: 45.3 }] },
                  { label: 'Grimghast Rift', icon: 'boss', coords: [{ x: 40.5, y: 61.5 }] },
                ]}
              />,
          },
        ]}
      />,
      'The Grimghast Rift occurs at midnight every in-game day in Cinderstone Moor and Ynystere.',
      'To begin the quest chain, you must pick up the quest from the Request Board (as early as 20:00 in-game time) in either the Cinderstone Community Center or Caernord of Ynystere. This quest will require either 10 Fabric, 10 Leather, 10 Lumber, 10 Stone Brick, or 10 Iron Ingots. You will bring these materials to the Burnt Castle Camp in Cinderstone or Fortress in Ynystere.',
      'After the request board\'s quest is turned in, you will receive Helping the War Effort. This quest requires you to bring two Condensed Archeum packs that spawn near that NPC just after midnight in-game time down to the Trebuchet Construction Site (indicated by the Grimghast Rift on the above map).',
      'Completing this quest will give you two sequential quests of Halting the Crimson Tide. Defeating enemies from the two waves of Nightmare enemies that spawn in front of the Trebuchet at 01:00 will grant credit towards these quests.',
      'There are also special harpoons that can be acquired once per day next to the Trebuchet Build Site. They allow you to stun the target Nightmare enemy and kill them after a short channel, quickly speeding up the wave clear.',
      <Typography variant="subtitle1" color="primary">Rewards</Typography>,
      <Typography className="reward-list">
        <Currency type="Honor" count={900} inline />
        <ItemLink id={ITEM.IMPROVED_INFUSION_SUPPLY_KIT} count={9} />
        <ItemLink id={ITEM.GILDA_STAR} count={2} />
      </Typography>,
    ],
  },
  {
    title: 'Whalesong Siege',
    paragraphs: [
      <MapEmbed
        zone={ZONE.WHALESONG_HARBOR}
        points={[
          {
            label: 'Whalesong Siege',
            icon: 'daily',
            coords: [{ x: 50, y: 91.4 }],
          },
          {
            label: 'Nuia Base Defense',
            icon: 'boss',
            coords: [{ x: 36.7, y: 55.8 }],
          },
          {
            label: 'Haranya Base Defense',
            icon: 'boss',
            coords: [{ x: 62.8, y: 14.4 }],
          },
        ]}
      />,
      'The siege of Whalesong starts 5 minutes after Whalesong enters the War state (or when there\'s 1 hour and 25 minutes left of War).',
      'There are four daily quests that can be collected from the Crimson Watch Supply Depot indicated on the map, and there are defense bases for each faction.',
      'During this siege, you will be protecting the containment tower against waves of extremely strong enemies. This content will require a raid to complete.',
      'This event ends when all waves and Jakar are killed, or the containment tower is destroyed.',
      <Typography variant="subtitle1" color="primary">Rewards</Typography>,
      <Typography className="reward-list">
        <Currency type="Honor" count={1800} inline />
        <ItemLink id={ITEM.CURSED_ARMOR_SCRAP} count={13} />
      </Typography>,
    ],
  },
  {
    title: 'Defending the Seal',
    paragraphs: [
      <MapEmbed
        zone={ZONE.AEGIS_ISLAND}
        points={[
          {
            label: 'Defending the Seal',
            icon: 'daily',
            coords: [{ x: 52, y: 52 }],
          },
          {
            label: 'Nuia Seal',
            icon: 'boss',
            coords: [{ x: 43.2, y: 59.1 }],
          },
          {
            label: 'Haranya Seal',
            icon: 'boss',
            coords: [{ x: 59.8, y: 54.7 }],
          },
        ]}
      />,
      'The seals of Aegis fall under attack 5 minutes after the zone transitions to War (or when there\'s 1 hour and 25 minutes left of War).',
      'There are four daily quests that can be collected from the Crimson Watch Camp indicated on the map, and there are seals for each faction.',
      'During the assault, you will be protecting your faction\'s seal from the seal destroyers. Each time the center toad boss is defeated, a stronger one will spawn with enemies for the next tier of wave of daily quest, up until the third.',
      'Quest mobs spawn every so often while the seal destroyer is alive. The third wave will spawn the mobs for quest three, but only two at a time. This will take the longest, and if multiple raids are trying to complete this quest, then resetting the Final Sealbreaker will allow the waves to continue spawning.',
      'This event ends after 30 minutes (or when there\'s 55 minutes left of War) or when the Final Sealbreaker is killed.',
      <Typography variant="subtitle1" color="primary">Rewards</Typography>,
      <Typography className="reward-list">
        <Currency type="Honor" count={1800} inline />
        <ItemLink id={ITEM.ACID_GOBBET} count={12} />
      </Typography>,
    ],
  },
  {
    title: 'Lusca Awakening',
    paragraphs: [
      <TabContent
        tabs={[
          {
            label: 'Ezna',
            content:
              <MapEmbed
                zone={ZONE.MARIANOPLE_CITY}
                points={[{ label: 'Lusca Awakening', icon: 'daily', coords: [{ x: 48.4, y: 41.1 }] }]}
              />,
          },
          {
            label: 'Austera',
            content:
              <MapEmbed
                zone={ZONE.AUSTERA}
                points={[{ label: 'Lusca Awakening', icon: 'daily', coords: [{ x: 48, y: 25.6 }] }]}
              />,
          },
          {
            label: 'Diamond Shores',
            content:
              <MapEmbed
                zone={ZONE.DIAMOND_SHORES}
                points={[
                  {
                    label: 'Lusca Awakening',
                    icon: 'daily',
                    coords: [{ x: 31.5, y: 68.1 }, { x: 65.3, y: 62.7 }, { x: 51, y: 43.8 }],
                  },
                ]}
              />,
          },
        ]}
      />,
      'Lusca Awakening can be obtained from the Seamist Researchers in Marianople and Western Diamond Shores (for Nuia), Austera and Eastern Diamond Shores (for Haranya), or central Diamond Shores near the Mistsong Summit entrance.',
      'The quest pickup point near the Mistsong Summit entrance will always have the quest available while the other four will only be available when the event is ongoing.',
      <Typography>Use the <Link to="/schedule">Event Schedule</Link> to see when this instance is available
        next.</Typography>,
      <MapEmbed
        zone={ZONE.SEA_OF_GRAVES}
        points={[
          {
            label: 'Lusca Awakening',
            icon: 'boss',
            coords: [
              { x: 48.8, y: 26.7 },
              { x: 33.1, y: 68.8 },
              { x: 63.5, y: 71 },
            ],
          },
          {
            label: 'Nuia Spawn',
            icon: 1,
            coords: [{ x: 62, y: 9.1 }],
          },
          {
            label: 'Haranya Spawn',
            icon: 2,
            coords: [{ x: 21.2, y: 58.4 }],
          },
        ]}
      />,
      'When the event starts, the portals near every pickup point will be active and will take you to your faction\'s respawn point in the Sea of Graves.',
      'When the Luscas awaken, they will be located in one of three locations for that day (possible locations indicated above). There are several waves of around 10 Luscas each that spawn, and once every wave has been defeated, the event concludes.',
      'As a note, Luscas can only be damaged by siege damage. This event requires the use of a galleon and a raid to complete, and as it\'s on the open waters, you will encounter the enemy faction also trying to complete their quests.',
    ],
  },
  {
    title: 'Golden Plains Battle',
    paragraphs: [
      <Typography>From the Instance menu, you may queue up for the Faction War instance of Golden Plains Battle up to
        three times per day, based on your region's <Link to="/schedule">event schedule</Link>, but requires 4000
        equipment points to enter.</Typography>,
      <Typography>Use the <Link to="/schedule">Event Schedule</Link> to see when this instance is available
        next.</Typography>,
      <Typography>The goal of this instance is to either:<br />
        &nbsp;&nbsp;1. destroy the opposing faction's base.<br />
        &nbsp;&nbsp;2. have the highest score after the 20 minute duration ends.</Typography>,
      'Destroying the enemy faction\'s base will immediately end the instance and the other faction will be awarded with first place. After that consideration, or if there was no based destroyed in the 20 minutes, then placement is based on total score (or number of player kills).',
      <Typography>
        <Typography component="span" color="primary">First Place:&nbsp;</Typography>
        <Currency inline type="Honor" count={2000} />
      </Typography>,
      <Typography>
        <Typography component="span" color="primary">Second Place:&nbsp;</Typography>
        <Currency inline type="Honor" count={1500} />
      </Typography>,
      <Typography>
        <Typography component="span" color="primary">Third Place:&nbsp;</Typography>
        <Currency inline type="Honor" count={1200} />
      </Typography>,
    ],
  },
  {
    title: 'The Fall of Hiram City',
    paragraphs: [
      'The Fall of Hiram City is a PvE raid instance available a certain times every day. Depending on how well you do, this instance can award up to 1500 Honor Points.',
      <Typography>Use the <Link to="/schedule">Event Schedule</Link> to see when this instance is available
        next.</Typography>,
      <Typography>
        <Typography component="span" color="primary">Best Reward:&nbsp;</Typography>
        <Currency inline type="Honor" count={1500} />
        <ItemLink id={ITEM.MYSTERIOUS_HIRAM_INFUSION} count={20} style={{ marginLeft: 6 }} />
      </Typography>,
      <Typography>
        <Typography component="span" color="primary">Median Reward:&nbsp;</Typography>
        <Currency inline type="Honor" count={1000} />
        <ItemLink id={ITEM.MYSTERIOUS_HIRAM_INFUSION} count={12} style={{ marginLeft: 6 }} />
      </Typography>,
      <Typography>
        <Typography component="span" color="primary">Minimum Reward:&nbsp;</Typography>
        <Currency inline type="Honor" count={800} />
        <ItemLink id={ITEM.MYSTERIOUS_HIRAM_INFUSION} count={8} style={{ marginLeft: 6 }} />
      </Typography>,
    ],
  },
  {
    title: 'Red Dragon\'s Keep',
    paragraphs: [
      <Typography>The Red Dragon's Keep is available on certain days of the week, two times per day. You may enter it
        once per day. In the North American region, on days it is available, the Red Dragon's Keep can be entered once
        before daily reset and once after.</Typography>,
      <Typography>Use the <Link to="/schedule">Event Schedule</Link> to see when this instance is available
        next.</Typography>,
      <Typography>Check out the <Link to="/guides/red-dragon-keep">guide</Link> to learn about the fight.</Typography>,
      <Typography variant="subtitle1" color="primary">Killing the Red Dragon awards:</Typography>,
      <Typography className="reward-list">
        <Currency type="Honor" count={2000} inline />
        <span>and various other goodies.</span>
      </Typography>,
    ],
  },
  {
    title: 'Kadum',
    paragraphs: [
      <Typography>The Kadum is available on certain days of the week, two times per day. You may enter the instance
        once per day. In the North American region, on days it is available, the Kadum can be fought once before daily
        reset and once after.</Typography>,
      <Typography>Use the <Link to="/schedule">Event Schedule</Link> to see when this instance is available
        next.</Typography>,
      <Typography variant="subtitle1" color="primary">Killing Kadum awards:</Typography>,
      <Typography className="reward-list">
        <Currency type="Honor" count={2000} inline />
        <span>and various other goodies.</span>
      </Typography>,
    ],
  },
];

export default { name, meta, category, sections };
