/**
 * Retrieve students in a location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - students.
 * @param {String} city - location.
 * @author SalwaMahmoud9 <https://github.com/SalwaMahmoud9>
 * @returns
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
