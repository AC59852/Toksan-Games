<template>
  <div class="about">
    <button @click="generateRoomRand()">Click me to generate a room</button>
  </div>
</template>
<script>

export default {
  name: 'aboutView',

  methods: {
    generateRoomRand() {
      // create a random string of 9 charaters with letters and numbers
      const room = Math.random().toString(36).substring(2, 11);

      // push the user to the room
      this.$router.push({ name: 'room', params: { id: room } });
    },
  },

  
};
</script>
