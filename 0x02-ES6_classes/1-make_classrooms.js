import ClassRoom from './0-classroom';

/**
 * array {@link ClassRoom}with size.
 * @returns array {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
