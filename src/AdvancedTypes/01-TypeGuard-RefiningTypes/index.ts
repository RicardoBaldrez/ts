type Person = { type: 'person'; name: string };
type Animal = { type: 'animal'; cor: string };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  type: 'person' = 'person';
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal): void {
  // if ('name' in obj) console.log(obj.name);
  // if (obj instanceof Student) console.log(obj.name);
  switch (obj.type) {
    case 'animal':
      console.log(`Isso é uma animal da cor ${obj.cor}`);
      return;
    case 'person':
      console.log(`Uma pessoa chamada ${obj.name}`);
      return;
  }
}

showName(new Student('Ricardo'));
showName({ type: 'animal', cor: 'Cinza' });
