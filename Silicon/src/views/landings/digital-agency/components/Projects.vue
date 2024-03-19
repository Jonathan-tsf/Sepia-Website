<template>
  <b-container class="mb-5 pt-lg-2 pt-xl-4 pb-2 pb-md-3 pb-lg-5">
    <h2 class="h1 mb-4 text-center">Our Projects</h2>
    <p class="mb-4 mx-auto pb-3 fs-lg text-center" style="max-width: 636px">
      Sép.ia enriches digital platforms by integrating custom chatbot solutions, enhancing user interaction and engagement
    </p>

    <b-row class="pb-5 mb-md-4 mb-lg-5" v-for="(item, idx) in listData" :key="idx">
      <div
        class="rellax col-md-6 pb-1 mb-3 pb-md-0 mb-md-0"
        :class="idx % 2 != 0 ? 'order-md-2' : ''"
        data-rellax-percentage="0.5"
        data-rellax-speed="0.8"
        data-disable-parallax-down="md"
      >
        <router-link :to="{ name: item.link?.name, params: item.link?.params }">
          <img :src="item.image" class="rounded-3" width="600" alt="Image" />
        </router-link>
      </div>

      <div
        class="rellax col-md-6"
        :class="idx % 2 != 0 ? 'pt-md-4 pt-lg-5' : 'order-md-1 pt-md-4 pt-lg-5'"
        data-rellax-percentage="0.5"
        data-rellax-speed="-0.6"
        data-disable-parallax-down="md"
      >
        <div class="" :class="idx % 2 != 0 ? 'pe-md-4 me-md-2' : 'ps-md-4 ms-md-2'">
          <h2 class="h3">{{ item.title }}</h2>
          <a href="#" class="d-table badge bg-faded-primary text-primary fs-sm mb-3">{{
            item.category
          }}</a>
          <p class="d-md-none d-lg-block pb-3 mb-2 mb-md-3">{{ item.description }}</p>
        </div>
      </div>
    </b-row>


  </b-container>
</template>

<script setup lang="ts">
import img7 from '@/assets/img/portfolio/grid/07.jpg'
import img8 from '@/assets/img/portfolio/grid/08.jpg'
import img9 from '@/assets/img/portfolio/grid/09.jpg'
import img10 from '@/assets/img/portfolio/grid/10.jpg'
import { listData } from '../data'
</script>
