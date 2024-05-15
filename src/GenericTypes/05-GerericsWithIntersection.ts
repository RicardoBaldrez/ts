export function objectsUnion<O1, O2>(obj1: O1, obj2: O2) {
  // return { ...obj1, ...obj2 }; // ou
  return Object.assign({}, obj1, obj2);
}

const object1 = { key1: 'value1' };
const object2 = { key2: 'value2' };

const union = objectsUnion(object1, object2);
console.log(union);
