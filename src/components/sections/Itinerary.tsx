import React, { ReactElement } from 'react';
import { Flex, Grid, Group, Image, Stack, Text } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import southAfricaImage from '../../assets/images/SA.jpg';
import styles from './Itinerary.module.scss';

type ItineraryInfo = {
  date: string;
  events: {
    title: string;
    time: string;
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
        time: '5-7pm',
        trailing: 'Location TBD',
        details:
          'For those who have already arrived in Chania, we will be organizing a small meet & greet at a local venue, with beverages and small bites. Attendance is entirely optional and vibes are casual. Come as you are!',
      },
    ],
  },
  {
    date: 'Saturday, September 28th',
    events: [
      {
        title: 'Family Brunch',
        time: '1-4pm',
        trailing: 'Family members only',
        details:
          'For friends, Saturday is free to explore Chania and the beautiful surrounding area. For the families, we will host a light brunch in the villa where we will be staying. More information to follow.',
      },
    ],
  },
  {
    date: 'Sunday, September 29th',
    events: [
      {
        title: 'Ceremony',
        time: '4:20pm',
        trailing: 'Cambos Estate',
        details:
          'The ceremony will be held in a romantic olive grove on a farm southeast of Chania. Transportation will be available to shuttle to and from the venue.',
      },
      {
        title: 'Cocktail Hour',
        time: '5pm',
        trailing: 'Cyprus Trees',
        details:
          'Immediately following the ceremony, a cocktail hour will be held in the Cyprus trees near the venue’s entrance. The bride & groom will take several million photos at this time.',
      },
      {
        title: 'Dinner & Reception',
        time: '6pm',
        trailing: 'Main Lawn',
        details:
          'The dinner and reception will be held on the main lawn at Cambos Estate. Speeches, music, dancing, and other wedding shenanigans will take place under the setting sun and continue into the night.',
      },
    ],
  },
];

const Subtitle = ({
  title,
  time,
  trailing,
}: {
  title: string;
  time: string;
  trailing: string;
}): ReactElement => {
  return (
    <Group gap={16} pt={16}>
      <Text fw={350}>{title}</Text>
      {['•', time, '•', trailing].map((text) => (
        // eslint-disable-next-line react/jsx-key
        <Text c={'#555555'} fs="italic" fw={320}>
          {text}
        </Text>
      ))}
    </Group>
  );
};

const Date = ({ text }: { text: string }): ReactElement => {
  return (
    <Text size={'lg'} className={styles.date} pb={4}>
      {text}
    </Text>
  );
};

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const Itinerary = ({ scrollRef }: Props): ReactElement => {
  return (
    <InfoSection scrollRef={scrollRef} backgroundColor={'#E1DFDC'} noPadding>
      <Grid>
        <Grid.Col
          span={{ base: 12, sm: 9, md: 9, lg: 8 }}
          py={0}
          pl={64}
          pr={32}
        >
          <Stack py={64} gap={32}>
            {ITINERARY_INFO.map((date) => (
              <Stack gap={0} key={`${date.date}`}>
                <Date text={date.date} />
                {date.events.map((event) => (
                  <Stack
                    key={`${date.date}-event-${event.title}`}
                    className={styles.dateDetails}
                    pb={16}
                  >
                    <Subtitle
                      title={event.title}
                      time={event.time}
                      trailing={event.trailing}
                    />
                    <Text lts={0.5} fw={300}>
                      {event.details}
                    </Text>
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 0, sm: 3, md: 3 }} py={0}>
          <Image src={southAfricaImage} className={styles.sidebarImage} />
        </Grid.Col>
        <Grid.Col span={{ lg: 1 }} py={0}>
          <Flex bg={'#E1DFDC'} h={'100%'} />
        </Grid.Col>
      </Grid>
    </InfoSection>
  );
};
