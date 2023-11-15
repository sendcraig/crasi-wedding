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
        <div className={styles.mainTextContainer}>
          <div className={styles.nameTextContainer}>
            <h2 className={styles.nameText}>CRAIG</h2>
            <h3 className={styles.ampersand}>&</h3>
            <h2 className={styles.nameText}>JOSEPHIN</h2>
          </div>
          <div className={styles.infoTextContainer}>
            <h3 className={styles.infoTextBold}>September 29th, 2024</h3>
            <h3 className={styles.infoTextBold}>
              Cambos Estate, Crete, Greece
            </h3>
          </div>
          <h3 className={styles.infoText}>
            Official invitation & details to follow
          </h3>
        </div>
      </div>
    </div>
  );
};
