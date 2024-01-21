import React, { ReactElement, useCallback } from 'react';
import { Center, Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { Body, SectionTitle, SubHeading } from '../typography/Typography';
import { Trans, useTranslation } from 'react-i18next';
import { DownloadLink } from '../Link/LinkText';
// import pdf from '../../../public/ChaniaHotelList.pdf'

const TRAVEL_SECTIONS = [
  {
    title: 'getting-there.title',
    body: 'getting-there.body',
  },
  {
    title: 'getting-around.title',
    body: 'getting-around.body',
  },
  {
    title: 'where-to-stay.title',
    body: 'where-to-stay.body',
  },
];

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const Travel = ({ scrollRef }: Props): ReactElement => {
  const { t } = useTranslation();

  const downloadPDF = useCallback(() => {
    const pdfUrl = 'ChaniaHotelList.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <InfoSection scrollRef={scrollRef}>
      <Center>
        <Stack maw={1200}>
          <SectionTitle>{t('travel.title')}</SectionTitle>
          {TRAVEL_SECTIONS.map((section, idx) => (
            <Stack
              key={`travel-section-${idx}`}
              pb={idx === TRAVEL_SECTIONS.length - 1 ? 0 : 24}
            >
              <SubHeading>{t(`travel.${section.title}`)}</SubHeading>
              <Body>
                <Trans
                  i18nKey={t(`travel.${section.body}`)}
                  t={t}
                  components={{
                    hotelLink: <DownloadLink onClick={downloadPDF} />,
                  }}
                />
              </Body>
            </Stack>
          ))}
        </Stack>
      </Center>
    </InfoSection>
  );
};
