import { solution } from './reportResult';

describe('신고결과받기 테스트', () => {
  test('케이스1', () => {
    const result = solution(
      ['muzi', 'frodo', 'apeach', 'neo'],
      ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
      2,
    );
    const answer = [2, 1, 1, 0];
    expect(result).toEqual(answer);
  });
  test('케이스2', () => {
    const result = solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3);
    const answer = [0, 0];

    expect(result).toEqual(answer);
  });
});
