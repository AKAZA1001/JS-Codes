randomNum

 function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 const randomNum = getRandomNumber(1, 10);
console.log(randomNum); 
