import React, { ReactElement } from 'react';
import { Center, Image, Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import parisImage from '../../assets/images/paris.webp';
import { Body, SectionTitle } from '../typography/Typography';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import styles from './OurStory.module.scss';
import { useDeviceWidth } from '../../hooks/useDeviceWidth';
import cx from 'classnames';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const OurStory = ({ scrollRef }: Props): ReactElement => {
  const { isXSmallWidth } = useDeviceWidth();

  return (
    <InfoSection scrollRef={scrollRef}>
      <Center
        pb={32}
        mt={isXSmallWidth ? -64 : -32}
        mx={isXSmallWidth ? -64 : 0}
      >
        <ParallaxBanner style={{ aspectRatio: '1/1.25', maxWidth: 700 }}>
          <ParallaxBannerLayer speed={isXSmallWidth ? -3 : -6}>
            <Image
              src={parisImage}
              className={cx(styles.image, { [styles.mobile]: isXSmallWidth })}
            />
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </Center>
      <Center>
        <Stack gap={0} justify={'flex-end'} maw={1200}>
          <SectionTitle>Our Story</SectionTitle>
          <Body>
            To start at the beginning, the story of Craig & Josi starts on the
            dance floors of a Berlin nightclub. Boy sees girl, girl talks to
            boy, sparks fly, and life finally really begins for these two lucky
            hearts. The music carries them long into the night, and the magic
            carries them into the adventure-filled years that follow. Some
            couples start slow, and some take off like a rocket - and Craig &
            Josi continue to enjoy the ride.
            <br />
            <br />
            It’s safe to say we’ve spent our 6 years together living life to the
            absolute fullest. We’ve traveled the world together and made friends
            from all corners of the globe. We’ve watched and supported as we’ve
            grown both personally and professionally. We’ve challenged ourselves
            to accomplish our goals both individually and as partners. And if
            one thing is absolutely certain, we’ve made sure to always have fun
            together along the way!
            <br />
            <br />
            Out of all of our adventures together, our trip to Crete in 2020
            stands out as one of the most romantic and impactful experiences
            we’ve shared. We always said how much we would love to get married
            in such a beautiful setting, and now we’re so excited to be able to
            make that dream come true. We couldn’t be happier to invite you to
            join us so we can bring together the people we love to celebrate
            with us.
            <br />
            <br />
            There’s no comfort in the world like knowing that the person sitting
            next to you in life is looking out at the same horizon. When we gaze
            at our life together, this wedding represents the start of the main
            act of this story, and if the prologue has been any indication, it’s
            going to be an incredibly beautiful and Crasi life. ♡
          </Body>
        </Stack>
      </Center>
    </InfoSection>
  );
};
