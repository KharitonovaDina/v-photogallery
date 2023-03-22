<template>
  <div>
    {{ photo.id + photo.title}}
  </div>
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
