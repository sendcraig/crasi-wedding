import React, { ReactElement } from 'react';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Center,
  Stack,
  Text,
} from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import { Body, SectionTitle } from '../typography/Typography';
import styles from './FAQ.module.scss';
import cx from 'classnames';
import { useDeviceWidth } from '../../hooks/useDeviceWidth';
import { Trans, useTranslation } from 'react-i18next';
import { LinkText } from '../Link/LinkText';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const FAQ_SECTIONS = [
  {
    question: 'dresscode.q',
    answer: 'dresscode.a',
  },
  {
    question: 'children.q',
    answer: 'children.a',
  },
  {
    question: 'photos.q',
    answer: 'photos.a',
  },
  {
    question: 'language.q',
    answer: 'language.a',
  },
  {
    question: 'credit-cards.q',
    answer: 'credit-cards.a',
  },
  {
    question: 'driving.q',
    answer: 'driving.a',
  },
  {
    question: 'weather.q',
    answer: 'weather.a',
  },
  {
    question: 'greece-info.q',
    answer: 'greece-info.a',
  },
];

export const FAQ = ({ scrollRef }: Props): ReactElement => {
  const { t } = useTranslation();
  const { isXSmallWidth } = useDeviceWidth();

  return (
    <InfoSection scrollRef={scrollRef}>
      <Center>
        <Stack w={'100%'} maw={1000}>
          <SectionTitle>{t('faq.title')}</SectionTitle>
          <Accordion
            variant={'filled'}
            className={cx({
              [styles.extraMargin]: isXSmallWidth,
            })}
          >
            {FAQ_SECTIONS.map((section) => {
              return (
                <AccordionItem
                  key={section.question}
                  value={t(`faq.${section.question}`)}
                  bg={'#FBF9F6'}
                >
                  <AccordionControl>
                    <Text fw={320} size={'lg'}>
                      {t(`faq.${section.question}`)}
                    </Text>
                  </AccordionControl>
                  <AccordionPanel>
                    <Body justify>
                      <Trans
                        i18nKey={`faq.${section.answer}`}
                        t={t}
                        components={{
                          creteLink: (
                            <LinkText
                              url={'https://www.incrediblecrete.gr/en/'}
                            />
                          ),
                          discoverGreeceLink: (
                            <LinkText url={'https://www.discovergreece.com/'} />
                          ),
                        }}
                      />
                    </Body>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Stack>
      </Center>
    </InfoSection>
  );
};
