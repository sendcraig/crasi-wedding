import React, { PropsWithChildren, ReactElement } from 'react';
import styles from './InfoSection.module.scss';
import { Image, Title } from '@mantine/core';

type Props = {
  title?: string;
  scrollRef?: React.RefObject<HTMLDivElement>;
  backgroundImage?: string;
};

export const InfoSection = ({
  title,
  scrollRef,
  backgroundImage,
  children,
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <div className={styles.container} ref={scrollRef}>
      {backgroundImage && (
        <Image src={backgroundImage} className={styles.backgroundImage} />
      )}
      {title && <Title order={3}>{title}</Title>}
      {children}
    </div>
  );
};
