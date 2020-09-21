console.log('---- Interface in Typescript ----');

let nameSet = (firstname: string, lastname: string) => {
  console.log('First name -> ', firstname);
  console.log('Last name -> ', lastname);
}

nameSet('Hiren', 'Kumar');
nameSet(11, 'Kumar');

console.log('Inline Type Annotation');
console.log('Interface declaration');

interface NameProp {
  firstname: string,
  lastname: string,
  address: string,
  age: number
}

let namePro = (nameProp: NameProp) => {
  console.log(nameProp.firstname)
  console.log(nameProp.lastname)
  console.log(nameProp.address + ' ' + nameProp.age)
}

namePro({
  firstname: 'Hiren',
  lastname: 'Patel',
  address: 'JBT 123',
  age: 30
});