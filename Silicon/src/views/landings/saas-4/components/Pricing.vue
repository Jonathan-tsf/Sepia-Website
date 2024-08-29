<template>
  <section class="bg-secondary py-5">
    <b-container class="mt-lg-5 my-md-4 my-3 py-xl-3">
      <h2 class="h1 mb-md-4 mb-3 pb-lg-3 pb-2 text-center">Transparent Pricing for You</h2>
      <div class="price-switch-wrapper">

        <div class="table-responsive-lg pb-4">
          <!-- Price cards -->
          <b-tabs no-nav-style>
            <b-tab>
              <div class="d-flex align-items-center">
                <!-- Pricing plan -->
                <div
                  class="border rounded-3 rounded-end-0 shadow-sm me-n1"
                  style="width: 32%; min-width: 16rem"
                >
                  <div
                    class="card bg-light h-100 border-0 border-end rounded-end-0 py-3 py-sm-4 py-lg-5"
                  >
                    <div class="card-body text-center">
                      <h3 class="mb-2">Single Page</h3>
                      <div class="fs-lg pb-4 mb-3">Perfect for a quick, elegant web presence</div>
                      <div class="display-5 text-dark mb-1">$80</div>
                      <div class="text-muted mb-5">one-time payment</div>
                    </div>
                    <div class="card-footer border-0 text-center pt-0 pb-4">
                      <a href="#" class="btn btn-outline-primary btn-lg">Get started now</a>
                    </div>
                  </div>
                </div>

                <!-- Featured pricing plan -->
                <div
                  class="bg-primary position-relative rounded-3 shadow-primary shadow-dark-mode-none zindex-2 p-4"
                  style="width: 36%; min-width: 18rem"
                >
                  <div class="card bg-transparent border-light py-3 py-sm-4 py-lg-5">
                    <div class="card-body text-light text-center">
                      <h3 class="text-light mb-2">Full Website</h3>
                      <div class="fs-lg opacity-70 pb-4 mb-3">Ideal for small to medium businesses</div>
                      <div class="display-5 mb-1">$800</div>
                      <div class="opacity-50 mb-5">one-time payment</div>
                    </div>
                    <div class="card-footer border-0 text-center pt-0 pb-4">
                      <a href="#" class="btn btn-light btn-lg shadow-secondary">Get started now</a>
                    </div>
                  </div>
                </div>

                <!-- Pricing plan -->
                <div
                  class="border rounded-3 rounded-start-0 shadow-sm"
                  style="width: 32%; min-width: 16rem"
                >
                  <div class="card bg-light h-100 border-0 rounded-start-0 py-3 py-sm-4 py-lg-5">
                    <div class="card-body text-center">
                      <h3 class="mb-2">Full Website + AI Assistant</h3>
                      <div class="fs-lg pb-4 mb-3">Best for businesses looking for automation</div>
                      <div class="display-5 text-dark mb-1">$950</div>
                      <div class="text-muted mb-5">one-time payment</div>
                    </div>
                    <div class="card-footer border-0 text-center pt-0 pb-4">
                      <a href="#" class="btn btn-outline-primary btn-lg">Get started now</a>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isTabActive = ref<boolean>(false)
</script>
