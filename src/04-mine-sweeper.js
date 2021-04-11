/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matr) {
  const arr = [...matr];
  for (let k = 0; k < arr.length; k++) {
    for (let l = 0; l < arr[k].length; l++) {
      if (arr[k][l] === false) arr[k][l] = 0;
      else arr[k][l] = 'bomb';
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'bomb') {
        if (i - 1 >= 0) {
          if (typeof arr[i - 1][j] === 'number') arr[i - 1][j]++;
          if (j - 1 >= 0 && typeof arr[i - 1][j - 1] === 'number') arr[i - 1][j - 1]++;
          if (j + 1 < arr[i].length && typeof arr[i - 1][j + 1] === 'number') arr[i - 1][j + 1]++;
        }
        if (i + 1 < arr.length) {
          if (typeof arr[i + 1][j] === 'number') arr[i + 1][j]++;
          if (j - 1 >= 0 && typeof arr[i + 1][j - 1] === 'number') arr[i + 1][j - 1]++;
          if (j + 1 < arr[i].length && typeof arr[i + 1][j + 1] === 'number') arr[i + 1][j + 1]++;
        }
        if (typeof arr[i][j - 1] === 'number') arr[i][j - 1]++;
        if (typeof arr[i][j + 1] === 'number') arr[i][j + 1]++;
      }
    }
  }
  for (let n = 0; n < arr.length; n++) {
    for (let m = 0; m < arr[n].length; m++) {
      if (arr[n][m] === 'bomb') arr[n][m] = 1;
    }
  }
  return arr;
}

module.exports = minesweeper;
