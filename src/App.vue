<template>
  <v-app>
    <UiNavBar/>
    <router-view/>
  </v-app>
</template>

<script>
import UiNavBar from '@/components/UiNavBar.vue';

export default {
  name: 'App',
  components: {
    UiNavBar,
  },
};
</script>
