import { solution } from './number&String';

describe('숫자문자열과 영단어 테스트', () => {
  test('케이스1', () => {
    const result = solution('one4seveneight');
    const answer = 1478;

    expect(result).toBe(answer);
  });
  test('케이스2', () => {
    const result = solution('23four5six7');
    const answer = 234567;

    expect(result).toBe(answer);
  });
  test('케이스3', () => {
    const result = solution('2three45sixseven');
    const answer = 234567;

    expect(result).toBe(answer);
  });
  test('케이스4', () => {
    const result = solution('123');
    const answer = 123;

    expect(result).toBe(answer);
  });
});
