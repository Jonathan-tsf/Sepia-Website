<template>
  <b-container class="py-5 my-md-2 my-lg-4 my-xl-5">
    <!-- Text -->
    <h2 class="h1 text-center mx-auto mt-n2 mt-sm-0 pt-md-2" style="max-width: 530px">
      Get Possibilities for Better Trading with Sepia
    </h2>
    <ul class="list-unstyled d-flex flex-wrap justify-content-center mb-5">
      <li class="d-flex fs-xl mx-3 mt-2 mt-sm-3">
        <Icon :icon="CheckIcon" class="bx lead text-primary mt-1 me-2"></Icon>
        <span
          >Spend with the Crypto and get up to
          <strong class="text-primary ms-1">12% back</strong></span
        >
      </li>
      <li class="d-flex fs-xl mx-3 mt-2 mt-sm-3">
        <Icon :icon="CheckIcon" class="bx bx-check lead text-primary mt-1 me-2"></Icon>
        <span
          >Invite friends and get <strong class="text-primary ms-1">new opportunities</strong></span
        >
      </li>
      <li class="d-flex fs-xl mx-3 mt-2 mt-sm-3">
        <Icon :icon="CheckIcon" class="bx lead text-primary mt-1 me-2"></Icon>
        <span
          >Trade and earn <strong class="text-primary mx-1">200+ cryptocurrencies</strong> and get a
          permanent <strong class="text-primary ms-1">5% discount</strong></span
        >
      </li>
    </ul>

    <!-- Parallax gfx -->
    <div class="position-relative px-4 px-sm-5 mb-3 mb-md-4">
      <img
        :src="mainImg"
        width="1079"
        class="d-block mx-auto"
        style="
          border-radius: 1.5rem;
          box-shadow: 0 1.875rem 7.5rem -0.625rem rgba(124, 125, 152, 0.2);
        "
        alt="Dashboard"
      />
      <div class="position-absolute w-100" style="left: 0; bottom: 13%; padding-right: 74.33%">
        <img
          :src="popup1Img"
          width="308"
          class="rellax d-block"
          style="
            border-radius: 0.75rem;
            box-shadow: 0 0.75rem 3.75rem -0.625rem rgba(124, 125, 152, 0.2);
          "
          alt="Popup"
          data-rellax-percentage="0.5"
          data-rellax-speed="1"
          data-disable-parallax-down="lg"
        />
      </div>
      <div class="position-absolute w-100" style="right: 0; top: 12%; padding-left: 74.16%">
        <img
          :src="popup2Img"
          width="310"
          class="rellax d-block"
          style="
            border-radius: 0.75rem;
            box-shadow: -0.46875rem 2.25rem 6.5rem 0 rgba(126, 123, 160, 0.2);
          "
          alt="Popup"
          data-rellax-percentage="0.5"
          data-rellax-speed="1"
          data-disable-parallax-down="lg"
        />
      </div>
      <div
        class="position-absolute w-100"
        style="right: 0; bottom: 9.4%; padding-left: 64.83%; padding-right: 5.5%"
      >
        <img
          :src="popup3Img"
          width="322"
          class="rellax d-block ms-auto"
          style="
            border-radius: 0.75rem;
            box-shadow: -0.46875rem 2.25rem 6.5rem 0 rgba(120, 118, 148, 0.14);
          "
          alt="Popup"
          data-rellax-percentage="0.5"
          data-rellax-speed=".5"
          data-disable-parallax-down="lg"
        />
      </div>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import mainImg from '@/assets/img/landing/saas-3/feature-1/main.png'
import popup1Img from '@/assets/img/landing/saas-3/feature-1/popup01.png'
import popup2Img from '@/assets/img/landing/saas-3/feature-1/popup02.png'
import popup3Img from '@/assets/img/landing/saas-3/feature-1/popup03.png'

import { Icon } from '@iconify/vue'
import CheckIcon from '@iconify/icons-bx/bx-check'
</script>
