import React, { ReactElement } from 'react';
import { Center, Stack, Title } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import oliveGroveImage from '../../assets/images/oliveGrove.jpg';
import styles from './OurWedding.module.scss';
import boldStyles from '../SaveTheDate/SaveTheDate.module.scss';
import { BodyStretch, SubHeadingLight } from '../typography/Typography';
import cx from 'classnames';
import { useDeviceWidth } from '../../hooks/useDeviceWidth';
import { Link } from '../Link/Link';
import { hasTouchSupport } from '../utils';
import { CalendarLink } from '../Link/CalendarLink';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const OurWedding = ({ scrollRef }: Props): ReactElement => {
  const { isXSmallWidth } = useDeviceWidth();

  return (
    <InfoSection
      scrollRef={scrollRef}
      backgroundImage={oliveGroveImage}
      backgroundImageClassName={styles.image}
    >
      <div
        className={cx(styles.sectionContainer, {
          [styles.extraMargin]: isXSmallWidth,
        })}
      >
        <Center py={32}>
          <div className={styles.frameContainer}>
            <div className={styles.rect1} />
            <div className={styles.rect2} />
          </div>
          <Stack
            align={'center'}
            justify={'space-evenly'}
            className={styles.textContainer}
          >
            <Title order={3}>Our Wedding</Title>
            <BodyStretch>is on the</BodyStretch>
            <SubHeadingLight
              className={cx({ [boldStyles.boldOnHover]: !hasTouchSupport() })}
            >
              <CalendarLink text={'29th of September, 2024'} />
            </SubHeadingLight>
            <BodyStretch>at</BodyStretch>
            <SubHeadingLight
              className={cx({ [boldStyles.boldOnHover]: !hasTouchSupport() })}
            >
              <Link
                url={'https://maps.app.goo.gl/b7e7xYdP1ypEaHDN8'}
                text={'Cambos Estate, Chania, Greece'}
              />
            </SubHeadingLight>
          </Stack>
        </Center>
      </div>
    </InfoSection>
  );
};
