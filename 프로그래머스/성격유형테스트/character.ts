export const solution = (survey: string[], choices: number[]) => {
  const CHARACTER = {};
  const types = ['RT', 'CF', 'JM', 'AN'];

  types.forEach((type) => {
    type.split('').forEach((item) => (CHARACTER[item] = 0));
  });

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    CHARACTER[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (CHARACTER[b] > CHARACTER[a] ? b : a)).join('');
};
