<template>
  <section class="position-relative py-2 py-sm-3 py-md-4 py-lg-5">
    <div
      class="bg-gradient-primary position-absolute top-0 start-0 w-50 h-100 opacity-15 d-none d-lg-block"
    ></div>
    <div
      class="bg-gradient-primary position-absolute top-0 start-0 w-100 h-100 opacity-15 d-lg-none"
    ></div>
    <div class="bg-dark position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block"></div>
    <b-container class="position-relative zindex-2 py-5 my-md-2 my-lg-3">
      <h2 class="display-5 pb-4 pb-lg-5">Join the journey!</h2>
      <b-row class="align-items-center g-0">
        <b-col lg="8">
          <div class="bg-light position-relative overflow-hidden rounded-3 shadow px-3">
            <div
              class="position-absolute top-0 start-0 w-100 h-100"
              style="background-color: rgba(255, 255, 255, 0.04)"
            ></div>
            <div class="position-relative zindex-2 py-5 px-2 px-sm-3 px-md-4 px-lg-5">
              <!-- Steps visible on screens < 992px -->
              <div class="nav nav-justified d-lg-none">
                <div class="nav-item text-center pb-2 mb-4">
                  <div class="btn btn-icon btn-primary rounded-circle fs-lg fw-bold pe-none mb-2">
                    1
                  </div>
                  <h4 class="h6 fw-bold mb-0">Your request*</h4>
                </div>
                <div class="nav-item text-center pb-2 mb-4">
                  <div class="btn btn-icon btn-secondary rounded-circle fs-lg fw-bold pe-none mb-2">
                    2
                  </div>
                  <h4 class="h6 fw-bold mb-0">Personal info*</h4>
                </div>
                <div class="nav-item text-center pb-2 mb-4">
                  <div class="btn btn-icon btn-secondary rounded-circle fs-lg fw-bold pe-none mb-2">
                    3
                  </div>
                  <h4 class="h6 fw-bold mb-0">Additional comments</h4>
                </div>
              </div>
              <h3 class="h2 pb-3 mb-lg-4">I want to:</h3>
              <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input me-2" id="check-1" />
                <label for="check-1" class="form-check-label fs-lg mt-n1"
                  >Stay update with our news, events and upgrades</label
                >
              </div>
              <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input me-2" id="check-2" />
                <label for="check-2" class="form-check-label fs-lg mt-n1"
                  >Join the team and become a part of our startup family</label
                >
              </div>
              <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input me-2" id="check-3" checked />
                <label for="check-3" class="form-check-label fs-lg mt-n1"
                  >Request a trial app</label
                >
              </div>
              <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input me-2" id="check-4" />
                <label for="check-4" class="form-check-label fs-lg mt-n1"
                  >Invest in ProScooter</label
                >
              </div>
              <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input me-2" id="check-5" />
                <label for="check-5" class="form-check-label fs-lg mt-n1">Other</label>
              </div>
              <div class="d-flex pt-4 pt-lg-5 mt-4">
                <!-- <button type="button" class="btn btn-lg btn-secondary">
                      <i class="bx bx-left-arrow-alt fs-lg ms-n1 me-2"></i>
                      Prev
                    </button> -->
                <button type="button" class="btn btn-lg btn-primary ms-auto">
                  Next
                  <i class="bx bx-right-arrow-alt fs-lg me-n1 ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </b-col>

        <!-- Steps visible on screens > 991px -->
        <b-col lg="4" class="position-relative zindex-2 d-none d-lg-block">
          <div style="margin-left: -1.375rem">
            <div class="d-flex pb-2 mb-5">
              <div class="btn btn-icon btn-primary rounded-circle fs-lg fw-bold pe-none">1</div>
              <div class="ps-3 ms-1">
                <h4 class="h5 text-white fw-bold pb-1 mb-2">Your request*</h4>
                <p class="text-white opacity-70 mb-0">
                  Please choose the type of your request and let us know how we can help.
                </p>
              </div>
            </div>
            <div class="d-flex pb-2 mb-5">
              <div
                class="btn btn-icon bg-dark text-white rounded-circle fs-lg fw-bold pe-none position-relative overflow-hidden"
              >
                <div
                  class="position-absolute top-0 start-0 w-100 h-100"
                  style="background-color: rgba(255, 255, 255, 0.06)"
                ></div>
                2
              </div>
              <div class="opacity-50 ps-3 ms-1">
                <h4 class="h5 text-white fw-bold pb-1 mb-2">Personal info*</h4>
                <p class="text-white opacity-70 mb-0">
                  Leave your personal info and we will contact you as soon as possible.
                </p>
              </div>
            </div>
            <div class="d-flex">
              <div
                class="btn btn-icon bg-dark text-white rounded-circle fs-lg fw-bold pe-none position-relative overflow-hidden"
              >
                <div
                  class="position-absolute top-0 start-0 w-100 h-100"
                  style="background-color: rgba(255, 255, 255, 0.06)"
                ></div>
                3
              </div>
              <div class="opacity-50 ps-3 ms-1">
                <h4 class="h5 text-white fw-bold pb-1 mb-2">Additional comments</h4>
                <p class="text-white opacity-70 mb-0">
                  If you have any questions or comments please leave us a message. We are here for
                  you!
                </p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts"></script>
