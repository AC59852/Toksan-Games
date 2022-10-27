import { io } from 'socket.io-client';
import store from '../store';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
  }

  setupGameRoom(roomId) {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT + '/game');
    this.socket.emit('joinRoom', roomId);
  }

  retrieveAllRooms() {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT + '/rooms');

    this.socket.on('allRooms', (data) => {
      console.log(data)
      // only add rooms that have an id of 9 characters
      var rooms = data.filter((room) => {
        return room.id.length === 9;
      });

      store.state.rooms = rooms;
    })
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();