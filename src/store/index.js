import { createStore } from 'vuex'

export default createStore({
  state: {
    rooms: [],
  },
  getters: {
  },
  mutations: {
    setRooms(state, rooms) {
      state.rooms = rooms;
    }
  },
  actions: {
  },
  modules: {
  }
})
