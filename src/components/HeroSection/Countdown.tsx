import React, { ReactElement, ReactNode, useCallback } from 'react';
import Countdown, { CountdownRendererFn } from 'react-countdown';
import { Group } from '@mantine/core';
import { Body } from '../typography/Typography';
import { useDeviceWidth } from '../../hooks/useDeviceWidth';
import styles from './HeroSection.module.scss';

const WEDDING_DATE = new Date('2024-09-29T00:00:00');

export const MyCountdown = (): ReactElement => {
  const { isXSmallWidth } = useDeviceWidth();

  const countdownRenderer = useCallback<CountdownRendererFn>(
    ({ days, hours, minutes, seconds }): ReactNode => {
      return (
        <Group mt={16}>
          <Body className={styles.dateText}>{days} days</Body>
          <Body className={styles.dateText}>{hours} hours</Body>
          <Body className={styles.dateText}>{minutes} minutes</Body>
          <Body className={styles.dateText}>{seconds} seconds</Body>
        </Group>
      );
    },
    [isXSmallWidth],
  );

  return <Countdown date={WEDDING_DATE} renderer={countdownRenderer} />;
};
