// Funciones normales
function addNumbers(a: number, b:number): number {
  return a + b;
}

// Funciones de flechas 
const addNumbersArrow = (a: number, b:number): string => {
  return `${a + b}`;
}



const suma: number = addNumbers(1, 2);
const suma2: string = addNumbersArrow(1, 3);

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
  return firstNumber * base;
}

// const resultMultiply = multiply(5)

// console.log({suma, suma2});
// console.log({resultMultiply});

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: 'Strider',
  hp: 10,
  showHp() {
      console.log(`Puntos de vida ${this.hp}`);
  },
}

healCharacter(strider, 20);

strider.showHp()

export {};