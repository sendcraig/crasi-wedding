import React, { ReactElement } from 'react';
import { Image } from '@mantine/core';
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
      <Image src={imageSrc} className={cx(styles.image, imageClassName)} />
      {gradient && <div className={styles.gradientOverlay} />}
    </div>
  );
};
