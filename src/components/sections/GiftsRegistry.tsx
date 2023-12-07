import React, { ReactElement } from 'react';
import { Center, Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { Body, SectionTitle } from '../typography/Typography';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const GiftsRegistry = ({ scrollRef }: Props): ReactElement => {
  return (
    <InfoSection scrollRef={scrollRef}>
      <Center>
        <Stack maw={1200}>
          <SectionTitle>Gifts & Registry</SectionTitle>
          <Body>
            The greatest gift we could ever hope for is to celebrate our wedding
            surrounded by friends & loved ones. We appreciate that many of you
            will travel huge distances to be there to support us, and those
            journeys and the time spent together are the only wedding gifts that
            we are asking for.
            <br />
            <br />
            However, if you&apos;re truly determined and won&apos;t take no for
            an answer, <i style={{ fontSize: 20 }}>cocaine</i> and{' '}
            <i style={{ fontSize: 20 }}>ketamine</i> are things we always
            cherish and appreciate. Any amount is welcome, but again,
            there&apos;s no obligation.
          </Body>
        </Stack>
      </Center>
    </InfoSection>
  );
};
