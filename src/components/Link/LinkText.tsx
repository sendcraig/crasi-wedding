import React, { JSX, PropsWithChildren } from 'react';
import styles from './Link.module.scss';
import cx from 'classnames';

type Props = {
  url: string;
  text?: string;
  newTab?: boolean;
  className?: string;
};

export const Link = ({
  url,
  text,
  className,
  newTab = true,
}: Props): JSX.Element => {
  return (
    <a
      target={newTab ? '_blank' : undefined}
      rel="noreferrer"
      href={url}
      className={cx(styles.link, className)}
    >
      {text}
    </a>
  );
};
export const LinkText = ({
  url,
  text,
  className,
  newTab = true,
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <a
      target={newTab ? '_blank' : undefined}
      rel="noreferrer"
      href={url}
      className={cx(styles.oliveLink, className)}
    >
      {text}
      {children}
    </a>
  );
};
