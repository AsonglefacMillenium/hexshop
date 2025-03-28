<!-- <script setup>
import { products } from '@/data/product-data'
import ProductCard from '@/components/product/ProductCard.vue'
import ProductModal from '@/components/product/ProductModal.vue'
import { ref } from 'vue'


const selectedProduct = ref(null)
const showDetails = ref(false)
const favoriteCount = ref(0)
const favorites = ref([])

const openProductDetails = (product) => {
  selectedProduct.value = product
  showDetails.value = true
}

const closeDetails =() => {
  showDetails.value = false
  // Small delay to ensure modal is fully closed before reopening
  setTimeout(() => {
    selectedProduct.value = null
  }, 300)
}


const handleFavorite = ({ product, favorite }) => {
  if (favorite) {
    favorites.value.push(product.id)
  } else {
    favorites.value = favorites.value.filter(id => id !== product.id)
  }
  favoriteCount.value = favorites.value.length
}

// Expose favoriteCount to parent components if needed
defineExpose({
  favoriteCount
})
</script> -->

<!-- <template>
  <div class="w-100">
    <v-list class="w-100 d-flex flex-wrap ga-2">
      <v-list-item class="item mb-10" v-for="(product, i) in products" :key="i" :value="product">
        <product-card
          :image="product.images[0]"
          :name="product.name"
          :price="product.price"
          :product="product"
          @click="openProductDetails"
          @favorite="handleFavorite"
          :is-favorite="favorites.includes(product.id)"
        />
      </v-list-item>
    </v-list>

    <product-modal
      v-if="selectedProduct"
      :product="selectedProduct"
      :show="showDetails"
      @close="closeDetails"
    />
  </div>
</template> -->

<!-- <style>
.item {
  width: 18%;
}

@media (max-width: 1200px) {
  .item {
    width: 18%;
  }
}

@media (max-width: 1024px) {
  .item {
    width: 30%;
  }
}

@media (max-width: 600px) {
  .item {
    width: 100%;
  }
}

@media (max-width: 400px) {
  .item {
    width: 100%;
  }
}
</style> -->





<script setup>
import { products } from '@/data/product-data'
import ProductCard from '@/components/product/ProductCard.vue'
import ProductModal from '@/components/product/ProductModal.vue'
import { ref, computed } from 'vue'

const selectedProduct = ref(null)
const showDetails = ref(false)
const favoriteCount = ref(0)
const favorites = ref([])
const activeCategory = ref('all') // Default to show all products

// Get unique categories from products
const categories = computed(() => {
  const allCategories = ['all', ...new Set(products.map(product => product.category))]
  return allCategories.map(category => ({
    name: category,
    label: category === 'all' ? 'All Products' : formatCategoryName(category)
  }))
})

// Format category names for display
function formatCategoryName(category) {
  return category
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Filter products by active category
const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') return products
  return products.filter(product => product.category === activeCategory.value)
})

const openProductDetails = (product) => {
  selectedProduct.value = product
  showDetails.value = true
}

const closeDetails = () => {
  showDetails.value = false
  setTimeout(() => {
    selectedProduct.value = null
  }, 300)
}

const handleFavorite = ({ product, favorite }) => {
  if (favorite) {
    favorites.value.push(product.id)
  } else {
    favorites.value = favorites.value.filter(id => id !== product.id)
  }
  favoriteCount.value = favorites.value.length
}
</script>

<template>
  <div class="w-100 product-listing">

    <div>
<h3 class="text-h3 font-weight-bold mt-10 mb-5">
Shop
</h3>
    </div>
    <!-- Category Navigation -->
    <div class="category-nav mb-8">
      <v-tabs v-model="activeCategory" center-active show-arrows>
        <v-tab
          v-for="category in categories"
          :key="category.name"
          :value="category.name"
          class="text-capitalize"
        >
          {{ category.label }}
        </v-tab>
      </v-tabs>
    </div>

    <!-- Product Grid -->
    <div class="product-grid">
      <product-card
        v-for="(product, i) in filteredProducts"
        :key="i"
        :image="product.images[0]"
        :name="product.name"
        :price="product.price"
        :product="product"
        @click="openProductDetails"
        @favorite="handleFavorite"
        :is-favorite="favorites.includes(product.id)"
      />
    </div>

    <product-modal
      v-if="selectedProduct"
      :product="selectedProduct"
      :show="showDetails"
      @close="closeDetails"
    />
  </div>
</template>

<style scoped>
.product-listing {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.category-nav {
  border-bottom: 1px solid #e0e0e0;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  padding: 20px 0;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr;
  }

  .category-nav {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .category-nav::-webkit-scrollbar {
    display: none;
  }
}
</style>
