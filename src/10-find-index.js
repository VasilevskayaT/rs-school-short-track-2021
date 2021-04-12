/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, val) {
  let answer = -1;
  let first = 0;
  let last = arr.length - 1;
  let mid;
  while (first <= last) {
    mid = Math.trunc((first + last) / 2);
    if (arr[mid] < val) {
      first = mid + 1;
    }
    if (arr[mid] > val) {
      last = mid - 1;
    }
    if (arr[mid] === val) {
      answer = mid;
      break;
    }
  }
  return answer;
}

module.exports = findIndex;
