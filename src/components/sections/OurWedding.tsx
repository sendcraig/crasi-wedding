import React, { ReactElement } from 'react';
import { Center, Stack, Title } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import oliveGroveImage from '../../assets/images/olive-grove.webp';
import styles from './OurWedding.module.scss';
import { BodyStretch, SubHeadingLight } from '../typography/Typography';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const OurWedding = ({ scrollRef }: Props): ReactElement => {
  return (
    <InfoSection scrollRef={scrollRef} backgroundImage={oliveGroveImage}>
      <div className={styles.sectionContainer}>
        <Center py={32}>
          <div className={styles.frameContainer}>
            <div className={styles.rect1} />
            <div className={styles.rect2} />
          </div>
          <Stack
            align={'center'}
            justify={'space-evenly'}
            className={styles.textContainer}
          >
            <Title order={3}>Our Wedding</Title>
            <BodyStretch>is on the</BodyStretch>
            <SubHeadingLight>29th of September, 2024</SubHeadingLight>
            <BodyStretch>at</BodyStretch>
            <SubHeadingLight>Cambos Estate, Chania, Greece</SubHeadingLight>
          </Stack>
        </Center>
      </div>
    </InfoSection>
  );
};
