import React, { ReactElement } from 'react';
import styles from './InfoSection.module.scss';
import { Title } from '@mantine/core';

type Props = {
  title: string;
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const InfoSection = ({ title, scrollRef }: Props): ReactElement => {
  return (
    <div className={styles.container} ref={scrollRef}>
      <Title>{title}</Title>
    </div>
  );
};
