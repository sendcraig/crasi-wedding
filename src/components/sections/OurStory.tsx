import React, { ReactElement } from 'react';
import { Center, Image, Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import summertimeImage from '../../assets/images/balcony.jpg';
import { Body, SectionTitle } from '../typography/Typography';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import styles from './OurStory.module.scss';
import { useDeviceWidth } from '../../hooks/useDeviceWidth';
import cx from 'classnames';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const OurStory = ({ scrollRef }: Props): ReactElement => {
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
              src={summertimeImage}
              className={cx(styles.image, { [styles.mobile]: isXSmallWidth })}
            />
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </Center>
      <Center>
        <Stack gap={0} justify={'flex-end'} maw={1200}>
          <SectionTitle>Our Story</SectionTitle>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget scelerisque felis, quis venenatis dolor. Cras laoreet nulla
            eget est viverra, non posuere leo accumsan. Nunc maximus aliquam
            elit malesuada iaculis. Etiam vel nisl pretium, imperdiet nibh ac,
            tempus nisi. Donec sodales vel massa quis fermentum. Sed volutpat
            bibendum ipsum at tincidunt. Aliquam massa est, scelerisque ut dui
            blandit, varius eleifend lorem. Nam bibendum at augue sit amet
            egestas.
            <br />
            <br />
            Vivamus imperdiet, metus et hendrerit accumsan, risus urna viverra
            neque, sed pellentesque dui massa et sem. Sed rhoncus nisi a est
            aliquet imperdiet. Sed suscipit at neque quis suscipit. Fusce sed
            ipsum quis lectus feugiat euismod. Ut quis justo tristique mauris
            venenatis scelerisque sit amet vitae diam. Sed placerat quis nisi id
            euismod. Nunc non ex non lacus placerat convallis. Nunc tristique
            dui eu magna convallis, quis mollis orci fermentum. Nunc auctor elit
            id mi facilisis feugiat. Suspendisse velit lorem, finibus non
            pharetra non, scelerisque vel dolor.
          </Body>
        </Stack>
      </Center>
    </InfoSection>
  );
};
