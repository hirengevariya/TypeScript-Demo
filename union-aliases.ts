function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 32);
console.log('Combined Ages : ',combinedAges);

const combineNames = combine('Hiren', 'Kumar');
console.log('Combined Names : ', combineNames);