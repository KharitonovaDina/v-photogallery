<template>
  <v-container fluid>
    <v-app-bar
      color="orange"
      dark
    >
      <v-spacer/>
      <v-btn outlined class="ml-3">
        <router-link to="/">Главная</router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link to="/photos"> Фото </router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: 'UiNavBar',
};

</script>

<style scoped>

</style>
