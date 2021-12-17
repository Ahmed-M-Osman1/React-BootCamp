var nameVar = 'Ahmed';
var nameVar = 'Mamdouh';
console.log('nameVar', nameVar);

let nameLet = 'Ahmed';
nameLet = 'Mamdouh';
console.log('nameLet', nameLet);

const nameConst = 'Ahmed';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Ahmed Mamdouh Ahmed';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);