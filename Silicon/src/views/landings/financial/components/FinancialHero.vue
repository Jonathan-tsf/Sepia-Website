<template>
  <!-- Hero -->
  <section class="pt-lg-4 mt-lg-3">
    <div class="position-relative overflow-hidden">
      <!-- Image -->
      <b-container fluid class="position-relative position-lg-absolute top-0 start-0 h-100">
        <b-row class="h-100 me-n4 me-n2">
          <b-col lg="7" class="position-relative">
            <div class="d-none d-sm-block d-lg-none" style="height: 400px"></div>
            <div class="d-sm-none" style="height: 300px"></div>
            <Jarallax
              custom-class="jarallax position-absolute top-0 start-0 w-100 h-100 rounded-3 rounded-start-0 overflow-hidden"
              :options="{ speed: 0.3 }"
            >
              <div class="jarallax-img" :style="{ backgroundImage: `url('${heroImg}')` }"></div>
            </Jarallax>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="position-relative zindex-5 pt-lg-5 px-0 px-lg-3">
        <b-row class="pt-lg-5 mx-n4 mx-lg-n3">
          <b-col xl="6" lg="7" class="offset-lg-5 offset-xl-6 pb-5">
            <!-- Card -->
            <div class="card bg-dark border-light overflow-hidden py-4 px-2 p-sm-4">
              <span
                class="position-absolute top-0 start-0 w-100 h-100"
                style="background-color: rgba(255, 255, 255, 0.05)"
              ></span>
              <div class="card-body position-relative zindex-5">
                <p class="fs-xl fw-bold text-primary text-uppercase mb-3">Power your business</p>
                <h1 class="display-5 text-light pb-3 mb-3">Clever Financial Consulting</h1>
                <p class="fs-lg text-light opacity-70 mb-5">
                  Helping our clients meet their financial needs for more than 10 years. We offer
                  you the full spectrum of global financial services.
                </p>
                <div class="d-flex flex-column flex-sm-row">
                  <a href="#" class="btn btn-primary shadow-primary btn-lg mb-3 mb-sm-0 me-sm-4"
                    >Get started</a
                  >
                  <a href="#" class="btn btn-outline-light btn-lg">
                    Who we are
                    <Icon :icon="RightArrowAltIcon" class="fs-4 lh-1 ms-2 me-n1" />
                  </a>
                </div>
              </div>
            </div>
          </b-col>
          <b-col lg="4" class="col-xxl-3 offset-lg-8 offset-xxl-9 pt-lg-5 mt-xxl-5">
            <!-- Contacts (List) -->
            <ul class="list-unstyled mb-0 px-4 px-lg-0">
              <li class="d-flex align-items-center pb-1 mb-2">
                <Icon :icon="MapIcon" class="fs-xl text-primary me-2" />
                6391 Elgin St. Celina, Delaware 10299
              </li>
              <li class="d-flex align-items-center pb-1 mb-2">
                <Icon :icon="EnvelopeIcon" class="fs-xl text-primary me-2" />
                <a href="mailto:Info.bysepia@gmail.com" class="nav-link fw-normal p-0"
                  >Info.bysepia@gmail.com</a
                >
              </li>
              <li class="d-flex align-items-center pb-1 mb-2">
                <Icon :icon="PhoneCallIcon" class="fs-xl text-primary me-2" />
                <a href="tel:4065550120" class="nav-link fw-normal p-0"
                  >(514) 863-1572</a
                >
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script lang="ts" setup>
import heroImg from '@/assets/img/landing/financial/hero-img.jpg'
import { Icon } from '@iconify/vue'
import EnvelopeIcon from '@iconify/icons-bx/envelope'
import MapIcon from '@iconify/icons-bx/bx-map'
import PhoneCallIcon from '@iconify/icons-bx/phone-call'
import RightArrowAltIcon from '@iconify/icons-bx/bx-right-arrow-alt'
import Jarallax from '@/components/Jarallax.vue'
</script>
