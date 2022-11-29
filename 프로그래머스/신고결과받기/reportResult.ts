export function solution(id_list: string[], report: string[], k: number) {
  let reports = [...new Set(report)].map((item) => item.split(' '));

  console.log(reports);

  let badCount = new Map();

  for (const [id, bad] of reports) {
    console.log(bad);
    badCount.set(bad, badCount.get(bad) + 1 || 1);
  }

  console.log(badCount);

  let userId = new Map();

  for (const [user, bad] of reports) {
    if (badCount.get(bad) >= k) userId.set(user, userId.get(user) + 1 || 1);
  }

  console.log(userId);

  let answer = id_list.map((item) => userId.get(item) || 0);

  return answer;
}

const id = ['muzi', 'frodo', 'apeach', 'neo'];
const report = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'];
const k = 2;

console.log(solution(id, report, k));

/// 객체는 키를 문자형으로 변환한다.
// 맵은 키의 타입을 변환시키지 않고 그대로 유지함
