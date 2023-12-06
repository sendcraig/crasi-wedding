import React, { ReactElement } from 'react';
import { Stack, Text, Title } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';

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

const TravelSection = ({
  title,
  body,
}: {
  title: string;
  body: string;
}): ReactElement => {
  return (
    <Stack>
      <Text size={'lg'} pb={4}>
        {title}
      </Text>
      <Text lts={0.5} fw={300}>
        {body}
      </Text>
    </Stack>
  );
};

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const Travel = ({ scrollRef }: Props): ReactElement => {
  return (
    <InfoSection scrollRef={scrollRef}>
      <Stack px={64}>
        <Title order={3} style={{ alignSelf: 'flex-end' }}>
          Travel
        </Title>
        {TRAVEL_SECTIONS.map((section, idx) => (
          <TravelSection
            key={`travel-section-${idx}`}
            title={section.title}
            body={section.body}
          />
        ))}
      </Stack>
    </InfoSection>
  );
};
