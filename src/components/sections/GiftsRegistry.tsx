import React, { ReactElement } from 'react';
import { Center, Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { Body, SectionTitle } from '../typography/Typography';
import { useTranslation } from 'react-i18next';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const GiftsRegistry = ({ scrollRef }: Props): ReactElement => {
  const { t } = useTranslation();

  return (
    <InfoSection scrollRef={scrollRef}>
      <Center>
        <Stack maw={1200}>
          <SectionTitle>{t('gifts-registry.title')}</SectionTitle>
          <Body>{t('gifts-registry.body')}</Body>
        </Stack>
      </Center>
    </InfoSection>
  );
};
