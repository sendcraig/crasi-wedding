import { Divider, Group, Space } from '@mantine/core';
import React from 'react';

export const VerticalLine = ({ size }: { size: number }) => {
  return (
    <Group>
      <Space h={size} />
      <Divider orientation="vertical" />
      <Space h={size} />
    </Group>
  );
};
