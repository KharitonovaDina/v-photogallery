<template>
  <v-container>
    <UiPhotoForm v-if="photos.length < 11" @addPhoto="addNewPhoto"/>
    <v-row>
      <UiPhoto
        v-for="item in $store.getters.getAllPhotos"
        :key="item.id"
        :photo="item"
      />
    </v-row>
    <UiPhotoDialog/>
  </v-container>
</template>

<script>
import UiPhoto from '@/components/Photo/UiPhoto.vue';
import UiPhotoForm from '@/components/Photo/UiPhotoForm.vue';
import UiPhotoDialog from '@/components/Photo/UiPhotoDialog.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    UiPhotoDialog,
    UiPhoto,
    UiPhotoForm,
  },

  data: () => ({
    photos: [],
    // currentPhoto: {},
    // dialogVisible: false,
  }),

  mounted() {
    // this.fetchTodo();
    this.fetchPhotos();
  },

  methods: {
    ...mapActions(['fetchPhotos']),
    // fetchTodo() {
    //   this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
    //     .then((response) => {
    //       this.photos = response.data;
    //     });
    // },

    addNewPhoto(photo) {
      this.photos.push(photo);
    },
    openCard(photo) {
      this.currentPhoto = photo;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>

</style>
