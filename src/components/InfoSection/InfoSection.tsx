import React, { PropsWithChildren, ReactElement } from 'react';
import styles from './InfoSection.module.scss';
import { Image } from '@mantine/core';
import cx from 'classnames';
import { SectionTitle } from '../typography/Typography';

type Props = {
  title?: string;
  scrollRef?: React.RefObject<HTMLDivElement>;
  noPadding?: boolean;
  backgroundImage?: string;
  backgroundImageClassName?: string;
  backgroundColor?: string;
};

export const InfoSection = ({
  title,
  scrollRef,
  noPadding,
  backgroundImage,
  backgroundImageClassName,
  backgroundColor = '#FBF9F6',
  children,
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <div
      className={cx(styles.container, {
        [styles.noPadding]: noPadding,
      })}
      ref={scrollRef}
      style={{ backgroundColor: backgroundColor }}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage}
          className={cx(styles.backgroundImage, backgroundImageClassName)}
        />
      )}
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </div>
  );
};
