import { solution } from './로또';

describe('로또테스트', () => {
  test('케이스1', () => {
    const result = solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
    const answer = [3, 5];

    expect(result).toEqual(answer);
  });
  test('케이스2', () => {
    const result = solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
    const answer = [1, 6];
    expect(result).toEqual(answer);
  });
  test('케이스3', () => {
    const result = solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
    const answer = [1, 1];
    expect(result).toEqual(answer);
  });
});
