<template>
  <b-container class="py-5 my-md-2 my-lg-4 my-xl-5">
    <h2 class="h1 text-center pb-3 pb-md-4">Transparent Pricing for You</h2>
    <div class="price-switch-wrapper mb-n2">
      <div
        class="form-check form-switch price-switch justify-content-center mt-2 mb-4"
        data-bs-toggle="price"
      >
      </div>
      <div class="table-responsive-xxl pt-md-3">
        <b-tabs no-nav-style>
          <b-tab :active="!isTabActive">
            <b-row class="flex-nowrap pb-4">
              <b-col>
                <div class="card h-100 border-0 shadow-sm p-xxl-3" style="min-width: 18rem">
                  <div class="card-body">
                    <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                      <div class="flex-shrink-0 bg-secondary rounded-3">
                        <img :src="basicImg" width="84" alt="Icon" />
                      </div>
                      <div class="ps-4">
                        <h3 class="fs-lg fw-normal text-body mb-2">Basic</h3>
                        <h4 class="h3 lh-1 mb-0">
                          <span data-monthly-price>$80.00</span>
                          <span class="d-none" data-annual-price>$5.40</span>
                          <span class="text-body fs-sm fw-normal"> / per month</span>
                        </h4>
                      </div>
                    </div>
                    <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                      <li class="d-flex mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl text-primary me-1"></Icon>
                        10 000 messages / month
                      </li>
                      <li class="d-flex mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl text-primary me-1"></Icon>
                        Priority Support
                      </li>
                    </ul>
                  </div>
                </div>
              </b-col>
              <b-col>
                <div
                  class="card h-100 border-0 bg-primary shadow-primary shadow-dark-mode-none p-xxl-3"
                  style="min-width: 18rem"
                >
                  <div class="card-body">
                    <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                      <div
                        class="flex-shrink-0 rounded-3"
                        style="background-color: rgba(255, 255, 255, 0.1)"
                      >
                        <img :src="standardImg" width="84" alt="Icon" />
                      </div>
                      <div class="ps-4">
                        <h3 class="fs-lg fw-normal text-light opacity-70 mb-2">Standard</h3>
                        <h4 class="h3 text-light lh-1 mb-0">
                          <span data-monthly-price>$120.00</span>
                          <span class="d-none" data-annual-price>$120.00</span>
                          <span class="fs-sm fw-normal opacity-70"> / per month</span>
                        </h4>
                      </div>
                    </div>
                    <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                      <li class="d-flex text-light mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl me-1"></Icon>
                        <span class="opacity-70">Unlimited messages</span>
                      </li>
                      <li class="d-flex text-light mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl me-1"></Icon>
                        <span class="opacity-70">Priority Support</span>
                      </li>
                      <li class="d-flex text-light mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl me-1"></Icon>
                        <span class="opacity-70">3 reviews of the prompt / month</span>
                      </li>
                      <li class="d-flex text-light mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl me-1"></Icon>
                        <span class="opacity-70">3 reviews of the design / month</span>
                      </li>
                    </ul>
                  </div>
                  <div class="card-footer border-0 pt-0 pb-4">
                  </div>
                </div>
              </b-col>
      
            </b-row>
          </b-tab>

          <b-tab :active="isTabActive">
            <b-row class="flex-nowrap pb-4">
              <b-col>
                <div class="card h-100 border-0 shadow-sm p-xxl-3" style="min-width: 18rem">
                  <div class="card-body">
                    <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                      <div class="flex-shrink-0 bg-secondary rounded-3">
                        <img :src="basicImg" width="84" alt="Icon" />
                      </div>
                      <div class="ps-4">
                        <h3 class="fs-lg fw-normal text-body mb-2">Basic</h3>
                        <h4 class="h3 lh-1 mb-0">
                          <span data-monthly-price>$6.00</span>
                          <span class="d-none" data-annual-price>$5.40</span>
                          <span class="text-body fs-sm fw-normal"> / per month</span>
                        </h4>
                      </div>
                    </div>
                    <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                      <li class="d-flex mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl text-primary me-1"></Icon>
                        Aenean neque tortor, purus faucibus
                      </li>
                      <li class="d-flex mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl text-primary me-1"></Icon>
                        Nullam augue vitae et volutpat sagittis
                      </li>
                      <li class="d-flex opacity-50 mb-2">
                        <Icon :icon="XIcon" class="bx fs-xl text-primary me-1"></Icon>
                        Mauris massa penatibus enim elit quam
                      </li>
                      <li class="d-flex opacity-50 mb-2">
                        <Icon :icon="XIcon" class="bx fs-xl text-primary me-1"></Icon>
                        Nec ac sagittis nunc bibendum
                      </li>
                      <li class="d-flex opacity-50">
                        <Icon :icon="XIcon" class="bx fs-xl text-primary me-1"></Icon>
                        Odio ut orci volutpat ultricies eleifend
                      </li>
                    </ul>
                  </div>
                  <div class="card-footer border-0 pt-0 pb-4">
                    <a href="#" class="btn btn-outline-primary w-100">Start free trial</a>
                  </div>
                </div>
              </b-col>
              <b-col>
                <div
                  class="card h-100 border-0 bg-primary shadow-primary shadow-dark-mode-none p-xxl-3"
                  style="min-width: 18rem"
                >
                  <div class="card-body">
                    <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                      <div
                        class="flex-shrink-0 rounded-3"
                        style="background-color: rgba(255, 255, 255, 0.1)"
                      >
                        <img :src="standardImg" width="84" alt="Icon" />
                      </div>
                      <div class="ps-4">
                        <h3 class="fs-lg fw-normal text-light opacity-70 mb-2">Premium</h3>
                        <h4 class="h3 text-light lh-1 mb-0">
                          <span data-monthly-price>$15.00</span>
                          <span class="d-none" data-annual-price>$12.80</span>
                          <span class="fs-sm fw-normal opacity-70"> / per month</span>
                        </h4>
                      </div>
                    </div>
                    <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                      <li class="d-flex text-light mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl me-1"></Icon>
                        <span class="opacity-70">Aenean neque tortor, purus faucibus</span>
                      </li>
                      <li class="d-flex text-light mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl me-1"></Icon>
                        <span class="opacity-70">Nullam augue vitae et volutpat sagittis</span>
                      </li>
                      <li class="d-flex text-light mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl me-1"></Icon>
                        <span class="opacity-70">Mauris massa penatibus enim elit quam</span>
                      </li>
                      <li class="d-flex text-light mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl me-1"></Icon>
                        <span class="opacity-70">Nec ac sagittis nunc bibendum</span>
                      </li>
                      <li class="d-flex text-light opacity-50">
                        <Icon :icon="XIcon" class="bx fs-xl me-1"></Icon>
                        Odio ut orci volutpat ultricies eleifend
                      </li>
                    </ul>
                  </div>
                  <div class="card-footer border-0 pt-0 pb-4">
                    <a href="#" class="btn btn-light w-100">Start free trial</a>
                  </div>
                </div>
              </b-col>
              <b-col>
                <div class="card h-100 border-0 shadow-sm p-xxl-3" style="min-width: 18rem">
                  <div class="card-body">
                    <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                      <div class="flex-shrink-0 bg-secondary rounded-3">
                        <img :src="ultimateImg" width="84" alt="Icon" />
                      </div>
                      <div class="ps-4">
                        <h3 class="fs-lg fw-normal text-body mb-2">Ultimate</h3>
                        <h4 class="h3 lh-1 mb-0">
                          <span data-monthly-price>$18.00</span>
                          <span class="d-none" data-annual-price>$16.20</span>
                          <span class="text-body fs-sm fw-normal"> / per month</span>
                        </h4>
                      </div>
                    </div>
                    <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                      <li class="d-flex mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl text-primary me-1"></Icon>
                        Aenean neque tortor, purus faucibus
                      </li>
                      <li class="d-flex mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl text-primary me-1"></Icon>
                        Nullam augue vitae et volutpat sagittis
                      </li>
                      <li class="d-flex mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl text-primary me-1"></Icon>
                        Mauris massa penatibus enim elit quam
                      </li>
                      <li class="d-flex mb-2">
                        <Icon :icon="CheckIcon" class="bx fs-xl text-primary me-1"></Icon>
                        Nec ac sagittis nunc bibendum
                      </li>
                      <li class="d-flex">
                        <Icon :icon="CheckIcon" class="bx fs-xl text-primary me-1"></Icon>
                        Odio ut orci volutpat ultricies eleifend
                      </li>
                    </ul>
                  </div>
                  <div class="card-footer border-0 pt-0 pb-4">
                    <a href="#" class="btn btn-outline-primary w-100">Start free trial</a>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </b-container>
</template>

<script lang="ts" setup>
import basicImg from '@/assets/img/landing/olivia/pricing/basic.png'
import standardImg from '@/assets/img/landing/olivia/pricing/standard.png'
import ultimateImg from '@/assets/img/landing/olivia/pricing/ultimate.png'

import { Icon } from '@iconify/vue'
import CheckIcon from '@iconify/icons-bx/bx-check'
import XIcon from '@iconify/icons-bx/bx-x'

import { ref } from 'vue'

const isTabActive = ref<boolean>(false)
</script>
