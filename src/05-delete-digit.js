/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const arr = [];
  const str = String(num);
  arr.push(str.slice(0, str.length - 1));
  if (str.length > 1) arr.push(str.slice(1));
  if (str.length > 2) {
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j + i < str.length; j++) {
        arr.push(str.slice(i, i + j) + str.slice(i + j + 1));
      }
    }
  }
  return arr.map((i) => +i).sort((a, b) => a - b).reverse()[0];
}

module.exports = deleteDigit;
