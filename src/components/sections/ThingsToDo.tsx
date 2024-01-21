import React, { ReactElement } from 'react';
import { Center, Grid, Stack, TypographyStylesProvider } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { Body, SectionTitle, SubHeading } from '../typography/Typography';
import styles from './ThingsToDo.module.scss';
import { useDeviceWidth } from '../../hooks/useDeviceWidth';
import { Trans, useTranslation } from 'react-i18next';
import { LinkText } from '../Link/LinkText';

const THINGS_TO_DO_SECTIONS = [
  {
    title: 'beaches-nature.title',
    body: 'beaches-nature.body',
  },
  {
    title: 'city-culture.title',
    body: 'city-culture.body',
  },
  {
    title: 'eat-drink.title',
    body: 'eat-drink.body',
  },
];

const Section = ({ title, body }: { title: string; body: string }) => {
  return (
    <Center>
      <Stack>
        <SubHeading center>{title}</SubHeading>
        <TypographyStylesProvider p={0}>
          <Body center className={styles.section}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Body>
        </TypographyStylesProvider>
      </Stack>
    </Center>
  );
};

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const ThingsToDo = ({ scrollRef }: Props): ReactElement => {
  const { t } = useTranslation();
  const { isXSmallWidth, isSmallWidth } = useDeviceWidth();

  return (
    <InfoSection scrollRef={scrollRef}>
      <Stack px={isSmallWidth ? 0 : 64}>
        <SectionTitle>{t('things-to-do.title')}</SectionTitle>
        <Grid grow gutter={isXSmallWidth ? 0 : 72}>
          {THINGS_TO_DO_SECTIONS.map((section, idx) => (
            <Grid.Col
              span={{ xs: 12, sm: 6, md: 4 }}
              key={`things-to-do-section-${idx}`}
            >
              <Center>
                <Stack>
                  <SubHeading center>
                    {t(`things-to-do.${section.title}`)}
                  </SubHeading>
                  <Body center className={styles.section}>
                    <Trans
                      i18nKey={`things-to-do.${section.body}`}
                      t={t}
                      components={{
                        foodLink: (
                          <LinkText
                            url={'https://maps.app.goo.gl/DbFk6CY7Rfmvt2LPA'}
                          />
                        ),
                      }}
                    />
                  </Body>
                </Stack>
              </Center>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </InfoSection>
  );
};
