import { solution } from './secret';

describe('비밀지도 테스트', () => {
  test('케이스1', () => {
    const result = solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
    const answer = ['#####', '# # #', '### #', '#  ##', '#####'];

    expect(result).toEqual(answer);
  });

  test('케이스2', () => {
    const result = solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
    const answer = ['######', '###  #', '##  ##', ' #### ', ' #####', '### # '];

    expect(result).toEqual(answer);
  });
});
