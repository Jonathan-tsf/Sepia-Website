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
                  <b-col sm="6" cols="9" class="order-md-2 order-1">
          <Vue3Lottie
            class="mx-auto"
            background-color="transparent"
            :speed="0.5"
            loop
            autoplay
            :animation-data="fleche"
          />
        </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import fleche from '@/assets/json/fleche.json'
import brands7Img from '@/assets/img/brands/07.svg'
import brands4Img from '@/assets/img/brands/04.svg'
import brands2Img from '@/assets/img/brands/02.svg'
import brands5Img from '@/assets/img/brands/05.svg'
</script>
