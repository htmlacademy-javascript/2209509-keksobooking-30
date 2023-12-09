export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export function getRandomLat(a, b) {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.random() * (max - min) + min;
}
