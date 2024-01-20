import React, { ReactElement } from 'react';
import styles from './HeroSection.module.scss';
import { Stack, Title } from '@mantine/core';
import cx from 'classnames';

export const HeroSection = (): ReactElement => {
  return (
    <div className={styles.heroContainer}>
      <Stack justify={'center'} align={'center'}>
        <Title className={cx(styles.heroTitle, styles.textShadow)}>
          Craig & Josephin
        </Title>
        <Title order={5} className={cx(styles.heroSubtitle, styles.textShadow)}>
          are getting married.
        </Title>
      </Stack>
    </div>
  );
};
