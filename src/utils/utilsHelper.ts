const formatUpperCase = (text: string) => {
  const value = text
    .toString()
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, function (a: string) {
      return a.toUpperCase();
    });
  return value;
};

const formatNameStat = (name: string) => {
  if (name === 'hp') return 'HP';
  if (name === 'attack') return 'ATK';
  if (name === 'defense') return 'DEF';
  return 'SPD';
};

export { formatUpperCase, formatNameStat };
