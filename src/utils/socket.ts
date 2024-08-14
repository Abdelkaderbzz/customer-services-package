import { Socket, io } from 'socket.io-client';
import { ListType } from '../package/TakiPopups';

class SocketManager implements ISocketManager {
  private socket: Socket | null;

  constructor() {
    this.socket = null;
    this._connectSocket();
  }

  public _connectSocket(): void {
    if (this.socket) return;
    const socket = io(import.meta.env.VITE_APP_SOCKET_BASE_URL);
    this.socket = socket;
    socket.on('connect', () => {
      this.socket = socket;
      this._listen();
    });
    socket.on('error', (e) => {
      console.error('socket error', e);
    });
  }

  public _sendMessage(event: string, message: IMessage): void {
    if (!this.socket) return;
    this.socket.emit(event, message);
  }

  private _listen(): void {
    this.socket?.on(SOCKET_GET_MESSAGE, (socket: Socket) => {
      console.log(socket);
    });
  }
}

export interface ISocketManager {
  _connectSocket(): void;
  _sendMessage(event: string, message: IMessage): void;
}

interface IMessage {
  [key: string]: string | boolean | number | Date | Array<ListType>;
}
export const socketManager = new SocketManager();
