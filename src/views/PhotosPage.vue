<template>
  <v-container>
    <UiPhotoForm v-if="photos.length < 11" @addPhoto="addNewPhoto"/>
    <v-row>
      <UiPhoto
        v-for="item in photos"
        :key="item.id"
        :photo="item"
        @openPhoto="openCard"
      />
    </v-row>
    <UiPhotoDialog :photo="currentPhoto" v-model="dialogVisible"/>
  </v-container>
</template>

<script>
import UiPhoto from '@/components/Photo/UiPhoto.vue';
import UiPhotoForm from '@/components/Photo/UiPhotoForm.vue';
import UiPhotoDialog from '@/components/Photo/UiPhotoDialog.vue';

export default {
  components: {
    UiPhotoDialog,
    UiPhoto,
    UiPhotoForm,
  },

  data: () => ({
    photos: [],
    currentPhoto: {},
    dialogVisible: false,
  }),

  mounted() {
    this.fetchTodo();
  },

  methods: {
    fetchTodo() {
      this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then((response) => {
          this.photos = response.data;
        });
    },

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
