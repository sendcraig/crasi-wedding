import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Flex, Grid, Group, Image, Stack, Text } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { Body, SectionTitle, SubHeading } from '../typography/Typography';
import southAfricaImage from '../../assets/images/SA.jpg';
import styles from './Itinerary.module.scss';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import cx from 'classnames';
import { useParallaxAspectRation } from '../../hooks/useParallaxAspectRatio';
import { useDeviceWidth } from '../../hooks/useDeviceWidth';
import { useWindowEvent } from '@mantine/hooks';

type ItineraryInfo = {
  date: string;
  events: {
    title: string;
    trailing: string;
    details: string;
  }[];
}[];

const ITINERARY_INFO: ItineraryInfo = [
  {
    date: 'Friday, September 27th',
    events: [
      {
        title: 'Evening Social',
        trailing: 'Location TBD',
        details:
          "For those who have already arrived in Chania, we'd love to grab a drink with you at a local bar. Attendance is entirely optional and vibes are casual. Come as you are!",
      },
    ],
  },
  {
    date: 'Saturday, September 28th',
    events: [
      {
        title: 'Family Brunch',
        trailing: 'Family members only',
        details:
          'For friends, Saturday is free to explore Chania and the beautiful surrounding area. For the families, we will host a light brunch in the villa where we will be staying.',
      },
    ],
  },
  {
    date: 'Sunday, September 29th',
    events: [
      {
        title: 'Ceremony',
        trailing: 'Cambos Estate',
        details:
          'The ceremony will be held in a romantic olive grove on a farm southeast of Chania. Transportation will be available to shuttle guests to and from the venue.',
      },
      {
        title: 'Cocktail Hour',
        trailing: 'Cyprus Trees',
        details:
          'Immediately following the ceremony, a cocktail hour will be held in the Cyprus trees near the venue’s entrance. The bride & groom will take several million photos at this time.',
      },
      {
        title: 'Dinner & Reception',
        trailing: 'Main Lawn',
        details:
          'The dinner and reception will be held on the main lawn at Cambos Estate. Speeches, music, dancing, and other wedding shenanigans will take place under the setting sun and continue into the night.',
      },
    ],
  },
];

const EventDetails = ({
  title,
  trailing,
}: {
  title: string;
  trailing: string;
}): ReactElement => {
  return (
    <Group gap={12} pt={16}>
      <Text fw={350}>{title}</Text>
      {['•', trailing].map((text, idx) => (
        <Text
          c={'#555555'}
          fs="italic"
          fw={320}
          key={`subtitle-component-${idx}`}
        >
          {text}
        </Text>
      ))}
    </Group>
  );
};

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const Itinerary = ({ scrollRef }: Props): ReactElement => {
  const { isSmallWidth } = useDeviceWidth();
  const { imageRef, aspectRatio } = useParallaxAspectRation();
  const [maxImageHeight, setMaxImageHeight] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  const handleResize = useCallback(() => {
    if (textRef.current) {
      setMaxImageHeight(textRef.current.getBoundingClientRect().height * 1.1);
    }
  }, [textRef]);

  useWindowEvent('resize', handleResize);

  useEffect(() => {
    if (textRef.current) {
      handleResize();
    }
  }, [handleResize, textRef]);

  return (
    <InfoSection scrollRef={scrollRef} noPadding>
      <Grid>
        <Grid.Col
          span={{ xs: 12, sm: 9, lg: 8 }}
          py={0}
          pl={isSmallWidth ? 40 : 64}
          pr={isSmallWidth ? 48 : 96}
        >
          <Stack py={64} gap={32} ref={textRef}>
            <SectionTitle>Itinerary</SectionTitle>
            {ITINERARY_INFO.map((date) => (
              <Stack gap={0} key={`${date.date}`}>
                <SubHeading className={styles.date} justify>
                  {date.date}
                </SubHeading>
                {date.events.map((event) => (
                  <Stack
                    key={`${date.date}-event-${event.title}`}
                    className={styles.dateDetails}
                    pb={16}
                  >
                    <EventDetails
                      title={event.title}
                      trailing={event.trailing}
                    />
                    <Body justify>{event.details}</Body>
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ xs: 0, sm: 3 }} py={0} ref={imageRef}>
          <ParallaxBanner
            style={{
              aspectRatio: isSmallWidth ? '1.15/1' : aspectRatio,
              height: '100%',
              maxHeight: maxImageHeight,
            }}
          >
            <ParallaxBannerLayer speed={isSmallWidth ? -6 : -12}>
              <Image
                src={southAfricaImage}
                className={cx(styles.sidebarImage, {
                  [styles.smallWidth]: isSmallWidth,
                })}
              />
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </Grid.Col>
        <Grid.Col span={{ lg: 1 }} py={0}>
          <Flex />
        </Grid.Col>
      </Grid>
    </InfoSection>
  );
};
