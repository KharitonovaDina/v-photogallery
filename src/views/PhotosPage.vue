<template>
  <v-container>
    <UiPhoto
      :key="photo.id" v-for="photo in photos"
      :photo="photo"
    />
  </v-container>
</template>

<script>
import UiPhoto from '@/components/Photo/UiPhoto.vue';

export default {
  components: {
    UiPhoto,
  },
  data: () => ({
    photos: [
      { id: 1, title: 'Фото 1' },
      { id: 2, title: 'Фото 2' },
      { id: 3, title: 'Фото 3' },
      { id: 4, title: 'Фото 4' },
    ],
  }),
};
</script>

<style scoped>

</style>
