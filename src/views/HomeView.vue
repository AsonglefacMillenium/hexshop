<script setup>
import ProductList from './home/ProductList.vue'
import AppNavigation from '@/components/shared/AppNavigation.vue'
import AppFooter from '@/components/shared/AppFooter.vue'
</script>

<template>
  <div class="home-wrapper">
    <app-navigation />
    <div class="content-wrapper">
      <div class="home-wrapper__product mx-auto">
        <product-list />
      </div>
    </div>
    <app-footer />
  </div>
</template>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.home-wrapper__product {
  width: 95%;
  margin: 100px auto 0;
  flex: 1;
}
</style>
