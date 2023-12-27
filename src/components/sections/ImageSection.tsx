import React, { ReactElement } from 'react';
import { Group, Image } from '@mantine/core';
import nyeImage from '../../assets/images/NYE.jpg';
import creteImage from '../../assets/images/crete.jpg';
import styles from './ImageSection.module.scss';
import cx from 'classnames';

export const ImageSection = ({
  imageSrc,
  imageClassName,
  gradient = false,
}: {
  imageSrc: string;
  imageClassName?: string;
  gradient?: boolean;
}): ReactElement => {
  return (
    <div style={{ position: 'relative' }}>
      <Image src={imageSrc} className={cx(imageClassName, styles.image)} />
      {gradient && <div className={styles.gradientOverlay} />}
    </div>
  );
};

export const DoubleImageSection = (): ReactElement => {
  return (
    <Group className={styles.doubleImageContainer} gap={0}>
      <Image src={nyeImage} className={styles.nyeImage} />
      <Image src={creteImage} className={styles.creteImage} />
    </Group>
  );
};
