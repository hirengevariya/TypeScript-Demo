function  add(n1: number, n2: number) {
  return n1 + n2;
}

// @ts-ignore
function printResult(num: number): void {
  console.log('Result: ' + num);
}

// @ts-ignore
printResult(add(5, 18));

let combineValues: (a: number, b: number) => number;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
})