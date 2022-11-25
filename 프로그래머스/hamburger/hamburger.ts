export const solution = (ingredient) => {
  const arr: number[] = [];
  let hamburgerValue = 0;

  ingredient.forEach((item: number, i) => {
    arr.push(item);

    if (arr.length >= 4) {
      const condition = arr.slice(-4).join('');
      if (condition === '1231') {
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        hamburgerValue++;
      }
    }
  });
  return hamburgerValue;
};
