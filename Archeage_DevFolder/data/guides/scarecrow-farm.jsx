/* eslint react/jsx-key: 0 */
import Typography from '@material-ui/core/Typography';
import Currency from 'components/Currency';
import ItemLink from 'components/Item/ItemLink';
import Link from 'components/Link';
import MapEmbed from 'components/MapEmbed/MapEmbed';
import QuestLink from 'components/Quest/QuestLink';
import SkillLink from 'components/Skill/SkillLink';
import { GUIDE_CATEGORY } from 'constants/guides';
import {
  CURRENCY,
  ITEM,
} from 'constants/items';
import { ZONE } from 'constants/map';
import { SKILL } from 'constants/skills';
import React from 'react';

const name = 'Getting Your Scarecrow Farm';

const meta = {
  author: 'Mokulu',
  lastUpdated: 'Mar 24, 2021',
};

const category = GUIDE_CATEGORY.QUESTS;

const sections = [
  {
    title: 'The Scarecrow Farm',
    paragraphs: [
      <Typography>
        The <ItemLink id={15566} /> comes from a quest chain that becomes available at level 50, after completing&nbsp;
        <QuestLink id={8720} />. If you missed out on that and your <ItemLink id={15596} />, you can follow the guide
        for <Link to="/guides/scarecrow-garden">Getting Your First Garden</Link>.
      </Typography>,
      <Typography>
        The Scarecrow Farm is a bigger land design, and as such it requires more&nbsp;
        <ItemLink id={ITEM.TAX_CERTIFICATE} plural="s" />. A character can only ever obtain one, but once placed and
        built, they can be sold to other players. They are also used in the&nbsp;
        <Link to="/folio/search/6914?product=34438">recipe</Link> for crafting a <ItemLink id={34438} />, the biggest
        farm available. This makes the Scarecrow Farm valuable and something you don&apos;t want to lose.
      </Typography>,
      <Typography>
        The quest line is different depending on if you&apos;re part of the Nuian or Haranyan Alliance. Please see the
        corresponding part of the guide for your faction. Be prepared to spend around an hour from start to finish, as
        you will be transporting two trade packs from one location to another. When you start a trade run, you will
        want to finish it as soon as possible, because the gold value of your trade pack will diminish quickly.
      </Typography>,
    ],
  },
  {
    title: 'Nuian Alliance',
    paragraphs: [
      <Typography variant="h6">Required Materials</Typography>,
      <Typography component="ul">
        <li>
          <ItemLink id={ITEM.VITA_ROOT} count={1} />: grown from a Vita Root Seed (purchasable from any Seed Merchant,
          General Merchant, or Stablehand).
        </li>
        <li>
          <ItemLink id={ITEM.WATER} count={2} />: gathered from any well (found in cities and near housing areas).
        </li>
        <li>
          <ItemLink id={ITEM.GILDA_STAR} count={2} />: reward from story quests and many daily quests.
        </li>
        <li>
          <ItemLink id={ITEM.GROUND_GRAIN} count={300} />: processed from various grains, like <ItemLink
          id={8005} /> (shortest grow time) and <ItemLink id={784} />, or purchased from the auction house.
        </li>
        <li>
          <ItemLink id={8053} count={10} plural={false} />: gathered from mature sheep or purchased from the auction
          house.
        </li>
        <li><Currency type={CURRENCY.COIN} count={260000} /></li>
      </Typography>,
      <Typography variant="h6">1. <QuestLink id={6772} /></Typography>,
      <MapEmbed
        zone={ZONE.MARIANOPLE_CITY}
        points={[
          { label: 'The Basics of Trade', coords: [{ x: 45, y: 32.5 }], icon: 'vocation' },
        ]}
        floatRight
      />,
      <Typography>
        This quest simply wants you to meet the Dewstone Plains Community Center Manager, Bain. He will give you your
        choice of donkey foal, which you will have to raise. Place your foal on the ground, where available, and use the
        vita root and water to raise it in about 2 minutes.
      </Typography>,
      <Typography variant="h6">2. <QuestLink id={6773} /></Typography>,
      <MapEmbed
        zone={ZONE.DEWSTONE_PLAINS}
        points={[
          { label: 'Dewstone Specialty Workbench', coords: [{ x: 45, y: 63.5 }], icon: 'specialty-workbench' },
          { label: 'Priestess of Nui', coords: [{ x: 43.6, y: 67.5 }], icon: 'nui' },
        ]}
        floatRight
      />,
      <blockquote>
        Before you craft your trade pack, it will save you time to go to the nearest Priestess of Nui and temporarily
        take the Songcraft skillset. This will allow you to constantly use the skill&nbsp;
        <SkillLink id={SKILL.PERFORM_QUICKSTEP} /> for a sizeable boost in movement speed for your journey.
      </blockquote>,
      <Typography>
        At the Dewstone Specialty Workbench, which is a machine located near the community center manager, craft your
        Dewstone Luxury Gilda Specialty. You&apos;ll be taking this trade pack to the Two Crowns port to trade in for
        gold.<br />
        Carrying the trade pack on your back while walking will slow you down a great amount. Riding the donkey with
        the pack will allow you to move faster.<br />
      </Typography>,
      <Typography variant="h6">3. <QuestLink id={8797} /></Typography>,
      <MapEmbed
        zone={ZONE.TWO_CROWNS}
        points={[
          { label: 'Specialty Buyer', coords: [{ x: 55, y: 71.5 }], icon: 'specialty-buyer' },
          { label: 'Cargo Ship', coords: [{ x: 54, y: 73.5 }], icon: 'cargo-ship' },
        ]}
        floatRight
      />,
      <Typography>If you swapped a skillset to Songcraft, don&apos;t forget to change it back!</Typography>,
      <Typography>This quest gives you a <ItemLink id={43084} />, which is a consumable that lets you ride the the cargo
        ship that travels between Two Crowns and Solis Headlands while being protected from danger from other
        players. You&apos;ll use it during the next quest.</Typography>,
      <Typography variant="h6">4. <QuestLink id={4665} /></Typography>,
      <MapEmbed
        zone={ZONE.AUSTERA}
        points={[
          { label: 'Cargo Buyer', coords: [{ x: 41, y: 33.6 }], icon: 'cargo-seller' },
        ]}
        floatRight
      />,
      <Typography>
        Every 60 minutes, the cargo ship completes a round-trip between Two Crowns and Solis Headlands. This is the
        safest way to take a cargo trade pack between the two continents, but it is slow and you can only take one pack
        at a time. For this quest, this will be your best way.<br />
        The cargo ship stays docked in the Ezna and Austera ports for 20 minutes before departing, then travels to the
        other continent in about 10 minutes. You can wait at the trade outlet for the ship if you don&apos;t see it
        already in the port.
      </Typography>,
      <Typography>
        The objective of this quest is to bring a Nuian Cargo Pack from Two Crowns to Austera in Solis Headlands. One
        can be purchased for, at most, <Currency type={CURRENCY.COIN} count={260000} inline /> from the Cargo Seller,
        who is near where you sold your Dewstone Luxury Gilda Specialty. When you&apos;ve bought your cargo pack and the
        ship has arrived at the port, climb aboard the ship and talk to the captain on the middle of the deck to give
        him your <ItemLink id={43084} />. Be careful not fall off the ship, or you risk losing your protection. You can
        be knocked off the ship by other players or ships, so take a seat or hold onto the side ladder until the ship
        reaches the other port.
      </Typography>,
      <Typography>
        Upon arriving in Austera, you can sell the pack to the Cargo Buyer and return to Trading Guide Edward back in
        Marianople to get your <ItemLink id={15566} /> along with some <ItemLink id={31892} plural="s" />.
      </Typography>,
    ],
  },
  {
    title: 'Haranyan Alliance',
    paragraphs: [
      <Typography variant="h6">Required Materials</Typography>,
      <Typography component="ul">
        <li>
          <ItemLink id={ITEM.VITA_ROOT} count={1} />: grown from a Vita Root Seed (purchasable from any Seed Merchant,
          General Merchant, or Stablehand).
        </li>
        <li>
          <ItemLink id={ITEM.WATER} count={2} />: gathered from any well (found in cities and near housing areas).
        </li>
        <li>
          <ItemLink id={ITEM.GILDA_STAR} count={2} />: reward from story quests and many daily quests.
        </li>
        <li>
          <ItemLink id={ITEM.CHOPPED_PRODUCE} count={300} />: processed from various produce, like <ItemLink
          id={7992} /> (shortest grow time) and <ItemLink id={7998} />, or purchased from the auction house.
        </li>
        <li>
          <ItemLink id={14620} count={10} plural={false} />: gathered from fruited banana trees or purchased from the
          auction house.
        </li>
        <li><Currency type={CURRENCY.COIN} count={260000} /></li>
      </Typography>,
      <Typography variant="h6">1. <QuestLink id={6769} /></Typography>,
      <MapEmbed
        zone={ZONE.AUSTERA}
        points={[
          { label: 'The Basics of Trade', coords: [{ x: 52, y: 19.5 }], icon: 'vocation' },
        ]}
        floatRight
      />,
      <Typography>
        This quest simply wants you to meet the Mahadevi Plains Community Center Manager, Suhe. She will give you your
        choice of donkey foal, which you will have to raise. Place your foal on the ground, where available, and use the
        vita root and water to raise it in about 2 minutes.
      </Typography>,
      <Typography variant="h6">2. <QuestLink id={6770} /></Typography>,
      <MapEmbed
        zone={ZONE.MAHADEVI}
        points={[
          { label: 'Mahadevi Specialty Workbench', coords: [{ x: 36.2, y: 32.5 }], icon: 'specialty-workbench' },
          { label: 'Priestess of Nui', coords: [{ x: 39, y: 35.3 }], icon: 'nui' },
        ]}
        floatRight
      />,
      <blockquote>
        Before you craft your trade pack, it will save you time to go to the nearest Priestess of Nui and temporarily
        take the Songcraft skillset. This will allow you to constantly use the skill&nbsp;
        <SkillLink id={SKILL.PERFORM_QUICKSTEP} /> for a sizeable boost in movement speed for your journey.
      </blockquote>,
      <Typography>
        At the Mahadevi Specialty Workbench, which is a machine located near the community center manager, craft your
        Mahadevi Fine Gilda Specialty. You&apos;ll be taking this trade pack to the Austera port to trade in for gold.
        <br />
        Carrying the trade pack on your back while walking will slow you down a great amount. Riding the donkey with
        the pack will allow you to move faster.<br />
      </Typography>,
      <Typography variant="h6">3. <QuestLink id={8798} /></Typography>,
      <MapEmbed
        zone={ZONE.AUSTERA}
        points={[
          { label: 'Specialty Buyer', coords: [{ x: 41, y: 33.6 }], icon: 'specialty-buyer' },
          { label: 'Cargo Ship', coords: [{ x: 39, y: 37.5 }], icon: 'cargo-ship' },
        ]}
        floatRight
      />,
      <Typography>If you swapped a skillset to Songcraft, don&apos;t forget to change it back!</Typography>,
      <Typography>This quest gives you a <ItemLink id={43084} />, which is a consumable that lets you ride the the cargo
        ship that travels between Two Crowns and Solis Headlands while being protected from danger from other
        players. You&apos;ll use it during the next quest.</Typography>,
      <Typography variant="h6">4. <QuestLink id={4669} /></Typography>,
      <MapEmbed
        zone={ZONE.TWO_CROWNS}
        points={[
          { label: 'Cargo Buyer', coords: [{ x: 55, y: 71.5 }], icon: 'cargo-seller' },
        ]}
        floatRight
      />,
      <Typography>
        Every 60 minutes, the cargo ship completes a round-trip between Two Crowns and Solis Headlands. This is the
        safest way to take a cargo trade pack between the two continents, but it is slow and you can only take one pack
        at a time. For this quest, this will be your best way.<br />
        The cargo ship stays docked in the Ezna and Austera ports for 20 minutes before departing, then travels to the
        other continent in about 10 minutes. You can wait at the trade outlet for the ship if you don&apos;t see it
        already in the port.
      </Typography>,
      <Typography>
        The objective of this quest is to bring a Haranyan Cargo Pack from Austera to Two Crowns. One can be purchased
        for, at most, <Currency type={CURRENCY.COIN} count={260000} inline /> from the Cargo Seller, who is near where
        you sold your Mahadevi Fine Gilda Specialty. When you&apos;ve bought your cargo pack and the ship has arrived
        at the port, climb aboard the ship and talk to the captain on the middle of the deck to give him your <ItemLink
        id={43084} />. Be careful not fall off the ship, or you risk losing your protection. You can be knocked off the
        ship by other players or ships, so take a seat or hold onto the side ladder until the ship reaches the other
        port.
      </Typography>,
      <Typography>
        Upon arriving in Two crowns, you can sell the pack to the Cargo Buyer and return to Trading Guide Sahel back in
        Austera to get your <ItemLink id={15566} /> along with some <ItemLink id={31892} plural="s" />.
      </Typography>,
    ],
  },
];

export default { name, meta, category, sections };
