import React, { ReactElement, ReactNode, useCallback } from 'react';
import Countdown, { CountdownRendererFn } from 'react-countdown';
import { Group } from '@mantine/core';
import { Body } from '../typography/Typography';
import styles from './HeroSection.module.scss';
import { useTranslation } from 'react-i18next';

const WEDDING_DATE = new Date('2024-09-29T00:00:00');

export const MyCountdown = (): ReactElement => {
  const { t } = useTranslation();

  const countdownRenderer = useCallback<CountdownRendererFn>(
    ({ days, hours, minutes, seconds }): ReactNode => {
      return (
        <Group mt={16}>
          <Body className={styles.dateText}>
            {days} {t('days')}
          </Body>
          <Body className={styles.dateText}>
            {hours} {t('hours')}
          </Body>
          <Body className={styles.dateText}>
            {minutes} {t('minutes')}
          </Body>
          <Body className={styles.dateText}>
            {seconds} {t('seconds')}
          </Body>
        </Group>
      );
    },
    [t],
  );

  return <Countdown date={WEDDING_DATE} renderer={countdownRenderer} />;
};
