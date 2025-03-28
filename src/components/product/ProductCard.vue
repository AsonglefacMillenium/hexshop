<script setup>
import { ref } from 'vue'
import LikeIcon from '@/assets/icons/likeIcon.svg'

const props = defineProps({
  image: String,
  name: String,
  price: [String, Number],
  product: Object,
})

const emit = defineEmits(['click', 'favorite'])
const isFavorite = ref(false)

function handleClick() {
  emit('click', props.product)
}

function toggleFavorite(e) {
  e.stopPropagation()
  isFavorite.value = !isFavorite.value
  emit('favorite', {
    product: props.product,
    favorite: isFavorite.value,
  })
}
</script>

<template>
  <v-card class="product-card" @click="handleClick" flat>
    <div class="image-container">
      <v-img height="300" :src="props.image" cover width="100%" class="product-image" />

      <button
        class="favorite-btn"
        @click="toggleFavorite"
        :style="{ backgroundColor: isFavorite ? '#ff5252' : 'white' }"
      >
        <img :src="LikeIcon" alt="Favorite" class="heart-icon" />
      </button>
    </div>

    <v-card-item class="card-item">
      <v-card-title class="product-name">{{ props.name }}</v-card-title>
      <v-card-subtitle class="product-price">${{ props.price }}</v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<style scoped>
.product-card {
  width: 100%;
  cursor: pointer;
  background: transparent;
  transition: transform 0.3s ease;
  box-shadow: none;
}

.product-card:hover {
  transform: translateY(-5px);
}

.image-container {
  position: relative;
}

.product-image {
  background: #f5f5f5;
}

.favorite-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.2s ease;
  padding: 0;
}

.favorite-btn:hover {
  opacity: 1;
  transform: scale(1.1);
}

.heart-icon {
  width: 18px;
  height: 18px;
}

.card-item {
  padding: 12px 0 0 0 !important;
  display: block;
}

.product-name {
  color: #000;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  padding: 0;
  margin: 0 0 4px 0;
  white-space: normal;
}

.product-price {
  color: #000;
  font-weight: 700;
  font-size: 16px;
  padding: 0;
  margin: 0;
}
</style>
