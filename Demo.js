// let a="safik"
// let b= 454
// let c ='hdyh'
// console.table([a,b,c]);
// console.warn("dont drink soda")
// console.log(Date.now());

// for (let index = 1; index < 6; index++) {
//   console.log(" *".repeat(index));
// }


for (let i = 1; i <= 5; i++) {
  let row = ''
  let space= "  ".repeat(5-i)
  for (let j = 0; j < (2 * i) - 1; j++) {
    // row+= j+1 + " "
    row += j + 1 + " ";
  }
  console.log(space + row.trim())
}


for (let i = 4; i >= 1; i--) {
  let row = '';
  let space = "  ".repeat(5-i)
  
  for (let j = 0; j < (2 * i) - 1; j++) {
    row += (j + 1) + ' ';
  }
  console.log(space + row.trim());
}

