import React, { ReactElement } from 'react';
import { Image } from '@mantine/core';
import festivalOfLightsImage from '../../assets/images/festival-of-lights.webp';
import styles from './ImageSection.module.scss';

export const ImageSection = (): ReactElement => {
  return (
    <div style={{ position: 'relative' }}>
      <Image src={festivalOfLightsImage} className={styles.image} />
      <div className={styles.gradientOverlay} />
    </div>
  );
};
