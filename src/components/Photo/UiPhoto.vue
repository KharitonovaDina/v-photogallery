<template>
    <v-col cols="4">
      <v-card @click="openPhoto">
        <v-card-title> {{photo.title}} </v-card-title>
        <v-card-text>
          <v-img
            width="200px"
            height="200px"
            :src="photo.url"
          />
        </v-card-text>
      </v-card>
    </v-col>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'UiPhoto',
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['setCurrentPhoto', 'showDialog', 'hideDialog']),
    openPhoto() {
      this.setCurrentPhoto(this.photo);
      this.showDialog();
    },
  },
};
</script>

<style scoped>

</style>
