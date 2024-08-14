import io from 'socket.io-client';
import useGoogleFonts from '../hooks/useGoogleFonts';
import { getGuestId, getGuestName } from '../utils/generateRandomStrings';

export type ListType = string | number;
export interface ITakiPopupsProps {
  memberId?: string | number;
  name?: string;
  meta_data?: {
    [key: string]: string | boolean | number | Date | Array<ListType>;
  };
}
export const TakiPopups = ({ name, memberId , meta_data }: ITakiPopupsProps) => {
  const BASE_SOCKET_URL = import.meta.env.VITE_APP_SOCKET_URL;
  const socket = io(BASE_SOCKET_URL);
  useGoogleFonts();
  socket.emit('hey-server-web', {
    name: name || getGuestName(),
    memberId: memberId || getGuestId(),
    ...meta_data
  });

  socket.on(
    'receive-popup-mobile',
    async ({ id, token, content, priority }) => {}
  );

  return null
};
