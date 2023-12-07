import React, { ReactNode } from 'react';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Stack, Tabs } from '@mantine/core';
import { useIntersection, useScrollIntoView } from '@mantine/hooks';
import styles from './InfoWebsite.module.scss';
import { HeroSection } from '../HeroSection/HeroSection';
import { OurStory } from '../sections/OurStory';
import { OurWedding } from '../sections/OurWedding';
import { Itinerary } from '../sections/Itinerary';
import cx from 'classnames';
import { Travel } from '../sections/Travel';
import { ImageSection } from '../sections/ImageSection';
import { ThingsToDo } from '../sections/ThingsToDo';
import { GiftsRegistry } from '../sections/GiftsRegistry';
import { RSVP } from '../sections/RSVP';
import { FAQ } from '../sections/FAQ';
import festivalOfLightsImage from '../../assets/images/festival-of-lights.webp';
import croatiaImage from '../../assets/images/croatia.webp';

const theme = createTheme({
  fontFamily: 'Josefin Sans',
  headings: {
    fontFamily: 'Italianno',
    fontWeight: '500',
    sizes: {
      h1: { fontSize: '64px' },
      h2: { fontSize: '56px' },
      h3: { fontSize: '48px' },
      h4: { fontSize: '40px' },
      h5: { fontSize: '32px' },
      h6: { fontSize: '24px' },
    },
  },
  fontSizes: {
    xs: '12px',
    sm: '16px',
    md: '18px',
    lg: '24px',
    xl: '28px',
  },
});

export const InfoWebsite = (): ReactNode => {
  const { scrollIntoView: ourStoryScroll, targetRef: ourStoryScrollRef } =
    useScrollIntoView<HTMLDivElement>({ offset: 64 });
  const { scrollIntoView: ourWeddingScroll, targetRef: ourWeddingScrollRef } =
    useScrollIntoView<HTMLDivElement>({ offset: 64 });
  const { scrollIntoView: itineraryScroll, targetRef: itineraryScrollRef } =
    useScrollIntoView<HTMLDivElement>({ offset: 64 });
  const { scrollIntoView: travelScroll, targetRef: travelScrollRef } =
    useScrollIntoView<HTMLDivElement>({ offset: 64 });
  const { scrollIntoView: thingsToDoScroll, targetRef: thingsToDoScrollRef } =
    useScrollIntoView<HTMLDivElement>({ offset: 64 });
  const {
    scrollIntoView: giftsRegistryScroll,
    targetRef: giftsRegistryScrollRef,
  } = useScrollIntoView<HTMLDivElement>({ offset: 64 });
  const { scrollIntoView: rsvpScroll, targetRef: rsvpScrollRef } =
    useScrollIntoView<HTMLDivElement>({ offset: 64 });
  const { scrollIntoView: faqScroll, targetRef: faqScrollRef } =
    useScrollIntoView<HTMLDivElement>({ offset: 64 });

  const { ref: tabIntsersectionRef, entry } = useIntersection({ threshold: 1 });

  return (
    <MantineProvider theme={theme}>
      <Stack gap={0}>
        <HeroSection />
        <Tabs
          value={null}
          className={cx(styles.tabs, {
            [styles.stuck]: !entry?.isIntersecting,
          })}
          allowTabDeactivation
          ref={tabIntsersectionRef}
        >
          <Tabs.List className={styles.tabList}>
            <Tabs.Tab
              value={'our-story'}
              onClick={() => ourStoryScroll()}
              className={styles.tab}
            >
              Our Story
            </Tabs.Tab>
            <Tabs.Tab
              value={'wedding-details'}
              onClick={() => ourWeddingScroll()}
              className={styles.tab}
            >
              Our Wedding
            </Tabs.Tab>
            <Tabs.Tab
              value={'itinerary'}
              onClick={() => itineraryScroll()}
              className={styles.tab}
            >
              Itinerary
            </Tabs.Tab>
            <Tabs.Tab
              value={'travel'}
              onClick={() => travelScroll()}
              className={styles.tab}
            >
              Travel
            </Tabs.Tab>
            <Tabs.Tab
              value={'things-to-do'}
              onClick={() => thingsToDoScroll()}
              className={styles.tab}
            >
              Things To Do
            </Tabs.Tab>
            <Tabs.Tab
              value={'gifts-registry'}
              onClick={() => giftsRegistryScroll()}
              className={styles.tab}
            >
              Gifts & Registry
            </Tabs.Tab>
            <Tabs.Tab
              value={'rsvp'}
              onClick={() => rsvpScroll()}
              className={styles.tab}
            >
              RSVP
            </Tabs.Tab>
            <Tabs.Tab
              value={'faq'}
              onClick={() => faqScroll()}
              className={styles.tab}
            >
              FAQ
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <OurStory scrollRef={ourStoryScrollRef} />
        <OurWedding scrollRef={ourWeddingScrollRef} />
        <Itinerary scrollRef={itineraryScrollRef} />
        <Travel scrollRef={travelScrollRef} />
        <ImageSection imageSrc={festivalOfLightsImage} gradient />
        <ThingsToDo scrollRef={thingsToDoScrollRef} />
        <GiftsRegistry scrollRef={giftsRegistryScrollRef} />
        <ImageSection
          imageSrc={croatiaImage}
          imageClassName={styles.croatiaImage}
        />
        <RSVP scrollRef={rsvpScrollRef} />
        <FAQ scrollRef={faqScrollRef} />
      </Stack>
    </MantineProvider>
  );
};
