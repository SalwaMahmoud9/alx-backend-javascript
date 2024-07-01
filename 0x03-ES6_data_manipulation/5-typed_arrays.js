/**
 * Create a buffer.
 * @param {Number} length - length.
 * @param {Number} position - position.
 * @param {Number} value - value in position.
 * @author SalwaMahmoud9 <https://github.com/SalwaMahmoud9>
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
