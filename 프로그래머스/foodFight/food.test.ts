import { solution } from './food';

describe('푸드파이트 테스트', () => {
  test('케이스1', () => {
    const result = solution([1, 3, 4, 6]);
    const answer = '1223330333221';

    expect(result).toBe(answer);
  });

  test('케이스2', () => {
    const result = solution([1, 7, 1, 2]);
    const answer = '111303111';

    expect(result).toBe(answer);
  });
});
