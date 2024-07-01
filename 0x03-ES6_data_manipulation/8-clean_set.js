/**
 * Join a set of strings with a dash
 * @param {Set<String>} set - collection of strings.
 * @param {String} startString - startString
 * @author SalwaMahmoud9 <https://github.com/SalwaMahmoud9>
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
