function calculateFibonacciTerm(termNumber) {
  if (termNumber === 0) {
    return 0;
  }
  if (termNumber === 1) {
    return 1;
  }

  return (
    calculateFibonacciTerm(termNumber - 1) +
    calculateFibonacciTerm(termNumber - 2)
  );
}

console.log(
  `o valor do termo número 10 da sequencia de fibonacci é ${calculateFibonacciTerm(
    10
  )}`
);
