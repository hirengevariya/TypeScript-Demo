// const person: {
//   name: string;
//   age: number;
// } = {

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;


// @ts-ignore
const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: ADMIN
};

// @ts-ignore
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

// @ts-ignore
if(person.role === ADMIN) {
  console.log('is admin');
}