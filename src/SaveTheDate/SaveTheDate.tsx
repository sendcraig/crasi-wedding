import React, { ReactElement } from 'react';
import styles from './SaveTheDate.module.scss';
import { Background } from './Background';

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
              <h3 className={styles.infoTextBold}>SEPTEMBER 29TH, 2024</h3>
              <h3 className={styles.infoTextBold}>
                CAMBOS ESTATE, CRETE, GREECE
              </h3>
            </div>
            <h3 className={styles.infoText}>
              OFFICIAL INVITATION & DETAILS TO FOLLOW
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
