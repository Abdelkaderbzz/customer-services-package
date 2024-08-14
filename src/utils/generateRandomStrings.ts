import { v4 as uuidv4 } from 'uuid';

export function getGuestName() {
  const randomString = uuidv4().split('-').join('');
  return 'guest-' + randomString;
}
export function getGuestId() {
  const uniqueId = uuidv4().split('-').join('');
  return uniqueId;
}
