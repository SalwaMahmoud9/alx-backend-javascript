/**
 * Retrieve ids of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - students.
 * @author SalwaMahmoud9 <https://github.com/SalwaMahmoud9>
 * @returns
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
