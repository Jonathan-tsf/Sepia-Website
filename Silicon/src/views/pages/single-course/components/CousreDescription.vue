<template>
  <b-container class="pt-5 mt-2 mt-lg-4 mt-xl-5">
    <b-row>
      <!-- Sidebar (Course summary) -->
      <aside class="col-lg-4 col-md-5 offset-xl-1 order-md-2 mb-5">
        <div style="margin-top: -96px"></div>
        <div class="position-sticky top-0 pt-5">
          <div class="pt-5 mt-md-3">
            <div class="card shadow-sm p-sm-3">
              <div class="card-body">
                <h4 class="mb-4">This course includes:</h4>
                <ul class="list-unstyled pb-3">
                  <li
                    class="d-flex align-items-center mb-2"
                    v-for="(item, idx) in cardData"
                    :key="idx"
                  >
                    <Icon :icon="item.icon" class="bx fs-xl text-muted me-2 pe-1"></Icon>
                    {{ item.content }}
                  </li>
                </ul>
                <div class="h2 d-flex align-items-center mb-4">
                  $28.99
                  <del class="text-muted fs-xl fw-normal ms-2">49.99</del>
                </div>
                <a href="#" class="btn btn-primary btn-lg shadow-primary">Join the course</a>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Content -->
      <b-col xl="7" lg="8" md="7" class="order-md-1 mb-5">
        <h2 class="h1 pb-md-2 pb-lg-3">Course description</h2>
        <p class="pb-4 mb-3">
          Suspendisse natoque sagittis, consequat turpis. Sed tristique tellus morbi magna. At vel
          senectus accumsan, arcu mattis id tempor. Tellus sagittis, euismod porttitor sed tortor
          est id. Feugiat velit velit, tortor ut. Ut libero cursus nibh lorem urna amet tristique
          leo. Viverra lorem arcu nam nunc at ipsum quam. A proin id sagittis dignissim mauris
          condimentum ornare. Tempus mauris sed dictum ultrices.
        </p>
        <h3 class="mb-4">What you'll learn</h3>
        <ul class="list-unstyled mb-5">
          <li class="d-flex align-items-center mb-2">
            <i class="bx bx-check-circle text-primary fs-xl me-2"></i>
            Sed lectus donec amet eu turpis interdum.
          </li>
          <li class="d-flex align-items-center mb-2">
            <i class="bx bx-check-circle text-primary fs-xl me-2"></i>
            Nulla at consectetur vitae dignissim porttitor.
          </li>
          <li class="d-flex align-items-center mb-2">
            <i class="bx bx-check-circle text-primary fs-xl me-2"></i>
            Phasellus id vitae dui aliquet mi.
          </li>
          <li class="d-flex align-items-center mb-2">
            <i class="bx bx-check-circle text-primary fs-xl me-2"></i>
            Integer cursus vitae, odio feugiat iaculis aliquet diam, et purus.
          </li>
          <li class="d-flex align-items-center mb-2">
            <i class="bx bx-check-circle text-primary fs-xl me-2"></i>
            In aenean dolor diam tortor orci eu.
          </li>
        </ul>

        <h2 class="h1 pt-md-2 pt-lg-4 pt-xl-5 pb-md-3 pb-lg-4 mb-md-4">Program details</h2>
        <div class="steps steps-sm">
          <div class="step" v-for="(step, idx) in programDetailData" :key="idx">
            <div class="step-number">
              <div class="step-number-inner">{{ idx + 1 }}</div>
            </div>
            <div class="step-body">
              <h4 class="mb-2">{{ step.title }}</h4>
              <p class="mb-0">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { programDetailData, cardData } from '../data'
import { Icon } from '@iconify/vue'
</script>
