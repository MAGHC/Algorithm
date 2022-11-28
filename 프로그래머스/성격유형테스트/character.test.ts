import { solution } from './character';

describe('성격유형 테스트', () => {
  test('케이스1', () => {
    const result = solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]);
    const answer = 'TCMA';

    expect(result).toBe(answer);
  });
  test('케이스2', () => {
    const result = solution(['TR', 'RT', 'TR'], [7, 1, 3]);
    const answer = 'RCJA';

    expect(result).toBe(answer);
  });
});
