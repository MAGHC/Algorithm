import { solution } from './hamburger';

describe('햄버거 테스트', () => {
  test('테스트케이스1', () => {
    const result = solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);
    const answer = 2;

    expect(result).toBe(answer);
  });

  test('테스트케이스2', () => {
    const result = solution([1, 3, 2, 1, 2, 1, 3, 1, 2]);

    const answer = 0;

    expect(result).toBe(answer);
  });
});
