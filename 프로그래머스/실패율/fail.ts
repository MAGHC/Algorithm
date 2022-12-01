type result = [number, number];

export function solution(N: number, stages: number[]) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reachedPerson: number = stages.filter((x) => x >= i).length;
    let failedPerson: number = stages.filter((x) => x === i).length;
    result.push([i, failedPerson / reachedPerson]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}

console.log(solution(4, [4, 4, 4, 4]));
