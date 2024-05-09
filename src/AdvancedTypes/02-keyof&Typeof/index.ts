const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

function colorTranslate(color: CoresChaves, colors: CoresObj) {
  return colors[color];
}

console.log(colorTranslate('vermelho', coresObj));
console.log(colorTranslate('verde', coresObj));
