import { Typography } from '@material-ui/core';
import ItemLink from 'components/Item/ItemLink';
import Link from 'components/Link';
import MapEmbed from 'components/MapEmbed';
import TabContent from 'components/TabContent';
import { GUIDE_CATEGORY } from 'constants/guides';
import { ITEM } from 'constants/items';
import { ZONE } from 'constants/map';
import React from 'react';

const name = 'Gilda Star Dailies';

const meta = {
  author: 'Mokulu',
  lastUpdated: 'Dec 10, 2019',
};

const category = GUIDE_CATEGORY.DAILIES;

const ARarePerfume = ({ faction }) => (
  <>
    <Typography variant="h6">A Rare Perfume</Typography>
    <Typography>A Rare Perfume is acquired from the {faction} Wanderer in any major city. You must create
      a <ItemLink id={ITEM.CONDENSED_SCENT} /> by using one of the Perfume Mortars located behind the
      NPC.</Typography>
    <Typography>To create the condensed scent in the mortar, you will need 10 Labor and <b>one</b> of the
      following:</Typography>
    <ul>
      <li><Typography><ItemLink id={ITEM.CHOPPED_PRODUCE} count={30} plural={''} /></Typography></li>
      <li><Typography><ItemLink id={ITEM.DRIED_FLOWERS} count={30} plural={''} /></Typography></li>
      <li><Typography><ItemLink id={ITEM.GROUND_GRAIN} count={30} plural={''} /></Typography></li>
      <li><Typography><ItemLink id={ITEM.GROUND_SPICES} count={30} plural={''} /></Typography></li>
    </ul>
    <Typography>These items can be acquired by either growing the raw materials and then processing them into these
      items yourself or by looking up and buying the cheapest set of 30 from the Auction House.</Typography>
    <Typography variant="body2">Warning: {faction === 'Western' ? 'Caernord' : 'Cinderstone'} offers
      the {faction === 'Western' ? 'Haranyan' : 'Nuian'} version of this quest. It looks the same at first, but upon
      completion you will only be able to start the {faction === 'Western' ? 'Haranyan' : 'Nuian'} version of Guerilla
      Marketing, which involves going to three locations in {faction === 'Western' ? 'Tigerspine Mountains'
        : 'Lilyut Hills'} and might be difficult due to guards and hostile players.</Typography>
  </>
);

const sections = [
  {
    title: 'Introduction',
    paragraphs: [
      <Typography>Welcome to my introductory <ItemLink id={ITEM.GILDA_STAR} /> daily guide. There are currently over
        100 possible Gilda Stars that can be obtained in a day, but not all of them are feasible or easy to
        do.</Typography>,
      'This guide will highlight the ways that you can obtain Gilda Stars from various daily quests and events. There are currently 52 Gilda Stars listed in this guide.',
    ],
  },
  {
    title: 'Blue Salt Brotherhood',
    tabContent: [
      {
        label: 'Nuia',
        content:
          <>
            <TabContent tabs={[
              {
                label: 'Marianople',
                content:
                  <MapEmbed
                    zone={ZONE.MARIANOPLE_CITY}
                    points={[
                      {
                        label: ['A Rare Perfume', 'Guerilla Marketing', 'Roadsend in Danger'],
                        icon: 'daily',
                        coords: [{ x: 57.3, y: 38.1 }],
                      },
                      {
                        label: ['Raising a Wild Horse', 'Raising a Wild Elk'],
                        icon: 'daily',
                        coords: [{ x: 58.2, y: 38.8 }],
                      },
                    ]}
                  />,
              },
              {
                label: 'Ezna',
                content:
                  <MapEmbed
                    zone={ZONE.EZNA}
                    points={[
                      {
                        label: ['A Rare Perfume', 'Guerilla Marketing', 'Roadsend in Danger'],
                        icon: 'daily',
                        coords: [{ x: 49.1, y: 33.4 }],
                      },
                      {
                        label: ['Raising a Wild Horse', 'Raising a Wild Elk'],
                        icon: 'daily',
                        coords: [{ x: 50, y: 33.7 }],
                      },
                    ]}
                  />,
              },
              {
                label: 'Cinderstone Moor',
                content:
                  <MapEmbed
                    zone={ZONE.CINDERSTONE_MOOR}
                    points={[
                      {
                        label: ['A Rare Perfume', 'Guerilla Marketing', 'Roadsend in Danger'],
                        icon: 'daily',
                        coords: [{ x: 67, y: 67.6 }],
                      },
                      {
                        label: ['Raising a Wild Horse', 'Raising a Wild Elk'],
                        icon: 'daily',
                        coords: [{ x: 67.7, y: 66.5 }],
                      },
                    ]}
                  />,
              },
              {
                label: 'Caernord',
                content:
                  <MapEmbed
                    zone={ZONE.CAERNORD}
                    points={[
                      {
                        label: ['Signs of the Salphira Cult'],
                        icon: 'daily',
                        coords: [{ x: 68.1, y: 44.8 }],
                      },
                      {
                        label: ['Raising a Malfunctioning Leomorph', 'Raising a Wild Snowlion'],
                        icon: 'daily',
                        coords: [{ x: 69.4, y: 45.9 }],
                      },
                    ]}
                  />,
              },
            ]}
            />
            <Typography>There are a total of <ItemLink id={ITEM.GILDA_STAR} count={8} /> that can be easily obtained
              every day from the Blue Salt Brotherhood. The quest locations are listed in the above maps and detailed
              how-tos are available below.</Typography>
            <hr />
            <ARarePerfume faction="Western" />
            <hr />
            <Typography variant="h6">Guerilla Marketing</Typography>
            <MapEmbed
              zone={ZONE.LILYUT_HILLS}
              points={[
                { label: 'Wind-Scented Vase', coords: [{ x: 40.8, y: 69.8 }] },
                { label: 'Dawn-Scented Vase', coords: [{ x: 71.4, y: 44.6 }] },
                { label: 'Fog-Scented Vase', coords: [{ x: 28.7, y: 45.3 }] },
                { label: 'Lilyut Hills Community Center', icon: 'port', coords: [{ x: 41.3, y: 65.1 }] },
                { label: 'Riverspan', icon: 'port', coords: [{ x: 64.3, y: 48.2 }] },
                { label: 'Rockmar Barrow', icon: 'port', coords: [{ x: 45.2, y: 36.7 }] },
              ]}
            />
            <Typography>Once you've completed and turned in A Rare Perfume, this quest will be available from the
              Western Wanderer. You will be supplied with three scented vases that can only be placed in specific
              locations in Lilyut Hills. You will have to either run around or spend Hereafter Stones to teleport to the
              closest locations.</Typography>
            <hr />
            <Typography variant="h6">Roadsend in Danger</Typography>
            <MapEmbed
              zone={ZONE.DEWSTONE_PLAINS}
              points={[
                { label: 'Faulty Gunpowder', coords: [{ x: 33.9, y: 73.5 }, { x: 35.5, y: 72.8 }] },
                { label: 'Roadsend', icon: 'port', coords: [{ x: 34.8, y: 76 }] },
              ]}
            />
            <Typography>Collect 8 Faulty Gunpowder from outside of Roadsend. If you'd like to get there faster, you can
              use Hereafter Stones to teleport to Roadsend.</Typography>
            <hr />
            <Typography variant="h6">Raising Wild Animals</Typography>
            <TabContent
              tabs={[
                {
                  label: 'Horse',
                  content:
                    <MapEmbed
                      zone={ZONE.SOLZREED_PENINSULA}
                      points={[
                        { label: 'Public Stable', icon: 'farm', coords: [{ x: 61.5, y: 66.6 }] },
                        { label: 'Wardton', icon: 'port', coords: [{ x: 60.2, y: 64.5 }] },
                      ]}
                    />,
                },
                {
                  label: 'Elk',
                  content:
                    <MapEmbed
                      zone={ZONE.GWEONID_FOREST}
                      points={[
                        { label: 'Public Stable', icon: 'farm', coords: [{ x: 38.5, y: 48.3 }] },
                        { label: 'Gweonid Community Center', icon: 'port', coords: [{ x: 49.7, y: 46.1 }] },
                      ]}
                    />,
                },
                {
                  label: 'Snowlion',
                  content:
                    <MapEmbed
                      zone={ZONE.FALCORTH_PLAINS}
                      points={[
                        { label: 'Public Stable', icon: 'farm', coords: [{ x: 39.3, y: 57.6 }] },
                        { label: 'Falcorth Community Center', icon: 'port', coords: [{ x: 45.6, y: 33.7 }] },
                      ]}
                    />,
                },
                {
                  label: 'Leomorph',
                  content:
                    <MapEmbed
                      zone={ZONE.ARCUM_IRIS}
                      points={[
                        { label: 'Public Stable', icon: 'farm', coords: [{ x: 37.2, y: 59.6 }] },
                        { label: 'Arcum Iris Community Center', icon: 'port', coords: [{ x: 32.2, y: 56 }] },
                      ]}
                    />,
                },
              ]}
            />
            <Typography>
              To raise each animal, you will need approximately <ItemLink id={ITEM.WATER} count={2} plural={''} />
              &nbsp;and <ItemLink id={ITEM.VITA_ROOT} count={2} /> per animal. Water can be drawn from wells and Vita
              Roots
              can be grown from Vita Seeds that are purchased from nearby stablehands.
            </Typography>
            <Typography>Each animal must be raised at its corresponding public stable. You can teleport to the nearby
              locations listed, or walk there.</Typography>
            <Typography variant="body2">Please note: While it is possible to perform Raising a Wild Snowlion and Raising
              a Malfunctioning Leomorph, it can prove to tedious the first time (to acquire the port) and difficult due
              to guards and hostile players. The easiest way to reach Arcum might be to teleport to the Palace Cellar
              dungeon location in Mahadevi (which is every character has by default), and then run from there. For
              Falcorth, head to the Rookborne Community Center and then head west over the mountains towards the
              community center, then towards Cloudgrain.</Typography>
            <hr />
            <Typography variant="h6">Signs of the Salphira Cult</Typography>
            <MapEmbed
              zone={ZONE.CITY_OF_TOWERS}
              points={[
                { label: 'Hellhound Leash', coords: [{ x: 56.9, y: 75.7 }] },
                { label: 'Palace Cellar', icon: 'port', coords: [{ x: 57.8, y: 75.4 }] },
              ]}
            />
            <Typography>While this quest is on the Haranyan continent, it is really easy to do for a Nuian. After
              accepting the quest from Caernord, you can use the teleport to Greater Palace Cellar in the "Dungeon"
              tab of your teleport book. Once you've teleported, the 12 hellhound leashes that you need will be
              scattered around the dungeon's peace zone.</Typography>
          </>,
      },
      {
        label: 'Haranya',
        content:
          <>
            <TabContent tabs={[
              {
                label: 'Austera',
                content:
                  <MapEmbed
                    zone={ZONE.AUSTERA}
                    points={[
                      {
                        label: ['A Rare Perfume', 'Guerilla Marketing', 'Signs of the Salphira Cult'],
                        icon: 'daily',
                        coords: [{ x: 47, y: 53.7 }],
                      },
                      {
                        label: ['Raising a Malfunctioning Leomorph', 'Raising a Wild Snowlion'],
                        icon: 'daily',
                        coords: [{ x: 46.7, y: 55.5 }],
                      },
                    ]}
                  />,
              },
              {
                label: 'Lutesong Harbor',
                content:
                  <MapEmbed
                    zone={ZONE.LUTESONG_HARBOR}
                    points={[
                      {
                        label: ['A Rare Perfume', 'Guerilla Marketing', 'Signs of the Salphira Cult'],
                        icon: 'daily',
                        coords: [{ x: 51.4, y: 74.5 }],
                      },
                      {
                        label: ['Raising a Malfunctioning Leomorph', 'Raising a Wild Snowlion'],
                        icon: 'daily',
                        coords: [{ x: 52.3, y: 73.9 }],
                      },
                    ]}
                  />,
              },
              {
                label: 'Caernord',
                content:
                  <MapEmbed
                    zone={ZONE.CAERNORD}
                    points={[
                      {
                        label: ['A Rare Perfume', 'Guerilla Marketing', 'Signs of the Salphira Cult'],
                        icon: 'daily',
                        coords: [{ x: 68.1, y: 44.8 }],
                      },
                      {
                        label: ['Raising a Malfunctioning Leomorph', 'Raising a Wild Snowlion'],
                        icon: 'daily',
                        coords: [{ x: 69.4, y: 45.9 }],
                      },
                    ]}
                  />,
              },
              {
                label: 'Cinderstone Moor',
                content:
                  <MapEmbed
                    zone={ZONE.CINDERSTONE_MOOR}
                    points={[
                      {
                        label: ['Roadsend in Danger'],
                        icon: 'daily',
                        coords: [{ x: 67, y: 67.6 }],
                      },
                      {
                        label: ['Raising a Wild Horse', 'Raising a Wild Elk'],
                        icon: 'daily',
                        coords: [{ x: 67.7, y: 66.5 }],
                      },
                    ]}
                  />,
              },
            ]}
            />
            <Typography>There are a total of <ItemLink id={ITEM.GILDA_STAR} count={8} /> that can be easily obtained
              every day from the Blue Salt Brotherhood. The quest locations are listed in the above maps and detailed
              how-tos are available below.</Typography>
            <hr />
            <ARarePerfume faction="Eastern" />
            <hr />
            <Typography variant="h6">Guerilla Marketing</Typography>
            <MapEmbed
              zone={ZONE.TIGERSPINE_MOUNTAINS}
              points={[
                { label: 'Wind-Scented Vase', coords: [{ x: 48.3, y: 75 }] },
                { label: 'Dawn-Scented Vase', coords: [{ x: 56, y: 53.1 }] },
                { label: 'Fog-Scented Vase', coords: [{ x: 35.6, y: 36.9 }] },
                { label: 'Tigerspine Community Center', icon: 'port', coords: [{ x: 46.1, y: 70 }] },
                { label: 'Tigerseye', icon: 'port', coords: [{ x: 45.7, y: 42.6 }] },
              ]}
            />
            <Typography>Once you've completed and turned in A Rare Perfume, this quest will be available from the
              Eastern Wanderer. You will be supplied with three scented vases that can only be placed in specific
              locations in Tigerspine Mountains. You will have to either run around or spend Hereafter Stones
              to teleport to the closest locations.</Typography>
            <hr />
            <Typography variant="h6">Signs of the Salphira Cult</Typography>
            <MapEmbed
              zone={ZONE.CITY_OF_TOWERS}
              points={[
                { label: 'Hellhound Leash', coords: [{ x: 56.9, y: 75.7 }] },
                { label: 'Palace Cellar', icon: 'port', coords: [{ x: 57.8, y: 75.4 }] },
              ]}
            />
            <Typography>Collect 12 Hellhound Leashes from outside the entrance of the Palace Cellar dungeon. If you'd
              like to get there faster, you can use Hereafter Stones to teleport to Palace Cellar from the dungeon
              tab of your teleport book.</Typography>
            <hr />
            <Typography variant="h6">Raising Wild Animals</Typography>
            <TabContent
              tabs={[
                {
                  label: 'Snowlion',
                  content:
                    <MapEmbed
                      zone={ZONE.FALCORTH_PLAINS}
                      points={[
                        { label: 'Public Stable', icon: 'farm', coords: [{ x: 39.3, y: 57.6 }] },
                        { label: 'Cloudgrain', icon: 'port', coords: [{ x: 37.9, y: 53 }] },
                      ]}
                    />,
                },
                {
                  label: 'Leomorph',
                  content:
                    <MapEmbed
                      zone={ZONE.ARCUM_IRIS}
                      points={[
                        { label: 'Public Stable', icon: 'farm', coords: [{ x: 37.2, y: 59.6 }] },
                        { label: 'Arcum Iris Community Center', icon: 'port', coords: [{ x: 32.2, y: 56 }] },
                      ]}
                    />,
                },
                {
                  label: 'Horse',
                  content:
                    <MapEmbed
                      zone={ZONE.SOLZREED_PENINSULA}
                      points={[
                        { label: 'Public Stable', icon: 'farm', coords: [{ x: 61.5, y: 66.6 }] },
                        { label: 'Solzreed Community Center', icon: 'port', coords: [{ x: 62.7, y: 67.4 }] },
                      ]}
                    />,
                },
                {
                  label: 'Elk',
                  content:
                    <MapEmbed
                      zone={ZONE.GWEONID_FOREST}
                      points={[
                        { label: 'Public Stable', icon: 'farm', coords: [{ x: 38.5, y: 48.3 }] },
                        { label: 'Gweonid Community Center', icon: 'port', coords: [{ x: 49.7, y: 46.1 }] },
                      ]}
                    />,
                },
              ]}
            />
            <Typography>
              To raise each animal, you will need approximately <ItemLink id={ITEM.WATER} count={2} plural={''} />
              &nbsp;and <ItemLink id={ITEM.VITA_ROOT} count={2} /> per animal. Water can be drawn from wells and Vita
              Roots
              can be grown from Vita Seeds that are purchased from nearby stablehands.
            </Typography>
            <Typography>Each animal must be raised at its corresponding public stable. You can teleport to the nearby
              locations listed, or walk there.</Typography>
            <Typography variant="body2">Please note: While it is possible to perform Raising a Wild Horse and Raising
              a Wild Elk, it can prove to tedious the first time (to acquire the ports) and difficult due to guards and
              hostile players. The easiest way to reach Solzreed might be to teleport to the dungeon Burnt Castle Armory
              and head across the sound into Solzreed. To get to Gweonid, you'll want to head over from Solzreed into
              Lilyut Hills and then into Gweonid.</Typography>
            <hr />
            <Typography variant="h6">Roadsend in Danger</Typography>
            <MapEmbed
              zone={ZONE.DEWSTONE_PLAINS}
              points={[
                { label: 'Faulty Gunpowder', coords: [{ x: 33.9, y: 73.5 }, { x: 35.5, y: 72.8 }] },
                { label: 'Sharpwind Mines', icon: 'port', coords: [{ x: 27.5, y: 69.5 }] },
              ]}
            />
            <Typography>This quest is on the Nuian continent and could be difficult to do as a Haranyan. After
              accepting the quest from Cinderstone, you can use the teleport to Greater Sharpwind Mines in the
              "Dungeon" tab of your teleport book. Once you've teleported, you will need to head north our of the ravine
              and then south until you're just outside Roadsend, but watch out for guards and hostile players. Collect 8
              Faulty Gunpowder from outside of the town.</Typography>
          </>,
      },
    ],
  },
  {
    title: 'Nuia Blue Salt Requests',
    paragraphs: [
      <TabContent
        tabs={[
          {
            label: 'Cinderstone',
            content:
              <MapEmbed
                zone={ZONE.CINDERSTONE_MOOR}
                points={[
                  { label: 'Lizard Lair', coords: [{ x: 50.3, y: 61.1 }, { x: 52.6, y: 69.5 }] },
                  {
                    label: 'The Herd of Horrors',
                    coords: [{ x: 46.2, y: 55.5 }, { x: 44.3, y: 49.4 }, { x: 52, y: 25.5 }, { x: 58.5, y: 24.5 }],
                  },
                  { label: 'Community Center', icon: 'com-center', coords: [{ x: 66.6, y: 63.6 }] },
                ]}
              />,
          },
          {
            label: 'Halcyona',
            content:
              <MapEmbed
                zone={ZONE.HALCYONA}
                points={[
                  { label: 'Cockatrice Killer', coords: [{ x: 35.3, y: 65.2 }] },
                  { label: 'Defeat the Goldmane Tribe', coords: [{ x: 59.9, y: 47.6 }] },
                  { label: 'Community Center', icon: 'com-center', coords: [{ x: 40, y: 62.3 }] },
                ]}
              />,
          },
          {
            label: 'Hellswamp',
            content:
              <MapEmbed
                zone={ZONE.HELLSWAMP}
                points={[
                  { label: 'Spider Infestation', coords: [{ x: 48.8, y: 30.5 }, { x: 46.9, y: 33.7 }] },
                  { label: 'The Mandragora Menace', coords: [{ x: 53, y: 42 }] },
                  { label: 'Doomed Souls', coords: [{ x: 48, y: 65 }, { x: 51, y: 70 }] },
                  { label: 'Community Center', icon: 'com-center', coords: [{ x: 45, y: 32.5 }] },
                ]}
              />,
          },
          {
            label: 'Sanddeep',
            content:
              <MapEmbed
                zone={ZONE.SANDDEEP}
                points={[
                  { label: 'Tidal Warriors', coords: [{ x: 43.8, y: 43 }] },
                  { label: 'The Fable Hill Goblins', coords: [{ x: 52.9, y: 29.4 }] },
                  { label: 'Community Center', icon: 'com-center', coords: [{ x: 75, y: 36 }] },
                ]}
              />,
          },
          {
            label: 'Karkasse',
            content:
              <MapEmbed
                zone={ZONE.KARKASSE_RIDGELANDS}
                points={[
                  { label: 'The Blades of the Dead', coords: [{ x: 46.2, y: 38.7 }] },
                  { label: 'A Poisonous Pass', coords: [{ x: 57.9, y: 50.2 }] },
                  { label: 'Overgrown Grubs', coords: [{ x: 67.3, y: 43.3 }] },
                  { label: 'Taloned Terrors', coords: [{ x: 69.1, y: 33.3 }] },
                  { label: 'Face the Firetalons', coords: [{ x: 79.4, y: 17.4 }] },
                  { label: 'Community Center', icon: 'com-center', coords: [{ x: 51.8, y: 40.5 }] },
                ]}
              />,
          },
        ]}
      />,
      <Typography>There are 14 Blue Salt Requests available on the Nuia continent and can be completed by anyone. They
        can be started by purchasing their respective Hunting Request item from the NPC located in each zone's Community
        Center for 1 gold each. Each quest gives 1 Gilda Star and 1 Prestige (except Karkasse which gives 2 Prestige
        per).</Typography>,
    ],
  },
  {
    title: 'Haranya Blue Salt Requests',
    paragraphs: [
      <TabContent
        tabs={[
          {
            label: 'Ynystere',
            content:
              <MapEmbed
                zone={ZONE.YNYSTERE}
                points={[
                  {
                    label: 'A Headless Threat',
                    coords: [{ x: 46.6, y: 28.1 }, { x: 44.4, y: 38.9 }],
                  },
                  { label: 'Community Center', icon: 'com-center', coords: [{ x: 72.7, y: 53.3 }] },
                ]}
              />,
          },
          {
            label: 'Rookborne',
            content:
              <MapEmbed
                zone={ZONE.ROOKBORNE_BASIN}
                points={[
                  { label: 'Repel the Rebels', coords: [{ x: 46.8, y: 29.6 }] },
                  { label: 'Breaking the Rocks', coords: [{ x: 56.7, y: 54 }] },
                  { label: 'Community Center', icon: 'com-center', coords: [{ x: 48.3, y: 52.6 }] },
                ]}
              />,
          },
          {
            label: 'Windscour',
            content:
              <MapEmbed
                zone={ZONE.WINDSCOUR_SAVANNAH}
                points={[
                  { label: 'Large, Sharp, and Pointy', coords: [{ x: 78.7, y: 70.5 }] },
                  { label: 'Intruders at the Oasis', coords: [{ x: 39.5, y: 63.7 }] },
                  { label: 'The Merchant\'s Deal', coords: [{ x: 22, y: 65 }, { x: 26.8, y: 71 }] },
                  { label: 'Vipers Not Allowed', coords: [{ x: 32.4, y: 38.5 }] },
                  { label: 'Out Of Their Shells', coords: [{ x: 51.1, y: 37.9 }, { x: 46, y: 35.4 }] },
                  { label: 'Community Center', icon: 'com-center', coords: [{ x: 65.8, y: 60.8 }] },
                ]}
              />,
          },
          {
            label: 'Perinoor',
            content:
              <MapEmbed
                zone={ZONE.PERINOOR_RUINS}
                points={[
                  { label: 'Beware Agressive Yaksa', coords: [{ x: 54.4, y: 58.7 }, { x: 58.2, y: 60 }] },
                  { label: 'Community Center', icon: 'com-center', coords: [{ x: 44.5, y: 61.5 }] },
                ]}
              />,
          },
          {
            label: 'Hasla',
            content:
              <MapEmbed
                zone={ZONE.HASLA}
                points={[
                  { label: 'Contaminated Field', coords: [{ x: 50.5, y: 54.5 }, { x: 52.2, y: 58.1 }] },
                  { label: 'Strange Creatures in the Field', coords: [{ x: 49, y: 58.5 }, { x: 51.1, y: 61.5 }] },
                  { label: 'A Husband\'s Plea', coords: [{ x: 47, y: 60.8 }] },
                  { label: 'No Scrumping', coords: [{ x: 44, y: 61.5 }] },
                  { label: 'Ruining the Farm', coords: [{ x: 43.6, y: 68.3 }] },
                  { label: 'Travel Obstructions', coords: [{ x: 50.7, y: 76.3 }] },
                  { label: 'Community Center', icon: 'com-center', coords: [{ x: 58, y: 35.2 }] },
                ]}
              />,
          },
        ]}
      />,
      <Typography>There are 15 Blue Salt Requests available on the Haranya continent and can be completed by anyone.
        They can be started by purchasing their respective Hunting Request item from the NPC located in each zone's
        Community Center for 1 gold each. Each quest gives 1 Gilda Star and 1 Prestige.</Typography>,
    ],
  },
  {
    title: 'Miscellaneous Quests',
    paragraphs: [
      <Typography variant="h6">Crimson Rift</Typography>,
      <TabContent
        tabs={[
          {
            label: 'Cinderstone Moor',
            content:
              <MapEmbed
                zone={ZONE.CINDERSTONE_MOOR}
                points={[
                  {
                    label: 'Hounds of Kyrios',
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
                  { label: 'Hounds of Kyrios', icon: 'boss', coords: [{ x: 40.5, y: 61.5 }, { x: 67.5, y: 45.8 }] },
                ]}
              />,
          },
          {
            label: 'Sungold Fields',
            content:
              <MapEmbed
                zone={ZONE.SUNGOLD_FIELDS}
                points={[
                  { label: 'Hounds of Kyrios', icon: 'boss', coords: [{ x: 36.5, y: 64.1 }] },
                ]}
              />,
          },
        ]}
      />,
      <Typography>Every time the in-game day hits noon, an event called Crimson Rift starts in Cinderstone Moor
        and Ynystere. There are no quests that give Gilda Stars directly related to the rift, however you will get 3
        Gilda Stars for the first Hound of Kyrios that you kill each day.</Typography>,
      <Typography>Additionally, at 18:00 in-game, the rift will also appear in Sungold Fields in Auroria.</Typography>,
      <Typography>When the Crimson Rift opens, a red portal will appear in the sky in one of several locations.
        Cinderstone Moor has three possible locations while Ynystere has two and Sungold Fields has one.</Typography>,
      <Typography>Moments after, waves of the Crimson Army will spawn and must be killed. When all the waves are killed,
        two Hounds of Kyrios will spawn. For more information on this boss, please read <Link
          to={'/guides/hounds-and-nightmares'}>the Hounds and Nightmares</Link> guide.</Typography>,
      <hr />,
      <Typography variant="h6">Grimghast Rift</Typography>,
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
                  { label: 'Nightmare Bosses', icon: 'boss', coords: [{ x: 60.5, y: 69 }] },
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
                  { label: 'Nightmare Bosses', icon: 'boss', coords: [{ x: 40.5, y: 61.5 }] },
                ]}
              />,
          },
        ]}
      />,
      <Typography>Every time the in-game day hits midnight, an event called Grimghast Rift starts in Cinderstone Moor
        and Ynystere. There's two quests that each give 1 Gilda Star, and two bosses that spawn after that reward 3
        Gilda Stars the first time that you kill them in a day.</Typography>,
      <Typography>Request Board: To start the quests for Grimghast Rift, you must go to the Bluesalt Request Board in
        Cinderstone or Ynystere and pick up the quest that wants you to deliver 10 of a material to the zone's base.
        This quest is available as early as 20:00 in-game time.</Typography>,
      <Typography>Helping the War Effort: Following that material delivery, once the rift begins at 00:00, you'll have
        to turn in two Condensed Archeum packs from your zone's base to the Trebuchet Build Site.</Typography>,
      <Typography>Shortly after, at around 01:00 in-game time, waves of the Nightmare Army will spawn and must be
        destroyed. When all the waves are killed, a Nightmare Blade and a Nightmare Bowstring will spawn and can be
        killed for 3 Gilda Stars each. For more information on these two bosses, please read <Link
          to={'/guides/hounds-and-nightmares'}>the Hounds and Nightmares</Link> guide.</Typography>,
      <hr />,
      <Typography variant="h6">Enemies of Sea Trade</Typography>,
      <TabContent
        tabs={[
          {
            label: 'Ezna',
            content:
              <MapEmbed zone={ZONE.EZNA} points={[{ label: '[Nuia] Relic Trader', coords: [{ x: 32.5, y: 94.5 }] }]} />,
          },
          {
            label: 'Austera',
            content:
              <MapEmbed
                zone={ZONE.AUSTERA}
                points={[{ label: '[Haranya] Relic Trader', coords: [{ x: 42, y: 5.8 }] }]}
              />,
          },
          {
            label: 'Freedich Island',
            content:
              <MapEmbed zone={ZONE.FREEDICH_ISLAND} points={[{ label: 'Relic Trader', coords: [{ x: 52, y: 59 }] }]} />,
          },
          {
            label: 'Diamond Shores',
            content:
              <MapEmbed
                zone={ZONE.DIAMOND_SHORES}
                points={[
                  { label: '[Nuia] Relic Trader', coords: [{ x: 31.5, y: 68.1 }] },
                  { label: '[Haranya] Relic Trader', coords: [{ x: 65.3, y: 62.7 }] },
                ]}
              />,
          },
        ]}
      />,
      <Typography>Kill 15 Seabugs for 1 Gilda Star.</Typography>,
      <hr />,
      <Typography variant="h6">Lusca Awakening</Typography>,
      <TabContent
        tabs={[
          {
            label: 'Marianople',
            content:
              <MapEmbed zone={ZONE.MARIANOPLE_CITY}
                        points={[{ label: '[Nuia] Seamist Researcher', coords: [{ x: 48.4, y: 41.1 }] }]} />,
          },
          {
            label: 'Austera',
            content:
              <MapEmbed
                zone={ZONE.AUSTERA}
                points={[{ label: '[Haranya] Seamist Researcher', coords: [{ x: 48, y: 25.6 }] }]}
              />,
          },
          {
            label: 'Diamond Shores',
            content:
              <MapEmbed
                zone={ZONE.DIAMOND_SHORES}
                points={[
                  { label: '[Nuia] Seamist Researcher', coords: [{ x: 31.5, y: 68.1 }] },
                  { label: '[Haranya] Seamist Researcher', coords: [{ x: 65.3, y: 62.7 }] },
                  { label: 'Seamist Researcher', coords: [{ x: 51, y: 43.8 }] },
                ]}
              />,
          },
        ]}
      />,
      <Typography>Kill 5 Luscas for 1 Gilda Star and 900 Honor. This quest will require a galleon and a crew as the
        Lusca mobs are relatively difficult to kill. Luscas also only spawn at a certain time of day. See the Event
        Schedule for times.</Typography>,
      <Typography>The quest can only be accepted during the event from Marianople and Austera, but it can be accepted at
        any time of day from Diamond Shores.</Typography>,
      <hr />,
      <Typography variant="h6">Thunderwing Titan Competition</Typography>,
      <MapEmbed
        zone={ZONE.REEDWIND}
        points={[
          { label: 'Thunderwing Titan Competition', coords: [{ x: 53.4, y: 70.4 }] },
        ]}
      />,
      <Typography>Thunderwing Titan Competition is available only when Reedwind is in war and requires you to kill 100
        enemies in Reedwind for 1 Gilda Star. It can be acquired from Combat Leader Dylia.</Typography>,
      <hr />,
      <Typography variant="h6">Working on Auroria</Typography>,
      <MapEmbed
        zone={ZONE.DIAMOND_SHORES}
        points={[
          { label: 'Nuia Quests', icon: 'daily', coords: [{ x: 24.7, y: 47.6 }] },
          { label: 'Nuia Bridge', icon: 1, coords: [{ x: 34.6, y: 55.2 }] },
          { label: 'Nuia Base', icon: 2, coords: [{ x: 41.9, y: 45.9 }] },
          { label: 'Haranya Quests', icon: 'daily', coords: [{ x: 67.3, y: 35 }] },
          { label: 'Haranya Bridge', icon: 1, coords: [{ x: 58.5, y: 50.5 }] },
          { label: 'Haranya Base', icon: 2, coords: [{ x: 54, y: 61 }] },
        ]}
      />,
      <Typography>There are quests related to working on your faction's Auroria base. Each quest requires you to craft
        an Archeum pack, which must be carried to your faction's base. There five quests total, but only two quests give
        Gilda Stars as a completion reward: Construct the Nuian/Haranyan Alliance Bridge and Reinforce the
        Ramparts.</Typography>,
      <Typography>One pack must be taken to your alliance's bridge and the other goes to your base's
        walls.</Typography>,
      <Typography>To craft the two necessary packs for gilda you need&nbsp;
        <ItemLink id={ITEM.STARLIGHT_ARCHEUM_DUST} count={6 * 2} />.</Typography>,
    ],
  },
];

export default { name, meta, category, sections };
