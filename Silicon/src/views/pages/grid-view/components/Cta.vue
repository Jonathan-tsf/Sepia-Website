<template>
  <b-container class="mb-1 mb-md-3 mb-lg-4">
    <div class="bg-secondary rounded-3 overflow-hidden">
      <b-row class="align-items-center">
        <b-col xl="4" md="5" class="offset-lg-1">
          <div class="pt-5 pb-3 pb-md-5 px-4 px-lg-0 text-center text-md-start">
            <p class="lead mb-3">Ready to get started?</p>
            <h2 class="h1 pb-3 pb-sm-4">
              Take Your <span class="text-primary">Business</span> to the Next Level
            </h2>
            <a href="#" class="btn btn-primary btn-lg">Work with us</a>
          </div>
        </b-col>
        <b-col lg="6" md="7" class="offset-xl-1">
          <div
            class="position-relative d-flex flex-column align-items-center justify-content-center h-100"
          >
            <svg
              class="d-none d-md-block position-absolute top-50 start-0 translate-middle-y"
              width="868"
              height="868"
              style="min-width: 868px"
              viewBox="0 0 868 868"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.15" cx="434" cy="434" r="434" fill="#6366F1" />
            </svg>
            <img
              :src="cta"
              class="position-relative zindex-3 mb-2 my-lg-4"
              width="382"
              alt="Illustration"
            />
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import cta from '@/assets/img/about/cta.png'
</script>
