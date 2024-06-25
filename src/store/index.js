import { createStore } from 'vuex'
// import axios from 'axios'

export default createStore({
  state: {
    cars:null,
    gaming_consoles:null,
    friends:null
  },
  getters: {
  },
  mutations: {
    setCars(state,payload){
      state.cars = payload
    },
    setGaming_consoles(state,payload){
      state.gaming_consoles = payload
    },
    setFriends(state,payload){
      state.friends = payload
    }
  },
  actions: {
    async getCars({commit}){
      // let fetchedInfo = await axios.get('https://yolandamatiwane.github.io/dejaVueAPI/data/')
      let fetchedInfo = await fetch('https://yolandamatiwane.github.io/dejaVueAPI/data/')
      let data = await fetchedInfo.json()
      console.log(data);
      let {cars,gaming_consoles,friends}= data
      // let {cars,gaming_consoles,friends}= fetchedInfo.data

      commit('setCars',cars)
      commit('setGaming_consoles',gaming_consoles)
      commit('setFriends',friends)
    }

  },
  modules: {
  }
})
