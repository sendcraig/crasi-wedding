import React, { ReactElement } from 'react';
import { Center, Grid, Stack, TypographyStylesProvider } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { Body, SectionTitle, SubHeading } from '../typography/Typography';
import styles from './ThingsToDo.module.scss';
import { useDeviceWidth } from '../../hooks/useDeviceWidth';

const THINGS_TO_DO_SECTIONS = [
  {
    title: 'Beaches & Nature',
    body: 'Crete is famous for its nature, and for its beaches in particular. The west side of the island is home to many fantastic beaches, the best and most famous of which are Balos and Elafonissi, but Falasarna, Marathi, and Loutraki beaches are also popular.<br/><br/>For the more adventurous, there is hiking in the southern and more mountainous parts of the island. The Kourtaliotiko Gorge in particular is known to be one of the most beautiful natural areas of the entire island, and is a little more than an hour drive from Chania.',
  },
  {
    title: 'City & Culture',
    body: 'Chania is second-largest city in Crete, and has a beautiful Old Town and historic center. The large harbor in the city center is surrounded with restaurants, cafés, and shops as well as many historic sights. There are walking tours for those interested in learning more about the city.<br/><br/>The towns and villages near Chania are also full of charm, such as Kalyves, Almyrida, Vamos, and Gavalochori to the east, and Kissamos, Elos, and Kaliviani to the west.',
  },
  {
    title: 'Eat & Drink',
    body: 'There is an endless amount of delicious food in Crete, with Greek cuisine obviously being the star of the show. There are many good restaurants in the city center near the harbor, but also quite a few hidden gems in the less touristy areas. We also recommend travelling to nearby villages to visit an authentic taverna in the countryside and enjoy some Raki with your meal and the famous Cretan hospitality. We\'ve started compiling a list of some of our favorites near Chania that we\'ve either visited or been recommended, <a href="https://maps.app.goo.gl/nwdFhfzkBoDAfDKa7" target="_blank">you can find it here.</a>',
  },
];

const Section = ({ title, body }: { title: string; body: string }) => {
  return (
    <Center>
      <Stack>
        <SubHeading center>{title}</SubHeading>
        <TypographyStylesProvider p={0}>
          <Body center className={styles.section}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Body>
        </TypographyStylesProvider>
      </Stack>
    </Center>
  );
};

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const ThingsToDo = ({ scrollRef }: Props): ReactElement => {
  const { isXSmallWidth, isSmallWidth } = useDeviceWidth();

  return (
    <InfoSection scrollRef={scrollRef}>
      <Stack px={isSmallWidth ? 0 : 64}>
        <SectionTitle>Things To Do</SectionTitle>
        <Grid grow gutter={isXSmallWidth ? 0 : 72}>
          {THINGS_TO_DO_SECTIONS.map((section, idx) => (
            <Grid.Col
              span={{ xs: 12, sm: 6, md: 4 }}
              key={`things-to-do-section-${idx}`}
              pb={0}
            >
              <Section title={section.title} body={section.body} />
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </InfoSection>
  );
};
