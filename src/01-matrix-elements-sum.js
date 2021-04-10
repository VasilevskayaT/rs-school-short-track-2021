/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matr) {
  let count = 0;
  for (let i = 1; i < matr.length; i++) {
    for (let j = 0; j < matr[i].length; j++) {
      if (matr[i - 1][j] !== 0) {
        count += matr[i][j];
      }
    }
  }
  return count + matr[0].reduce((acc, i) => acc + i, 0);
}

module.exports = getMatrixElementsSum;
