<script setup>
import { ref } from 'vue'
import LikeIcon from '@/assets/icons/likeIcon.svg'
import AccountIcon from '@/assets/icons/UserCircle.svg'
import MenuIcon from '@/assets/icons/MenuIcon.svg'
import cancelIcon from '@/assets/icons/cancelIcon.svg'

const favoriteCount = ref(0)
const mobileMenu = ref(false)

const navItems = [
  { text: 'Shop', route: '/' },
  { text: 'New Arrivals', route: '/new-arrivals' },
  { text: 'Sales', route: '/sales' },
  { text: 'Journal', route: '/journal' },
]
</script>

<template>
  <v-layout>
    <v-app-bar app flat height="80" class="navbar px-0 px-md-12 w-10">
      <v-app-bar-title class="logo text-h5 font-weight-bold mr-0 mr-md-12">
        <span class="primary--text">CEIN</span>.
      </v-app-bar-title>

      <div class="d-none d-md-flex align-center">
        <v-btn
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.route"
          variant="text"
          class="nav-btn text-capitalize mx-1"
          exact
        >
          {{ item.text }}
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <div class="d-none d-md-flex align-center">
        <v-btn icon variant="text" class="mx-1">
          <v-icon size="24" flat>
            <img :src="AccountIcon" alt="Close" style="width: 24px; height: 24px" />
          </v-icon>
        </v-btn>
        <v-btn icon variant="text" class="mx-1">
          <v-badge :content="favoriteCount" color="primary">
            <v-icon size="24" flat>
              <img :src="LikeIcon" alt="Close" style="width: 24px; height: 24px" />
            </v-icon>
          </v-badge>
        </v-btn>
      </div>

      <div class="icons-mobile d-md-flex align-center">
        <v-btn icon variant="text" class="icons-mobile__account">
          <v-icon size="16" flat>
            <img :src="AccountIcon" alt="Close" style="width: 20px; height: 20px" />
          </v-icon>
        </v-btn>
        <v-btn icon variant="text" class="icons-mobile__like">
          <v-badge :content="favoriteCount" color="primary">
            <v-icon size="16" flat>
              <img :src="LikeIcon" alt="Close" style="width: 20px; height: 20px" />
            </v-icon>
          </v-badge>
        </v-btn>
      </div>

      <v-btn class="menu-icon" @click="mobileMenu = !mobileMenu">
        <v-icon>
          <v-img :src="MenuIcon" height="40" width="40" />
        </v-icon>
      </v-btn>

      <transition name="slide-fade">
        <div v-if="mobileMenu" class="mobile-menu-overlay">
          <div class="mobile-menu-content">
            <div class="mobile-menu-header">
              <v-btn icon @click="mobileMenu = false" class="close-btn">
                <v-icon>
                  <v-img :src="cancelIcon" height="40" width="40" />
                </v-icon>
              </v-btn>
            </div>
            <v-list class="mobile-nav-items">
              <v-list-item
                v-for="(item, i) in navItems"
                :key="i"
                :to="item.route"
                @click="mobileMenu = false"
                class="mobile-nav-item"
              >
                <v-list-item-title class="text-h6">{{ item.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </div>
      </transition>
    </v-app-bar>
  </v-layout>
</template>

<style scoped>
.logo {
  letter-spacing: -1px;
}

.nav-btn {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
}

.v-app-bar {
  box-shadow: none !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
}

/* Active navigation item indicator */
.v-btn--active {
  position: relative;
}

.v-btn--active::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  background-color: currentColor;
  border-radius: 50%;
}

.menu-icon {
  display: none;
}

.icons-mobile {
  display: none;
}

.mobile-menu-overlay {
  display: none;
}

.icons-mobile__account {
  display: none;
}

.icons-mobile .icons-mobile__like {
  display: none;
}
@media (max-width: 920px) {
 

  .menu-icon {
    display: block;
  }

  .icons-mobile {
    display: flex;
    gap: 0;
  }

  .mobile-menu-overlay {
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: flex-end;
  }

  .mobile-menu-content {
    width: 80%;
    max-width: 400px;
    height: 100%;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .mobile-menu-header {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 20px;
  }

  .close-btn {
    margin-right: -8px;
  }

  .mobile-nav-items {
    flex-grow: 1;
  }

  .mobile-nav-item {
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .mobile-menu-footer {
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid #f0f0f0;
  }

  /* Animation */
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>
