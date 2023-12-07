import React, { ReactElement } from 'react';
import { Center, Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { Body, SectionTitle, SubHeading } from '../typography/Typography';

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
  return (
    <InfoSection scrollRef={scrollRef}>
      <Center>
        <Stack maw={1200}>
          <SectionTitle>Travel</SectionTitle>
          {TRAVEL_SECTIONS.map((section, idx) => (
            <Stack key={`travel-section-${idx}`} pb={24}>
              <SubHeading>{section.title}</SubHeading>
              <Body>{section.body}</Body>
            </Stack>
          ))}
        </Stack>
      </Center>
    </InfoSection>
  );
};
