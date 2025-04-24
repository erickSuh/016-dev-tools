export const generateCpf = (): string => {
  const cpfArray: number[] = [];
  for (let i = 0; i < 9; i++) {
    cpfArray.push(Math.floor(Math.random() * 10));
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += cpfArray[i] * (10 - i);
  }
  const firstDigit = (sum % 11 < 2) ? 0 : 11 - (sum % 11);
  cpfArray.push(firstDigit);

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += cpfArray[i] * (11 - i);
  }
  const secondDigit = (sum % 11 < 2) ? 0 : 11 - (sum % 11);
  cpfArray.push(secondDigit);

  return cpfArray.join('');
}