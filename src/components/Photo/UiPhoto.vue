<template>
    <v-col cols="4">
      <v-card>
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
export default {
  name: 'UiPhoto',
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
