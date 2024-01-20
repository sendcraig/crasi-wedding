import React, { ReactElement } from 'react';
import { Center, Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import {
  Body,
  BodyInformational,
  SectionTitle,
} from '../typography/Typography';
import { Link } from '../Link/Link';
import styles from '../SaveTheDate/SaveTheDate.module.scss';
import cx from 'classnames';
import { hasTouchSupport } from '../utils';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const RSVP = ({ scrollRef }: Props): ReactElement => {
  return (
    <InfoSection scrollRef={scrollRef}>
      <Stack>
        <SectionTitle>RSVP</SectionTitle>
        <Center mt={-16} mb={16}>
          <BodyInformational>
            <Link
              url={'https://withjoy.com/craig-and-josephin/rsvp'}
              text={'Please RSVP by clicking this link.'}
              className={cx({ [styles.boldOnHover]: !hasTouchSupport() })}
            />
          </BodyInformational>
        </Center>
        <Body center>
          Responses can be edited at any time, but we kindly request final
          responses by May 1st, 2024.
        </Body>
      </Stack>
    </InfoSection>
  );
};
