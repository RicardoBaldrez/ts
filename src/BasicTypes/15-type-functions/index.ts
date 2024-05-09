type MapStringsCallback = (item: string) => string;

function mapStrings(
  array: Array<string>,
  callbackfn: MapStringsCallback,
): Array<string> {
  const newArray: Array<string> = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const arrayStringsLowerCase = ['a', 'b', 'c'];

const arrayStringsMapped = mapStrings(arrayStringsLowerCase, (item) => {
  return item.toUpperCase();
});
console.log(arrayStringsMapped);

export { mapStrings };
