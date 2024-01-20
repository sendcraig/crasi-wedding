import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useViewportSize } from '@mantine/hooks';

type UseParallaxAspectRatio = {
  imageRef: React.MutableRefObject<HTMLDivElement | null>;
  aspectRatio: string;
};

export const useParallaxAspectRation = (
  maxHeight?: number,
): UseParallaxAspectRatio => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [aspectRatio, setAspectRatio] = useState('1');

  const { width } = useViewportSize();

  const calculateCurrentAspectRatio = useCallback(() => {
    const clientRectHeight = imageRef.current?.getBoundingClientRect().height;
    const height = maxHeight
      ? Math.min(clientRectHeight ?? 0, maxHeight)
      : clientRectHeight;

    return `${imageRef.current?.getBoundingClientRect().width} / ${height}`;
  }, [maxHeight]);

  // useEffect(() => {
  //   console.log('aspect ratio changed', aspectRatio);
  // }, [aspectRatio]);

  useEffect(() => {
    setAspectRatio(calculateCurrentAspectRatio());
  }, [calculateCurrentAspectRatio, width]);

  useEffect(() => {
    if (imageRef.current) {
      setAspectRatio(calculateCurrentAspectRatio());
    }
  }, [calculateCurrentAspectRatio, imageRef]);

  return { imageRef, aspectRatio };
};
