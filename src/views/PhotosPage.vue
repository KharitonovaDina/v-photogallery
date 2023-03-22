<template>
  <v-container>
    <v-row>
      <UiPhoto
        v-for="item in photos"
        :key="item.id"
        :photo="item"
      />
    </v-row>
  </v-container>
</template>

<script>
import UiPhoto from '@/components/Photo/UiPhoto.vue';

export default {
  components: {
    UiPhoto,
  },

  data: () => ({
    photos: [],
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
  },
};
</script>

<style scoped>

</style>
