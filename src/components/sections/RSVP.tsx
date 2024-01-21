import React, { ReactElement } from 'react';
import { Center, Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import {
  Body,
  BodyInformational,
  SectionTitle,
} from '../typography/Typography';
import { LinkText } from '../Link/LinkText';
import { Trans, useTranslation } from 'react-i18next';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const RSVP = ({ scrollRef }: Props): ReactElement => {
  const { t } = useTranslation();

  return (
    <InfoSection scrollRef={scrollRef}>
      <Stack>
        <SectionTitle>{t('rsvp.title')}</SectionTitle>
        <Center mt={-16} mb={16}>
          <BodyInformational>
            <Trans
              i18nKey={'rsvp.link'}
              t={t}
              components={{
                rsvpLink: (
                  <LinkText
                    url={'https://withjoy.com/craig-and-josephin/rsvp'}
                  />
                ),
              }}
            />
          </BodyInformational>
        </Center>
        <Body center>{t('rsvp.note')}</Body>
      </Stack>
    </InfoSection>
  );
};
