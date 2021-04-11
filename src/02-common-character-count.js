/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  const arr1 = str1.split('');
  const arr2 = str2.split('');

  let count = 0;
  let maxLength;
  let maxArr;
  let minArr;
  if (arr1.length >= arr2.length) {
    maxLength = arr1.length;
    maxArr = arr1;
    minArr = arr2;
  }
  if (arr1.length < arr2.length) {
    maxLength = arr2.length;
    maxArr = arr2;
    minArr = arr1;
  }
  const draftMax = maxArr.slice();
  const draftMin = minArr.slice();
  for (let i = 0; i < maxLength; i++) {
    if (draftMin.includes(maxArr[i])) {
      draftMax.splice(draftMax.indexOf(maxArr[i]), 1);
      draftMin.splice(draftMin.indexOf(maxArr[i]), 1);
      count++;
    }
    if (!draftMin.includes(maxArr[i])) {
      draftMax.splice(draftMax.indexOf(maxArr[i]), 1);
    }
  }

  if (draftMin.length > 0) {
    const draftMax2 = draftMax.slice();
    const draftMin2 = draftMin.slice();
    for (let i = 0; i < draftMin2.length; i++) {
      if (draftMax2.includes(draftMin[i])) {
        draftMin2.splice(draftMin2.indexOf(draftMin[i]), 1);
        draftMax2.splice(draftMax2.indexOf(draftMin[i]), 1);
        count++;
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
