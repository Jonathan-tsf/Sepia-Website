<template>
  <Jarallax custom-class="jarallax bg-dark min-vh-100" data-bs-theme="dark">
    <span
      class="position-absolute top-0 start-0 w-100 h-100"
      style="
        background: radial-gradient(
          116.18% 118% at 50% 100%,
          rgba(99, 102, 241, 0.1) 0%,
          rgba(218, 70, 239, 0.05) 41.83%,
          rgba(241, 244, 253, 0.07) 82.52%
        );
      "
    ></span>
    <div class="jarallax-img" :style="{ backgroundImage: `url(${heroBg})` }"></div>
    <div class="min-vh-100 d-flex flex-column py-5">
      <b-container class="position-relative text-center zindex-5 pt-4 pt-md-5 pb-5 mt-auto">
        <b-row class="mt-5">
          <b-col xl="10" class="mx-auto">
            <h1 class="display-1 mb-md-4 pb-3">Software Development Experts</h1>
            <p
              class="text-body mx-auto mb-md-5 mb-4 pb-xl-2 pb-md-0 pb-sm-2 fs-5"
              style="max-width: 36.5rem"
            >
              We are experts with
              <img
                :src="clutchRating"
                :width="136"
                alt="Clutch rating"
                class="d-inline-block mt-n3 ms-1"
              />
              providing the widest range of IT services and solutions for growing your business.
            </p>
            <a href="#" class="btn btn-lg btn-primary shadow-primary">Start your project</a>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="mt-auto pb-lg-2 pb-xl-3">
        <ul
          class="list-unstyled d-flex align-items-start justify-content-center flex-wrap text-nowrap mt-xl-0 mt-md-n4 mt-sm-n3 mt-n2 ms-md-n4 ms-n3 mb-0 pt-lg-5 pt-md-4"
        >
          <li class="d-flex align-items-center text-body mt-md-4 mt-sm-3 mt-2 ms-md-4 ms-3">
            <i class="bx bx-check-circle me-2 fs-5 text-primary"></i>
            Extensive work experience
          </li>
          <li class="d-flex align-items-center text-body mt-md-4 mt-sm-3 mt-2 ms-md-4 ms-3">
            <i class="bx bx-check-circle me-2 fs-5 text-primary"></i>
            Flexible working conditions
          </li>
          <li class="d-flex align-items-center text-body mt-md-4 mt-sm-3 mt-2 ms-md-4 ms-3">
            <i class="bx bx-check-circle me-2 fs-5 text-primary"></i>
            Large and friendly team
          </li>
        </ul>
      </b-container>
    </div>
  </Jarallax>
</template>

<script setup lang="ts">
import heroBg from '@/assets/img/landing/software-agency-2/hero-bg.png'
import clutchRating from '@/assets/img/landing/software-agency-2/clutch-rating.png'
import Jarallax from '@/components/Jarallax.vue'
</script>
