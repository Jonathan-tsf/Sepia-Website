<template>
  <!-- Footer -->
  <footer class="footer pt-5 pb-4 pb-lg-5">
    <b-container class="text-center pt-lg-3">
      <div class="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
        <img :src="logoImg" class="me-2" width="60" alt="Sepia" />
        <span class="fs-4">Sepia</span>
      </div>
      <ul class="nav justify-content-center pt-3 pb-4 pb-lg-5">
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Overview</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Blog</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contacts</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Account</a></li>
      </ul>
      <div class="d-flex flex-column flex-sm-row justify-content-center">
        <a href="#" class="btn btn-dark btn-lg px-3 py-2 me-sm-4 mb-3">
          <img :src="appStoreLightImg" class="light-mode-img" width="124" alt="App Store" />
          <img :src="appStoreDarkImg" class="dark-mode-img" width="124" alt="App Store" />
        </a>
        <a href="#" class="btn btn-dark btn-lg px-3 py-2 mb-3">
          <img :src="googlePlayLightImg" class="light-mode-img" width="139" alt="Google Play" />
          <img :src="googlePlayDarkImg" class="dark-mode-img" width="139" alt="Google Play" />
        </a>
      </div>
      <div class="d-flex justify-content-center pt-4 mt-lg-3">
        <a href="#" class="btn btn-icon btn-secondary btn-facebook mx-2" aria-label="Facebook">
          <Icon :icon="FacebookIcon" class="bx"></Icon>
        </a>
        <a href="#" class="btn btn-icon btn-secondary btn-instagram mx-2" aria-label="Instagram">
          <Icon :icon="InstagramIcon" class="bx"></Icon>
        </a>
        <a href="#" class="btn btn-icon btn-secondary btn-twitter mx-2" aria-label="Twitter">
          <Icon :icon="TwitterIcon" class="bx"></Icon>
        </a>
        <a href="#" class="btn btn-icon btn-secondary btn-youtube mx-2" aria-label="YouTube">
          <Icon :icon="YoutubeIcon" class="bx"></Icon>
        </a>
      </div>
      <p class="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
        <span class="opacity-80">&copy; All rights reserved. Made by </span>
        <a
          class="nav-link d-inline-block p-0"
          
          target="_blank"
          rel="noopener"
          >Sepia</a
        >
      </p>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import logoImg from '@/assets/img/animated logo.svg'
import appStoreLightImg from '@/assets/img/market/appstore-light.svg'
import appStoreDarkImg from '@/assets/img/market/appstore-dark.svg'
import googlePlayLightImg from '@/assets/img/market/googleplay-light.svg'
import googlePlayDarkImg from '@/assets/img/market/googleplay-dark.svg'
import { Icon } from '@iconify/vue'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import InstagramIcon from '@iconify/icons-bx/bxl-instagram'
import TwitterIcon from '@iconify/icons-bx/bxl-twitter'
import YoutubeIcon from '@iconify/icons-bx/bxl-youtube'
</script>
