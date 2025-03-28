<script setup>
import { ref, watch, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs, Pagination } from 'swiper/modules'
import cancelIcon from '@/assets/icons/cancelIcon.svg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

const props = defineProps({
  product: Object,
  show: Boolean,
})

const emit = defineEmits(['close'])
const activeTab = ref('description')
const thumbsSwiper = ref(null)
const mainSwiper = ref(null)
const showOrderForm = ref(false)

const modules = [Navigation, Thumbs, Pagination]

function setThumbsSwiper(swiper) {
  thumbsSwiper.value = swiper
}

function onMainSwiper(swiper) {
  mainSwiper.value = swiper
}

function openOrderForm() {
  showOrderForm.value = true
}

// Reset swiper when product changes
watch(
  () => props.product,
  async () => {
    await nextTick()
    if (mainSwiper.value) {
      mainSwiper.value.destroy(true, true)
      mainSwiper.value.init()
      mainSwiper.value.update()
    }
    if (thumbsSwiper.value) {
      thumbsSwiper.value.destroy(true, true)
      thumbsSwiper.value.init()
      thumbsSwiper.value.update()
    }
  },
)

// Handle dialog visibility changes
watch(
  () => props.show,
  async (newVal) => {
    if (newVal) {
      await nextTick()
      if (mainSwiper.value) {
        mainSwiper.value.init()
        mainSwiper.value.update()
      }
      if (thumbsSwiper.value) {
        thumbsSwiper.value.init()
        thumbsSwiper.value.update()
      }
    }
  },
)
</script>

<template>
  <v-dialog :model-value="show" max-width="900" @update:model-value="emit('close')" scrollable>
    <v-card class="modalcard__wrapper">
      <v-card-title class="card-title d-flex justify-end align-center">
        <v-btn icon @click="emit('close')">
          <v-icon color="red" size="24" flat>
            <img :src="cancelIcon" alt="Close" style="width: 24px; height: 24px" />
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text v-if="product" class="p-0 m-0">
        <v-row>
          <!-- Left column - Image gallery -->
          <v-col cols="12" md="6">
            <div class="swiper-container">
              <swiper
                @swiper="onMainSwiper"
                :modules="modules"
                :navigation="true"
                :pagination="{ clickable: true }"
                :thumbs="{ swiper: thumbsSwiper }"
                class="main-swiper"
                :key="product.id"
              >
                <swiper-slide v-for="(img, index) in product.images" :key="index">
                  <v-img :src="img" height="400" contain />
                </swiper-slide>
              </swiper>

              <swiper
                @swiper="setThumbsSwiper"
                :modules="modules"
                :spaceBetween="10"
                :slidesPerView="4"
                :freeMode="true"
                :watchSlidesProgress="true"
                class="thumb-swiper mt-4"
                :key="'thumbs-' + product.id"
              >
                <swiper-slide v-for="(img, index) in product.images" :key="index">
                  <v-img :src="img" height="80" class="thumbnail" />
                </swiper-slide>
              </swiper>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="product-info-col">
            <div class="scrollable-content">
              <h2 class="product-name">{{ product.name }}</h2>
              <div class="product-price">${{ product.price }}</div>

              <v-tabs v-model="activeTab" class="mt-4" hide-slder show-arrows="false">
                <v-tab value="description">Description</v-tab>
                <v-tab value="specs">Specifications</v-tab>
              </v-tabs>

              <v-window v-model="activeTab" class="mt-4">
                <v-window-item value="description">
                  <p>{{ product.description }}</p>
                </v-window-item>
                <v-window-item value="specs">
                  <v-table>
                    <tbody>
                      <tr v-for="(value, key) in product.specs" :key="key">
                        <td class="font-weight-bold">{{ key }}</td>
                        <td>{{ value }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-window-item>
              </v-window>
            </div>

            <v-btn size="large" class="order-btn" @click="openOrderForm"> Order Now </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog v-model="showOrderForm" max-width="500">
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center">
        <div class="form__product_name font-weight-bold d-flex flex-column">
          <p class="text-grey">Order:</p>
          <p>{{ product?.name }}</p>
        </div>
        <v-btn icon @click="showOrderForm = false">
          <v-icon>
            <img :src="cancelIcon" alt="Close" style="width: 24px; height: 24px" />
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-form class="mt-4">
          <v-text-field label="Name" variant="outlined" required></v-text-field>
          <v-text-field label="Phone" variant="outlined" required></v-text-field>
          <v-btn color="black" block size="large" type="submit">Submit Order</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.modalcard__wrapper {
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.swiper-container {
  margin-top: -50px;
}

.main-swiper {
  height: 400px;
  width: 100%;
}

.main-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.thumb-swiper {
  height: 100px;
  padding: 10px 0;
}

.thumb-swiper .swiper-slide {
  opacity: 0.4;
  cursor: pointer;
}

.thumb-swiper .swiper-slide-thumb-active {
  opacity: 1;
}

.thumbnail {
  border: 2px solid transparent;
  border-radius: 4px;
}

.product-info-col {
  display: flex;
  flex-direction: column;
  height: calc(90vh - 60px);
  padding-bottom: 0;
}

.scrollable-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 16px;
}

.product-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
}

.product-price {
  font-size: 20px;
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 16px;
}

.order-btn {
  background-color: #000000;
  color: white;
  width: 100%;
  position: sticky;
  bottom: 0;
  z-index: 2;
  margin-top: 16px;
}

.swiper-button-next,
.swiper-button-prev {
  color: white;
  background: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
}

.swiper-pagination-bullet {
  background: white;
  opacity: 0.6;
}

.swiper-pagination-bullet-active {
  background: #1976d2;
  opacity: 1;
}

.form__product_name {
  width: 75%;
}

.v-tabs >>> .v-slide-group__prev,
.v-tabs >>> .v-slide-group__next {
  display: none !important;
}

@media (max-width: 800px) {
  .modalcard__wrapper {
    width: 100%;
  }

  .swiper-container {
    margin-top: -100px;
  }

  .product-info-col {
    height: auto;
    max-height: 50vh;
  }

  .form__product_name {
    width: 75%;
  }

  .form__product_name p {
    width: 100%;
    font-size: 16px;
    display: block;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .card-title {
    margin-bottom: 0;
  }
}
</style>
