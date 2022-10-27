<template>
  <section id="room">
    <h1>test room</h1>
    <!-- create a div where the route link can be clicked to be copied -->
    <div id="room-link" @click="copyRoomLink($event)" style="width: 600px; height: 100px; background-color: #456789; display: flex; flex-direction: column; color: white">
      <span>https://localhost:8080/{{ room }}</span>
      <span>Click to copy</span>
    </div>
  </section>
</template>

<script>
import SocketioService from '@/services/socketio.service';
export default {

  name: 'roomView',

  data() {
    return {
      room: this.$route.params.id,
    };
  },

  created() {
    SocketioService.setupGameRoom(this.room);
  },

  beforeUnmount() {
    SocketioService.disconnect();
  },

  methods: {
    copyRoomLink(event) {
      // get the text from the span
      const roomLink = event.target.children[0].innerText;

      // copy the text
      navigator.clipboard.writeText(roomLink);

      alert('Copied to clipboard');
    },
  },

}
</script>

<style>

</style>