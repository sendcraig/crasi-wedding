import React, { ReactElement } from 'react';
import { Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { BodyInformational, SectionTitle } from '../typography/Typography';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const FAQ = ({ scrollRef }: Props): ReactElement => {
  return (
    <InfoSection scrollRef={scrollRef}>
      <Stack>
        <SectionTitle center>FAQs</SectionTitle>
        <BodyInformational>
          Answers to all of your questions can be found here.
        </BodyInformational>
      </Stack>
    </InfoSection>
  );
};
