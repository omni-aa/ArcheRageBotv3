import { Typography } from '@material-ui/core';
import MapEmbed from 'components/MapEmbed';
import TabContent from 'components/TabContent';
import { GUIDE_CATEGORY } from 'constants/guides';
import { ZONE } from 'constants/map';
import React from 'react';

const name = 'Honor Points';

const meta = {
  author: 'Mokulu',
  lastUpdated: 'Nov 14, 2019',
};

const category = GUIDE_CATEGORY.GAMEPLAY;

const sections = [
  {
    title: 'Honor Points',
    paragraphs: [
      'Honor points are a currency that is associated with player-versus-player activities, but there is a lot of non-PvP content that rewards honor.',
      'Players can spend their Honor Points by visiting an Honor Point Collector or opening their Character Window and clicking the shop button to the right of the Honor Point display.',
      'Honor Points can be spent to acquire things like Lunagems and Decrystallization Scrolls, which are important for character progression.',
    ],
  },
  {
    title: 'From PvP',
    paragraphs: [
      'Honor Points are awarded from killing enemy players while a zone is in Conflict or War. States of tension will not award any Honor Points.',
      'The killing blow will award you with 40 Honor Points during War or 10 Honor Points during Conflict. This value is decreased to 36 or 32, depending if there are players who assisted you in the kill by healing or dealing damage.',
      'Assisting an ally with heals will award you with 4 Honor Points during War or 1 Honor Point during Conflict. Assisting with damage will award you with 8 Honor Points during War or 2 Honor Points during Conflict.',
      'The honor you get from killng a target is significantly reduced if you or the target you killed are a "Leech", meaning you\'ve been killed during Conflict or War and granted the killer Honor Points recently.',
      'Lastly, you will lose 10 Honor Points when dying to a player during Conflict or War. This cannot reduce you below 0.',
    ],
  },
  {
    title: 'Honor Protector Quests',
    paragraphs: [
      'The first time you enter a contested zone, you will be given a quest to kill 30 mobs in that zone. Upon turning it in, you will get a small amount of honor points and the next quest in the series of 4. Following the kill 30 quest, there is a kill 50, kill 100, and finally a kill 200 quest.',
      'The quest must be turned in to an Honor Point Collector that can be found in towns.',
      'These quests can take a lot of time, but there are some zones that have places with tricks or heavy densities of enemies to kill.',
      'Completing one quest chain will award a total of 1900 Honor and 4 Goblets of Honor. Completing all four chains on a continent (excluding Ynystere) will award a title. There are also protector quest chains for the three sea zones that can be acquired on Freedich Island: Arcadian Sea, Castaway Strait, and Halcyona Gulf.',
      <Typography variant="h6">Protector of Nuia</Typography>,
      <TabContent
        tabs={[
          {
            label: 'Halcyona',
            content: [
              <MapEmbed
                zone={ZONE.HALCYONA}
              />,
              'I unfortunately do not have any advice for completing the Halcyona protector quests quicker.',
            ],
          },
          {
            label: 'Hellswamp',
            content: [
              <MapEmbed
                zone={ZONE.HELLSWAMP}
                points={[
                  { label: 'Shadow Spider Hatchlings', coords: [{ x: 48.8, y: 30.5 }, { x: 46.9, y: 33.7 }] },
                ]}
              />,
              'The spider hatchlings at the indicated location have small health pools. Rotate between the spider groups at the indicated locations when the spawns are low.',
            ],
          },
          {
            label: 'Sanddeep',
            content: [
              <MapEmbed
                zone={ZONE.SANDDEEP}
                points={[
                  { label: 'Weresharks', coords: [{ x: 43.8, y: 43 }] },
                ]}
              />,
              'There is a high density of Weresharks at this location.',
            ],
          },
          {
            label: 'Karkasse Ridgelands',
            content: [
              <MapEmbed
                zone={ZONE.KARKASSE_RIDGELANDS}
                points={[
                  { label: 'Blackfur Scorpions', coords: [{ x: 57.9, y: 50.2 }] },
                  { label: 'Bone Grubs', coords: [{ x: 67.3, y: 43.3 }] },
                ]}
              />,
              'There are high densities of enemies at the indicated locations.',
            ],
          },
        ]}
      />,
      <Typography variant="h6">Protector of Haranya</Typography>,
      <TabContent
        tabs={[
          {
            label: 'Ynystere',
            content: [
              <MapEmbed
                zone={ZONE.YNYSTERE}
              />,
              'Kills on enemies during the Crimson and Grimghast Rifts count towards these quests. However, those aren\'t always available and I don\'t have tips for faster completion otherwise.',
            ],
          },
          {
            label: 'Rookborne Basin',
            content: [
              <MapEmbed
                zone={ZONE.ROOKBORNE_BASIN}
                points={[
                  { label: 'Darkmane Tribe', coords: [{ x: 46.8, y: 29.6 }] },
                ]}
              />,
              'The large Darkmane camp has a higher density of enemies.',
            ],
          },
          {
            label: 'Windscour Savannah',
            content: [
              <MapEmbed
                zone={ZONE.WINDSCOUR_SAVANNAH}
                points={[
                  { label: 'Zebras', coords: [{ x: 47.6, y: 27.4 }, { x: 27.8, y: 33.5 }] },
                ]}
              />,
              'There are high densities of zebras at these locations.',
            ],
          },
          {
            label: 'Perinoor Ruins',
            content: [
              <MapEmbed
                zone={ZONE.PERINOOR_RUINS}
                points={[
                  {
                    label: 'Hooded Helltraps',
                    coords: [
                      { x: 31.7, y: 46.1 },
                      { x: 33.6, y: 48.3 },
                      { x: 31.9, y: 53 },
                      { x: 32.8, y: 56.2 },
                    ],
                  },
                ]}
              />,
              'There are high densities of enemies around the Herbalist Camp in Perinoor Ruins. On top of that, there are many Hooded Helltraps, which have very low health compared to normal Perinoor enemies. Rotate around the camp for optimal kill speed.',
            ],
          },
          {
            label: 'Hasla',
            content: [
              <MapEmbed
                zone={ZONE.HASLA}
              />,
              'I unfortunately do not have any advice for completing the Hasla protector quests quicker.',
            ],
          },
        ]}
      />,
    ],
  },
];

export default { name, meta, category, sections };
