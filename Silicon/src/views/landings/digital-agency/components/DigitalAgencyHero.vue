<template>
  <link rel="stylesheet" href="http://3.87.232.54/static/css/styles.css">
  <div>
    <Jarallax
      custom-class="jarallax position-relative d-flex align-items-center min-vh-100 bg-light mb-5 py-lg-5 pt-5"
      :custom-style="{ backgroundImage: `url(${heroBg})` }"
      :options="{ imgPosition: '0% 100%', speed: 0.5 }"
    >
      <b-container class="position-relative zindex-5 py-5">
        <b-row class="justify-content-md-start justify-content-center">
          <b-col
            md="6"
            sm="8"
            class="order-md-1 order-2 d-flex flex-column justify-content-between mt-4 pt-2 text-md-start text-center"
          >
            <div class="mb-md-5 pb-xl-5 mb-4">
              <h1 class="display-2 mb-md-5 mb-3 pb-3">
                Information by <span class="text-gradient-primary">Conversation</span> <br>
                <span class="text-container">
                  <span class="transition" :class="{'exit': exiting, 'enter': entering}">
                    {{ currentText }}
                  </span>
                </span>
                Everyone
              </h1>

              <div class="d-md-flex align-items-md-start">
                <router-link
                  to="/contacts-1"
                  class="btn btn-lg btn-primary flex-shrink-0 me-md-4 mb-md-0 mb-sm-4 mb-3"
                >
                  Work with Us
                </router-link>
                <p class="d-lg-block d-none mb-0 ps-md-3">
                  Sepia aims to change how businesses convey, sell, or create information through Intelligent Assistants (IA). <br> IA are successors to the ages-old chatbots and thanks to LLM technology, they're more intelligent than ever. 
                </p>
              </div>
            </div>

            <div
              class="d-inline-flex align-items-center justify-content-center justify-content-md-start position-relative"
            >
              <a
                href="#acronym"
                data-scroll
                data-scroll-offset='50px'
                class="btn btn-video btn-icon rounded-circle shadow-sm flex-shrink-0 stretched-link me-3"
                aria-label="Scroll for more"
              >
                <i class="fas fa-chevron-down"></i>
              </a>
              <span class="fs-sm">See more</span>
            </div>
          </b-col>

          <b-col sm="6" cols="9" class="order-md-2 order-1">
            <Vue3Lottie
              class="mx-auto"
              background-color="transparent"
              :speed="1"
              loop
              autoplay
              :animation-data="digitalAgencyAnim"
            />
          </b-col>
        </b-row>
      </b-container>
    </Jarallax>
  </div>
  
</template>


<script setup lang="ts">


import { ref, onMounted } from 'vue'
import { useTextAnimation } from '@/composables/useTextAnimation'
import heroBg from '@/assets/img/landing/digital-agency/hero-bg.svg'
import logo from '@/assets/img/animated logo.svg'
import { Vue3Lottie } from 'vue3-lottie'
import digitalAgencyAnim from '@/assets/json/animation-digital-agency.json'
import Jarallax from '@/components/Jarallax.vue'
import '@fortawesome/fontawesome-free/css/all.css'

// Import the external SCSS file
import '@/assets/scss/components/textAnimation.scss'

const { currentText, exiting, entering } = useTextAnimation()


</script>

