// --- | = OR
// --- & = AND

type haveName = { name: string };
type haveLastName = { lastName: string };
type haveAge = { age: number };
type Person = haveName & haveLastName & haveAge; // AND

const person: Person = {
  name: 'Ricardo',
  lastName: 'Baldrez',
  age: 33,
};

console.log(person);

// Module mode
export { person };
