import React, { JSX } from 'react';
import styles from './Link.module.scss';

type Props = { url: string; text: string; newTab?: boolean };

export const Link = ({ url, text, newTab = true }: Props): JSX.Element => {
  return (
    <a
      target={newTab ? '_blank' : undefined}
      rel="noreferrer"
      href={url}
      className={styles.link}
    >
      {text}
    </a>
  );
};
