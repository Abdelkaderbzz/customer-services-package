// socketService.js
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Socket, io } from 'socket.io-client';

const BASE_SOCKET_URL = import.meta.env.VITE_APP_SOCKET_URL;

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export const initiateSocket = ({ memberId }: { memberId :string}) => {
  socket = io(BASE_SOCKET_URL, {
    transports: ['websocket'],
    secure: true,
    query: {
      'x-client-id': memberId,
    },
  });  
};

export const disconnectSocket = (): void => {
  if (socket) socket.disconnect();
};

export const subscribeToEvent = <T>(
  eventName: string,
  callback: (data: T) => void
): void => {
  if (!socket) return;
  socket.on(eventName, callback);
};

export const emitEvent = <T>(eventName: string, data: T): void =>
{
  if (!socket) return;
  socket.emit(eventName, data);
};
