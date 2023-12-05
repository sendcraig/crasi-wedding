import React, { ReactNode } from 'react';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Stack, Tabs } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { useScrollIntoView } from '@mantine/hooks';
import styles from './InfoWebsite.module.scss';
import { HeroSection } from '../HeroSection/HeroSection';

const theme = createTheme({
  fontFamily: 'Josefin Sans',
  headings: {
    fontFamily: 'Italianno',
    fontWeight: '500',
  },
});

export const InfoWebsite = (): ReactNode => {
  const { scrollIntoView: ourStoryScroll, targetRef: ourStoryScrollRef } =
    useScrollIntoView<HTMLDivElement>({});
  const { scrollIntoView: ourWeddingScroll, targetRef: ourWeddingScrollRef } =
    useScrollIntoView<HTMLDivElement>({});
  const { scrollIntoView: itineraryScroll, targetRef: itineraryScrollRef } =
    useScrollIntoView<HTMLDivElement>({});
  const { scrollIntoView: travelScroll, targetRef: travelScrollRef } =
    useScrollIntoView<HTMLDivElement>({});
  const { scrollIntoView: thingsToDoScroll, targetRef: thingsToDoScrollRef } =
    useScrollIntoView<HTMLDivElement>({});
  const {
    scrollIntoView: giftsRegistryScroll,
    targetRef: giftsRegistryScrollRef,
  } = useScrollIntoView<HTMLDivElement>({});
  const { scrollIntoView: rsvpScroll, targetRef: rsvpScrollRef } =
    useScrollIntoView<HTMLDivElement>({});
  const { scrollIntoView: faqScroll, targetRef: faqScrollRef } =
    useScrollIntoView<HTMLDivElement>({});

  return (
    <MantineProvider theme={theme}>
      <Stack gap={0}>
        <HeroSection />
        <Tabs value={null} className={styles.tabs} allowTabDeactivation>
          <Tabs.List justify="center">
            <Tabs.Tab
              value={'our-story'}
              onClick={() => ourStoryScroll({ alignment: 'center' })}
              className={styles.tab}
            >
              Our Story
            </Tabs.Tab>
            <Tabs.Tab
              value={'wedding-details'}
              onClick={() => ourWeddingScroll({ alignment: 'center' })}
              className={styles.tab}
            >
              Our Wedding
            </Tabs.Tab>
            <Tabs.Tab
              value={'itinerary'}
              onClick={() => itineraryScroll({ alignment: 'center' })}
              className={styles.tab}
            >
              Itinerary
            </Tabs.Tab>
            <Tabs.Tab
              value={'travel'}
              onClick={() => travelScroll({ alignment: 'center' })}
              className={styles.tab}
            >
              Travel
            </Tabs.Tab>
            <Tabs.Tab
              value={'things-to-do'}
              onClick={() => thingsToDoScroll({ alignment: 'center' })}
              className={styles.tab}
            >
              Things To Do
            </Tabs.Tab>
            <Tabs.Tab
              value={'gifts-registry'}
              onClick={() => giftsRegistryScroll({ alignment: 'center' })}
              className={styles.tab}
            >
              Gifts & Registry
            </Tabs.Tab>
            <Tabs.Tab
              value={'rsvp'}
              onClick={() => rsvpScroll({ alignment: 'center' })}
              className={styles.tab}
            >
              RSVP
            </Tabs.Tab>
            <Tabs.Tab
              value={'faq'}
              onClick={() => faqScroll({ alignment: 'center' })}
              className={styles.tab}
            >
              FAQ
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <InfoSection title={'Our Story'} scrollRef={ourStoryScrollRef} />
        <InfoSection title={'Our Wedding'} scrollRef={ourWeddingScrollRef} />
        <InfoSection title={'Itinerary'} scrollRef={itineraryScrollRef} />
        <InfoSection title={'Travel'} scrollRef={travelScrollRef} />
        <InfoSection title={'Things To Do'} scrollRef={thingsToDoScrollRef} />
        <InfoSection
          title={'Gifts & Registry'}
          scrollRef={giftsRegistryScrollRef}
        />
        <InfoSection title={'RSVP'} scrollRef={rsvpScrollRef} />
        <InfoSection title={'FAQs'} scrollRef={faqScrollRef} />
      </Stack>
    </MantineProvider>
  );
};
