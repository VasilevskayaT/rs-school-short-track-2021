/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  const num = array.filter((item) => item !== -1).sort((a, b) => a - b);
  let j = 0;
  const answerArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === -1) {
      answerArr.push(array[i]);
    } else {
      answerArr.push(num[j]);
      j++;
    }
  }
  return answerArr;
}

module.exports = sortByHeight;
