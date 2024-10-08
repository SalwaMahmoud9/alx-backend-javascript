/**
 * Update grades in a city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - students.
 * @param {*} city - city.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - new grades.
 * @author SalwaMahmoud9 <https://github.com/SalwaMahmoud9>
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
