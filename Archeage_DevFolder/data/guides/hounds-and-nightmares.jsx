import { Typography } from '@material-ui/core';
import Ability from 'components/Ability';
import MapEmbed from 'components/MapEmbed';
import SkillLink from 'components/Skill/SkillLink';
import TabContent from 'components/TabContent';
import { GUIDE_CATEGORY } from 'constants/guides';
import { ZONE } from 'constants/map';
import { SKILL } from 'constants/skills';
import React from 'react';

const name = 'Hounds and Nightmares';

const meta = {
  author: 'Mokulu',
  lastUpdated: 'Nov 5, 2019',
};

const category = GUIDE_CATEGORY.BOSSES;

const sections = [
  {
    title: 'Hounds of Kyrios',
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
      <Typography>At 12:00 in-game time, the Crimson Rift will appear in the sky in Cinderstone and Ynystere at one of
        several locations indicated on the above map. At 18:00 in-game time, the rift appears in Sungold
        Fields.</Typography>,
      <Typography>After fighting multiple waves of the Crimson Army, the Hounds of Kyrios jump into the fray. They don't
        have very difficult mechanics, but not following them can make them impossible to kill.</Typography>,
      <Typography variant="h6">Abilities</Typography>,
      <Ability
        name="Cut and Slash"
        description="When the Hound of Kyrios performs a basic attack, it cleaves all targets in a 45 degree cone."
        counters={[
          'The player who is tanking the Hound should face it away from the raid.',
        ]}
      />,
      <Ability
        name="Hand Cannon"
        description="When the Hound of Kyrios' target is more than 5 meters away from him, he will shoot the target with his hand cannon that deals damage to players around the target's original location. This applies a buff to the Hound that makes him immune to all damage for 2 seconds."
        counters={[
          'All players engaging the Hound should stack within 5 meters of it to prevent this ability from being used.',
          'A player who is kiting the Hound can easily side-step the cannon when they\'re at least 20 meters or more away from it.',
        ]}
      />,
      <Ability
        name="Terrifying Roar"
        description="The Hound of Kyrios unleashes a terrible roar, knocking back players around him up to 10 meters away."
      />,
      <Ability
        name="Telekinesis"
        description="The Hound of Kyrios lifts up his target and up to 9 players around his target. He fires multiple bolts of medium damage to all affected players. During this time, the Hound is immune to all damage."
      />,
      <Ability
        name="Pull"
        description="The Nightmare pulls his distant target to him."
      />,
      <Typography variant="h6">Strategy</Typography>,
      <Typography>When the last wave of the Crimson Army is mostly defeated, two Hounds of Kyrios will spawn. It's very
        unlikely that your group will only pull one. Your group will need to engage one Hound while one person distracts
        the other so the splash damage from the Hand Cannon won't deal devastating damage to your raid.</Typography>,
      <Typography>Those with Songcraft should avoid using&nbsp;
        <SkillLink id={SKILL.ODE_TO_RECOVERY} /> as the aggro generation can put your raid
        into jeopardy. Healers should stick to using single-target heals on the player tanking the hound and&nbsp;
        <SkillLink id={SKILL.MEND} /> for raid-wide healing.</Typography>,
      'The only player that should be in front of the Hound should be the one tanking it, everyone else should be stacked within 5 meters behind it to prevent the Hound from using its Hand Cannon ability.',
      'Use big damage cooldowns during windows of opportunity to burn the Hound, such as right after the immunity phase of a Telekinesis.',
    ],
  },
  {
    title: 'Nightmare Blade and Bowstring',
    paragraphs: [
      <TabContent
        tabs={[
          {
            label: 'Cinderstone Moor',
            content:
              <MapEmbed
                zone={ZONE.CINDERSTONE_MOOR}
                points={[
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
                  { label: 'Nightmare Bosses', icon: 'boss', coords: [{ x: 40.5, y: 61.5 }] },
                ]}
              />,
          },
        ]}
      />,
      <Typography>At 12:00 in-game time, the war effort against the Grimghast Tide occurs in Cinderstone and Ynystere,
        requiring players to deliver materials to their zone's base and then transport packs to build a trebuchet in
        preparation for the attack of the Nightmare army.</Typography>,
      <Typography>After fighting two waves of the Nightmare Army, the Nightmare Blade and the Nightmare Bowstring begin
        their assault. They share mechanics with the Hounds of Kyrios (which means they can be impossible to kill
        without following), and they have an additional attack that can massacre players if it's not countered by the
        harpoons supplied by the attack.</Typography>,
      <Typography variant="h6">Abilities</Typography>,
      <Ability
        name="Time of Nightmares"
        description="The Nightmare creature begins creating a nightmare for the players. After 10 seconds, all players around the Nightmare take great damage and are placed in a stasis that prevents movement and the use of abilities."
        counters={[
          'Players can use Time of Oblivion on the Ghost Hunter Harpoon that is given during the Grimghast assault to counter the Time of Nightmares.',
        ]}
        deadly
      />,
      <Ability
        name="Cut and Slash"
        description="When the Nightmare creature performs a basic attack, it cleaves all targets in a 45 degree cone."
        counters={[
          'The player who is tanking the Nightmare should face it away from the raid.',
        ]}
      />,
      <Ability
        name="Hand Cannon"
        description="When the Nightmare creature's target is more than 5 meters away from him, he will shoot the target with his hand cannon that deals damage to players around the target's original location. This applies a buff to the Nightmare that makes him immune to all damage for 2 seconds."
        counters={[
          'All players engaging the Nightmare should stack within 5 meters of it to prevent this ability from being used.',
          'A player who is kiting the Nightmare can easily side-step the cannon when they\'re at least 20 meters or more away from it.',
        ]}
      />,
      <Ability
        name="Terrifying Roar"
        description="The Nightmare creature unleashes a terrible roar, knocking back players around him up to 10 meters away."
      />,
      <Ability
        name="Telekinesis"
        description="The Nightmare creature lifts up his target and up to 9 players around his target. He fires multiple bolts of medium damage to all affected players. During this time, the Nightmare is immune to all damage."
      />,
      <Ability
        name="Pull"
        description="The Nightmare pulls his distant target to him."
      />,
      <Typography variant="h6">Strategy</Typography>,
      <Typography>When the last wave of the Nightmare Army is mostly defeated, the two Nightmare bosses will spawn. They
        usually spawn a good distance away from each other, and with the nature of using the harpoons to kill the
        Nightmare Army, you'll most likely be able to pull them individually.</Typography>,
      <Typography>Those with Songcraft should avoid using&nbsp;
        <SkillLink id={SKILL.ODE_TO_RECOVERY} /> as the aggro generation can put your raid
        into jeopardy. Healers should stick to using single-target heals on the player tanking the hound and&nbsp;
        <SkillLink id={SKILL.MEND} /> for raid-wide healing.</Typography>,
      'The only player that should be in front of the Nightmare creature should be the one tanking it, everyone else should be stacked within 5 meters behind it to prevent the Hound from using its Hand Cannon ability.',
      'Use big damage cooldowns during windows of opportunity to burn the Hound, such as right after the immunity phase of a Telekinesis.',
      'Keep an eye on the Nightmare\'s buff bar and use Time of Oblivion on the Ghost Hunter Harpoon to neutralize its effect.',
    ],
  },
];

export default { name, meta, category, sections };
