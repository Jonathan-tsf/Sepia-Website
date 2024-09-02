<template>
  <section class="position-relative pt-sm-2 pt-md-4 pt-lg-5">
    <div
      class="bg-gradient-primary position-absolute top-0 start-0 w-100 opacity-15"
      style="height: calc(100% - 7rem)"
    ></div>
    <b-container class="position-relative zindex-2 pt-5">
      <b-row class="row-cols-1 row-cols-md-2 pt-2 pt-md-3 pb-5 mb-md-2 mb-lg-4">
        <b-col class="mb-4">
          <h2 class="h1 mb-0">
            Intelligent <span class="text-primary">Chatbot</span> tailored for <span class="text-primary">Your Business</span>
          </h2>
        </b-col>
        <b-col>
          <p class="fs-xl mb-0">
            Our chatbot solution integrates seamlessly into your website, providing personalized interactions and support in over 80 languages. Designed to enhance user experience, it adapts to your business needs, offering reliable and engaging conversations with your customers.
          </p>
        </b-col>
      </b-row>
      <div
        class="position-relative bg-dark rounded-3 overflow-hidden px-5"
        style="padding-top: 9.7%; padding-bottom: 6%"
      >
        <div
          class="position-absolute top-0 start-0 w-100 h-100"
          style="background-color: rgba(255, 255, 255, 0.04)"
        ></div>
        <div class="position-relative zindex-2 mx-auto" style="max-width: 852px">
          <img :src="scooterImg" class="d-block" alt="Chatbot Features" />

          <!-- Hotspot -->
          <div class="d-flex align-items-center position-absolute top-0" style="left: 61.7%">
            <div
              class="btn btn-icon btn-primary bg-transparent fs-lg text-white fw-bold rounded-circle pe-none"
            >
              1
            </div>
            <div class="fs-xl text-white opacity-70 ms-3 d-none d-md-block">Multilingual Support</div>
            <div class="fs-sm text-white opacity-70 ms-2 d-md-none">Multilingual Support</div>
          </div>

          <!-- Hotspot -->
          <div class="d-flex align-items-center position-absolute" style="top: 3.2%; right: 68.3%">
            <div class="fs-xl text-white opacity-70 me-3 d-none d-md-block">Customizable UI</div>
            <div class="fs-sm text-white opacity-70 me-2 d-md-none">Customizable UI</div>
            <div
              class="btn btn-icon btn-primary bg-transparent fs-lg text-white fw-bold rounded-circle pe-none"
            >
              2
            </div>
          </div>

          <!-- Hotspot -->
          <div class="d-flex align-items-center position-absolute" style="top: 26.8%; right: 10.9%">
            <div class="fs-xl text-white opacity-70 me-3 text-end d-none d-md-block">
              Advanced<br />Analytics
            </div>
            <div class="fs-sm text-white opacity-70 me-2 text-end d-md-none">
              Advanced<br />Analytics
            </div>
            <div
              class="btn btn-icon btn-primary bg-transparent fs-lg text-white fw-bold rounded-circle pe-none"
            >
              3
            </div>
          </div>

          <!-- Hotspot -->
          <div class="d-flex align-items-center position-absolute" style="top: 45%; left: 64.8%">
            <div
              class="btn btn-icon btn-primary bg-transparent fs-lg text-white fw-bold rounded-circle pe-none"
            >
              4
            </div>
            <div class="fs-xl text-white opacity-70 ms-3 d-none d-md-block">
              AI-Powered<br />Conversations
            </div>
            <div class="fs-sm text-white opacity-70 ms-2 d-md-none">AI-Powered<br />Conversations</div>
          </div>

          <!-- Hotspot -->
          <div class="d-flex align-items-center position-absolute" style="top: 62%; right: 100%">
            <div class="fs-xl text-white opacity-70 me-3 text-end d-none d-md-block">
              Secure Data Handling
            </div>
            <div class="fs-sm text-white opacity-70 me-2 text-end d-md-none">Secure Data Handling</div>
            <div
              class="btn btn-icon btn-primary bg-transparent fs-lg text-white fw-bold rounded-circle pe-none"
            >
              5
            </div>
          </div>

          <!-- Hotspot -->
          <div class="d-flex align-items-center position-absolute" style="top: 67%; left: 72.5%">
            <div
              class="btn btn-icon btn-primary bg-transparent fs-lg text-white fw-bold rounded-circle pe-none"
            >
              6
            </div>
            <div class="fs-xl text-white opacity-70 ms-3 d-none d-md-block">
              Real-time<br />Assistance
            </div>
            <div class="fs-sm text-white opacity-70 ms-2 d-md-none">Real-time<br />Assistance</div>
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import scooterImg from '@/assets/img/landing/startup/scooter.png';
</script>
