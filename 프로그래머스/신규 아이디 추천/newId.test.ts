import { solution } from './newId';

describe('신규아이디 추천 테스트', () => {
  test('케이스1', () => {
    const result = solution('...!@BaT#*..y.abcdefghijklm');
    const answer = 'bat.y.abcdefghi';

    expect(result).toBe(answer);
  });
  test('케이스2', () => {
    const result = solution('z-+.^.');
    const answer = 'z--';

    expect(result).toBe(answer);
  });

  test('케이스3', () => {
    const result = solution('=.=');
    const answer = 'aaa';
    expect(result).toBe(answer);
  });

  test('케이스4', () => {
    const result = solution('123_.def');
    const answer = '123_.def';
    expect(result).toBe(answer);
  });

  test('케이스5', () => {
    const result = solution('abcdefghijklmn.p');
    const answer = 'abcdefghijklmn';
    expect(result).toBe(answer);
  });
});

describe('정규식 테스트', () => {
  test('소문자,숫자,빼기,밑줄,마침표를 제외한 나머지는 없앤다', () => {
    const str = '...!@bat#*..y.abcdefghijklm';
    const reg = /[^\w-_.]/g;

    const result = str.replace(reg, '');
    const answer = '...bat..y.abcdefghijklm';

    expect(result).toBe(answer);
  });

  test('마침표 2개이상은 하나로 바꾼다', () => {
    const str = '...bat..y.abcdefghijklm';
    const reg = /\.{2,}/g;
    const answer = '.bat.y.abcdefghijklm';

    const result = str.replace(reg, '.');
    expect(result).toBe(answer);
  });

  test('맨 앞 뒤의 마침표를 제거한다', () => {
    const str = '.bat.y.abcdefghijklm.';
    const reg = /^\.|\.$/g;
    const result = str.replace(reg, '');

    const answer = 'bat.y.abcdefghijklm';

    expect(result).toBe(answer);
  });

  test('빈문자열이라면 a 를 채워넣는다', () => {
    const str = '';
    const answer = 'a';

    const reg = /^$/;

    const result = str.replace(reg, 'a');

    expect(result).toBe(answer);
  });
});
