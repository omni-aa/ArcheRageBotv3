import { Typography } from '@material-ui/core';
import Currency from 'components/Currency';
import ItemLink from 'components/Item/ItemLink';
import Link from 'components/Link';
import MapEmbed from 'components/MapEmbed';
import QuestLink from 'components/Quest/QuestLink';
import SkillLink from 'components/Skill/SkillLink';
import {
  CURRENCY,
  ITEM,
} from 'constants/items';
import { ZONE } from 'constants/map';
import React from 'react';
import {
  node,
  number,
  string,
} from 'react-proptypes';
import { slug } from 'utils/string';

const HORSE_HOW_TO = (
  <>
    <MapEmbed
      zone={ZONE.SOLZREED_PENINSULA}
      points={[
        { label: 'Lilyut Foals', icon: 'stable', coords: [{ x: 61.5, y: 66.6 }] },
        { label: 'Solzreed Community Center', icon: 'port', coords: [{ x: 62.7, y: 67.4 }] },
      ]}
      button="View on Map"
      buttonFloat="right"
    />
    <p>Lilyut foals can be acquired from the stables by the Solzreed Community Center for&nbsp;
      <Currency type={CURRENCY.COIN} count={1000} inline />.</p>
    <p>For West players: you can easily go to Solzreed with the nearest teleport location being the Community
      Center.</p>
    <p>For East players: if you&#39;ve already been to the Solzreed Community Center, you can teleport to that point and
      the stable is right next to it.<br />
      If you have not, the easiest way to get there is to start from the dungeon teleport for Burnt Castle Armory, head
      north across the Feuille Sound and into Solzreed, and then north towards the Community Center.</p>
    <p>You can also get this mount by purchasing a Mount Youngster Basket for&nbsp;
      <Currency type={CURRENCY.VOCATION} count={10000} inline /> from the Vocation Shop.</p>
  </>
);

const ELK_HOW_TO = (
  <>
    <MapEmbed
      zone={ZONE.GWEONID_FOREST}
      points={[
        { label: 'Elk Calves', icon: 'stable', coords: [{ x: 38.5, y: 48.3 }] },
        { label: 'Gweonid Community Center', icon: 'port', coords: [{ x: 49.7, y: 46.1 }] },
      ]}
      button="View on Map"
      buttonFloat="right"
    />
    <p>Elk calves can be acquired from the stables west of the Gweonid Community Center for&nbsp;
      <Currency type={CURRENCY.COIN} count={1000} inline />.</p>
    <p>For West players: you can easily go to Gweonid with the nearest teleport location being the Community Center.</p>
    <p>For East players: if you&#39;ve already been to the Gweonid Community Center, you can teleport to that point and
      head west to the stables.<br />
      If you have not, the next easiest way is to take the airship that runs from the Karkasse Community Center to
      Marianople which passes over Gweonid, and jump off when you get close to the stable area. Have either a skill to
      negative fall damage or
      your glider ready!</p>
    <p>You can also get this mount by purchasing a Mount Youngster Basket for&nbsp;
      <Currency type={CURRENCY.VOCATION} count={10000} inline /> from the Vocation Shop.</p>
  </>
);

const BOAR_HOW_TO = (
  <>
    <MapEmbed
      zone={ZONE.AUBRE_CRADLE}
      points={[
        { label: 'Boar Shoats', icon: 'stable', coords: [{ x: 50, y: 58.5 }] },
        { label: 'Aubre Cradle Community Center', icon: 'port', coords: [{ x: 47.2, y: 57.5 }] },
      ]}
      button="View on Map"
      buttonFloat="right"
    />
    <p>Boar shoats can be acquired from the stables right next to the Aubre Cradle Community Center for&nbsp;
      <Currency type={CURRENCY.COIN} count={1000} inline />.</p>
    <p>For West players: you can easily go to Aubre Cradle with the nearest teleport location being the Community
      Center.</p>
    <p>For East players: if you&#39;ve already been to the Aubre Cradle Community Center, you can teleport to that point
      and the stable is right next to it.<br />
      If you have not, the trek is not easy nor short. You can start at Solisa in Halcyona, then head north to
      Marianople, north-west into White Arden, and then west into Aubre Cradle. Watch out for guards and other players.
    </p>
    <p>You can also get this mount by purchasing a Mount Youngster Basket for&nbsp;
      <Currency type={CURRENCY.VOCATION} count={10000} inline /> from the Vocation Shop.</p>
  </>
);

const SNOWLION_HOW_TO = (
  <>
    <MapEmbed
      zone={ZONE.FALCORTH_PLAINS}
      points={[
        { label: 'Snowlion Cubs', icon: 'stable', coords: [{ x: 39.2, y: 56.8 }] },
        { label: 'Cloudgrain', icon: 'port', coords: [{ x: 37.9, y: 53 }] },
        { label: 'Falcorth Community Center', icon: 'port', coords: [{ x: 45.6, y: 33.7 }] },
      ]}
      button="View on Map"
      buttonFloat="right"
    />
    <p>Snowlion cubs can be acquired from the stables south of Cloudgrain for&nbsp;
      <Currency type={CURRENCY.COIN} count={1000} inline />.</p>
    <p>For East players: you can easily go to Falcorth with the nearest teleport location being Cloudgrain.</p>
    <p>For West players: if you&#39;ve already been to the Falcorth Community Center, you can head southwest while
      avoiding guards to get to the stable master.<br />
      If you have not, the easiest way to get there is to start from the Rookborne Community Center, head west over the
      mountains and into Falcorth, and continue through towards Cloudgrain.</p>
    <p>You can also get this mount by purchasing a Mount Youngster Basket for&nbsp;
      <Currency type={CURRENCY.VOCATION} count={10000} inline /> from the Vocation Shop.</p>
  </>
);

const LEOMORPH_HOW_TO = (
  <>
    <MapEmbed
      zone={ZONE.ARCUM_IRIS}
      points={[
        { label: 'Leomorph Cubs', icon: 'stable', coords: [{ x: 37.2, y: 59.6 }] },
        { label: 'Arcum Iris Community Center', icon: 'port', coords: [{ x: 32.2, y: 56 }] },
      ]}
      button="View on Map"
      buttonFloat="right"
    />
    <p>Leomorph cubs can be acquired from the stables east of Parchsun Settlement for&nbsp;
      <Currency type={CURRENCY.COIN} count={1000} inline />.</p>
    <p>For East players: you can easily go to Arcum Iris with the nearest teleport location being Parchsun
      Settlement.</p>
    <p>For West players: if you&#39;ve already been to the Arcum Iris Community Center, you can head east around the
      city to avoiding guards to get to the stable master.<br />
      If you have not, the easiest way to get there is to start from the dungeon teleport for Palace Cellar, head south
      the Mahadevi-Arcum mountains and into Arcum Iris, and continue through towards Parchsun Settlement.</p>
    <p>You can also get this mount by purchasing a Mount Youngster Basket for&nbsp;
      <Currency type={CURRENCY.VOCATION} count={10000} inline /> from the Vocation Shop.</p>
  </>
);

const PANGOLIN_HOW_TO = (
  <>
    <MapEmbed
      zone={ZONE.SUNBITE_WILDS}
      points={[
        { label: 'Pangolin Pups', icon: 'stable', coords: [{ x: 19.2, y: 24 }, { x: 83.6, y: 33.2 }] },
        { label: 'Harani Construction Site', icon: 'port', coords: [{ x: 15.7, y: 17.4 }] },
        { label: 'Sunbite Community Center', icon: 'port', coords: [{ x: 53.4, y: 40.7 }] },
        { label: 'Communal Ranch', icon: 'port', coords: [{ x: 84.5, y: 31 }] },
      ]}
      button="View on Map"
      buttonFloat="right"
    />
    <p>Pangolin pups can be acquired from the stables south-east of Harani Construction Site or from the stable
      at Communal Ranch for <Currency type={CURRENCY.COIN} count={1000} inline />.</p>
    <p>For East players: you can easily go to Sunbite Wilds with the nearest teleports of the locations previously
      stated.</p>
    <p>For West players: if you&#39;ve already been to the Sunbite Community Center, you can head west around the city
      at
      Fleurstad, take the north path and then head over the mountains to get to the Harani Construction Site stables to
      avoid guards to get to the stable master.<br />
      If you have not, the easiest way is to go to the Communal Ranch by starting from Firetalon in Windscour Savannah,
      heading west into Arcum Iris, and then south towards the Wild Road to get into Sunbite with the Communal Ranch
      along the road.</p>
    <p>You can also get this mount by purchasing a Mount Youngster Basket for&nbsp;
      <Currency type={CURRENCY.VOCATION} count={10000} inline /> from the Vocation Shop.</p>
  </>
);

const GILDA_HOW_TO = ({ children, gilda }) => (
  <>
    <div className="right" style={{ display: 'grid', gridGap: '0.5em', padding: '0 0 0 8px' }}>
      <MapEmbed
        zone={ZONE.MARIANOPLE_CITY}
        points={[
          { label: 'Gilda Star Soul Merchant', icon: 'gilda', coords: [{ x: 45.9, y: 44.2 }] },
        ]}
        button="Marianople Map"
      />
      <MapEmbed
        zone={ZONE.AUSTERA}
        points={[
          { label: 'Gilda Star Soul Merchant', icon: 'gilda', coords: [{ x: 47.2, y: 27 }] },
        ]}
        button="Austera Map"
      />
    </div>
    <p>
      To obtain this mount, you must first purchase its Gilda Soul for&nbsp;
      <ItemLink id={ITEM.GILDA_STAR} count={gilda} /> from the Gilda Start Soul Merchant in Marianople or Austera.
    </p>
    <p>You will also need to purchase a <ItemLink id={ITEM.SMALL_BREATH_OF_LIFE} /> for&nbsp;
      <ItemLink id={ITEM.GILDA_STAR} count={10} /> if you don&#39;t have one already, which must be placed on land that
      you own.</p>
    <p>To soothe the soul and raise the mount, it requires 500 Labor and the following materials:</p>
    {children}
  </>
);

GILDA_HOW_TO.propTypes = {
  children: node,
  gilda: number,
};

const GALLANT_HOW_TO = ({ animaType, mountFrom, material, gatherFrom, differences }) => (
  <>
    <MapEmbed
      zone={ZONE.DIAMOND_SHORES}
      points={[
        { label: 'Distorted Mistsong Workbench', coords: [{ x: 48.6, y: 43.3 }] },
      ]}
      button="View on Map"
      buttonFloat="right"
    />
    <p>
      To obtain this mount, you must first craft the Gallant {animaType} Anima at the Distorted Mistsong Workbench,
      located outside of Mistsong Summit.
    </p>
    <p>Crafting a Gallant {animaType} Anima will require the following materials:</p>
    <ul>
      <li>
        <ItemLink id={ITEM.SUNSET_PORTALSTONE} count={28} noLink />
        <ul>
          <li><i>Acquired in Mistsong Summit from dailies, rare drops from trash, and one from each boss that must be
            shared.</i></li>
        </ul>
      </li>
      <li>
        <ItemLink id={ITEM.ABYSSAL_SHARD} count={144} noLink />
        <ul>
          <li><i>Acquired in normal and greater dungeons from dailies, rare drops from trash, and handfuls as personal
            loot from bosses.</i></li>
        </ul>
      </li>
      <li>
        <ItemLink id={ITEM.PRIME_LUNARITE} count={6} plural="" noLink />
        <ul>
          <li><i>Acquired by combining up tiers of Lunarite, which is acquired from salvaging Lunagems. Can be
            traded.</i></li>
        </ul>
      </li>
      <li>
        <ItemLink id={ITEM.ETERNAL_WINTER_CHILL} count={5} noLink />
        <ul>
          <li><i>Acquired sparingly in greater dungeons and as handfuls inside Supply Crates that drop from Serpentis.
            Can be traded.</i></li>
        </ul>
      </li>
      <li>
        <ItemLink id={ITEM.HEAT_OF_ETERNAL_SUMMER} count={12} name="Heats of Eternal Summer" noLink />
        <ul>
          <li><i>Acquired sparingly in greater dungeons and as handfuls inside Supply Crates that drop from Serpentis.
            Can be traded.</i></li>
        </ul>
      </li>
      <li>
        <ItemLink id={material} count={3} noLink />
        <ul>
          <li><i>A rare drop from {gatherFrom}. Can be traded.</i></li>
        </ul>
      </li>
    </ul>
    <p>After you&#39;ve crafted your Gallant {animaType} Anima, you will need a&nbsp;
      <Link to={`/mounts/${slug(mountFrom)}`}>{mountFrom}</Link> of any level and 250 Labor. Use the Anima on the mount
      to upgrade it, but remember to take its armor off first or it will be lost in the process.</p>
    <Typography variant="h6">Skill Differences</Typography>
    {differences}
  </>
);

GALLANT_HOW_TO.propTypes = {
  animaType: string,
  mountFrom: string,
  material: number,
  gatherFrom: string,
  differences: node,
};

const DONKEY_HOW_TO = (
  <>
    <p>At level 30, you can pick up the quest <QuestLink id={6772} /> from the Blue Salt Brotherhood NPC inside the
      hero hall of Marianople or Austera.</p>
    <p>Completing the quest is very easy; just go to the Dewstone Plains or Mahadevi Community Center and talk to the
      Community Center Manager and pick this foal.</p>
    <p>If you picked a different foal from this quest line, the only way to get this one is to purchase it for&nbsp;
      <Currency type={CURRENCY.VOCATION} count="10,000" inline /> from the Vocation Shop.</p>
    <p>After you have the foal, raise it to get this donkey mount.</p>
  </>
);

const STEAMFISH_HOW_TO = ({ recipeItemId, colorItem, colorCount, recipeId, gildaCost, recipeObtain }) => (
  <>
    <p>This mount can be obtained via crafting with <Link to={`/folio/machining/${recipeId}`}>this recipe</Link>:</p>
    <ul>
      <li>
        <ItemLink id={recipeItemId} noLink />
        <ul>
          <li><i>{gildaCost ? <>Purchased for <ItemLink id={ITEM.GILDA_STAR} count={gildaCost} />. Can be traded.</>
            : recipeObtain}</i></li>
        </ul>
      </li>
      <li>
        <ItemLink id={colorItem} count={colorCount} noLink />
        <ul>
          <li><i>Can be traded.</i></li>
        </ul>
      </li>
      <li>
        <ItemLink id={19470} noLink />
        <ul>
          <li><i>Crafted; can be traded.</i></li>
        </ul>
      </li>
      <li>
        <ItemLink id={29277} noLink />
        <ul>
          <li><i>Crafted; can be traded.</i></li>
        </ul>
      </li>
      <li>
        <ItemLink id={16326} count={2} noLink plural="" />
        <ul>
          <li><i>Crafted; can be traded.</i></li>
        </ul>
      </li>
      <li>
        <ItemLink id={29280} noLink />
        <ul>
          <li><i>Crafted from acorn beehive gatherables. Can be traded.</i></li>
        </ul>
      </li>
    </ul>
  </>
);

STEAMFISH_HOW_TO.propTypes = {
  recipeItemId: number,
  colorItem: number,
  colorCount: number,
  recipeId: number,
  gildaCost: number,
  recipeObtain: node,
};

const MOUNT = [
  {
    name: 'Gray Lilyut Horse',
    upgrade: 'Gallant Gray Lilyut Horse',
    obtainText: <>
      {HORSE_HOW_TO}
      <p>On Legacy, this mount can be purchased for <Currency type={CURRENCY.CREDIT} count={400} inline />.</p>
    </>,
  },
  {
    name: 'Brown Lilyut Horse',
    upgrade: 'Gallant Brown Lilyut Horse',
    obtainText: HORSE_HOW_TO,
  },
  {
    name: 'Buckskin Lilyut Horse',
    upgrade: 'Gallant Buckskin Lilyut Horse',
    obtainText: <>
      {HORSE_HOW_TO}
      <p>On Legacy, this mount can be purchased for <Currency type={CURRENCY.CREDIT} count={400} inline />.</p>
    </>,
  },
  {
    name: 'Green Elk',
    upgrade: 'Gallant Green Elk',
    obtainText: <>
      {ELK_HOW_TO}
      <p>On Legacy, this mount can be purchased for <Currency type={CURRENCY.CREDIT} count={400} inline />.</p>
    </>,
  },
  {
    name: 'White Elk',
    upgrade: 'Gallant White Elk',
    obtainText: ELK_HOW_TO,
  },
  {
    name: 'Violet Elk',
    upgrade: 'Gallant Violet Elk',
    obtainText: <>
      {ELK_HOW_TO}
      <p>On Legacy, this mount can be purchased for <Currency type={CURRENCY.CREDIT} count={400} inline />.</p>
    </>,
  },
  {
    name: 'Nightslaver Boar',
    obtainText: BOAR_HOW_TO,
  },
  {
    name: 'Snowrend Boar',
    obtainText: BOAR_HOW_TO,
  },
  {
    name: 'Hooftiger Boar',
    obtainText: BOAR_HOW_TO,
  },
  {
    name: 'Coalmane Snowlion',
    upgrade: 'Gallant Coalmane Snowlion',
    obtainText: SNOWLION_HOW_TO,
  },
  {
    name: 'Sandmane Snowlion',
    upgrade: 'Gallant Sandmane Snowlion',
    obtainText: <>
      {SNOWLION_HOW_TO}
      <p>On Legacy, this mount can be purchased for <Currency type={CURRENCY.CREDIT} count={400} inline />.</p>
    </>,
  },
  {
    name: 'Snowmane Snowlion',
    upgrade: 'Gallant Snowmane Snowlion',
    obtainText: <>
      {SNOWLION_HOW_TO}
      <p>On Legacy, this mount can be purchased for <Currency type={CURRENCY.CREDIT} count={400} inline />.</p>
    </>,
  },
  {
    name: 'Browntail Leomorph',
    upgrade: 'Gallant Browntail Leomorph',
    obtainText: <>
      {LEOMORPH_HOW_TO}
      <p>On Legacy, this mount can be purchased for <Currency type={CURRENCY.CREDIT} count={400} inline />.</p>
    </>,
  },
  {
    name: 'Whitetail Leomorph',
    upgrade: 'Gallant Whitetail Leomorph',
    obtainText: LEOMORPH_HOW_TO,
  },
  {
    name: 'Blacktail Leomorph',
    upgrade: 'Gallant Blacktail Leomorph',
    obtainText: <>
      {LEOMORPH_HOW_TO}
      <p>On Legacy, this mount can be purchased for <Currency type={CURRENCY.CREDIT} count={400} inline />.</p>
    </>,
  },
  {
    name: 'Blackscale Pangolin',
    obtainText: PANGOLIN_HOW_TO,
  },
  {
    name: 'Silverscale Pangolin',
    obtainText: PANGOLIN_HOW_TO,
  },
  {
    name: 'Redscale Pangolin',
    obtainText: PANGOLIN_HOW_TO,
  },
  {
    name: 'Black Arrow',
    obtainText: <GILDA_HOW_TO gilda={500}>
      <ul>
        <li><ItemLink id={ITEM.BLANK_REGRADE_SCROLL} count={50} noLink /></li>
        <li><ItemLink id={ITEM.BEAUTIFULLY_COLORED_FABRIC} count={20} plural="" noLink /></li>
        <li><ItemLink id={ITEM.PRISMATIC_DIAMOND} count={5} noLink /></li>
        <li><ItemLink id={ITEM.ONYX_ARCHEUM_ESSENCE} count={95} plural="" noLink /></li>
      </ul>
    </GILDA_HOW_TO>,
  },
  {
    name: 'Soulmare',
    obtainText: <GILDA_HOW_TO gilda={500}>
      <ul>
        <li><ItemLink id={ITEM.BLANK_REGRADE_SCROLL} count={50} noLink /></li>
        <li><ItemLink id={ITEM.BEAUTIFULLY_COLORED_FABRIC} count={20} plural="" noLink /></li>
        <li><ItemLink id={ITEM.PRISMATIC_DIAMOND} count={5} noLink /></li>
        <li><ItemLink id={ITEM.ONYX_ARCHEUM_ESSENCE} count={95} plural="" noLink /></li>
      </ul>
    </GILDA_HOW_TO>,
  },
  {
    name: 'Stormdarter',
    upgrade: 'Thunder Dash',
    obtainText: <GILDA_HOW_TO gilda={350}>
      <ul>
        <li><ItemLink id={ITEM.BLANK_REGRADE_SCROLL} count={50} noLink /></li>
        <li><ItemLink id={ITEM.STURDY_INGOT} count={5} noLink /></li>
        <li><ItemLink id={ITEM.PRISMATIC_DIAMOND} count={2} noLink /></li>
        <li><ItemLink id={ITEM.ONYX_ARCHEUM_ESSENCE} count={5} plural="" noLink /></li>
      </ul>
    </GILDA_HOW_TO>,
  },
  {
    name: 'Cloudstrike Panther',
    obtainText: <GILDA_HOW_TO gilda={350}>
      <ul>
        <li><ItemLink id={ITEM.BLANK_REGRADE_SCROLL} count={50} noLink /></li>
        <li><ItemLink id={ITEM.STURDY_INGOT} count={5} noLink /></li>
        <li><ItemLink id={ITEM.PRISMATIC_DIAMOND} count={2} noLink /></li>
        <li><ItemLink id={ITEM.ONYX_ARCHEUM_ESSENCE} count={5} plural={''} noLink /></li>
      </ul>
    </GILDA_HOW_TO>,
  },
  {
    name: 'Royal Griffin',
    obtainText: <GILDA_HOW_TO gilda={350}>
      <ul>
        <li><ItemLink id={ITEM.BLANK_REGRADE_SCROLL} count={50} noLink /></li>
        <li><ItemLink id={ITEM.BEAUTIFULLY_COLORED_FABRIC} count={20} plural="" noLink /></li>
        <li><ItemLink id={ITEM.PRISMATIC_DIAMOND} count={10} noLink /></li>
        <li><ItemLink id={ITEM.ONYX_ARCHEUM_ESSENCE} count={80} plural="" noLink /></li>
      </ul>
      <p>
        On Legacy, this mount can also be acquired outright for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={80} />.
      </p>
    </GILDA_HOW_TO>,
  },
  {
    name: 'Moonfeather Griffin',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={80} /> or
        purchased for <Currency type={CURRENCY.CREDIT} count={3500} inline />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'Coral',
    obtainText: <GILDA_HOW_TO gilda={350}>
      <ul>
        <li><ItemLink id={ITEM.BLANK_REGRADE_SCROLL} count={50} noLink /></li>
        <li><ItemLink id={ITEM.BEAUTIFULLY_COLORED_FABRIC} count={20} plural="" noLink /></li>
        <li><ItemLink id={ITEM.PRISMATIC_DIAMOND} count={10} noLink /></li>
        <li><ItemLink id={ITEM.ONYX_ARCHEUM_ESSENCE} count={80} plural="" noLink /></li>
      </ul>
      <p>On Legacy, this mount can also be acquired outright for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={80} />.
      </p>
    </GILDA_HOW_TO>,
  },
  {
    name: 'Mirage Bjorne',
    obtainText: <GILDA_HOW_TO gilda={350}>
      <ul>
        <li><ItemLink id={ITEM.BLANK_REGRADE_SCROLL} count={50} noLink /></li>
        <li><ItemLink id={ITEM.FINE_LEATHER} count={20} plural="" noLink /></li>
        <li><ItemLink id={ITEM.PRISMATIC_DIAMOND} count={10} noLink /></li>
        <li><ItemLink id={ITEM.ONYX_ARCHEUM_ESSENCE} count={80} plural="" noLink /></li>
      </ul>
      <p>On Legacy, this mount can also be acquired outright for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={100} />.
      </p>
    </GILDA_HOW_TO>,
  },
  {
    name: 'Mirage Elk',
    obtainText: <GILDA_HOW_TO gilda={350}>
      <ul>
        <li><ItemLink id={ITEM.BLANK_REGRADE_SCROLL} count={50} noLink /></li>
        <li><ItemLink id={ITEM.FINE_LEATHER} count={20} plural="" noLink /></li>
        <li><ItemLink id={ITEM.PRISMATIC_DIAMOND} count={5} noLink /></li>
        <li><ItemLink id={ITEM.ONYX_ARCHEUM_ESSENCE} count={80} plural="" noLink /></li>
      </ul>
      <p>On Legacy, this mount can be purchased outright for <Currency type={CURRENCY.CREDIT} count={1345} inline />.
      </p>
    </GILDA_HOW_TO>,
  },
  {
    name: 'Mirage Leomorph',
    imageCredit: 'Thaofrost',
    obtainText: <GILDA_HOW_TO gilda={350}>
      <ul>
        <li><ItemLink id={ITEM.BLANK_REGRADE_SCROLL} count={50} noLink /></li>
        <li><ItemLink id={ITEM.FINE_LEATHER} count={20} plural="" noLink /></li>
        <li><ItemLink id={ITEM.PRISMATIC_DIAMOND} count={5} noLink /></li>
        <li><ItemLink id={ITEM.ONYX_ARCHEUM_ESSENCE} count={80} plural="" noLink /></li>
      </ul>
      <p>On Legacy, this mount can be purchased outright for <Currency type={CURRENCY.CREDIT} count={1345} inline />.
      </p>
    </GILDA_HOW_TO>,
  },
  {
    name: 'Gallant Gray Lilyut Horse',
    obtainText:
      <GALLANT_HOW_TO
        animaType="Gray Horse"
        mountFrom="Gray Lilyut Horse"
        material={ITEM.BLACK_PEARL}
        gatherFrom="farming pearls and harvesting barnacles"
        differences={<p>
          <SkillLink id={32347} /> replaces <SkillLink id={11369} />, giving this mount three movement abilities.
        </p>}
      />,
  },
  {
    name: 'Gallant Brown Lilyut Horse',
    obtainText:
      <GALLANT_HOW_TO
        animaType="Brown Horse"
        mountFrom="Brown Lilyut Horse"
        material={ITEM.TOPAZ}
        gatherFrom="mining Fortuna veins"
        differences={<p>
          <SkillLink id={32347} /> replaces <SkillLink id={11369} />, giving this mount three movement abilities.
        </p>}
      />,
  },
  {
    name: 'Gallant Buckskin Lilyut Horse',
    obtainText:
      <GALLANT_HOW_TO
        animaType="Buckskin"
        mountFrom="Buckskin Lilyut Horse"
        material={ITEM.TOPAZ}
        gatherFrom="mining Fortuna veins"
        differences={<p>
          <SkillLink id={32347} /> replaces <SkillLink id={11369} />, giving this mount three movement abilities.
        </p>}
      />,
  },
  {
    name: 'Gallant Green Elk',
    obtainText:
      <GALLANT_HOW_TO
        animaType="Green Elk"
        mountFrom="Green Elk"
        material={ITEM.TOPAZ}
        gatherFrom="mining Fortuna veins"
        differences={<p>
          <SkillLink id={17155} /> gains a reduced cooldown but loses damage.<br />
          <SkillLink id={17394} /> loses its combo, but increases subsequent ranged damage on the target.
        </p>}
      />,
  },
  {
    name: 'Gallant White Elk',
    obtainText:
      <GALLANT_HOW_TO
        animaType="White Elk"
        mountFrom="White Elk"
        material={ITEM.DIAMOND}
        gatherFrom="mining Fortuna veins"
        differences={<p>
          <SkillLink id={17155} /> gains a reduced cooldown but loses damage.<br />
          <SkillLink id={17394} /> loses its combo, but increases subsequent ranged damage on the target.
        </p>}
      />,
  },
  {
    name: 'Gallant Violet Elk',
    obtainText:
      <GALLANT_HOW_TO
        animaType="Violet Elk"
        mountFrom="Violet Elk"
        material={ITEM.AMETHYST}
        gatherFrom="mining Fortuna veins"
        differences={<p>
          <SkillLink id={17155} /> gains a reduced cooldown but loses damage.<br />
          <SkillLink id={17394} /> loses its combo, but increases subsequent ranged damage on the target.
        </p>}
      />,
  },
  {
    name: 'Gallant Coalmane Snowlion',
    obtainText:
      <GALLANT_HOW_TO
        animaType="Coalmane"
        mountFrom="Coalmane Snowlion"
        material={ITEM.BLACK_PEARL}
        gatherFrom="farming pearls and harvesting barnacles"
        differences={<p>
          <SkillLink id={32361} /> replaces <SkillLink id={11017} />, swapping tagging utility for increased stealth
          detection.<br />
          <SkillLink id={32436} /> replaces <SkillLink id={17398} />, providing increased speed in group
          situations.<br />
          <SkillLink id={32363} /> now shares a cooldown with <SkillLink id={32436} />.
        </p>}
      />,
  },
  {
    name: 'Gallant Sandmane Snowlion',
    imageCredit: 'Suicide',
    obtainText:
      <GALLANT_HOW_TO
        animaType="Sandmane"
        mountFrom="Sandmane Snowlion"
        material={ITEM.TOPAZ}
        gatherFrom="mining Fortuna veins"
        differences={<p>
          <SkillLink id={32361} /> replaces <SkillLink id={11017} />, swapping tagging utility for increased stealth
          detection.<br />
          <SkillLink id={32436} /> replaces <SkillLink id={17398} />, providing increased speed in group
          situations.<br />
          <SkillLink id={32363} /> now shares a cooldown with <SkillLink id={32436} />.
        </p>}
      />,
  },
  {
    name: 'Gallant Snowmane Snowlion',
    obtainText:
      <GALLANT_HOW_TO
        animaType="Sandmane"
        mountFrom="Sandmane Snowlion"
        material={ITEM.DIAMOND}
        gatherFrom="mining Fortuna veins"
        differences={<p>
          <SkillLink id={32361} /> replaces <SkillLink id={11017} />, swapping tagging utility for increased stealth
          detection.<br />
          <SkillLink id={32436} /> replaces <SkillLink id={17398} />, providing increased speed in group
          situations.<br />
          <SkillLink id={32363} /> now shares a cooldown with <SkillLink id={32436} />.
        </p>}
      />,
  },
  {
    name: 'Gallant Browntail Leomorph',
    imageCredit: 'Suicide',
    obtainText:
      <GALLANT_HOW_TO
        animaType="Browntail"
        mountFrom="Browntail Leomorph"
        material={ITEM.TOPAZ}
        gatherFrom="mining Fortuna veins"
        differences={<p>
          <SkillLink id={17391} /> gains an additional 3 meter distance, but gains 2 seconds on its cooldown.<br />
          <SkillLink id={17159} /> grants you bonus move speed after teleporting.<br />
          <SkillLink id={15581} />&#39;s cooldown and move speed penalty are reduced by half.
        </p>}
      />,
  },
  {
    name: 'Gallant Whitetail Leomorph',
    imageCredit: 'Thaofrost',
    obtainText:
      <GALLANT_HOW_TO
        animaType="Whitetail"
        mountFrom="Whitetail Leomorph"
        material={ITEM.DIAMOND}
        gatherFrom="mining Fortuna veins"
        differences={<p>
          <SkillLink id={17391} /> gains an additional 3 meter distance, but gains 2 seconds on its cooldown.<br />
          <SkillLink id={17159} /> grants you bonus move speed after teleporting.<br />
          <SkillLink id={15581} />&#39;s cooldown and move speed penalty are reduced by half.
        </p>}
      />,
  },
  {
    name: 'Gallant Blacktail Leomorph',
    obtainText:
      <GALLANT_HOW_TO
        animaType="Blacktail"
        mountFrom="Blacktail Leomorph"
        material={ITEM.BLACK_PEARL}
        gatherFrom="farming pearls and harvesting barnacles"
        differences={<p>
          <SkillLink id={17391} /> gains an additional 3 meter distance, but gains 2 seconds on its cooldown.<br />
          <SkillLink id={17159} /> grants you bonus move speed after teleporting.<br />
          <SkillLink id={15581} />&#39;s cooldown and move speed penalty are reduced by half.
        </p>}
      />,
  },
  {
    name: 'Thunder Dash',
    obtainText: <>
      <p>Thunder Dash is an evolved form of <Link to="/mounts/stormdarter">Stormdarter</Link>, which can be
        obtained from the quest <QuestLink id={5430} />.</p>
      <p>To complete this quest, you must summon a level 50 Stormdarter and have&nbsp;
        <ItemLink id={ITEM.HONORFORGED_MEDAL} count={15} /> (costs&nbsp;
        <Currency type={CURRENCY.HONOR} count="30,000" inline /> from the Honor Shop).</p>
      <p>As a reward, you will receive an <ItemLink id={28240} /> which can be consumed to grant you a level 30 Thunder
        Dash.</p>
    </>,
  },
  {
    name: 'Ebonfur Bjorne',
    obtainText: <>
      <MapEmbed
        zone={ZONE.MIRAGE_ISLE}
        points={[
          { label: ['Morudo', 'Garini'], coords: [{ x: 38.5, y: 25.5 }, { x: 28, y: 34.5 }] },
        ]}
        button="View on Map"
        buttonFloat="right"
      />
      <p>Ebonfur Bjorne is an evolved form of both the <Link to="/mounts/polaris-bjorne">Polaris Bjorne</Link> and the
        Fleetpaw Bjorne (unknown obtainment method).</p>
      <p>The Polaris Bjorne can be upgraded by completing <QuestLink id={5813} /> and the Fleetpaw from <QuestLink
        id={5812} />.</p>
      <p>Both quests require you to summon a level 50 Polaris or Fleetpaw Bjorne and have a <ItemLink
        id={ITEM.PUREBRED_BEAR_CERTIFICATE} count={1} /> (purchased for <Currency
        type={CURRENCY.COIN} count={1000000} inline /> from any Stablehand) and <ItemLink
        id={ITEM.HONEY} count={500} plural="" />.</p>
      <p>As a reward, you will receive a <ItemLink id={29769} /> (cannot be traded) which can be consumed to grant you
        an Ebonfur Bjorne.</p>
    </>,
  },
  {
    name: 'Yata',
    obtainText: <>
      <p>The Yata mount can be purchased as a calf from any Stablehand for&nbsp;
        <Currency type={CURRENCY.COIN} count={50000} inline /> and raised.</p>
      <p>On Legacy, this mount can also be purchased for <Currency type={CURRENCY.CREDIT} count={500} inline />.</p>
    </>,
  },
  {
    name: 'Striped Yata',
    obtainText: <>
      <p>The Striped Yata Calf is a common drop from pregnant Cashmere Yatas, which is an uncommon event that
        occurs when a female Cashmere Yata is nearby a male Cashmere Yata. Some players partake in yata breeding, which
        involves filling many farms with Cashmere Yatas for the chance to produce rare pets.</p>
      <p>The calf can be traded and sold on the auction house. As the breeding process can be expensive, it might be
        more worthwhile to find a yata breeder and buy a calf from them.</p>
      <p>Once you have a calf, simply raise it to get this mount.</p>
      <p>When compared to the Yata, this mount has increased speed.</p>
    </>,
  },
  {
    name: 'Palomino Yata',
    obtainText: <>
      <p>The Palomino Yata Calf is a rare drop from pregnant Cashmere Yatas, which is an uncommon event that
        occurs when a female Cashmere Yata is nearby a male Cashmere Yata. Some players partake in yata breeding, which
        involves filling many farms with Cashmere Yatas for the chance to produce rare pets.</p>
      <p>The calf can be traded and sold on the auction house. As the breeding process can be expensive, it might be
        more worthwhile to find a yata breeder and buy a calf from them.</p>
      <p>Once you have a calf, simply raise it to get this mount.</p>
      <p>When compared to the Striped Yata, this mount has the <SkillLink id={17092} /> skill, and is equivalent to the
        Black Yata.</p>
    </>,
  },
  {
    name: 'Black Yata',
    obtainText: <>
      <p>The Palomino Yata Calf is a rare drop from pregnant Cashmere Yatas, which is an uncommon event that
        occurs when a female Cashmere Yata is nearby a male Cashmere Yata. Some players partake in yata breeding, which
        involves filling many farms with Cashmere Yatas for the chance to produce rare pets.</p>
      <p>The calf can be traded and sold on the auction house. As the breeding process can be expensive, it might be
        more worthwhile to find a yata breeder and buy a calf from them.</p>
      <p>Once you have a calf, simply raise it to get this mount.</p>
      <p>When compared to the Striped Yata, this mount has the <SkillLink id={17092} /> skill, and is equivalent to the
        Palomino Yata.</p>
    </>,
  },
  {
    name: 'Polaris Bjorne',
    upgrade: 'Ebonfur Bjorne',
    obtainText: <>
      <p>The Polaris Cub is produced by pregnant Blizzard Bears, which is an uncommon event that
        occurs when a female Blizzard Bear is nearby a male Blizzard Bear. Some players partake in bear breeding, which
        involves filling many farms with Blizzard Bears for the chance to produce rare pets.</p>
      <p>The cub can be traded and sold on the auction house. As the breeding process can be expensive, it might be
        more worthwhile to find a yata breeder and buy a calf from them.</p>
      <p>The the cub is raised, it will either become the Polaris Ursun (which is a battle pet) or the Polaris Bjorne
        (this mount).</p>
      <p>Note that the upgrade loses 0.3 m/s in speed, but gains the skill <SkillLink id={22814} />.</p>
    </>,
  },
  {
    name: 'Fuchsiafin',
    obtainText: <>
      <MapEmbed
        zone={ZONE.SEA_OF_DROWNED_LOVE}
        points={[
          { label: ['Sea of Drowned Love', 'Center of Dahuta\'s Power'], coords: [{ x: 51, y: 76.6 }] },
        ]}
        button="View on Map"
        buttonFloat="right"
      />
      <p>This mount can be obtained by collecting materials from the 5-player dungeon, Sea of Drowned Love. You will
        need the following materials and can combine them at the workbench &#34;Center of Dahuta&#39;s
        Power&#34; located in the Sunspeck Sea:</p>
      <ul>
        <li>
          <ItemLink id={ITEM.CHILLED_SEAFOAM} count={35} plural="" noLink />
          <ul>
            <li>Drops from the final boss, Dahuta. Only one drops per kill and only one player will get it. Can be
              traded.
            </li>
          </ul>
        </li>
        <li>
          <ItemLink id={ITEM.ABYSSAL_CRYSTAL} count={10} noLink />
          <ul>
            <li>Drops from bosses in Greater dungeons or higher as personal loot and from daily quests. Can also be
              crafted, though expensive.
            </li>
          </ul>
        </li>
      </ul>
      <p>On Legacy, Fuchsiafin can also be created using <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={80} />.</p>
    </>,
  },
  {
    name: 'Cyanfin',
    obtainText: <p>This mount used to be obtainable on Legacy from the Aquatic Archeum Supply Crate.</p>,
  },
  {
    name: 'White Donkey',
    obtainText: <>
      {DONKEY_HOW_TO}
      <p>On Legacy, this mount can also be purchased for <Currency type={CURRENCY.CREDIT} count={600} inline />.</p>
    </>,
  },
  {
    name: 'Brown Donkey',
    obtainText: <>
      {DONKEY_HOW_TO}
      <p>On Legacy, this mount can also be purchased for <Currency type={CURRENCY.CREDIT} count={600} inline />.</p>
    </>,
  },
  {
    name: 'Gray Donkey',
    obtainText: <>
      {DONKEY_HOW_TO}
      <p>On Legacy, this mount can also be purchased for <Currency type={CURRENCY.CREDIT} count={600} inline />.</p>
    </>,
  },
  {
    name: 'Black Donkey',
    obtainText: DONKEY_HOW_TO,
  },
  {
    name: 'Mirage Donkey',
  },
  {
    name: 'Carrot Dash',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={150} />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'Carrot Wings',
    obtainText: <p>
      This mount can be purchased for <Currency type={CURRENCY.VOCATION} count="450,000" inline /> from the Vocation
      Shop.
    </p>,
  },
  {
    name: 'Soulmule',
    obtainText: <>
      <p>This mount can be purchased for <Currency type={CURRENCY.VOCATION} count="600,000" inline /> from
        the Vocation Shop.</p>
      <p>On Legacy, this mount can also be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={150} />.</p>
    </>,
  },
  {
    name: 'Mirage Lilyut Horse',
    obtainText: <p>
      This mount is only obtainable on Legacy and can be purchased for&nbsp;
      <Currency type={CURRENCY.CREDIT} count={1345} inline />.
    </p>,
  },
  {
    name: 'Black Lilyut Horse',
  },
  {
    name: 'Mirage Snowlion',
    obtainText: <p>
      This mount is only obtainable on Legacy and can be purchased for&nbsp;
      <Currency type={CURRENCY.CREDIT} count={1345} inline />.
    </p>,
  },
  {
    name: 'Tamed Owlina',
    obtainText: <p>Obtained from the quest <QuestLink id={9195} />, the 8th and final quest of the story chapter
      &#34;Hiram Mountains Chapter 3. Hage&#39;s Prophecy&#34;. </p>,
  },
  {
    name: 'Frost Dragon',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={200} />.</p>
      <p>On Unchained, this mount can be obtained for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
    </>,
  },
  {
    name: 'Typhoon Drake',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={200} />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'Candy-fueled Bestcargot',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={80} />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'Candy-fueled Fastropod',
    obtainText: <p>On Legacy, this mount was previously available as a reward from Hallowtide festivities.</p>,
  },
  {
    name: 'Candy-fueled Shellraiser',
    obtainText: <p>On Legacy, this mount was previously available as a reward from Hallowtide festivities.</p>,
  },
  {
    name: 'Flaming Soulscar',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={200} />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'Freezing Soulscar',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={200} /> or for
        <ItemLink id={ITEM.LOYALTY_TOKEN} count={625} />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'Vanhi',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={200} /> or for
        <ItemLink id={ITEM.LOYALTY_TOKEN} count={625} />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'Kamari',
    obtainText: <>
      <p>On Legacy, this mount can be purchased for <Currency type={CURRENCY.CREDIT} count={2500} inline />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'Hellwing Pegasus',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={150} />.</p>
      <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
    </>,
  },
  {
    name: 'Stormwing Pegasus',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={200} /> or for
        <ItemLink id={ITEM.LOYALTY_TOKEN} count={625} />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'Celestial Pegasus',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={250} /> or for
        <ItemLink id={ITEM.LOYALTY_TOKEN} count={625} />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'Earthen Roar',
    upgrade: 'Crimson Lightning',
    obtainText: <>
      <p>On Unchained, this mount can be obtained for <ItemLink id={ITEM.DILIGENCE_COIN} count={550} />.</p>
      <p>On Legacy, this mount is no longer obtainable.</p>
    </>,
  },
  {
    name: 'Steel Lightning',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={200} />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'Crimson Lightning',
    obtainText: <>
      <MapEmbed
        zone={ZONE.HASLA}
        points={[
          { label: 'Hasaru', coords: [{ x: 58.2, y: 81.3 }] },
        ]}
        button="View on Map"
        buttonFloat="right"
      />
      <p>On Legacy, if you have an <Link to="/mounts/earthen-roar">Earthen Roar</Link>, you can upgrade it into
        this mount by using <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={100} /> to obtain a <ItemLink id={8000165} />.
      </p>
      <p>The essence, along with a level 50 Earthen Roar, can be presented to Hasaru, the Stablehand at the Abandoned
        Drill Camp in Hasla, to complete the quest <QuestLink id={8000006} /> in exchange for a Crimson Lightning.</p>
      <p>
        Alternatively, this mount can be obtained outright for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={200} />.
      </p>
      <p>On Unchained, this mount can only be acquired using the first method above by purchasing a Crimson Lightning
        Essence for <ItemLink id={ITEM.DILIGENCE_COIN} count={150} />, and then completing the associated quest.</p>
    </>,
  },
  {
    name: 'Moonlight Kitsu',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={200} /> or for
        <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
      <p>On Unchained, this mount can be obtained for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
    </>,
  },
  {
    name: 'Celestial Kitsu',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={150} />.</p>
      <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
    </>,
  },
  {
    name: 'Siegeram Taurus',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={150} />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'Stormrose',
    obtainText: <>
      <p>On Legacy, this mount can be obtained for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={100} /> or for
        <ItemLink id={ITEM.LOGIN_BADGE} count={4} /> (acquired by logging in 28 days in a month).</p>
      <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
    </>,
  },
  {
    name: 'Brown Reindeer',
    obtainText: <>
      <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={100} /> or
        purchased for <Currency type={CURRENCY.CREDIT} count={1345} inline />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'White Reindeer',
    obtainText: <p>On Legacy, this mount was once obtainable from the Rudolph Archeum Supply Crate.</p>,
  },
  {
    name: 'Black Reindeer',
    obtainText:
      <>
        <p>On Legacy, this mount was once obtainable from the Rudolph Archeum Supply Crate.</p>
        <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={140} />.</p>
      </>,
  },
  {
    name: 'Stormwraith Kirin',
    obtainText: <>
      <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={200} /> or for
        <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
      <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
    </>,
  },
  {
    name: 'Gweonid Vine Giant',
    obtainText: <>
      <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.MANASTORM_CRYSTAL} count={100} />.</p>
      <p>On Unchained, this mount cannot be obtained.</p>
    </>,
  },
  {
    name: 'Lady Fluffsworth',
    obtainText: <>
      <p>On Legacy, this mount cannot currently be obtained.</p>
      <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={140} />.</p>
    </>,
  },
  {
    name: 'Lord Cottontail',
    obtainText: <>
      <p>On Legacy, this mount cannot currently be obtained.</p>
      <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={140} />.</p>
    </>,
  },
  {
    name: 'Sir Hoppington',
    obtainText: <>
      <p>On Legacy, this mount cannot currently be obtained.</p>
      <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={140} />.</p>
    </>,
  },
  {
    name: 'Andelph Drakora',
    obtainText: <>
      <p>
        This mount is acquired by completing the <Typography color="primary" component="span">Skywarden
        Collection</Typography>, an achievement for collecting 38 prestigious mounts.
      </p>

      <ul className="list-cols">
        <li>
          Celestial Creature
          <ul>
            <li><Link to="/mounts/celestial-pegasus">Celestial Pegasus</Link></li>
            <li><Link to="/mounts/typhoon-drake">Typhoon Drake</Link></li>
            <li><Link to="/mounts/frost-dragon">Frost Dragon</Link></li>
          </ul>
        </li>
        <li>
          Hereafter Herald
          <ul>
            <li><Link to="/mounts/flaming-soulscar">Flaming Soulscar</Link></li>
            <li><Link to="/mounts/soulmule">Soulmule</Link></li>
            <li><Link to="/mounts/stormrose">Stormrose</Link></li>
          </ul>
        </li>
        <li>
          Stormy Soul
          <ul>
            <li><Link to="/mounts/thunder-dash">Thunder Dash</Link></li>
            <li><Link to="/mounts/steel-lightning">Steel Lightning</Link></li>
            <li><Link to="/mounts/cloudstrike-panther">Cloudstrike Panther</Link></li>
          </ul>
        </li>
        <li>
          Winter Wildlife
          <ul>
            <li><Link to="/mounts/freezing-soulscar">Freezing Soulscar</Link></li>
            <li><Link to="/mounts/brown-reindeer">Brown Reindeer</Link></li>
            <li><Link to="/mounts/moonfeather-griffin">Moonfeather Griffin</Link></li>
          </ul>
        </li>
        <li>
          Fiery Familiar
          <ul>
            <li><Link to="/mounts/vanhi">Vanhi</Link></li>
            <li><Link to="/mounts/hellwing-pegasus">Hellwing Pegasus</Link></li>
            <li><Link to="/mounts/crimson-lightning">Crimson Lightning</Link></li>
          </ul>
        </li>
        <li>
          Shadowy Sidekick
          <ul>
            <li><Link to="/mounts/moonlight-kitsu">Moonlight Kitsu</Link></li>
            <li><Link to="/mounts/stormwraith-kirin">Stormwraith Kirin</Link></li>
            <li><Link to="/mounts/stormwing-pegasus">Stormwing Pegasus</Link></li>
          </ul>
        </li>
        <li>
          Best Buddy
          <ul>
            <li><Link to="/mounts/gweonid-vine-giant">Gweonid Vine Giant</Link></li>
            <li><Link to="/mounts/carrot-dash">Carrot Dash</Link></li>
            <li><Link to="/mounts/mirage-bjorne">Mirage Bjorne</Link></li>
            <li><Link to="/mounts/siegeram-tarus">Siegeram Taurus</Link></li>
          </ul>
        </li>
        <li>
          Cute Companion
          <ul>
            <li><Link to="/mounts/candyfueled-bestcargot">Candy-fueled Bestcargot</Link></li>
            <li><Link to="/mounts/coral">Coral</Link></li>
            <li><Link to="/mounts/celstial-kitsu">Celestial Kitsu</Link></li>
          </ul>
        </li>
        <li>
          Pale Pal
          <ul>
            <li><Link to="/mounts/whitetail-leomorph">Whitetail Leomorph</Link></li>
            <li><Link to="/mounts/white-elk">White Elk</Link></li>
            <li><Link to="/mounts/snowrend-boar">Snowrend Boar</Link></li>
            <li><Link to="/mounts/snowmane-snowlion">Snowmane Snowlion</Link></li>
          </ul>
        </li>
      </ul>
      <p>You can also swap the freely swap the coloration of this mount between the&nbsp;
        <Link to="/mounts/onyx-andelph-drakora">Onyx Andelph Drakora</Link> by visiting a Pet Accessory Workbench.</p>
    </>,
  },
  {
    name: 'Onyx Andelph Drakora',
    obtainText:
      <>
        <p>
          The Onyx Andelph Drakora is a different coloration of the <Link to="/mounts/andelph-drakora">Andelph
          Drakora</Link>. It can be freely swapped between the two colorations by visiting a Pet Accessory Workbench.
        </p>
      </>,
  },
  {
    name: 'Small Wyvern',
    obtainText: <>
      <p>To obtain this mount, your nation must first own a castle that has the workshop built. After
        you&#39;ve obtained this mount, your nation must control a castle to use it.</p>
      <p>The materials needed are as follows:</p>
      <ul>
        <li>
          <ItemLink id={ITEM.BLUE_SALT_BOND} count={30} noLink />
          <ul>
            <li>Obtained from various Blue Salt quests, such as Supply Demand daily quests.</li>
          </ul>
        </li>
        <li>
          <ItemLink id={ITEM.TERRITORY_COIN} count={30} noLink />
          <ul>
            <li>
              Obtained from various castle-related activities, usually in the form as Territory Pence (100 Pence = 1
              Coin).
            </li>
          </ul>
        </li>
        <li>
          <ItemLink id={ITEM.BLAZING_WIND_SPIRIT_LEATHER} count={1} noLink />
          <ul>
            <li>Highest tier of leather; quite expensive to craft. Can be traded.</li>
          </ul>
        </li>
        <li>
          <ItemLink id={ITEM.BLAZING_CLOUDSPUN_FABRIC} count={1} noLink />
          <ul>
            <li>Highest tier of fabric; quite expensive to craft. Can be traded.</li>
          </ul>
        </li>
      </ul>
      <p>Take these materials to the workbench at your castle to craft it.</p>
    </>,
  },
  {
    name: 'Aquestria',
    obtainText: <>
      <p>On Legacy, this mount used to be obtainable from the Seaside Treasure Chest.</p>
      <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
    </>,
  },
  {
    name: 'Golden Manticore',
    obtainText: <>
      <p>On Legacy, this mount used to be obtainable from the Manticore Archeum Supply Crate.</p>
      <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
    </>,
  },
  {
    name: 'Tamed Ant',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Scorpion',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Jabberwock',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Mandragora',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Boar',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Starfish',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox Ver. 2</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Crab',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox Ver. 2</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Tsunami Elemental',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox Ver. 2</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Turtle',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox Ver. 2</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Skyfin',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox Ver. 2</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Razorbeak',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox Ver. 3</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Bladewing',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox Ver. 3</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Owl',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox Ver. 3</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Honeybee',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox Ver. 3</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Bat',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <Typography component="span" color="primary">Capturing
        Toolbox Ver. 3</Typography> from the Arena Shop for <ItemLink id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tuskora',
    imageCredit: 'Suicide',
    obtainText: <>
      <p>
        This mount is acquired by completing the <Typography color="primary" component="span">Tuskora
        Collection</Typography>, an achievement for collecting all 15 Tamed mounts from the Arena Shop.
      </p>

      <ul className="list-cols">
        <li>
          Terrestrial Conqueror
          <ul>
            <li><Link to="/mounts/tamed-ant">Tamed Ant</Link></li>
            <li><Link to="/mounts/tamed-boar">Tamed Boar</Link></li>
            <li><Link to="/mounts/tamed-mandragora">Tamed Mandragora</Link></li>
          </ul>
        </li>
        <li>
          Champion of the Sea
          <ul>
            <li><Link to="/mounts/tamed-starfish">Tamed Starfish</Link></li>
            <li><Link to="/mounts/tamed-crab">Tamed Crab</Link></li>
            <li><Link to="/mounts/tamed-turtle">Tamed Turtle</Link></li>
            <li><Link to="/mounts/tamed-tsunami-elemental">Tamed Tsunami Elemental</Link></li>
          </ul>
        </li>
        <li>
          Oddly Cute
          <ul>
            <li><Link to="/mounts/tamed-scorpion">Tamed Scorpion</Link></li>
            <li><Link to="/mounts/tamed-jabberwock">Tamed Jabberwock</Link></li>
            <li><Link to="/mounts/tamed-bladewing">Tamed Bladewing</Link></li>
          </ul>
        </li>
        <li>
          Winged Warrior
          <ul>
            <li><Link to="/mounts/tamed-owl">Tamed Owl</Link></li>
            <li><Link to="/mounts/tamed-honeybee">Tamed Honeybee</Link></li>
            <li><Link to="/mounts/tamed-bat">Tamed Bat</Link></li>
            <li><Link to="/mounts/tamed-skyfin">Tamed Skyfin</Link></li>
            <li><Link to="/mounts/tamed-razorbeak">Tamed Razorbeak</Link></li>
          </ul>
        </li>
      </ul>
    </>,
  },
  {
    name: 'Brave Bison',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
        <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
      </>,
  },
  {
    name: 'Dread Steed',
    obtainText:
      <>
        <p>
          On Legacy, this mount was once obtainable from the Dread Steed Archeum Supply Crate.<br />
          They were also given away during a promotional period.
        </p>
        <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
      </>,
  },
  {
    name: 'Rajani',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={625} />.</p>
        <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
      </>,
  },
  {
    name: 'Shayeera',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={625} />.</p>
        <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
      </>,
  },
  {
    name: 'Emberpaw Panther',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={625} />.</p>
        <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
      </>,
  },
  {
    name: 'Onyx Steed',
    upgrade: 'Gallant Onyx Steed',
    obtainText:
      <>
        <p>This mount can be crafted at your faction's castle Territory Crafting Workebench.</p>
        <p>Crafting an Onyx Steed will require the following materials:</p>
        <ul>
          <li>
            <ItemLink id={ITEM.BLUE_SALT_BOND} count={150} noLink />
            <ul>
              <li><i>Acquired from dailies at community centers. On Unchained, from occasional Equipment Pass
                rewards.</i></li>
            </ul>
          </li>
          <li>
            <ItemLink id={ITEM.TERRITORY_COIN} count={160} noLink />
            <ul>
              <li><i>Acquired from combining <ItemLink id={ITEM.TERRITORY_PENCE} count={100} plural="" /> from territory
                daily quests.</i></li>
            </ul>
          </li>
          <li>
            <ItemLink id={ITEM.BLAZING_SUNRIDGE_INGOT} count={10} noLink />
            <ul>
              <li><i>The highest tier of ingot. Can be crafted or traded.</i></li>
            </ul>
          </li>
          <li>
            <ItemLink id={ITEM.BLAZING_WIND_SPIRIT_LEATHER} count={10} plural="" noLink />
            <ul>
              <li><i>The highest tier of leather; can be crafted or traded.</i></li>
            </ul>
          </li>
          <li>
            <ItemLink id={ITEM.BLAZING_CLOUDSPUN_FABRIC} count={10} plural="" noLink />
            <ul>
              <li><i>The highest tier of fabric; can be crafted or traded.</i></li>
            </ul>
          </li>
          <li>
            <ItemLink id={ITEM.BLAZING_NURI_FOREST_LUMBER} count={10} plural="" noLink />
            <ul>
              <li><i>The highest tier of lumber; can be crafted or traded.</i></li>
            </ul>
          </li>
        </ul>
      </>,
  },
  {
    name: 'Pearl Steed',
    upgrade: 'Gallant Pearl Steed',
    obtainText:
      <>
        <p>This mount can be crafted at your faction's castle Territory Crafting Workebench.</p>
        <p>Crafting an Onyx Steed will require the following materials:</p>
        <ul>
          <li>
            <ItemLink id={ITEM.BLUE_SALT_BOND} count={150} noLink />
            <ul>
              <li><i>Acquired from dailies at community centers. On Unchained, from occasional Equipment Pass
                rewards.</i></li>
            </ul>
          </li>
          <li>
            <ItemLink id={ITEM.TERRITORY_COIN} count={160} noLink />
            <ul>
              <li><i>Acquired from combining <ItemLink id={ITEM.TERRITORY_PENCE} count={100} plural="" /> from territory
                daily quests.</i></li>
            </ul>
          </li>
          <li>
            <ItemLink id={ITEM.BLAZING_SUNRIDGE_INGOT} count={10} noLink />
            <ul>
              <li><i>The highest tier of ingot. Can be crafted or traded.</i></li>
            </ul>
          </li>
          <li>
            <ItemLink id={ITEM.BLAZING_WIND_SPIRIT_LEATHER} count={10} plural="" noLink />
            <ul>
              <li><i>The highest tier of leather; can be crafted or traded.</i></li>
            </ul>
          </li>
          <li>
            <ItemLink id={ITEM.BLAZING_CLOUDSPUN_FABRIC} count={10} plural="" noLink />
            <ul>
              <li><i>The highest tier of fabric; can be crafted or traded.</i></li>
            </ul>
          </li>
          <li>
            <ItemLink id={ITEM.BLAZING_NURI_FOREST_LUMBER} count={10} plural="" noLink />
            <ul>
              <li><i>The highest tier of lumber; can be crafted or traded.</i></li>
            </ul>
          </li>
        </ul>
      </>,
  },
  {
    name: 'Mechanical Kraken',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
        <p>On Unchained, this mount cannot currently be obtained.</p>
      </>,
  },
  {
    name: 'Firesnarl Elephant',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
        <p>On Unchained, this mount cannot currently be obtained.</p>
      </>,
  },
  {
    name: 'Alabaster Manticore',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
        <p>On Unchained, this mount cannot currently be obtained.</p>
      </>,
  },
  {
    name: 'Celestar',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
        <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
      </>,
  },
  {
    name: 'Deathmaw',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
        <p>On Unchained, this mount was available in the 2020 Q2 ArchePass - Combat Pass.</p>
      </>,
  },
  {
    name: 'Hereafter Hoppington',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
        <p>On Unchained, this mount cannot currently be obtained.</p>
      </>,
  },
  {
    name: 'Lunaris',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
        <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
      </>,
  },
  {
    name: 'Mr. Mittens',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
        <p>On Unchained, this mount cannot currently be obtained.</p>
      </>,
  },
  {
    name: 'Ruby Steamfish Submarine',
    obtainText:
      <STEAMFISH_HOW_TO
        recipeId={5719}
        recipeItemId={29274}
        gildaCost={250}
        colorItem={3711}
        colorCount={200}
      />,
  },
  {
    name: 'Lapis Steamfish Submarine',
    obtainText:
      <STEAMFISH_HOW_TO
        recipeId={5720}
        recipeItemId={29275}
        gildaCost={250}
        colorItem={3627}
        colorCount={200}
      />,
  },
  {
    name: 'Platinum Steamfish Submarine',
    obtainText:
      <STEAMFISH_HOW_TO
        recipeId={5721}
        recipeItemId={29276}
        gildaCost={250}
        colorItem={3564}
        colorCount={200}
      />,
  },
  {
    name: 'Chrome Steamfish Submarine',
    obtainText:
      <STEAMFISH_HOW_TO
        recipeId={8902}
        recipeItemId={34376}
        recipeObtain={<>Combine <ItemLink id={39703} count={200} />, which are gathered from sunken treasures. Completed
          design can be traded.</>}
        colorItem={17774}
        colorCount={100}
      />,
  },
  {
    name: 'Andelph Patrol Mech',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOGIN_BADGE} count={4} /> (acquired by logging
          in 28 days in a month).</p>
        <p>On Unchained, this mount cannot currently be obtained.</p>
      </>,
  },
  {
    name: 'Noble Blossomhoof',
    obtainText:
      <>
        <p>On Legacy, this mount was previously obtainable by purchasing the Garden of the Gods Archeum Pack, which is
          no longer available.</p>
        <p>On Unchained, this mount was previously obtainable by purchasing the Garden of the Gods Archeum DLC Pack.
          <br />
          <i>Note that this version came with a reduced skill set.</i></p>
      </>,
  },
  {
    name: 'Gallant Onyx Steed',
    obtainText:
      <>
        <p>This mount can be obtained by using a <ItemLink id={47385} /> (purchased for <Currency
          type={CURRENCY.KYRIOS} count={8000} />) on an <Link to={'/mounts/onyx-steed'}>Onyx Steed</Link>.</p>
      </>,
  },
  {
    name: 'Gallant Pearl Steed',
    obtainText:
      <>
        <p>This mount can be obtained by using a <ItemLink id={47385} /> (purchased for <Currency
          type={CURRENCY.KYRIOS} count={8000} />) on a <Link to={'/mounts/pearl-steed'}>Pearl Steed</Link>.</p>
      </>,
  },
  {
    name: 'Alabaster Steed',
    upgrade: 'Gallant Alabaster Steed',
    obtainText:
      <>
        <p>This mount was previously available for <Currency type={CURRENCY.KYRIOS} count={5000} /> from the Arena Shop.
        </p>
      </>,
  },
  {
    name: 'Gallant Alabaster Steed',
    obtainText:
      <>
        <p>This mount can be obtained by using a <ItemLink id={47385} /> (purchased for <Currency
          type={CURRENCY.KYRIOS} count={8000} />) on an <Link to={'/mounts/alabaster-steed'}>Alabaster Steed</Link>.</p>
      </>,
  },
  {
    name: 'Obsidian Steed',
    upgrade: 'Gallant Obsidian Steed',
    obtainText:
      <>
        <p>This mount can be purchased for <Currency type={CURRENCY.KYRIOS} count={5000} /> from the Arena Shop.</p>
      </>,
  },
  {
    name: 'Gallant Obsidian Steed',
    obtainText:
      <>
        <p>This mount can be obtained by using a <ItemLink id={47385} /> (purchased for <Currency
          type={CURRENCY.KYRIOS} count={8000} />) on an <Link to={'/mounts/obsidian-steed'}>Obsidian Steed</Link>.</p>
      </>,
  },
  {
    name: 'Mistwraith Kirin',
    itemName: 'Blue Stormwraith Kirin',
    obtainText:
      <>
        <p>On Legacy, this mount was once obtainable from the Mistwraith Kirin Crate.</p>
        <p>On Unchained, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
      </>,
  },
  {
    name: 'Hellwraith Kirin',
    obtainText:
      <>
        <p>On Legacy, this mount came as a part of the <ItemLink id={8003601} />, which was only be purchasable until
          August 16, 2020.</p>
        <p>On Unchanined, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
        <p>Originally, this mount came as a part of the <ItemLink id={8003602} /> as a "juvenile" with no skills up
          until August 27, 2020.</p>
      </>,
  },
  {
    name: 'Gloomwraith Kirin',
    obtainText:
      <>
        <p>On Legacy, this mount was once obtainable by purchasing the Ipnysh Sanctuary Archeum Pack.</p>
        <p>On Unchanined, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
      </>,
  },
  {
    name: 'Tamed Crayfish',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <ItemLink id={49681} /> from the Arena Shop for <ItemLink
        id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Earth Elemental',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <ItemLink id={49681} /> from the Arena Shop for <ItemLink
        id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Grub',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <ItemLink id={49681} /> from the Arena Shop for <ItemLink
        id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Mantis',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <ItemLink id={49681} /> from the Arena Shop for <ItemLink
        id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Tamed Spider',
    obtainText: <>
      <p>
        This mount can be acquired by purchasing the <ItemLink id={49681} /> from the Arena Shop for <ItemLink
        id={ITEM.KYRIOS_BADGE} count={800} />.
      </p>
    </>,
  },
  {
    name: 'Darugon',
    obtainText: <>
      <p>On Legacy, this mount is obtainable from the Darugon Crate or purchased for&nbsp;
        <ItemLink id={ITEM.LOYALTY_TOKEN} count={750} />.</p>
      <p>On Unchained, it is available as the premium reward track final reward of the advanced pass: Darugon Pass.</p>
    </>,
  },
  {
    name: 'Reefstalker Wyrm',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
        <p>On Unchanined, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
      </>,
  },
  {
    name: 'Wyrdwind Lion',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
        <p>A wrapped version is available from the Akasch Invasion Archeum Pack.</p>
        <p>On Unchanined, this mount can be purchased for <ItemLink id={ITEM.DILIGENCE_COIN} count={400} />.</p>
      </>,
  },
  {
    name: 'Nocturne Griffin',
    obtainText:
      <>
        <p>On Legacy, this mount was once obtainable from a limited time promotion with Razer Gaming.</p>
        <p>On Unchained, this mount is available as a part of the Akasch Invasion Archeum Pack.</p>
      </>,
  },
  {
    name: 'Tidebreaker Tortoise',
    obtainText:
      <>
        <p>On Legacy, this mount can be purchased for <ItemLink id={ITEM.LOYALTY_TOKEN} count={650} />.</p>
        <p>On Unchained, this mount cannot currently be obtained.</p>
      </>,
  },
  {
    name: 'Albino Yata',
    obtainText:
      <>
        <p>On Legacy, this mount cannot currently be obtained.</p>
        <p>On Unchained, this mount is the part of the reward for Tier 3 of the Recruit-a-Legend Program, given for
          recruiting 5 friends.</p>
      </>,
  },
  {
    name: 'Hermit Crab',
    obtainText:
      <>
        <p>On Legacy, this mount was previously obtainable by purchasing the Rise of Nehliya Archeum Pack, which is
          no longer available.</p>
        <p>On Unchained, this mount cannot currently be obtained.</p>
      </>,
  },
  {
    name: 'Golden Wyvern',
    obtainText:
      <>
        <p>The Golden Wyvern is a timed mount that is obtainable by faction heroes while the faction controls a castle
          zone in Auroria. Only one Golden Wyvern may be present at a time.</p>
      </>,
  },
  {
    name: 'Asteria',
    obtainText:
      <>
        <p>This mount is available from the last quest of the Ipyna Ridge saga of racial quests, <QuestLink
          id={10682} />.</p>
      </>,
  },
];

export default MOUNT;
