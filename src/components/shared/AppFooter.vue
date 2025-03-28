<template>
  <v-footer class="footer" color="surface-light">
    <v-container class="d-flex flex-column align-center">
      <div class="d-flex flex-wrap justify-center ga-2 mb-4">
        <v-btn v-for="link in links" :key="link" :text="link" variant="text" rounded></v-btn>
      </div>

      <div class="text-center">{{ new Date().getFullYear() }} — <strong>CEIN</strong></div>
    </v-container>
  </v-footer>
</template>

<script setup>
const links = ['Shop', 'New Arrivals', 'Sales', 'Services', 'Journal']
</script>

<style scoped>
.footer {
  width: 100%;
  margin-top: auto;
  padding: 20px 0;
}
</style>
