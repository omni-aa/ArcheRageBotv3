/* eslint react/jsx-key: 0 */
import Typography from '@material-ui/core/Typography';
import ItemLink from 'components/Item/ItemLink';
import Link from 'components/Link';
import MapEmbed from 'components/MapEmbed/MapEmbed';
import QuestLink from 'components/Quest/QuestLink';
import { GUIDE_CATEGORY } from 'constants/guides';
import { ZONE } from 'constants/map';
import React from 'react';

const name = 'Getting Your First Garden';

const meta = {
  author: 'Mokulu',
  lastUpdated: 'Mar 24, 2021',
};

const category = GUIDE_CATEGORY.QUESTS;

const sections = [
  {
    title: 'The Scarecrow Garden',
    paragraphs: [
      <Typography>
        The first land design that you can acquire is the <ItemLink id={15596} />. Starting at level 30, a quest chain
        in Halcyona becomes available. This guide will follow the quest line required to getting your garden design.
      </Typography>,
    ],
  },
  {
    title: 'Eastern Halcyona',
    paragraphs: [
      <MapEmbed
        zone={ZONE.HALCYONA}
        points={[
          {
            label: [
              'The Missing Messenger',
              'Infiltrating the Brotherhood',
              'The Merchant\'s Way',
              'Rice Seed Delivery',
            ],
            coords: [{ x: 80.8, y: 47.2 }],
          },
          { label: 'Judar\'s Betrayal', coords: [{ x: 80.1, y: 40.9 }] },
          { label: ['Guarding the Fields', 'Wheat for the Brewery'], coords: [{ x: 72.1, y: 47.4 }] },
          { label: ['Processing Ingredients', 'Beer for Sun\'s End'], coords: [{ x: 65.7, y: 48.4 }] },
        ]}
      />,
      <Typography component="ol" style={{ margin: '10px 0' }}>
        <li>
          <QuestLink id={8708} /> is the first quest, available from Tasha in Solisa and turns in just north of Solisa
          to Heridon.
        </li>
        <li>
          <QuestLink id={8709} /> is acquired from Heridon and is turned in to Lord Triate back in Solisa. He&apos;s
          located upstairs in the house next to Tasha. The NPC Bellas is standing out front.
        </li>
        <li>
          <QuestLink id={8710} /> takes you right outside to talk to Bellas out front of the house.
        </li>
        <li>
          <QuestLink id={8711} /> leads you to Kendrick, who is the seed merchant sitting in front of the barn.
        </li>
        <li>
          <QuestLink id={8795} /> requires that you purchase a <ItemLink id={15646} /> from Kendrick and deliver it to
          Dorothy&apos;s farm.
        </li>
        <li>
          <QuestLink id={8712} /> at Dorothy&apos;s farm wants you to place the provided scarecrow in the field and
          plant the rice seed that you bought earlier.
        </li>
        <li>
          <QuestLink id={8713} /> takes you to the brewery due east of the farm.
        </li>
        <li>
          <QuestLink id={8714} /> asks you to process the <ItemLink id={8004} /> you received into <ItemLink
          id={30902} />.
        </li>
        <li>
          <QuestLink id={8715} /> will take you to Sun&apos;s End for the last stretch of the chain.
        </li>
      </Typography>,
    ],
  },
  {
    title: 'Sun\'s End',
    paragraphs: [
      <MapEmbed
        zone={ZONE.HALCYONA}
        points={[
          {
            label: [
              'Tonics and Tinctures',
              'Fearless Flowers',
              'Halcyona Pest Control',
              'Earning Your Garden',
            ],
            coords: [{ x: 39.8, y: 61.4 }],
          },
        ]}
      />,
      <Typography component="ol" style={{ margin: '10px 0' }}>
        <li>
          <QuestLink id={8716} /> wants you to purchase <ItemLink id={31770} count={10} /> from Lunia, the quest giver.
        </li>
        <li>
          <QuestLink id={8717} /> asks for Gravebloom Lavender, which can be found at the graveyard just north of
          Sun&apos;s End.
        </li>
        <li>
          <QuestLink id={8718} /> has you stomp on some Locust Grubs just outside the Halcyona public farm, just a few
          steps east of the quest giver.
        </li>
        <li>
          <QuestLink id={8720} /> finally has you purchase a mushroom spore from the seed and sapling merchant and plant
          it anywhere. You can optionally place it inside the public farm, protecting it from other players taking it.
        </li>
      </Typography>,
      <Typography>
        After completing <QuestLink id={8720} />, you will be given your <ItemLink id={15596} /> along with
        <ItemLink id={31892} count={15} /> (which will let you pay the security deposit to place it and pay its weekly
        taxes), and the <ItemLink id={8337} count={1} /> required to build the garden.
      </Typography>,
      <Typography>
        At level 50, the quest continues for a bigger farm: <ItemLink id={15566} />. To find out more, check out&nbsp;
        <Link to="/guides/scarecrow-farm">Getting Your Scarecrow Farm</Link>.
      </Typography>,
    ],
  },
];

export default { name, meta, category, sections };
