import React, { ReactElement } from 'react';
import { Stack, Title } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { Body, SubHeading } from '../typography/Typography';
import { useMediaQuery } from '@mantine/hooks';

const TRAVEL_SECTIONS = [
  {
    title: 'Getting to Chania',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget scelerisque felis, quis venenatis dolor. Cras laoreet nulla eget est viverra, non posuere leo accumsan. Nunc maximus aliquam elit malesuada iaculis. Etiam vel nisl pretium, imperdiet nibh ac, tempus nisi. Donec sodales vel massa quis fermentum. ',
  },
  {
    title: 'Getting around',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget scelerisque felis, quis venenatis dolor. Cras laoreet nulla eget est viverra, non posuere leo accumsan. Nunc maximus aliquam elit malesuada iaculis. Etiam vel nisl pretium, imperdiet nibh ac, tempus nisi. Donec sodales vel massa quis fermentum. ',
  },
  {
    title: 'Where to stay',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget scelerisque felis, quis venenatis dolor. Cras laoreet nulla eget est viverra, non posuere leo accumsan. Nunc maximus aliquam elit malesuada iaculis. Etiam vel nisl pretium, imperdiet nibh ac, tempus nisi. Donec sodales vel massa quis fermentum. ',
  },
];

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const Travel = ({ scrollRef }: Props): ReactElement => {
  const isSmallWidth = useMediaQuery('(max-width: 767px)');

  return (
    <InfoSection scrollRef={scrollRef}>
      <Stack px={isSmallWidth ? 0 : 64}>
        <Title order={3} style={{ alignSelf: 'flex-end' }}>
          Travel
        </Title>
        {TRAVEL_SECTIONS.map((section, idx) => (
          <Stack key={`travel-section-${idx}`}>
            <SubHeading>{section.title}</SubHeading>
            <Body>{section.body}</Body>
          </Stack>
        ))}
      </Stack>
    </InfoSection>
  );
};
