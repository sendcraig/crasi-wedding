import React, { ReactElement } from 'react';
import styles from './HeroSection.module.scss';
import { Center, Title } from '@mantine/core';

export const HeroSection = (): ReactElement => {
  return (
    <div className={styles.heroContainer}>
      <Center>
        <Title size={108} c={'#696969'}>
          Welcome
        </Title>
      </Center>
    </div>
  );
};
