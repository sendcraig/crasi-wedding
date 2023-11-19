import React, { JSX } from 'react';
import styles from './Link.module.scss';

type Props = { url: string; text: string };

export const Link = ({ url, text }: Props): JSX.Element => {
  return (
    <a target={'_blank'} rel="noreferrer" href={url} className={styles.link}>
      {text}
    </a>
  );
};
