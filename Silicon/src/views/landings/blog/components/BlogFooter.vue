<template>
  <footer class="footer bg-dark pt-5 pb-4 pb-lg-5" data-bs-theme="dark">
    <b-container class="pt-lg-4">
      <b-row class="pb-5">
        <b-col lg="4" md="6">
          <div class="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
            <img :src="logo" width="47" alt="Sepia" />
            Sepia
          </div>
          <p class="fs-sm text-light opacity-70 pb-lg-3 mb-4">
            Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget
            eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu
            tempus, eget elementum dolor ullamcorper sodales ultrices eros.
          </p>
          <b-form>
            <label for="subscr-email" class="form-label">Subscribe to our newsletter</label>
            <div class="input-group">
              <b-form-input
                type="email"
                id="subscr-email"
                class="form-control rounded-start ps-5"
                placeholder="Your email"
                required
              />
              <Icon
                :icon="EnvelopeIcon"
                class="bx fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
              ></Icon>
              <b-form-invalid-feedback class="invalid-tooltip position-absolute top-100 start-0"
                >Please provide a valid email address.
              </b-form-invalid-feedback>
              <b-button variant="primary" type="submit">Subscribe</b-button>
            </div>
          </b-form>
        </b-col>
        <b-col xl="6" lg="7" md="5" class="offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
          <div id="footer-links" class="row">
            <b-col lg="4">
              <h6 class="mb-2">
                <a
                  href="#useful-links"
                  class="d-block text-dark dropdown-toggle d-lg-none py-2"
                  v-b-toggle.useful_links
                  >Useful Links</a
                >
              </h6>
              <b-collapse id="useful_links" class="d-lg-block" data-bs-parent="#footer-links">
                <ul class="nav flex-column pb-lg-1 mb-lg-3">
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Services</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Our Works</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">About</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Blog</a>
                  </li>
                </ul>
                <ul class="nav flex-column mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2"
                      >Terms &amp; Conditions</a
                    >
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Privacy Policy</a>
                  </li>
                </ul>
              </b-collapse>
            </b-col>
            <b-col xl="4" lg="3">
              <h6 class="mb-2">
                <a
                  href="#social-links"
                  class="d-block text-dark dropdown-toggle d-lg-none py-2"
                  v-b-toggle.social_links
                  >Socials</a
                >
              </h6>
              <b-collapse id="social_links" class="d-lg-block" data-bs-parent="#footer-links">
                <ul class="nav flex-column mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Facebook</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">LinkedIn</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Twitter</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Instagram</a>
                  </li>
                </ul>
              </b-collapse>
            </b-col>
            <b-col xl="4" lg="5" class="pt-2 pt-lg-0">
              <h6 class="mb-2">Contact Us</h6>
              <a href="mailto:Info.bysepia@gmail.com" class="fw-medium">Info.bysepia@gmail.com</a>
            </b-col>
          </div>
        </b-col>
      </b-row>
      <p class="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
        <span class="text-light opacity-50">&copy; All rights reserved. Made by </span>
        <a
          class="nav-link d-inline-block p-0"
          
          target="_blank"
          rel="noopener"
          >Sepia</a
        >
      </p>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import logo from '@/assets/img/animated logo.svg'
import EnvelopeIcon from '@iconify/icons-bx/envelope'
import { Icon } from '@iconify/vue'
</script>
