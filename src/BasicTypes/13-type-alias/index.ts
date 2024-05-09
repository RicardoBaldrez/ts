type Age = number;

type RgbColor = 'Red' | 'Green' | 'Blue';
type MykColor = 'Ciano' | 'Magenta' | 'Yellow' | 'Black';
type PreferedColors = RgbColor | MykColor;

type Person = {
  name: string;
  lastName: string;
  age: Age;
  salary: number;
  preferColor?: string;
};

const person: Person = {
  name: 'Ricardo',
  lastName: 'Baldrez',
  age: 33,
  salary: 10000,
};

function setPreferedColor(person: Person, color: PreferedColors): Person {
  return { ...person, preferColor: color };
}

console.log(setPreferedColor(person, 'Ciano'));
