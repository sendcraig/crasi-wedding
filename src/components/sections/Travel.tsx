import React, { ReactElement } from 'react';
import { Center, Stack, TypographyStylesProvider } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { Body, SectionTitle, SubHeading } from '../typography/Typography';

const TRAVEL_SECTIONS = [
  {
    title: 'Getting there',
    body: "The wedding venue is located near Chania, Greece on the island of Crete. Chania has an airport with connections to many major European airports and cities. If you're interested in spending some more time in Greece, it may be worthwhile to search for international flights through Athens and then take a short domestic flight (or a longer ferry) from there to Crete.",
  },
  {
    title: 'Getting around',
    body: 'To get around Crete it is advised to rent a car, although there are also taxi services available. In Athens the best way to get around is either with the metro or Uber, but renting a car is impractical.<br/><br/>For the wedding ceremony, there will be shuttles to transport guests from their accommodation to the venue and back. There are many car rental companies with competitive rates in Crete, and the local small businesses tend to be quite friendly and reliable. Using a travel site like Kayak, Booking.com, or Expedia is probably the easiest way to search, but a classic Google also will also yield many results.',
  },
  {
    title: 'Where to stay',
    body: "There are many hotels and Airbnbs in Chania city, and many beautiful villas in the surrounding areas for larger parties. We have reserved a block of rooms in the <todo - hotel> hotel if you use the code(?). Some recommended sources for accommodations are Booking.com, Airbnb, and Vrbo. If you're booking a villa, sometimes you can get better rates by booking with the rental company directly (for example, <a href='https://etouri.loggiabuilder.net/'>Etouri villas</a> has some beautiful villas that are typically pricier on other sites).",
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
            <Stack
              key={`travel-section-${idx}`}
              pb={idx === TRAVEL_SECTIONS.length - 1 ? 0 : 24}
            >
              <SubHeading>{section.title}</SubHeading>
              <TypographyStylesProvider p={0}>
                <Body>
                  <div dangerouslySetInnerHTML={{ __html: section.body }} />
                </Body>
              </TypographyStylesProvider>
            </Stack>
          ))}
        </Stack>
      </Center>
    </InfoSection>
  );
};
