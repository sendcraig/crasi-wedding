import React, { PropsWithChildren, ReactElement } from 'react';
import { Text } from '@mantine/core';

export const SubHeading = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>): ReactElement => {
  return (
    <Text size={'lg'} pb={4} className={className}>
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
  children,
}: PropsWithChildren<{ className?: string }>): ReactElement => {
  return (
    <Text fw={300} className={className}>
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
