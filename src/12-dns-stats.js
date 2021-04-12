/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domain) {
  const reversedDom = domain.map((item) => item.split('.').reverse());
  const objAnswer = {};
  reversedDom.forEach((item) => {
    for (let i = 0; i < item.length; i++) {
      const a = `.${item.slice(0, i + 1).join('.')}`;
      if (objAnswer[a]) {
        objAnswer[a] += 1;
      } else {
        objAnswer[a] = 1;
      }
    }
  });
  return objAnswer;
}

module.exports = getDNSStats;
