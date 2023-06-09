function nextGreatestLetter(alphabets, target) {
  let low = 0;
  let high = alphabets.length - 1;
  while (low <= high) {
    let mid = (low + high) >> 1;

    if (alphabets[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return alphabets[low % alphabets.length];
}
let alphabets = ["c", "f", "j"];
let target = "a";
console.log(nextGreatestLetter(alphabets, target));
