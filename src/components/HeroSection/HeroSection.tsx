import React, { ReactElement, useCallback } from 'react';
import styles from './HeroSection.module.scss';
import oliveBranch2 from '../../assets/images/olive-branch-2.webp';
import oliveBranch3 from '../../assets/images/olive-branch-3.webp';
import { Divider, Group, Image, Stack, Text, Title } from '@mantine/core';
import cx from 'classnames';
import { MyCountdown } from './Countdown';
import { useDeviceWidth } from '../../hooks/useDeviceWidth';
import { useTranslation } from 'react-i18next';

export const HeroSection = (): ReactElement => {
  const { t, i18n } = useTranslation();
  const { isSmallWidth } = useDeviceWidth();

  const changeLanguage = useCallback(
    (language: 'en' | 'de') => {
      i18n.changeLanguage(language);
    },
    [i18n],
  );

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
      <div className={styles.languageSelect}>
        <Group>
          <Text
            className={styles.languageButton}
            onClick={() => changeLanguage('en')}
          >
            EN
          </Text>
          <Divider orientation="vertical" />
          <Text
            className={styles.languageButton}
            onClick={() => changeLanguage('de')}
          >
            DE
          </Text>
        </Group>
      </div>
      <Stack
        justify={'center'}
        align={'center'}
        pb={isSmallWidth ? 32 : 0}
        className={styles.heroTextWrapper}
      >
        <Title className={cx(styles.heroTitle, styles.textShadow)}>
          Craig & Josephin
        </Title>
        <Title order={5} className={cx(styles.heroSubtitle, styles.textShadow)}>
          {t('hero.subtitle')}
        </Title>
        <MyCountdown />
      </Stack>
    </div>
  );
};
