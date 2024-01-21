import React, { ReactElement } from 'react';
import styles from './SaveTheDate.module.scss';
import { Background } from './Background';
import { CalendarLink } from '../Link/CalendarLink';
import { hasTouchSupport } from '../utils';
import cx from 'classnames';
import { Link } from '../Link/LinkText';

export const SaveTheDate = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.contentContainer}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroText}>SAVE</h1>
          <h2 className={styles.smallHeroText}>our</h2>
          <h1 className={styles.heroText}>DATE</h1>
        </div>
        <div>
          <div className={styles.nameTextContainer}>
            <h2 className={styles.nameText}>Craig</h2>
            <h3 className={styles.ampersand}>&</h3>
            <h2 className={styles.nameText}>Josephin</h2>
          </div>
          <div className={styles.infoTextContainer}>
            <div className={styles.infoTextBoldContainer}>
              <h3
                className={cx(styles.infoTextBold, {
                  [styles.boldOnHover]: !hasTouchSupport(),
                })}
              >
                <CalendarLink text={'SEPTEMBER 29, 2024'} />
              </h3>

              <h3
                className={cx(styles.infoTextBold, {
                  [styles.boldOnHover]: !hasTouchSupport(),
                })}
              >
                <Link
                  url={'https://maps.app.goo.gl/b7e7xYdP1ypEaHDN8'}
                  text={'CAMBOS ESTATE, CRETE, GREECE'}
                />
              </h3>
            </div>
            <h2
              className={cx(styles.infoText, {
                [styles.boldOnHover]: !hasTouchSupport(),
              })}
            >
              <Link
                url={'https://crasi.love/info'}
                text={'OFFICIAL WEDDING WEBSITE & INFO'}
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
