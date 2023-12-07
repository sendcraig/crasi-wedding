import React, { ReactElement } from 'react';
import { Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { BodyInformational, SectionTitle } from '../typography/Typography';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const RSVP = ({ scrollRef }: Props): ReactElement => {
  return (
    <InfoSection scrollRef={scrollRef}>
      <Stack>
        <SectionTitle>RSVP</SectionTitle>
        <BodyInformational>
          Information on how to RSVP will be available soon.
        </BodyInformational>
      </Stack>
    </InfoSection>
  );
};
