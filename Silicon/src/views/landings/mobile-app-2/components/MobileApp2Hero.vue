<template>
  <b-container class="py-5 mt-5 mt-md-4 mb-md-3 mb-lg-4 mb-xl-5">
    <b-row class="align-items-center align-items-lg-stretch mb-2 mb-sm-3">
      <!-- Parallax gfx -->
      <b-col
        xl="7"
        md="6"
        class="d-flex justify-content-center justify-content-md-end overflow-hidden order-md-2 mt-n5 mt-sm-n4 mt-md-0"
      >
        <Parallax custom-class="position-relative mt-5" :custom-style="{ maxWidth: '660px' }">
          <div
            class="bg-gradient-primary position-absolute start-0 bottom-0 w-100 rounded-3 opacity-15"
            style="height: 95%"
          ></div>
          <div class="parallax zindex-2">
            <div class="parallax-layer zindex-2 mb-n3" data-depth="0.1">
              <img :src="layer1Img" alt="Device" />
            </div>
            <div class="parallax-layer" data-depth="-0.22">
              <img :src="layer2Img" alt="Bubble" />
            </div>
            <div class="parallax-layer" data-depth="0.3">
              <img :src="layer3Img" alt="Bubble" />
            </div>
          </div>
        </Parallax>
      </b-col>

      <!-- Text -->
      <div class="col-xl-5 col-md-6 d-flex flex-column order-md-1">
        <div class="text-center text-md-start pt-4 pt-sm-5 pt-xl-0 mt-2 mt-sm-0 mt-lg-auto">
          <h1 class="display-3 mb-4">Buy Trade and Store in One App</h1>
          <p class="fs-lg mb-0 d-md-none d-xl-block">
            Odio venenatis a, non egestas ut ultrices ultrices quis orci ipsum eu tellus tempor sed
            amet mauris pellentesque ut vitae.
          </p>
          <div
            class="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start pt-2 mt-4 mt-md-5"
          >
            <a href="#" class="btn btn-dark btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3">
              <img :src="appStoreLightImg" class="light-mode-img" width="124" alt="App Store" />
              <img :src="appStoreDarkImg" class="dark-mode-img" width="124" alt="App Store" />
            </a>
            <a href="#" class="btn btn-dark btn-lg px-3 py-2 mb-3">
              <img :src="googlePlayLightImg" class="light-mode-img" width="139" alt="Google Play" />
              <img :src="googlePlayDarkImg" class="dark-mode-img" width="139" alt="Google Play" />
            </a>
          </div>
        </div>
        <div
          class="d-sm-flex d-md-none d-lg-flex justify-content-center justify-content-md-start mt-auto pt-3 pt-md-0"
        >
          <div class="d-flex align-items-center w-100 pe-xxl-2 mb-2 mb-md-0">
            <div class="h1 mb-0">23k+</div>
            <div class="ps-2 ms-1">downloads of the application</div>
          </div>
          <div class="vr d-none d-sm-block text-border my-2 mx-4"></div>
          <div class="d-flex align-items-center w-100 ps-xxl-2">
            <div class="h1 mb-0">13b+</div>
            <div class="ps-2 ms-1">trading volume per every day</div>
          </div>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import {
  layer1Img,
  layer2Img,
  layer3Img,
  appStoreDarkImg,
  appStoreLightImg,
  googlePlayLightImg,
  googlePlayDarkImg
} from '@/assets/data/image'
import Parallax from '@/components/Parallax.vue'
</script>
