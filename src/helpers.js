const createDeck = (size) => {
  const uniqueVals = (size * size) / 2;
  const valsArr = [];
  for (let i = 0; i < uniqueVals; i++) {
    valsArr.push(i);
    valsArr.push(i);
  }
  for (let card of valsArr) {
    const a = valsArr.indexOf(card);
    const b = valsArr[Math.floor(Math.random() * valsArr.length)];

    let tempVal = card;
    valsArr[a] = valsArr[b];
    valsArr[b] = tempVal;
  }
  return valsArr;
};

const timeObject = {
  '2': 5,
  '4': 30,
  '6': 120,
  '8': 210,
  '10': 420,
};

export { createDeck, timeObject };
