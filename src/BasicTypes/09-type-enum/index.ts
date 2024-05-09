// Enums é uma estrutura de dados não ordenada

// Enums númerico
enum Colors {
  RED, // 0
  BLUE, // 1
  YELLOW, // 2
}

console.log(Colors);
console.log(Colors.RED); // 0
console.log(Colors[1]); // blue

// Definindo os valores dos enums
enum Colors {
  PURPLE = 10,
  ORANGE = 9,
}

// Dois enums com o mesmo nome, acontece um merge automático
console.log(Colors);

function chooseColor(color: Colors): void {
  console.log(Colors[color]);
}

chooseColor(Colors.ORANGE);
