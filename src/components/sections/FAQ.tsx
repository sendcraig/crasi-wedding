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

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const FAQ_SECTIONS = [
  {
    question: 'What should I wear to the wedding?',
    answer:
      'We are recommending guests wear neutral or natural colors rather than bright flashy ones, to match the natural aesthetic of the olive grove and Cretan landscape (this means that white/cream/beige is also allowed). For the ladies, heels are of course welcome but stilettos are not recommended as the ceremony will take place in the middle of an olive grove without paved surfaces.',
  },
  {
    question: 'Are kids and babies welcome at the wedding?',
    answer:
      "The wedding is adults only, and we're kindly asking to leave the little ones at home. If there is no way to organize childcare or you have a special case, please reach out to us directly to discuss.",
  },
  {
    question: 'Is it ok to take photos with my phone at the wedding?',
    answer:
      'You are welcome to take photos during the reception & dinner, but we ask you refrain from taking photos during the ceremony to appreciate the moment and not to disrupt the view of the photographers & videographers. We can guarantee that there will be plenty of beautiful photos that you can access after the wedding even if you leave your phone in your pocket for the entire day!',
  },
  {
    question: 'Do most Greeks speak English?',
    answer:
      "Yes! Being one of the leading tourist destinations in Europe, almost all locals speak English fluently. The same unfortunately can't be said of German, although it's likely that locals will know a few words as Greece is a popular destination for Germans.",
  },
  {
    question: 'Can I use my credit card in Crete?',
    answer:
      "Yes, you can use your card almost everywhere in Greece. However, it always makes sense to have a small amount of cash on hand as well. Make sure to inform your card provider of your travel plans to ensure your card doesn't get locked while you're abroad!",
  },
  {
    question: "Will my driver's license work in Crete?",
    answer:
      'As of 2021, Americans are no longer required to obtain an International Driving Permit from AAA. Europeans will be able to use their national driving license without any problems in Greece.',
  },
  {
    question: 'What is the weather like in Crete in late September?',
    answer:
      'Crete has a very hot climate, and although this cools at the end of summer it will still be very warm, with daily high averages around 25-30°C/75-85°F.',
  },
  {
    question: 'Where can I find more info on things to do in Crete/Greece?',
    answer:
      "We've listed a few things above, but if you're interested in learning even more about this beautiful island, we recommend checking out <a href=\"https://www.incrediblecrete.gr/en/\" target=\"_blank\">the official Crete website.</a> For more information on Greece as a whole, <a href='https://www.discovergreece.com' target='_blank'>Discover Greece</a> has some excellent guides with information about the different regions of the country.",
  },
];

export const FAQ = ({ scrollRef }: Props): ReactElement => {
  const { isXSmallWidth } = useDeviceWidth();

  return (
    <InfoSection scrollRef={scrollRef}>
      <Center>
        <Stack w={'100%'} maw={1000}>
          <SectionTitle>FAQs</SectionTitle>
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
                  value={section.question}
                  bg={'#FBF9F6'}
                >
                  <AccordionControl>
                    <Text fw={320} size={'lg'}>
                      {section.question}
                    </Text>
                  </AccordionControl>
                  <AccordionPanel>
                    <Body justify>
                      <div
                        dangerouslySetInnerHTML={{ __html: section.answer }}
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
