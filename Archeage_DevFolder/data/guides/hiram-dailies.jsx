import { Typography } from '@material-ui/core';
import Item from 'components/Item';
import MapEmbed from 'components/MapEmbed';
import { GUIDE_CATEGORY } from 'constants/guides';
import { ITEM } from 'constants/items';
import { ZONE } from 'constants/map';
import React from 'react';

const name = 'Hiram Dailies';

const meta = {
  author: 'Mokulu',
  lastUpdated: 'Nov 5, 2019',
};

const category = GUIDE_CATEGORY.DAILIES;

const sections = [
  {
    title: 'Introduction',
    paragraphs: [
      'This guide covers the daily quests to obtain the Synthesis and Awakening Materials used in infusing and upgrading Hiram equipment.',
      'There are a total of 11 quests, which can take around 45 minutes to complete when participating in a bigger group of players and potentially longer when in smaller parties.',
    ],
  },
  {
    title: 'Diamond Shores',
    paragraphs: [
      <MapEmbed
        zone={ZONE.DIAMOND_SHORES}
        points={[
          { label: 'Diamond Shores Guard', icon: 'daily', coords: [{ x: 50, y: 43.5 }] },
        ]}
      />,
      <Typography variant="h6">Diamond Shores Guard</Typography>,
      'Diamond Shores Guard is acquired from the Crimson Watch member Drillmaster Raysen near the Mistsong Summit teleport location.',
      'This quest has a level requirement of 50 and requires you to kill 50 enemies in Diamond Shores.',
      <Typography variant="subtitle1">Rewards</Typography>,
      <div className="quest-items">
        <Item id={ITEM.MYSTERIOUS_HIRAM_INFUSION} count={3} />
      </div>,
    ],
  },
  {
    title: 'Sungold Fields',
    paragraphs: [
      <MapEmbed
        zone={ZONE.SUNGOLD_FIELDS}
        points={[
          { label: 'Guardian of Sungold Fields', icon: 'daily', coords: [{ x: 51.1, y: 51.1 }] },
          { label: 'Water Elementals', icon: 1, coords: [{ x: 38.4, y: 45.2 }, { x: 31.9, y: 40 }] },
        ]}
      />,
      <Typography variant="h6">Guardian of Sungold Fields</Typography>,
      'Guardian of Sungold Fields is acquired from the Hiram Herald next to the Sungold Fields teleport location.',
      'This quest has a level requirement of 52 and requires you to kill 50 enemies in Sungold Fields.',
      'Indicated on the map are the water elementals, which have a higher spawn density than most enemies here and you can complete the quest a little quicker there.',
      <Typography variant="subtitle1">Rewards</Typography>,
      <Typography variant="caption" color="primary">Choose One:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.MYSTERIOUS_HIRAM_INFUSION} count={3} />
        <Item id={ITEM.HIRAM_AWAKENING_SCROLL} count={5} />
      </div>,
      <Typography variant="body2">I recommend taking the Awakening Scrolls until all of your gear is at least Radiant
        tier Hiram.</Typography>,
    ],
  },
  {
    title: 'Exeloch',
    paragraphs: [
      <MapEmbed
        zone={ZONE.EXELOCH}
        points={[
          { label: 'Guardian of Exeloch', icon: 'daily', coords: [{ x: 33.6, y: 57.1 }] },
          { label: 'Abyssal Shard Slimes', icon: 1, coords: [{ x: 46.1, y: 43.4 }, { x: 49.4, y: 43.8 }] },
        ]}
      />,
      <Typography variant="h6">Guardian of Exeloch</Typography>,
      'Guardian of Exeloch is acquired from the Hiram Herald next to the Exeloch teleport location.',
      'This quest has a level requirement of 52 and requires you to kill 50 enemies in Exeloch.',
      'Indicated on the map are the Abyssal Shard Slimes, which spawn two Abyssal Slimes when killed. The Abyssal Slimes have small health pools and count towards this kill quest, allowing you to complete it faster.',
      <Typography variant="subtitle1">Rewards</Typography>,
      <Typography variant="caption" color="primary">Choose One:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.MYSTERIOUS_HIRAM_INFUSION} count={3} />
        <Item id={ITEM.HIRAM_AWAKENING_SCROLL} count={5} />
      </div>,
      <Typography variant="body2">I recommend taking the Awakening Scrolls until all of your gear is at least Radiant
        tier Hiram.</Typography>,
    ],
  },
  {
    title: 'Reedwind',
    paragraphs: [
      <MapEmbed
        zone={ZONE.REEDWIND}
        points={[
          { label: 'Guardian of Reedwind', icon: 'daily', coords: [{ x: 53.4, y: 71.3 }] },
          { label: 'Abyssal Legion', icon: 1, coords: [{ x: 46.6, y: 63.4 }] },
        ]}
      />,
      <Typography variant="h6">Guardian of Reedwind</Typography>,
      'Guardian of Exeloch is acquired from the Hiram Herald in the Reedwind Crimson Watch Camp, near the Reedwind teleport location.',
      'This quest has a level requirement of 52 and requires you to kill 100 enemies in Reedwind.',
      'If the zone is in war, look for Combat Leader Dylia near the Hiram Herald. She will offer a quest called Thunderwing Titan Competition that also requires you to kill 100 enemies in Reedwind and offers a Gilda Star as a reward.',
      'Indicated on the map is an area nearby to the camp that has a lot of Abyssal Legion enemies.',
      <Typography variant="subtitle1">Rewards</Typography>,
      <Typography variant="caption" color="primary">Choose One:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.MYSTERIOUS_HIRAM_INFUSION} count={5} />
        <Item id={ITEM.HIRAM_AWAKENING_SCROLL} count={10} />
      </div>,
      <Typography variant="body2">I recommend taking the Awakening Scrolls until all of your gear is at least Radiant
        tier Hiram.</Typography>,
    ],
  },
  {
    title: 'Western Hiram Mountains',
    paragraphs: [
      <MapEmbed
        zone={ZONE.WESTERN_HIRAM_MOUNTAINS}
        points={[
          { label: 'Animal Control', icon: 'daily', coords: [{ x: 67.2, y: 91.8 }] },
          { label: ['Mutated Animals', 'The Abyssal Legion'], icon: 'daily', coords: [{ x: 34.3, y: 72.8 }] },
          { label: 'Animals', icon: 1, coords: [{ x: 42, y: 60.5 }] },
          { label: 'Mutated Animals', icon: 2, coords: [{ x: 45.3, y: 63 }] },
          { label: 'Abyssal Legion', icon: 3, coords: [{ x: 47.8, y: 55.5 }] },
        ]}
      />,
      'All quests located in the Western Hiram Mountains require a level of 55 to obtain.',
      <Typography variant="h6">Animal Control</Typography>,
      'Animal Control requires you to kill 50 non-mutated animals in the Western Hiram Mountains.',
      <Typography variant="subtitle1">Rewards</Typography>,
      <Typography variant="caption" color="primary">Choose One:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.RADIANT_HIRAM_INFUSION} count={3} />
        <Item id={ITEM.RADIANT_HIRAM_AWAKENING_SCROLL} count={7} />
      </div>,
      <Typography variant="h6">Mutated Animals</Typography>,
      'Mutated Animals requires you to kill 50 mutated animals in the Western Hiram Mountains.',
      <Typography variant="subtitle1">Rewards</Typography>,
      <Typography variant="caption" color="primary">Choose One:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.RADIANT_HIRAM_INFUSION} count={3} />
        <Item id={ITEM.RADIANT_HIRAM_AWAKENING_SCROLL} count={7} />
      </div>,
      <Typography variant="h6">The Abyssal Legion</Typography>,
      'The Abyssal Legion requires you to kill 50 abyssal legion affiliated enemies in the Western Hiram Mountains.',
      <Typography variant="subtitle1">Rewards</Typography>,
      <Typography variant="caption" color="primary">Choose One:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.RADIANT_HIRAM_INFUSION} count={3} />
        <Item id={ITEM.RADIANT_HIRAM_AWAKENING_SCROLL} count={7} />
      </div>,
      <Typography variant="h6">Recommendations</Typography>,
      'The easiest way to do these three quests is to teleport to the Hiram Cave in Western Hiram Mountains, get the ' +
      'quest Animal Control, then teleport to the Illusion Cave to grab Mutated Animals and The Abyssal Legion. Head ' +
      'south-east out of the cave and then up the ridge to the north-east. Riverfiends in the northern fields count ' +
      'towards Animal Control while the Mutated Wolves, Owlinas, Moss Elementals, and Lizards in the southern fields ' +
      'count towards Mutated Animals. You can head north-east and over the small hill towards the rivers to kill ' +
      'Serpent Fanatics, Mages, and Warriors for The Abyssal Legion.',
      'For the rewards, I recommend taking the Radiant Awakening Scrolls until all of your gear is at least Brilliant tier Hiram.',
    ],
  },
  {
    title: 'Eastern Hiram Mountains',
    paragraphs: [
      <MapEmbed
        zone={ZONE.EASTERN_HIRAM_MOUNTAINS}
        points={[
          { label: 'Millennium Mammoths', icon: 'daily', coords: [{ x: 34.4, y: 37.9 }] },
          { label: 'Haradium Abominations', icon: 'daily', coords: [{ x: 33.5, y: 61 }] },
          { label: 'Black Forest Treants', icon: 'daily', coords: [{ x: 51.4, y: 39.7 }] },
          { label: 'Stop the Abyssal Legion', icon: 'daily', coords: [{ x: 51.4, y: 75.4 }] },
          { label: 'Millennium Mammoth', icon: 1, coords: [{ x: 41, y: 26.8 }, { x: 41.3, y: 38.7 }] },
          { label: 'Haradium Abominations', icon: 2, coords: [{ x: 36.3, y: 79.3 }] },
          {
            label: 'Black Forest Treant',
            icon: 3,
            coords: [{ x: 60.5, y: 21.8 }, { x: 58.1, y: 22.8 }, { x: 55.7, y: 22.5 }],
          },
          {
            label: 'Abyssal Legion',
            icon: 4,
            coords: [{ x: 57.7, y: 70.3 }, { x: 60.5, y: 64.6 }, { x: 63.5, y: 72.5 }],
          },
        ]}
      />,
      'All quests located in the Eastern Hiram Mountains require a level of 55 to obtain.',
      <Typography variant="h6">Millennium Mammoths</Typography>,
      'Millennium Mammoths is an epic-difficulty quest that requires you to kill one Millennium Mammoth. You will need ' +
      'a group to complete it as the Millennium Mammoth has a lot of health and deals a lot of damage. It can spawn at ' +
      'either of the locations indicated on the map and is rumored to have a 5 minute respawn timer.',
      'The Mammoth will can freeze its target for several seconds, rendering them unable to attack or move. It also ' +
      'performs an attack where it barrels forward dealing massive damage to all players in its path.',
      <Typography variant="subtitle1">Rewards</Typography>,
      <div className="quest-items">
        <Item id={ITEM.BRILLIANT_HIRAM_AWAKENING_SCROLL} count={5} />
      </div>,
      <Typography variant="h6">Haradium Abominations</Typography>,
      'Animal Control requires you to kill 50 haradium abominations in the Eastern Hiram Mountains.',
      'The base of the waterfall is the largest area that the abominations can spawn. You can glide down the waterfall ' +
      'to avoid running through all the other enemies in the area.',
      <Typography variant="subtitle1">Rewards</Typography>,
      <Typography variant="caption" color="primary">Choose One:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.RADIANT_HIRAM_INFUSION} count={10} />
        <Item id={ITEM.BRILLIANT_HIRAM_AWAKENING_SCROLL} count={2} />
      </div>,
      <Typography variant="body2">I recommend taking the Radiant Hiram Infusions unless you've got most of your
        Brilliant tier Hiram gear at Epic and need the additional Awakening scrolls for awakening.</Typography>,
      <Typography variant="h6">Black Forest Treants</Typography>,
      'Black Forest Treants is an epic-difficulty quest that requires you to kill one Black Forest Treant. You will ' +
      'need  a group to complete it as the Black Forest Treant has a lot of health and deals a lot of damage. It can ' +
      'spawn at one of the locations indicated on the map and is rumored to have a 5 minute respawn timer.',
      'The Treant has a few enemies that guard it. When engaged and randomly through combat, it will place a toxic ' +
      'cloud that deals incredible damage to players inside of it. Its attacks also splash to nearby enemies, so ' +
      'spreading out will help prevent taking large amounts of damage.',
      <Typography variant="subtitle1">Rewards</Typography>,
      <div className="quest-items">
        <Item id={ITEM.BRILLIANT_HIRAM_AWAKENING_SCROLL} count={5} />
      </div>,
      <Typography variant="h6">Stop the Abyssal Legion</Typography>,
      'Stop the Abyssal Legion is an elite-difficulty quest that requires you to kill 50 abyssal legion enemies in the ' +
      'Eastern Hiram Mountains. You will need a group to complete it as these enemies have high health pools and deal ' +
      'high damage and usually sit or patrol in groups.',
      <Typography variant="subtitle1">Rewards</Typography>,
      <Typography variant="caption" color="primary">Choose One:</Typography>,
      <div className="quest-items">
        <Item id={ITEM.RADIANT_HIRAM_INFUSION} count={20} />
        <Item id={ITEM.BRILLIANT_HIRAM_AWAKENING_SCROLL} count={4} />
      </div>,
      <Typography variant="body2">I recommend taking the Radiant Hiram Infusions unless you've got most of your
        Brilliant tier Hiram gear at Epic and need the additional Awakening scrolls for awakening.</Typography>,
    ],
  },
];

export default { name, meta, category, sections };
