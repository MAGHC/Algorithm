type Position = string | number;

export default function solution(numbers: number[], hand: string) {
  hand = hand[0] === 'l' ? 'L' : 'R';
  const answer: string[] = [];

  let leftPosition: Position = '*';
  let rightPosition: Position = '#';
  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      answer.push('L');
      leftPosition = number;
      return;
    }
    if (number === 3 || number === 6 || number === 9) {
      answer.push('R');
      rightPosition = number;
      return;
    }

    const leftDistance = getDistance(leftPosition, number);
    const rightDistance = getDistance(rightPosition, number);

    if (leftDistance === rightDistance) {
      if (hand === 'R') {
        answer.push(hand);
        rightPosition = number;
        return;
      }
      answer.push('L');
      leftPosition = number;
    }

    if (leftDistance > rightDistance) {
      answer.push('R');
      rightPosition = number;
    }
    if (rightDistance > leftDistance) {
      answer.push('L');
      leftPosition = number;
    }
  });
  return answer.join('');
}

const getDistance = (numberLocate: Position, target: number) => {
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  const nowPosition = keyPad[numberLocate];
  const targetPosition = keyPad[target];
  return (
    Math.abs(targetPosition[0] - nowPosition[0]) + Math.abs(targetPosition[1] - nowPosition[1])
  );
};
