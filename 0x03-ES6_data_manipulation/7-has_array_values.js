/**
 * Check if a set contain all elementss of array.
 * @param {Set} set - collection.
 * @param {*} array - array.
 * @author SalwaMahmoud9 <https://github.com/SalwaMahmoud9>
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
