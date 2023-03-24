import axios from 'axios';

export default {
  state: {
    photos: [],
    dialogVisible: false,
    currentPhoto: {},
  },

  mutations: {
    setPhotos(state, playLoad) {
      state.photos = playLoad;
    },

    showDialog(state) {
      state.dialogVisible = true;
    },

    hideDialog(state) {
      state.dialogVisible = false;
    },

    setCurrentPhoto(state, playLoad) {
      state.currentPhoto = playLoad;
    },
  },

  getters: {
    getAllPhotos(state) {
      return state.photos;
    },

    getDialogVisible: (state) => state.dialogVisible,

    getCurrentPhoto: (state) => state.currentPhoto,
  },

  actions: {
    fetchPhotos(contex) {
      axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then((response) => {
          contex.commit('setPhotos', response.data);
        });
    },
  },
};
