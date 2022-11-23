import { solution } from './index';

describe('과일장수 test', () => {
  test('테스트 케이스1', () => {
    const result = solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
    const answer = 8;

    expect(result).toBe(answer);
  });

  test('테스트 케이스2', () => {
    const result = solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);

    const answer = 33;

    expect(result).toBe(answer);
  });
});
