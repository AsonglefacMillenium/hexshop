<script setup>
import { ref, watch, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs, Pagination } from 'swiper/modules'

import cancelIcon from '@/assets/icons/cancelIcon.svg'
// Import Swiper styles
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
        <v-row >
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

          <v-col cols="12" md="6">
            <div class="product-info h-100">
              <h2 class="product-name">{{ product.name }}</h2>
              <div class="product-price">${{ product.price }}</div>

              <v-tabs v-model="activeTab" class="mt-4">
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

              <v-btn size="large" class="order_btn w-100" @click="openOrderForm"> Order Now </v-btn>
            </div>
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
          <v-btn color="black" block size="large" type="submit"> Submit Order </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
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

.product-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
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

/* Customize swiper navigation buttons */
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

/* Customize pagination bullets */
.swiper-pagination-bullet {
  background: white;
  opacity: 0.6;
}

.swiper-pagination-bullet-active {
  background: #1976d2;
  opacity: 1;
}

.order_btn {
  margin-top: auto;
  background-color: #000000;
  color: white;
}

.form__product_name {
  width: 75%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

@media (max-width: 800px) {
  .modalcard__wrapper {
    width: 100%;

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
  .card-title{
    margin-bottom: 0
  }

  .swiper-container {
  margin-top: -100px;
}

}
</style>
