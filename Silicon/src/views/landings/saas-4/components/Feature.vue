<template>
  <b-container class="my-5 pt-xl-5 pt-lg-4 pt-md-3 pb-lg-5 pb-md-4 pb-3">
    <h2 class="h1 mt-xl-3 mb-4 pb-3 text-center">Why Choose Sepia ?</h2>

    <b-tabs content-class="mb-xl-3 py-4 bg-secondary rounded-3" align="center">
      <!-- Modern Design -->
      <b-tab active>
        <template v-slot:title>
          <Icon :icon="StarIcon" class="bx opacity-60 me-2 fs-lg"></Icon>
          Modern Design
        </template>

        <b-row class="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
          <b-col lg="4" md="5" class="offset-lg-1 text-center text-md-start">
            <h3 class="h2 mb-lg-4 mb-3">Cutting-Edge Design</h3>
            <p class="mb-4 pb-lg-3">
              Our websites feature the latest design trends to ensure your business stands out. From sleek layouts to engaging visuals, we craft websites that are both aesthetically pleasing and functional.
            </p>
            <a href="https://sepiarestaurant.netlify.app/" class="btn btn-lg btn-secondary"
            style="border-color: #6c757d; color: #6c757d;">See a Demo Site</a>
          </b-col>
          <b-col lg="6" md="7" class="mt-4 pt-md-0 pt-2">
            <img
              :src="heroImg"
              width="1122"
              alt="Modern Website Design"
              class="rounded-4"
              style="box-shadow: 0 0 7.5rem rgba(0, 0, 0, 0.1)"
            />
          </b-col>
        </b-row>
      </b-tab>

      <!-- Advanced Functionality -->
      <b-tab>
        <template v-slot:title>
          <Icon :icon="BriefcaseAltIcon" class="bx opacity-60 me-2 fs-lg"></Icon>
          Advanced Functionality
        </template>

        <b-row class="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
          <b-col lg="5" md="6" class="offset-lg-1 text-center text-md-start">
            <h3 class="h2 mb-lg-4 mb-3">Feature-Rich Platforms</h3>
            <div class="d-sm-flex mb-4 pb-lg-3 text-sm-start">
              <p class="w-100 mb-sm-0">
                Our websites are built with the latest technologies, offering seamless integration, custom plugins, and dynamic content management systems.
              </p>
              <span class="d-sm-block d-none w-1 mx-4">
                <span class="d-dark-mode-none d-block w-100 h-100 bg-black opacity-25"></span>
                <span class="d-dark-mode-block d-none w-100 h-100 bg-white opacity-25"></span>
              </span>
              <p class="w-100 mb-sm-0">
                Empower your business with tools designed for growth and scalability.
              </p>
            </div>
          </b-col>
          <b-col lg="4" md="4" class="mt-4 pt-md-0 pt-2 ms-5">
            <img
              src="@/assets/img/landings.png"
              class="d-block my-lg-2 mx-auto me-md-0 rounded-3"
              width="595"
              alt="Advanced Functionality"
            />
          </b-col>
        </b-row>
      </b-tab>

      <!-- Performance Optimization -->
      <b-tab>
        <template v-slot:title>
          <Icon :icon="BarChartAltIcon" class="bx opacity-60 me-2 fs-lg"></Icon>
          Performance Optimization
        </template>

        <b-row class="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
          <b-col lg="4" md="5" class="offset-lg-1 text-center text-md-start">
            <h3 class="h2 mb-lg-4 mb-3">Optimized for Speed</h3>
            <ul class="list-unstyled mb-4 pb-lg-3">
              <li class="d-flex justify-content-md-start justify-content-center mt-2">
                <Icon :icon="CheckCircleIcon" class="bx me-2 fs-5 text-primary"></Icon>
                Fast Loading Times
              </li>
              <li class="d-flex justify-content-md-start justify-content-center mt-2">
                <Icon :icon="CheckCircleIcon" class="bx me-2 fs-5 text-primary"></Icon>
                SEO Best Practices
              </li>
              <li class="d-flex justify-content-md-start justify-content-center mt-2">
                <Icon :icon="CheckCircleIcon" class="bx me-2 fs-5 text-primary"></Icon>
                Mobile Responsiveness
              </li>
            </ul>
            <a href="#" class="btn btn-primary">Find Out More</a>
          </b-col>
          <b-col lg="6" md="7" class="mt-4 pt-md-0 pt-2">
            <img
              src="@/assets/img/landing/saas-4/about/03.png"
              width="1122"
              alt="Modern Website Design"
              class="rounded-4"
              style="box-shadow: 0 0 7.5rem rgba(0, 0, 0, 0.1)"
            />
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import StarIcon from '@iconify/icons-bx/bx-star'
import BriefcaseAltIcon from '@iconify/icons-bx/bx-briefcase-alt-2'
import BarChartAltIcon from '@iconify/icons-bx/bx-bar-chart-alt-2'
import CheckCircleIcon from '@iconify/icons-bx/bx-check-circle'
import heroImg from '@/assets/img/landing/saas-4/about/01.png'
</script>
