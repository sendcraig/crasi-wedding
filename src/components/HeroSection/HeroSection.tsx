import React, { ReactElement } from 'react';
import styles from './HeroSection.module.scss';
import { Stack, Title } from '@mantine/core';

export const HeroSection = (): ReactElement => {
  return (
    <div className={styles.heroContainer}>
      <Stack justify={'center'} align={'center'}>
        <Title size={144} ff={'Beautifully Delicious Bold'}>
          Craig & Josephin
        </Title>
        <Title order={5} ff={'Noto Serif'}>
          are getting married.
        </Title>
      </Stack>
    </div>
  );
};
