// 정규식에대한 실험 병행

const practice = /^The end$/;

const pracstr = 'The end';

// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

const str2 = '...!@bat#*..y.abcdefghijklm';
const reg2 = /[^\w_-]/; //w_- 제외한 모든것

const str3 = 'dasds.das.sad.dsa.....sdasda.sda';
const reg3 = /\.{2,}/; // 2개 이상의 .

const str4 = '.bat.y.abcdefghijklm';
const reg4 = /^\.|\.$/g; // 맨 앞 뒤의 . 찾기

console.log(str4.padEnd(3, '*')); // padend method 채우고 넘는다면 그냥 원본 배출하네

const str5 = '';
const reg5 = /^$/g; // 비어있다면.

let test = '';
test = str5.replace(reg5, 'a');

console.log(test);

console.log(reg4.test(str4));

export function solution(new_id: string) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/g, 'a')
    .substring(0, 15)
    .replace(/\.$/, '');

  return answer.padEnd(3, answer[answer.length - 1]);
}
//[^\w-_.] 해야됨 //[^\w_-.] 하니까안됨 뭔가 - 이놈 때문인거같은데 이유를 모르겠네
