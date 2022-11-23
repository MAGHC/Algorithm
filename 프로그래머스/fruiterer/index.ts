const mockScore = [5, 4, 3, 4, 7, 2, 15, 4];

const sliceArray = (array: number[], m: number) => {
  let start = 0;
  let unit = m;
  let iteratorValue = Math.floor(array.length / m);
  let slicedArrays: any = [];
  console.log(iteratorValue);

  if (iteratorValue === 0) return 0;
  while (iteratorValue > 0) {
    slicedArrays.push(array.slice(start, unit));
    start = unit;
    unit += m;
    iteratorValue--;
  }

  return slicedArrays;
};

const sortArray = (array: number[]) => {
  return array.sort((a, b) => b - a);
};

const calScore = (array: number[], m: number) => {
  return Math.min(...array) * m;
};

export function solution(k: number, m: number, score: number[]): number {
  let answer = 0;
  let start = 0;
  let unit = m;
  let iteratorValue = Math.floor(score.length / m);
  let slicedArrays: any = [];

  score.sort((a, b) => b - a);
  if (iteratorValue === 0) return 0;

  while (iteratorValue > 0) {
    slicedArrays.push(score.slice(start, unit));
    start = unit;
    unit += m;
    iteratorValue--;
  }

  slicedArrays.forEach((array: number[]) => {
    answer += calScore(array, m);
  });

  return answer;
}

console.log(solution(3, 2, mockScore));

type array = [number[]] | number[];
