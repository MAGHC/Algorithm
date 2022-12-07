import solution from './키패드';

describe('키패드 테스트', () => {
  test('케이스1', () => {
    const result = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');
    const answer = 'LRLLLRLLRRL';
    expect(result).toBe(answer);
  });
  test('케이스1', () => {
    const result = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left');
    const answer = 'LRLLRRLLLRR';
    expect(result).toBe(answer);
  });
  test('케이스1', () => {
    const result = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right');
    const answer = 'LLRLLRLLRL';
    expect(result).toBe(answer);
  });
});
