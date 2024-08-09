
//************************************************//
//              PART 1: FIZZ BUZZ                //
//**********************************************//
//Loop through all numbers from 1 to 100
//for(i = 1; i <=100; i++){
    //console.log(i);
//}

//If a number is divisible by 3, log “Fizz.”
//for (let i = 1; i <= 100; i++) {
   // if (i % 3 === 0) {
    //  console.log("Fizz");
   // }
  //}

  //for (let i = 1; i <= 100; i++) {
   // if (i % 3 === 0) {
   //   console.log(`${i}: Fizz`);
   // }
  //}

  //If a number is divisible by 5, log “Buzz.”
  //for (let i = 1; i <= 100; i++) {
    //if (i % 5 === 0) {
     // console.log(`${i}: Buzz`);
   // }
 // }

//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
//for (let i = 1; i <= 100; i++) {
    //if (i % 5 === 0 && i % 3 === 0) {
     // console.log(`${i}: Fizz Buzz`);
    //}
  //}

  //If a number is not divisible by either 3 or 5, log the number.
  //for (let i = 1; i <= 100; i++) {
   // if (i % 3 !== 0 && i % 5 !== 0) {
     // console.log(i);
    //}
  //}

  //************************************************//
 //              PART 2: PRIME TIME                //
//************************************************//

/*let n = prompt("Enter a number: "); // get user input
//create an infinite loop starting from n
for (let i = n; ; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    //Looking for a divisor for i
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  //Log the prime number
  if (isPrime) {
    console.log(i);
    break;
  }
}*/

//*************************************************//
//              PART 3: FEELING LOOPY             //
//***********************************************//

let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
//Split the CSV string into rows using the \n character as the delimiter
let rows = csvString.split("\n");

for (let i = 0; i < rows.length; i++) {
  let cells = rows[i].split(",");
  //Log each cell of the row to the console
  console.log(cells[0], cells[1], cells[2], cells[3]);
}




  