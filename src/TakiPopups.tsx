import io from 'socket.io-client';
import useGoogleFonts from './hooks/useGoogleFonts';

export const TakiPopups = () => {
  const BASE_SOCKET_URL = import.meta.env.VITE_APP_SOCKET_URL;
  const socket = io(BASE_SOCKET_URL);
  useGoogleFonts();

  socket.emit('hey-server-web', {
    domaineName: 'studentnew.takiacademy.me',
    memberId: '9e2u8r',
  });

  socket.on(
    'receive-popup-mobile',
    async ({ id, token, content, priority }) =>
    {
      console.log({id, token, content, priority})
    }
  );
  return (
    <div>
      <p style={{ fontFamily: 'Tajawal, sans-serif ' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed architecto
        accusamus aut illo dolores? Magni voluptatibus neque id provident
        laudantium optio, cum velit corporis dolores vitae sed cumque magnam
        explicabo.
      </p>
      <h2 style={{ fontFamily: "Cairo, sans-serif ",fontWeight:600}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        tempora assumenda libero quasi ad sed illo reiciendis, pariatur vel
        placeat quaerat qui porro sint corrupti a saepe, architecto explicabo
        voluptate.
      </h2>
    </div>
  );
};
