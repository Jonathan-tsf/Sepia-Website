<template>
  <b-container>
    <div
      class="bg-dark bg-size-cover bg-position-center bg-repeat-0 position-relative overflow-hidden rounded-3 py-lg-3 py-xl-5 px-4 px-lg-5 px-xl-0"
      :style="{ backgroundImage: `url('${ctaBgImg}')` }"
      data-bs-theme="dark"
    >
      <b-row class="position-relative zindex-2 py-5 my-1 my-md-3">
        <b-col md="6">
          <div class="mx-auto" style="max-width: 440px">
            <h2 class="h1 pb-1 pb-md-3 pb-lg-4">Let's start your investing easier now!</h2>
            <ul class="list-unstyled fs-lg d-md-none pb-3">
              <li class="d-flex text-body mb-2">
                <i class="bx bx-check lead text-primary me-2" style="margin-top: 0.125rem"></i>
                Purus vestibulum pharetra amet tincidunt pretium
              </li>
              <li class="d-flex text-body mb-2">
                <i class="bx bx-check lead text-primary me-2" style="margin-top: 0.125rem"></i>
                Haretra justo magna pharetra dui gravida sed nec
              </li>
              <li class="d-flex text-body">
                <i class="bx bx-check lead text-primary me-2" style="margin-top: 0.125rem"></i>
                Venenatis risus faucibus volutpat amet feugiat a
              </li>
            </ul>
            <a href="#" class="btn btn-lg btn-primary shadow-primary w-100 w-sm-auto"
              >Start trial now</a
            >
          </div>
        </b-col>
        <b-col md="6" lg="3" xl="4">
          <ul class="list-unstyled fs-lg d-none d-md-block">
            <li class="d-flex text-body mb-2">
              <i class="bx bx-check lead text-primary me-2" style="margin-top: 0.125rem"></i>
              Purus vestibulum pharetra amet tincidunt
            </li>
            <li class="d-flex text-body mb-2">
              <i class="bx bx-check lead text-primary me-2" style="margin-top: 0.125rem"></i>
              Haretra justo magna pharetra dui gravida sed
            </li>
            <li class="d-flex text-body">
              <i class="bx bx-check lead text-primary me-2" style="margin-top: 0.125rem"></i>
              Venenatis risus faucibus volutpat amet feugiat
            </li>
          </ul>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import ctaBgImg from '@/assets/img/landing/saas-3/cta-bg.jpg'
</script>
