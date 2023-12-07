import React, { PropsWithChildren, ReactElement } from 'react';
import { Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const SectionTitle = ({
  className,
  center = false,
  children,
}: PropsWithChildren<{
  className?: string;
  center?: boolean;
}>): ReactElement => {
  const isSmallWidth = useMediaQuery('(max-width: 767px)');
  return (
    <Title
      order={3}
      pb={32}
      style={{ textAlign: isSmallWidth || center ? 'center' : 'inherit' }}
      className={className}
    >
      {children}
    </Title>
  );
};

export const SubHeading = ({
  className,
  justify = false,
  center = false,
  children,
}: PropsWithChildren<{
  className?: string;
  justify?: boolean;
  center?: boolean;
}>): ReactElement => {
  const isSmallWidth = useMediaQuery('(max-width: 767px)');

  const textAlignment = () => {
    if (center) return 'center';
    if (justify) return 'justify';
    return isSmallWidth ? 'center' : 'initial';
  };

  return (
    <Text
      size={'lg'}
      pb={4}
      style={{ textAlign: textAlignment() }}
      className={className}
    >
      {children}
    </Text>
  );
};

export const SubHeadingLight = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>): ReactElement => {
  return (
    <Text fw={320} size={'lg'} lts={2} className={className}>
      {children}
    </Text>
  );
};

export const Body = ({
  className,
  justify = false,
  center = false,
  children,
}: PropsWithChildren<{
  className?: string;
  justify?: boolean;
  center?: boolean;
}>): ReactElement => {
  const isSmallWidth = useMediaQuery('(max-width: 767px)');

  const textAlignment = () => {
    if (center) return 'center';
    if (justify) return 'justify';
    return isSmallWidth ? 'center' : 'initial';
  };

  return (
    <Text fw={300} style={{ textAlign: textAlignment() }} className={className}>
      {children}
    </Text>
  );
};

export const BodyStretch = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>): ReactElement => {
  return (
    <Text fw={300} lts={2} className={className}>
      {children}
    </Text>
  );
};

export const BodyInformational = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>): ReactElement => {
  return (
    <Text
      size={'xl'}
      fw={300}
      style={{ textAlign: 'center' }}
      className={className}
    >
      {children}
    </Text>
  );
};
