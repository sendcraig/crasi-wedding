import React, { ReactElement } from 'react';
import { Center, Image, Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import parisImage from '../../assets/images/paris.webp';
import { Body, SectionTitle } from '../typography/Typography';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import styles from './OurStory.module.scss';
import { useDeviceWidth } from '../../hooks/useDeviceWidth';
import cx from 'classnames';
import { Trans, useTranslation } from 'react-i18next';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const OurStory = ({ scrollRef }: Props): ReactElement => {
  const { t } = useTranslation();
  const { isXSmallWidth } = useDeviceWidth();

  return (
    <InfoSection scrollRef={scrollRef}>
      <Center
        pb={32}
        mt={isXSmallWidth ? -64 : -32}
        mx={isXSmallWidth ? -64 : 0}
      >
        <ParallaxBanner style={{ aspectRatio: '1/1.25', maxWidth: 700 }}>
          <ParallaxBannerLayer speed={isXSmallWidth ? -3 : -6}>
            <Image
              src={parisImage}
              className={cx(styles.image, { [styles.mobile]: isXSmallWidth })}
            />
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </Center>
      <Center>
        <Stack gap={0} justify={'flex-end'} maw={1200}>
          <SectionTitle>{t('our-story.title')}</SectionTitle>
          <Body>
            <Trans i18nKey={'our-story.body'} />{' '}
          </Body>
        </Stack>
      </Center>
    </InfoSection>
  );
};
