<template>
  <section id="rooms">
    <h1>All Rooms</h1>
    <div class="rooms__wrapper">
      <div class="rooms__room" v-for="(room, index) in updatedRooms" :key=index>
      <h2>Room ID: {{room.id}}</h2>
      <p>Players: {{room.players}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import SocketioService from '@/services/socketio.service';
export default {
  name: 'roomsView',

  data() {
    return {
      rooms: this.$store.state.rooms,
    };
  },

  created() {
    SocketioService.retrieveAllRooms();

    // every 15 seconds, retrieve all rooms again
    setInterval(() => {
      SocketioService.retrieveAllRooms();
    }, 15000);
  },

  computed: {
    updatedRooms() {
      return this.$store.state.rooms;
    },
  },
}
</script>

<style>

</style>