export const rgb2hex = (rgb: string) => {
  const hexCodes = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)?.slice(1);

  return hexCodes
    ? `#${hexCodes
        .map((n) => parseInt(n, 10).toString(16).padStart(2, '0'))
        .join('')}`.toUpperCase()
    : '';
};
