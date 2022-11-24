export function solution(food: number[]) {
  food.shift();
  const shiftedFood = food;
  const resultFront: any = [];

  shiftedFood.forEach((food: number, index: number, array: number[]) => {
    const addValue = Math.floor(food / 2);
    if (array[index] === food) resultFront.push(new Array(addValue).fill(index + 1));
  });

  const flattedResultFront = resultFront.flat();

  return [...flattedResultFront, 0, ...flattedResultFront.reverse()].join('');
}
