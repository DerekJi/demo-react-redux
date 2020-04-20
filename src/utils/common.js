export function random(max, min = 0) {
  let n = Math.floor(Math.random() * (max + 1));
  while (n < min) {
    n = random(max);
  }
  return n;
}

export function randomBoolean(seed = 1) {
  const value = random(seed);
  console.log(`random boolean: ${value}`);
  return (value > 0);
}
