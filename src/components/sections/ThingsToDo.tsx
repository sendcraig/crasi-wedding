import React, { ReactElement } from 'react';
import { Center, Grid, Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { Body, SectionTitle, SubHeading } from '../typography/Typography';
import styles from './ThingsToDo.module.scss';
import { useMediaQuery } from '@mantine/hooks';

const THINGS_TO_DO_SECTIONS = [
  {
    title: 'Beaches & Nature',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget scelerisque felis, quis venenatis dolor. Cras laoreet nulla eget est viverra, non posuere leo accumsan. Nunc maximus aliquam elit malesuada iaculis. Etiam vel nisl pretium, imperdiet nibh ac, tempus nisi. Donec sodales vel massa quis fermentum. ',
  },
  {
    title: 'City & Culture',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget scelerisque felis, quis venenatis dolor. Cras laoreet nulla eget est viverra, non posuere leo accumsan. Nunc maximus aliquam elit malesuada iaculis. Etiam vel nisl pretium, imperdiet nibh ac, tempus nisi. Donec sodales vel massa quis fermentum. ',
  },
  {
    title: 'Eat & Drink',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget scelerisque felis, quis venenatis dolor. Cras laoreet nulla eget est viverra, non posuere leo accumsan. Nunc maximus aliquam elit malesuada iaculis. Etiam vel nisl pretium, imperdiet nibh ac, tempus nisi. Donec sodales vel massa quis fermentum. ',
  },
  {
    title: 'Nightlife & Party',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget scelerisque felis, quis venenatis dolor. Cras laoreet nulla eget est viverra, non posuere leo accumsan. Nunc maximus aliquam elit malesuada iaculis. Etiam vel nisl pretium, imperdiet nibh ac, tempus nisi. Donec sodales vel massa quis fermentum. ',
  },
  {
    title: 'Arts & History',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget scelerisque felis, quis venenatis dolor. Cras laoreet nulla eget est viverra, non posuere leo accumsan. Nunc maximus aliquam elit malesuada iaculis. Etiam vel nisl pretium, imperdiet nibh ac, tempus nisi. Donec sodales vel massa quis fermentum. ',
  },
];

const Section = ({ title, body }: { title: string; body: string }) => {
  return (
    <Stack>
      <Center>
        <SubHeading>{title}</SubHeading>
      </Center>
      <Center>
        <Body className={styles.section}>{body}</Body>
      </Center>
    </Stack>
  );
};

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const ThingsToDo = ({ scrollRef }: Props): ReactElement => {
  const isSmallWidth = useMediaQuery('(max-width: 767px)');

  return (
    <InfoSection scrollRef={scrollRef}>
      <Stack px={isSmallWidth ? 0 : 64}>
        <SectionTitle center>Things To Do</SectionTitle>
        <Grid grow gutter={72}>
          {THINGS_TO_DO_SECTIONS.map((section, idx) => (
            <Grid.Col
              span={{ xs: 12, sm: 6, md: 4 }}
              key={`things-to-do-section-${idx}`}
            >
              <Section title={section.title} body={section.body} />
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </InfoSection>
  );
};
