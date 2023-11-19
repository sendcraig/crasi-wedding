export const hasTouchSupport = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export const isApple = () => {
  return ['Apple', 'iPhone', 'iPad', 'Safari', 'Macintosh'].some((keyword) =>
    navigator.userAgent.includes(keyword),
  );
};
