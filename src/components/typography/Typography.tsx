import React, { PropsWithChildren, ReactElement } from 'react';
import { Text, Title } from '@mantine/core';
import { useDeviceWidth } from '../../hooks/useDeviceWidth';

export const SectionTitle = ({
  className,
  children,
}: PropsWithChildren<{
  className?: string;
}>): ReactElement => {
  return (
    <Title
      order={4}
      pb={32}
      fw={300}
      style={{ textAlign: 'center' }}
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
  const { isSmallWidth } = useDeviceWidth();

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
  const { isSmallWidth } = useDeviceWidth();

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
