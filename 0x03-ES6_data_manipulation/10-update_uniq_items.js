/**
 * Change quantity of grocery items to 100.
 * @param {Map<String, number>} map - A map of the name
 * @author SalwaMahmoud9 <https://github.com/SalwaMahmoud9>
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
