import React, { ReactElement } from 'react';
import { Center, Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import oliveGroveImage from '../../assets/images/oliveGrove.jpg';
import styles from './OurWedding.module.scss';
import boldStyles from '../SaveTheDate/SaveTheDate.module.scss';
import {
  BodyStretch,
  SectionTitle,
  SubHeadingLight,
} from '../typography/Typography';
import cx from 'classnames';
import { useDeviceWidth } from '../../hooks/useDeviceWidth';
import { Link } from '../Link/Link';
import { hasTouchSupport } from '../utils';
import { CalendarLink } from '../Link/CalendarLink';
import { useTranslation } from 'react-i18next';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const OurWedding = ({ scrollRef }: Props): ReactElement => {
  const { t } = useTranslation();
  const { isXSmallWidth } = useDeviceWidth();

  console.log('test', t('our-wedding.title'));

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
            <SectionTitle>{t('our-wedding.title')}</SectionTitle>
            <BodyStretch>{t('our-wedding.is-on')}</BodyStretch>
            <SubHeadingLight
              className={cx({ [boldStyles.boldOnHover]: !hasTouchSupport() })}
            >
              <CalendarLink text={t('our-wedding.date')} />
            </SubHeadingLight>
            <BodyStretch>{t('our-wedding.at')}</BodyStretch>
            <SubHeadingLight
              className={cx({ [boldStyles.boldOnHover]: !hasTouchSupport() })}
            >
              <Link
                url={'https://maps.app.goo.gl/b7e7xYdP1ypEaHDN8'}
                text={t('our-wedding.location')}
              />
            </SubHeadingLight>
          </Stack>
        </Center>
      </div>
    </InfoSection>
  );
};
