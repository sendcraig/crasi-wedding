import React from 'react';
import styles from './App.module.scss';
import { Background } from './Background';
import cx from 'classnames';

function App() {
  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.contentContainer}>
        <h1 className={cx(styles.heroText)}>WE</h1>
        <div className={styles.mainTextContainer}>
          <h3 className={styles.bodyText} style={{ alignSelf: 'flex-start' }}>
            we joyfully invite you to
            <br />
            celebrate the wedding of
          </h3>
          <h2 className={styles.nameText}>Craig & Josi</h2>
          <h3 className={styles.bodyText} style={{ alignSelf: 'flex-end' }}>
            on <b>September 29th, 2024</b> <br />
            at <b>Cambos Estate, Crete, Greece</b>
          </h3>
        </div>
        <h1 className={cx(styles.heroText)} style={{ alignSelf: 'flex-end' }}>
          DO
        </h1>
      </div>
    </div>
  );
}

export default App;
