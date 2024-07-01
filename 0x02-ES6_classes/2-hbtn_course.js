/**
 * Course.
 */
export default class HolbertonCourse {
  /**
   * new @see {@link HolbertonCourse}.
   *
   * @param {String} name - name.
   * @param {Number} length - length.
   * @param {String[]} students - students.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Get name.
   */
  get name() {
    return this._name;
  }

  /**
   * Set name.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Get length.
   */
  get length() {
    return this._length;
  }

  /**
   * Set length.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Get students.
   */
  get students() {
    return this._students;
  }

  /**
   * Set students.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
