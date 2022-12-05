export function solution(s: string) {
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (const [i, el] of arr.entries()) {
    while (s.includes(el)) {
      s = s.replace(el, i + '');
    }
  }

  return Number(s);
}
