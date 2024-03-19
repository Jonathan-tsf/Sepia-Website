<template>
  <div>
    <section class="position-relative overflow-hidden py-4 mb-3">
      <b-container class="pt-lg-3">
        <b-row class="flex-lg-nowrap">
          <b-col lg="6" xl="5" class="text-center text-lg-start pt-5 mt-xl-4">
            <h1 class="display-4 pt-5 pb-2 pb-lg-3 mt-sm-2 mt-lg-5">
              
Revolutionizing Restaurant Service with Olivia
            </h1>
            <p class="fs-lg mb-4 mb-lg-5">
              Experience the future of dining with Olivia, your virtual restaurant assistant. Seamlessly order, interact, and enjoy at the touch of a button – all from the comfort of your table.
            </p>
            <a href="#" class="btn btn-primary btn-lg">Try our Demo</a>
            <div class="pt-5 mt-xl-5">
            </div>
          </b-col>

          <!-- Layer parallax -->
          <Parallax custom-class="parallax mt-4 ms-4 me-lg-0 ms-lg-n5 ms-xl-n3 mt-lg-n4">
            <div class="parallax-layer" data-depth="0.1">
              <img :src="layer1Img" width="1416" alt="Layer" />
            </div>
            <div class="parallax-layer zindex-2" data-depth="0.15">
              <img :src="layer2Img" alt="Layer" />
            </div>
            <div class="parallax-layer zindex-2" data-depth="0.35">
              <img :src="layer3Img" alt="Layer" />
            </div>
            <div class="parallax-layer zindex-2" data-depth="0.25">
              <img :src="layer4Img" alt="Layer" />
            </div>
            <div class="parallax-layer zindex-2" data-depth="0.4">
              <img :src="layer5Img" alt="Layer" />
            </div>
            <div class="parallax-layer zindex-2" data-depth="0.28">
              <img :src="layer6Img" alt="Layer" />
            </div>
            <div class="parallax-layer zindex-2" data-depth="0.35">
              <img :src="layer7Img" alt="Layer" />
            </div>
          </Parallax>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import brands7Img from '@/assets/img/brands/07.svg'
import brands4Img from '@/assets/img/brands/04.svg'
import brands2Img from '@/assets/img/brands/02.svg'
import brands5Img from '@/assets/img/brands/05.svg'
import layer1Img from '@/assets/img/landing/saas-1/hero/layer01.png'
import layer2Img from '@/assets/img/landing/saas-1/hero/layer02.png'
import layer3Img from '@/assets/img/landing/saas-1/hero/layer03.png'
import layer4Img from '@/assets/img/landing/saas-1/hero/layer04.png'
import layer5Img from '@/assets/img/landing/saas-1/hero/layer05.png'
import layer6Img from '@/assets/img/landing/saas-1/hero/layer06.png'
import layer7Img from '@/assets/img/landing/saas-1/hero/layer07.png'
import Parallax from '@/components/Parallax.vue'
</script>
