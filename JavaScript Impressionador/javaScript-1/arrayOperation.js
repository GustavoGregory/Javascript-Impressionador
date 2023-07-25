const regularArray = [2, 5, 2, 7, 1, 3, 4, 7];

//let count = 0;

for (let count = 0; count < regularArray.length; count++) {
  regularArray[count] += count;
}

console.log("o array atual é:", regularArray);
