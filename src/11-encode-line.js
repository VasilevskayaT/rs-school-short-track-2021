/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(strArg) {
  return strArg.split('').slice(1).reduce((acc, val, index, arr) => {
    if (acc.currentVal === val) {
      acc.counts += 1;

      if (index === arr.length - 1) {
        acc.resultString += `${acc.counts === 1 ? '' : acc.counts}${acc.currentVal}`;
      }

      return acc;
    }
    if (index === arr.length - 1) {
      acc.resultString += `${acc.counts === 1 ? '' : acc.counts}${acc.currentVal}${val}`;
      return acc;
    }
    acc.resultString += `${acc.counts === 1 ? '' : acc.counts}${acc.currentVal}`;
    acc.currentVal = val;
    acc.counts = 1;
    return acc;
  }, { currentVal: strArg[0], counts: 1, resultString: '' }).resultString;
}

module.exports = encodeLine;
