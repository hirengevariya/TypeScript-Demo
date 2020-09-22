const person = {
  name: 'Hiren',
  age: 30,
  hobbies: ['Adventures Travel', 'Cooking'],
  role: [65, 'Author']
};

let favoriteActivities: string[];
favoriteActivities = ['Cooking'];



console.log(person);
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}