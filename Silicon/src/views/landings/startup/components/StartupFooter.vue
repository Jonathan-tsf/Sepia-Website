<template>
  <footer class="footer bg-dark border-top border-light py-5" data-bs-theme="dark">
    <b-container class="pt-2 pt-sm-4">
      <b-row>
        <b-col md="6" lg="5" xl="4" class="pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
          <div class="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
            <img :src="logoImg" width="47" alt="Sepia" />
            Sepia
          </div>
          <p class="text-body mb-0">
            Suscipit ipsum tincidunt pellentesque vitae. Porttitor pellentesque enim consequat
            faucibus fermentum duis mollis facilisis pretium justo velit pretium nec ut imperdiet
            volutpat commodo facilisis.
          </p>
        </b-col>
        <b-col md="6" xxl="5" class="offset-lg-1 offset-xl-2 offset-xxl-3">
          <b-row class="row-cols-1 row-cols-sm-2">
            <b-col class="pb-2 pb-sm-0 mb-4 mb-sm-0">
              <h3 class="h5 pb-1 pb-sm-2 pb-lg-3">Contact us</h3>
              <ul class="nav flex-column mb-3">
                <li>
                  <a href="tel:4065550120" class="nav-link fs-lg fw-normal px-0 py-1">
                    <Icon :icon="PhoneCallIcon" class="bx fs-4 me-2"></Icon>
                    (514) 863-1572
                  </a>
                </li>
                <li>
                  <a href="mailto:Info.bysepia@gmail.com" class="nav-link fs-lg fw-normal px-0 py-1">
                    <Icon :icon="EnvelopeIcon" class="bx fs-4 me-2"></Icon>
                    Info.bysepia@gmail.com
                  </a>
                </li>
              </ul>
              <div class="d-flex pt-2 pt-sm-3 pt-md-4">
                <a href="#" class="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3" style="height: 44px; width: 44px;">
                  <Icon :icon="FacebookIcon" class="bx" width="20" height="20"></Icon>
                </a>
                <a href="#" class="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle me-3" style="height: 44px; width: 44px;">
                  <Icon :icon="LinkedinIcon" class="bx" width="20" height="20"></Icon>
                </a>
                <a href="#" class="btn btn-icon btn-sm btn-secondary btn-telegram rounded-circle me-3" style="height: 44px; width: 44px;">
                  <Icon :icon="TelegramIcon" class="bx" width="20" height="20"></Icon>
                </a>
                <a href="#" class="btn btn-icon btn-sm btn-secondary btn-youtube rounded-circle me-3" style="height: 44px; width: 44px;">
                  <Icon :icon="YoutubeIcon" class="bx" width="20" height="20"></Icon>
                </a>
              </div>
            </b-col>
            <b-col class="ps-sm-4 ps-md-5">
              <h3 class="h5 pb-1 pb-sm-2 pb-lg-3">Country</h3>
              <b-dropdown class="nav" menu-class="my-1" toggle-class="p-0 d-flex justify-content-start btn-link nav-link fs-lg fw-normal px-0 py-1" variant="link">
                <template v-slot:button-content>
                    <img :src="enImg" class="me-2" width="20" alt="USA" />
                    USA
                </template>

                <b-dropdown-item class="fs-base pb-1">
                  <img :src="frImg" class="me-2" width="20" alt="France" />
                  France
                </b-dropdown-item>
                <b-dropdown-item class="fs-base pb-1">
                  <img :src="deImg" class="me-2" width="20" alt="Germany" />
                  Germany
                </b-dropdown-item>
                <b-dropdown-item class="fs-base pb-1">
                  <img :src="itImg" class="me-2" width="20" alt="Italy" />
                  Italy
                </b-dropdown-item>
              </b-dropdown>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <p class="nav d-block fs-sm pt-5 mb-0">
        <span class="text-light opacity-60">&copy; All rights reserved. Made by </span>
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
import { Icon } from '@iconify/vue'
import PhoneCallIcon from '@iconify/icons-bx/bx-phone-call'
import EnvelopeIcon from '@iconify/icons-bx/bx-envelope'
import FacebookIcon from '@iconify/icons-bx/bxl-facebook'
import LinkedinIcon from '@iconify/icons-bx/bxl-linkedin'
import TelegramIcon from '@iconify/icons-bx/bxl-telegram'
import YoutubeIcon from '@iconify/icons-bx/bxl-youtube'
import logoImg from '@/assets/img/animated logo.svg'
import enImg from '@/assets/img/flags/en.png'
import frImg from '@/assets/img/flags/fr.png'
import deImg from '@/assets/img/flags/de.png'
import itImg from '@/assets/img/flags/it.png'
</script>
