import { solution } from './index';

describe('기사단원의 무기 test', () => {
  test('case1', () => {
    const result = solution(5, 3, 2);
    const answer = 10;

    expect(result).toEqual(answer);
  });

  test('case2', () => {
    const result = solution(10, 3, 2);
    const answer = 21;

    expect(result).toBe(answer);
  });
});
