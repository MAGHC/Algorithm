export function solution(lottos: number[], win_nums: number[]) {
  let winNum = 0;
  let zeroNum = 0;

  lottos.forEach((lotto) => {
    if (win_nums.includes(lotto)) winNum++;
    if (lotto === 0) zeroNum++;
  });

  if (zeroNum === 6) return [1, 6];
  if (zeroNum === 0 && winNum === 0) return [6, 6];

  return [7 - (zeroNum + winNum), 7 - winNum];
}
