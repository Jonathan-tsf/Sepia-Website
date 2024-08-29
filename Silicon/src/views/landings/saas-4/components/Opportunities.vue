<template>
  <b-container class="mb-5 pb-lg-5 pb-md-4 pb-3">
    <b-row class="align-items-center mb-xl-5 mb-4">
      <!-- Text -->
      <b-col md="6" xl="5" class="text-center text-md-start mb-5 mb-md-0">
        <h2 class="h1 pb-2 pb-lg-3">Transform Your Business with Sepia App</h2>
        <p class="pb-2 mb-4 mb-lg-5">
          Sepia App offers cutting-edge web solutions tailored to your business needs. Whether you're looking to enhance your online presence or streamline customer interactions, our innovative designs and seamless integration capabilities make it possible.
        </p>
        <hr />
        <div class="d-flex justify-content-center justify-content-md-between pt-4 pt-lg-5">
          <div class="mx-3 mx-md-0">
            <div class="display-3 text-dark mb-1">95%</div>
            <span>Client Satisfaction Rate</span>
          </div>
          <div class="mx-3 mx-md-0">
            <div class="display-3 text-dark mb-1">200+</div>
            <span>Projects Successfully Delivered</span>
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
            <img :src="avatarImg" alt="Digital Transformation" />
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
              <span class="h5 text-light mb-0">200+</span>
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

<script lang="ts" setup>
import avatarImg from '@/assets/img/landing/saas-4/avatars.png'
import Parallax from '@/components/Parallax.vue'
</script>
