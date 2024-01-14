import { useMediaQuery } from '@mantine/hooks';

type DeviceWidth = {
  isSmallWidth: boolean;
  isXSmallWidth: boolean;
};

export const useDeviceWidth = (): DeviceWidth => {
  const isSmallWidth = useMediaQuery('(max-width: 767px)');
  const isXSmallWidth = useMediaQuery('(max-width: 500px)');

  return {
    isSmallWidth: isSmallWidth ?? false,
    isXSmallWidth: isXSmallWidth ?? false,
  };
};
