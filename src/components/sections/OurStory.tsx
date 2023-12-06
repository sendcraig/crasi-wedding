import React, { ReactElement } from 'react';
import { Image, Stack } from '@mantine/core';
import { InfoSection } from '../InfoSection/InfoSection';
import parisImage from '../../assets/images/paris.png';
import { Body, SectionTitle } from '../typography/Typography';

type Props = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export const OurStory = ({ scrollRef }: Props): ReactElement => {
  return (
    <InfoSection scrollRef={scrollRef}>
      <Stack gap={0}>
        <Image src={parisImage} pb={32} />
        <SectionTitle>Our Story</SectionTitle>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eget scelerisque felis, quis venenatis dolor. Cras laoreet nulla eget
          est viverra, non posuere leo accumsan. Nunc maximus aliquam elit
          malesuada iaculis. Etiam vel nisl pretium, imperdiet nibh ac, tempus
          nisi. Donec sodales vel massa quis fermentum. Sed volutpat bibendum
          ipsum at tincidunt. Aliquam massa est, scelerisque ut dui blandit,
          varius eleifend lorem. Nam bibendum at augue sit amet egestas.
          <br />
          <br />
          Vivamus imperdiet, metus et hendrerit accumsan, risus urna viverra
          neque, sed pellentesque dui massa et sem. Sed rhoncus nisi a est
          aliquet imperdiet. Sed suscipit at neque quis suscipit. Fusce sed
          ipsum quis lectus feugiat euismod. Ut quis justo tristique mauris
          venenatis scelerisque sit amet vitae diam. Sed placerat quis nisi id
          euismod. Nunc non ex non lacus placerat convallis. Nunc tristique dui
          eu magna convallis, quis mollis orci fermentum. Nunc auctor elit id mi
          facilisis feugiat. Suspendisse velit lorem, finibus non pharetra non,
          scelerisque vel dolor.
        </Body>
      </Stack>
    </InfoSection>
  );
};
