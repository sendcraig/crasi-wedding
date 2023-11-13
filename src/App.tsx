import React from 'react';
import styles from './App.module.scss';
import image from './assets/img-1.jpg';
import { createTheme, Grid, MantineProvider, Text, Title } from '@mantine/core';
import cx from 'classnames';
import { VerticalLine } from './VerticalLine';

const theme = createTheme({
  fontFamily: 'Noto Serif Display',
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <div className={styles.container}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div className={styles.gridCol}>
              <Title
                order={1}
                fs={'italic'}
                className={cx(styles.title, styles.growOnHover)}
              >
                Craig Send & Josephin Göttel
              </Title>
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <div className={styles.gridCol}>
              <div className={styles.infoBoxContainer}>
                <VerticalLine size={64} />
                <div className={styles.infoBoxInfo}>
                  <Text size={'lg'} fw={300}>
                    are getting married
                  </Text>
                  <Text size={'xs'}>on</Text>
                  <Text size={'28px'} className={styles.growOnHover}>
                    29th of September, 2024
                  </Text>
                  <Text size={'xs'}>at</Text>
                  <Text size={'28px'} className={styles.growOnHover}>
                    Cambos Estate, Chania, Crete
                  </Text>
                </div>
                <VerticalLine size={64} />
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </div>

      <div className={styles.imageBackgroundContainer}>
        <img src={image} className={styles.image} />
        <div className={styles.gradientOverlay} />
      </div>
    </MantineProvider>
  );
}

export default App;
