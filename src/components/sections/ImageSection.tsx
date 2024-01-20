import React, { ReactElement } from 'react';
import { Group, Image } from '@mantine/core';
import nyeImage from '../../assets/images/NYE.jpg';
import creteImage from '../../assets/images/crete.jpg';
import styles from './ImageSection.module.scss';
import cx from 'classnames';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { useDeviceWidth } from '../../hooks/useDeviceWidth';

export const ImageSection = ({
  imageSrc,
  imageClassName,
}: {
  imageSrc: string;
  imageClassName?: string;
}): ReactElement => {
  const { isXSmallWidth } = useDeviceWidth();
  return (
    <div style={{ position: 'relative', backgroundColor: '#FBF9F6' }}>
      <ParallaxBanner style={{ aspectRatio: 2.5 }}>
        <ParallaxBannerLayer speed={isXSmallWidth ? -3 : -5}>
          <Image src={imageSrc} className={cx(imageClassName, styles.image)} />
        </ParallaxBannerLayer>
      </ParallaxBanner>
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
