import React, { ReactElement } from 'react';
import styles from './HeroSection.module.scss';
import oliveBranch2 from '../../assets/images/olive-branch-2.webp';
import oliveBranch3 from '../../assets/images/olive-branch-3.webp';
import { Image, Stack, Title } from '@mantine/core';
import cx from 'classnames';

export const HeroSection = (): ReactElement => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.oliveBranchWrapper}>
        <div className={styles.oliveBranch1}>
          <Image src={oliveBranch3} />
        </div>
        <div className={styles.oliveBranch2}>
          <Image src={oliveBranch2} />
        </div>
      </div>
      <Stack
        justify={'center'}
        align={'center'}
        className={styles.heroTextWrapper}
      >
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
