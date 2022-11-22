const getPower = (num) => {
  const divisors = [];
  for (let i = 1; i <= num / 2; i++) {
    // 약수는 자신의 n/2 보다 클수없기에 시간복잡도를 고려하여 n/2 한다
    if (num % i === 0) divisors.push(i); // 나누어지면 약수임으로 나머짓값이 0이면 push한다
  }
  return [...divisors, num].length; //num 자신도 약수가 됨으로 num 을 넣어준다. 힘을 구해야함으로 length
};

// console.log(getPower(10)); // 확인

const checkLimit = (limit, power, powers) => {
  const newpower = powers.map((length) => {
    if (length > limit) return power;
    return length;
  });
  return newpower;
};

const mockPower = [2, 3, 4, 5, 2];

// console.log(mockPower);

const addIron = (powers) => {
  let iron = 0;
  powers.forEach((power) => {
    iron += power;
  });
  return iron;
};

function solution(number, limit, power) {
  let powers = [];
  for (let i = 1; i <= number; i++) {
    console.log(i, '??');
    powers.push(getPower(i));
  }
  console.log(powers);

  const checkedPower = checkLimit(limit, power, powers);
  return addIron(checkedPower);
}

console.log(solution(5, 3, 2));

module.exports = solution;
