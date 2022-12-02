export function solution(n: number, arr1: number[], arr2: number[]) {
  var answer: any = [];

  for (let i = 0; i < n; i++) {
    const binary = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
    answer.push(binary);
  }

  return answer.map((item: string) => {
    return item.replace(/1|0/g, (a) => (+a ? '#' : ' '));
  });
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
