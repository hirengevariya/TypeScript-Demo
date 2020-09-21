console.log('---- Interface in Typescript ----');
var nameSet = function (firstname, lastname) {
    console.log('First name -> ', firstname);
    console.log('Last name -> ', lastname);
};
nameSet('Hiren', 'Kumar');
nameSet(11, 'Kumar');
console.log('Inline Type Annotation');
console.log('Interface declaration');
var namePro = function (nameProp) {
    console.log(nameProp.firstname);
    console.log(nameProp.lastname);
    console.log(nameProp.address + ' ' + nameProp.age);
};
namePro({
    firstname: 'Hiren',
    lastname: 'Patel',
    address: 'JBT 123',
    age: 30
});
