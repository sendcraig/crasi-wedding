import React, { ReactElement } from 'react';
import { Center, Stack, Text, Title } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import oliveGroveImage from '../../assets/images/olive-grove-2.png';
import styles from './OurWedding.module.scss';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const OurWedding = ({ scrollRef }: Props): ReactElement => {
  return (
    <InfoSection scrollRef={scrollRef} backgroundImage={oliveGroveImage}>
      <div className={styles.sectionContainer}>
        <Center h={'100%'}>
          <div className={styles.rect1} />
          <div className={styles.rect2} />
          <Stack
            align={'center'}
            justify={'space-evenly'}
            className={styles.text}
          >
            <Title order={3}>Our Wedding</Title>
            <Text fw={300} lts={2}>
              on the
            </Text>
            <Text fw={320} size={'lg'} lts={2}>
              29th of September, 2024
            </Text>
            <Text fw={300} lts={2}>
              at
            </Text>
            <Text fw={320} size={'lg'} lts={2}>
              Cambos Estate, Chania, Greece
            </Text>
          </Stack>
        </Center>
      </div>
    </InfoSection>
  );
};
