import React from 'react';
import styles from './App.module.scss';
import { Background } from './Background';
import cx from 'classnames';

function App() {
  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.contentContainer}>
        <div className={styles.heroTextContainer}>
          <h1 className={cx(styles.heroText)}>SAVE</h1>
          <h2 className={styles.smallHeroText}>our</h2>
          <h1 className={cx(styles.heroText)}>DATE</h1>
        </div>
        <div className={styles.mainTextContainer}>
          <h2 className={styles.nameText}>Craig & Josephin</h2>
          <h3 className={styles.infoTextBold}>September 29th, 2024</h3>
          <h3 className={styles.infoTextBold}>Cambos Estate, Crete, Greece</h3>
          <h3 className={styles.infoText}>More information to follow</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
