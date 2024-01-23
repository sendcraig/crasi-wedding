import { Center } from '@mantine/core';
import { Body } from '../typography/Typography';
import { LinkText } from '../Link/LinkText';
import { InfoSection } from '../InfoSection/InfoSection';
import React, { ReactElement } from 'react';
import styles from './Footer.module.scss';

export const Footer = (): ReactElement => {
  return (
    <InfoSection backgroundColor={'rgba(251,249,246,0.25)'} noPadding>
      <Center p={16}>
        <Body className={styles.footerText}>
          Made with love by{' '}
          <LinkText
            url={'https://github.com/sendcraig/crasi-wedding'}
            text={'@sendcraig'}
          />
        </Body>
      </Center>
    </InfoSection>
  );
};
