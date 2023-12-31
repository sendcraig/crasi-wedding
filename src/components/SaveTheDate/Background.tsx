import styles from './Background.module.scss';
import image from '../../assets/images/img-1.webp';
import cx from 'classnames';
import React, { ReactElement } from 'react';

export const Background = (): ReactElement => {
  return (
    <div className={styles.fullScreenAbsolute}>
      <img
        src={image}
        className={cx(styles.image, styles.fullScreenAbsolute)}
        alt=""
      />
      <div className={cx(styles.gradientOverlay, styles.fullScreenAbsolute)} />
      <div className={cx(styles.darkFilter, styles.fullScreenAbsolute)} />
    </div>
  );
};
