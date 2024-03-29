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
import { DoubleImageSection, ImageSection } from '../sections/ImageSection';
import { ThingsToDo } from '../sections/ThingsToDo';
import { GiftsRegistry } from '../sections/GiftsRegistry';
import { RSVP } from '../sections/RSVP';
import { FAQ } from '../sections/FAQ';
import festivalOfLightsImage from '../../assets/images/festivalOfLights.jpg';
import croatiaImage from '../../assets/images/croatia.webp';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useTranslation } from 'react-i18next';
import { Footer } from '../sections/Footer';

const theme = createTheme({
  fontFamily: 'Josefin Sans',
  headings: {
    fontFamily: 'Noto Serif Display',
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

  const { t } = useTranslation();

  return (
    <MantineProvider theme={theme}>
      <ParallaxProvider>
        <Stack gap={0}>
          <HeroSection />
          <Tabs
            value={null}
            className={cx(styles.tabs, {
              [styles.stuck]:
                !entry?.isIntersecting &&
                entry?.boundingClientRect.y &&
                entry?.boundingClientRect.y < 0,
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
                {t('tabs.our-story')}
              </Tabs.Tab>
              <Tabs.Tab
                value={'wedding-details'}
                onClick={() => ourWeddingScroll()}
                className={styles.tab}
              >
                {t('tabs.our-wedding')}
              </Tabs.Tab>
              <Tabs.Tab
                value={'itinerary'}
                onClick={() => itineraryScroll()}
                className={styles.tab}
              >
                {t('tabs.itinerary')}
              </Tabs.Tab>
              <Tabs.Tab
                value={'travel'}
                onClick={() => travelScroll()}
                className={styles.tab}
              >
                {t('tabs.travel')}
              </Tabs.Tab>
              <Tabs.Tab
                value={'things-to-do'}
                onClick={() => thingsToDoScroll()}
                className={styles.tab}
              >
                {t('tabs.things-to-do')}
              </Tabs.Tab>
              <Tabs.Tab
                value={'gifts-registry'}
                onClick={() => giftsRegistryScroll()}
                className={styles.tab}
              >
                {t('tabs.gifts-registry')}
              </Tabs.Tab>
              <Tabs.Tab
                value={'rsvp'}
                onClick={() => rsvpScroll()}
                className={styles.tab}
              >
                {t('tabs.rsvp')}
              </Tabs.Tab>
              <Tabs.Tab
                value={'faq'}
                onClick={() => faqScroll()}
                className={styles.tab}
              >
                {t('tabs.faq')}
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>

          <div className={styles.wrapper}>
            <div className={styles.gradientBackground} />
            <div className={styles.contentContainer}>
              <OurStory scrollRef={ourStoryScrollRef} />
              <OurWedding scrollRef={ourWeddingScrollRef} />
              <Itinerary scrollRef={itineraryScrollRef} />
              <Travel scrollRef={travelScrollRef} />
              <ImageSection
                imageSrc={festivalOfLightsImage}
                imageClassName={styles.festivalOfLightsImage}
              />
              <ThingsToDo scrollRef={thingsToDoScrollRef} />
              <DoubleImageSection />
              <GiftsRegistry scrollRef={giftsRegistryScrollRef} />
              <RSVP scrollRef={rsvpScrollRef} />
              <ImageSection
                imageSrc={croatiaImage}
                imageClassName={styles.croatiaImage}
              />
              <FAQ scrollRef={faqScrollRef} />
              <Footer />
            </div>
          </div>
        </Stack>
      </ParallaxProvider>
    </MantineProvider>
  );
};
