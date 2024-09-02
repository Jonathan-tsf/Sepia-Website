<template>
  <section class="overflow-hidden pt-2 pt-md-4 pt-lg-5">
    <b-container class="pt-1 pt-sm-0">
      <b-row class="align-items-center">
        <!-- Cursor parallax -->
        <b-col md="7" class="order-md-2 mb-3 mb-sm-2 mb-md-0">
          <Parallax custom-class="parallax" :custom-style="{ maxWidth: '746px' }">
            <div class="parallax-layer" data-depth="0.2">
              <img :src="phoneImg" alt="Chatbot Integration Preview" />
            </div>
          </Parallax>
        </b-col>

        <!-- Text + button -->
        <b-col md="5" class="order-md-1">
          <h1 class="display-4 mb-ms-4">Engage. Assist. Convert.</h1>
          <p class="fs-xl pb-2 mb-4 mb-xl-5" style="max-width: 450px">
            Enhance user experience on your website with our AI-powered chatbot, capable of conversing in over 80 languages. Customize its responses to fit your specific business needs seamlessly.
          </p>
          <div class="position-relative d-md-none d-lg-block mb-4" style="max-width: 416px">
            <i
              class="bx bxl-kickstarter d-none d-dark-mode-flex justify-content-center align-items-center position-absolute bg-white fs-lg badge text-dark rounded-1 p-0"
              style="
                top: 0;
                left: 63%;
                width: 1.5rem;
                height: 1.5rem;
                margin-top: -0.525rem;
                margin-left: -0.5rem;
              "
            ></i>
          </div>
          <ul class="list-unstyled d-md-none d-lg-block pb-1 pb-xl-0 mb-4 mb-xl-5">
            <li class="d-flex align-items-center mb-2">
              <Icon :icon="CheckCircleIcon" class="bx fs-xl text-primary me-2"></Icon>
              Supports 80+ languages
            </li>
            <li class="d-flex align-items-center mb-2">
              <Icon :icon="CheckCircleIcon" class="bx fs-xl text-primary me-2"></Icon>
              Customizable for any website
            </li>
            <li class="d-flex align-items-center mb-2">
              <Icon :icon="CheckCircleIcon" class="bx fs-xl text-primary me-2"></Icon>
              Easy HTML integration
            </li>
          </ul>
          <a href="#" class="btn btn-lg btn-primary w-100 w-sm-auto">
            Try Our Chatbot in the Bottom Right Corner
            <Icon :icon="SrightArrowIcon" class="bx lead ms-2 me-n1"></Icon>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import Parallax from '@/components/Parallax.vue'
import { Icon } from '@iconify/vue'
import CheckCircleIcon from '@iconify/icons-bx/bx-check-circle'
import SrightArrowIcon from '@iconify/icons-bx/bxs-right-arrow-alt'
import phoneImg from '@/assets/img/landing/startup/hero/phone.png'
import scooterImg from '@/assets/img/landing/startup/hero/scooters.png'
</script>
