<template>
  <b-container class="pb-5 mb-md-2 mb-lg-4 mb-xl-5">
    <b-row class="align-items-center pt-2 pb-3">
      <!-- Text -->
      <b-col md="6" xl="5" class="text-center text-md-start mb-5 mb-md-0">
        <h2 class="h1 pb-2 pb-lg-3">Explore New Horizons with Sepia App</h2>
        <p class="pb-2 mb-4 mb-lg-5">
          Unlock the full potential of your online presence with Sepia App. Our modern, intuitive designs are tailored to elevate your brand and engage your audience. Join the growing number of businesses transforming their digital landscapes.
        </p>
        <hr />
        <div class="d-flex justify-content-center justify-content-md-between pt-4 pt-lg-5">
          <div class="mx-3 mx-md-0">
            <div class="display-3 text-dark mb-1">100%</div>
            <span>Client satisfaction rate</span>
          </div>
          <div class="mx-3 mx-md-0">
            <div class="display-3 text-dark mb-1">500+</div>
            <span>Successful projects delivered</span>
          </div>
        </div>
      </b-col>

      <!-- Parallax gfx -->
      <b-col md="6" class="offset-xl-1">
        <Parallax
          custom-class="parallax ratio ratio-1x1 mx-auto"
          :custom-style="{ maxWidth: '550px' }"
        >
          <div class="parallax-layer position-absolute zindex-2" data-depth="-0.15">
            <img :src="avatarImg" alt="Avatar" />
          </div>
          <div
            class="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
            data-depth="0.1"
          >
            <div
              class="rounded-circle bg-primary"
              style="width: 70%; height: 70%; opacity: 0.06"
            ></div>
          </div>
          <div
            class="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
            data-depth="0.2"
          >
            <div
              class="rounded-circle bg-primary"
              style="width: 55%; height: 55%; opacity: 0.06"
            ></div>
          </div>
          <div
            class="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 zindex-3"
            data-depth="0.4"
          >
            <div
              class="d-flex justify-content-center align-items-center rounded-circle bg-primary"
              style="
                width: 93px;
                height: 93px;
                box-shadow: 0 0.1875rem 1.875rem -0.125rem rgba(99, 102, 241, 0.95);
              "
            >
              <span class="h5 text-light mb-0">10K+</span>
            </div>
          </div>
          <div
            class="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
            data-depth="0.3"
          >
            <div
              class="rounded-circle bg-primary"
              style="width: 40%; height: 40%; opacity: 0.06"
            ></div>
          </div>
        </Parallax>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import avatarImg from '@/assets/img/landing/saas-3/feature-2/avatars.png'
import Parallax from '@/components/Parallax.vue'
</script>
