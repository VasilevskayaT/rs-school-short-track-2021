/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(namesStart) {
  if (namesStart.length === 0 || namesStart.length === 1) return namesStart;
  const arr = [];
  for (let i = 0; i < namesStart.length; i++) {
    if (!arr.includes(namesStart[i])) {
      arr.push(namesStart[i]);
    } else {
      const k = 1;
      if (arr.includes(`${namesStart[i]}(${k})`)) {
        arr.push(`${namesStart[i]}(${k + 1})`);
      } else arr.push(`${namesStart[i]}(${k})`);
    }
  }
  return arr;
}

module.exports = renameFiles;
