import { solution } from './fail';

describe('실패율', () => {
  test('케이스1', () => {
    const result = solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
    const answer = [3, 4, 2, 1, 5];

    expect(result).toEqual(answer);
  });
  test('케이스2', () => {
    const result = solution(4, [4, 4, 4, 4, 4]);
    const answer = [4, 1, 2, 3];

    expect(result).toEqual(answer);
  });
});
