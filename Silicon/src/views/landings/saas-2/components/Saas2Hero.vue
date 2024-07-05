<template>
  <section class="position-relative overflow-hidden">
    <div class="position-relative zindex-4 pt-lg-3 pt-xl-5">
      <!-- Text -->
      <b-container class="zindex-5 pt-5">
        <b-row class="justify-content-center text-center pt-4 pb-sm-2 py-lg-5">
          <b-col xl="8" lg="9" md="10" class="py-5">
            <h1 class="display-4 pt-sm-2 ">
              Anywhere, Anytime <br> All at Once
            </h1>
            <p class="fs-lg opacity-70">
             Traditional resumes are boring and they all look alike. Not anymore with Riley, an interactive Intelligent Assistant resume. Riley is trained with your professional background to provide employers with real-time updates and information.  
            </p>
          </b-col>
                    <b-col xl="3" lg="4" md="6">
            <img :src="layer1Img" alt="Layer 1" class="img-fluid" />
          </b-col>
        </b-row>
      </b-container>

      <!-- Bottom shape -->
      <div
        class="d-flex position-absolute top-100 start-0 w-100 overflow-hidden mt-n4 mt-sm-n1"
      >
        <div
          class="position-relative start-50 translate-middle-x flex-shrink-0"
          style="width: 3788px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="3788" height="144" viewBox="0 0 3788 144">
            <path
              d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z"
            />
          </svg>
        </div>
      </div>
      <div class="d-none d-lg-block" style="height: 300px"></div>
      <div class="d-none d-md-block d-lg-none" style="height: 150px"></div>
    </div>
    <div
      class="position-relative zindex-5 mx-auto"
      style="max-width: 1250px; transform: translateZ(-100px)"
    >
      <div class="d-none d-lg-block" style="margin-top: -300px"></div>
      <div class="d-none d-md-block d-lg-none" style="margin-top: -150px"></div>
    </div>
    <div
      class="position-absolute top-0 start-0 w-100 h-100"
    ></div>
  </section>
</template>

<script setup lang="ts">
import layer1Img from '@/assets/img/landing/saas-2/hero/layer01.png'
import layer2Img from '@/assets/img/landing/saas-2/hero/layer02.png'
import VanillaTilt from '@/components/VanillaTilt.vue'
</script>
