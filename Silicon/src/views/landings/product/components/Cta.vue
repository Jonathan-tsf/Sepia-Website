<template>
  <section class="overflow-hidden pt-lg-5 pt-3 pt-sm-4">
    <div class="container position-relative">
      <div
        class="w-100 position-absolute top-0 start-50 translate-middle-x text-center px-3"
        style="max-width: 40rem"
      >
        <h3 class="display-5 mb-4 pb-2">
          Don't miss anything with <span class="text-primary">ProDrone 2.0</span>
        </h3>
        <a href="#" class="btn btn-lg btn-primary">Buy now</a>
      </div>
    </div>
    <div class="pt-5 pt-sm-4 pt-md-0 mt-lg-n5 me-n4 me-sm-n5">
      <img :src="ctaImg" width="1296" alt="Image" class="d-block mx-auto" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import ctaImg from '@/assets/img/landing/product/cta.png'
</script>
