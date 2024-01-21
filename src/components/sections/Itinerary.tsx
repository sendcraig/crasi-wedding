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
import { useTranslation } from 'react-i18next';

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
    date: 'friday',
    events: [
      {
        title: 'evening-social.name',
        trailing: 'evening-social.note',
        details: 'evening-social.body',
      },
    ],
  },
  {
    date: 'saturday',
    events: [
      {
        title: 'family-brunch.name',
        trailing: 'family-brunch.note',
        details: 'family-brunch.body',
      },
    ],
  },
  {
    date: 'sunday',
    events: [
      {
        title: 'ceremony.name',
        trailing: 'ceremony.note',
        details: 'ceremony.body',
      },
      {
        title: 'cocktail-hour.name',
        trailing: 'cocktail-hour.note',
        details: 'cocktail-hour.body',
      },
      {
        title: 'dinner-reception.name',
        trailing: 'dinner-reception.note',
        details: 'dinner-reception.body',
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
  const { t } = useTranslation();
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
            <SectionTitle>{t('itinerary.title')}</SectionTitle>
            {ITINERARY_INFO.map((date) => (
              <Stack gap={0} key={`${date.date}`}>
                <SubHeading className={styles.date} justify>
                  {t(`itinerary.${date.date}`)}
                </SubHeading>
                {date.events.map((event) => (
                  <Stack
                    key={`${date.date}-event-${event.title}`}
                    className={styles.dateDetails}
                    pb={16}
                  >
                    <EventDetails
                      title={t(`itinerary.${event.title}`)}
                      trailing={t(`itinerary.${event.trailing}`)}
                    />
                    <Body justify>{t(`itinerary.${event.details}`)}</Body>
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
