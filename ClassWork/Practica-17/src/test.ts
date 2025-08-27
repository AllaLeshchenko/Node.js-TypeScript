function getValue(x: number): number {
    if(x < 0) {
        throw new Error ('Значение не может быть отрицательным')
    }
    return x;
}

function fc(): string | number {
  const random: number = Math.random()
  if (random > 0.66) {
    return 'string';
  } else if (random > 0.33) {
    return 123
  } else {
    throw new Error('Error')
  }
}
const result: string | number = fc()
console.log(result)