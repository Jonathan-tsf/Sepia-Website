<template>
  <footer class="footer position-relative zindex-2 pb-3 pb-xl-0">
    <div class="d-none d-lg-block" style="margin-top: -70px"></div>
    <div class="d-none d-md-block d-lg-none" style="margin-top: -100px"></div>
    <div class="d-md-none" style="margin-top: -130px"></div>
    <b-container>
      <b-row>
        <!-- About links -->
        <b-col cols="12" xl="3" class="pb-sm-2 pb-md-3 mb-4 mb-lg-5 mb-xl-0">
          <div class="d-flex align-items-center mb-3 mb-xl-0">
            <div class="navbar-brand text-dark pb-xl-3 pe-2 pe-xl-0 mb-xl-2 me-4 me-xl-0">
              <img :src="logoImg" width="47" alt="Sepia" />
              Sepia
            </div>
            <select class="form-select form-select-sm d-xl-none" style="max-width: 130px">
              <option value="English">English</option>
              <option value="Français">Français</option>
              <option value="Deutsch">Deutsch</option>
              <option value="Italiano">Italiano</option>
            </select>
          </div>
          <div class="d-flex flex-wrap flex-xl-column ps-xl-5 ms-n3 ms-xl-2">
            <ul class="nav flex-xl-column">
              <li class="nav-item mb-1">
                <a href="#" class="nav-link py-1 px-xl-0">About us</a>
              </li>
              <li class="nav-item mb-1">
                <a href="#" class="nav-link py-1 px-xl-0">Contact us</a>
              </li>
              <li class="nav-item mb-1">
                <a href="#" class="nav-link py-1 px-xl-0">Terms of service</a>
              </li>
            </ul>
            <ul class="nav flex-xl-column pt-xl-3">
              <li class="nav-item mb-1">
                <a href="#" class="nav-link py-1 px-xl-0">GitHub</a>
              </li>
              <li class="nav-item mb-1">
                <a href="#" class="nav-link py-1 px-xl-0">Twitter</a>
              </li>
              <li class="nav-item mb-1">
                <a href="#" class="nav-link py-1 px-xl-0">Telegram</a>
              </li>
            </ul>
          </div>
          <div class="d-none d-xl-block pt-4 ps-5 ms-2">
            <select class="form-select form-select-sm" style="max-width: 130px">
              <option value="English">English</option>
              <option value="Français">Français</option>
              <option value="Deutsch">Deutsch</option>
              <option value="Italiano">Italiano</option>
            </select>
          </div>
        </b-col>

        <!-- AI models links -->
        <b-col sm="6" md="4" xl="3" class="pb-1 mb-4">
          <h5 class="pb-md-1">AI models</h5>
          <div class="position-relative d-flex align-items-center py-2 my-1">
            <div class="position-relative flex-shrink-0 p-3">
              <span
                class="position-absolute top-0 start-0 w-100 h-100 rounded-circle bg-gradient-primary opacity-10"
              ></span>
              <span class="position-relative d-flex zindex-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 1.5C18.3442 1.5 18.6441 1.73422 18.7276 2.0681L18.9865 3.10356C19.2216 4.04406 19.9559 4.7784 20.8964 5.01353L21.9319 5.27239C22.2658 5.35586 22.5 5.65585 22.5 6C22.5 6.34415 22.2658 6.64414 21.9319 6.72761L20.8964 6.98647C19.9559 7.2216 19.2216 7.95594 18.9865 8.89644L18.7276 9.9319C18.6441 10.2658 18.3442 10.5 18 10.5C17.6558 10.5 17.3559 10.2658 17.2724 9.9319L17.0135 8.89644C16.7784 7.95594 16.0441 7.2216 15.1036 6.98647L14.0681 6.72761C13.7342 6.64414 13.5 6.34415 13.5 6C13.5 5.65585 13.7342 5.35586 14.0681 5.27239L15.1036 5.01353C16.0441 4.7784 16.7784 4.04406 17.0135 3.10356L17.2724 2.0681C17.3559 1.73422 17.6558 1.5 18 1.5ZM18 4.59616C17.6534 5.17111 17.1711 5.65342 16.5962 6C17.1711 6.34658 17.6534 6.82889 18 7.40384C18.3466 6.82889 18.8289 6.34658 19.4038 6C18.8289 5.65342 18.3466 5.17111 18 4.59616ZM9 4.5C9.33486 4.5 9.62915 4.72198 9.72114 5.04396L10.5343 7.89015C10.8903 9.13593 11.8641 10.1097 13.1099 10.4657L15.956 11.2789C16.278 11.3709 16.5 11.6651 16.5 12C16.5 12.3349 16.278 12.6291 15.956 12.7211L13.1098 13.5343C11.8641 13.8903 10.8903 14.8641 10.5343 16.1099L9.72114 18.956C9.62915 19.278 9.33486 19.5 9 19.5C8.66514 19.5 8.37085 19.278 8.27886 18.956L7.46566 16.1098C7.10972 14.8641 6.13593 13.8903 4.89015 13.5343L2.04396 12.7211C1.72198 12.6291 1.5 12.3349 1.5 12C1.5 11.6651 1.72198 11.3709 2.04396 11.2789L4.89015 10.4657C6.13593 10.1097 7.10972 9.13593 7.46566 7.89015L8.27886 5.04396C8.37085 4.72198 8.66514 4.5 9 4.5ZM9 7.98004L8.90795 8.30223C8.40963 10.0463 7.04632 11.4096 5.30223 11.9079L4.98004 12L5.30223 12.0921C7.04632 12.5904 8.40963 13.9537 8.90795 15.6978L9 16.02L9.09205 15.6978C9.59037 13.9537 10.9537 12.5904 12.6978 12.0921L13.02 12L12.6978 11.9079C10.9537 11.4096 9.59037 10.0463 9.09205 8.30223L9 7.98004ZM16.5 15C16.8228 15 17.1094 15.2066 17.2115 15.5128L17.6058 16.6956C17.7551 17.1435 18.1065 17.4949 18.5544 17.6442L19.7372 18.0385C20.0434 18.1406 20.25 18.4272 20.25 18.75C20.25 19.0728 20.0434 19.3594 19.7372 19.4615L18.5544 19.8558C18.1065 20.0051 17.7551 20.3565 17.6058 20.8044L17.2115 21.9872C17.1094 22.2934 16.8228 22.5 16.5 22.5C16.1772 22.5 15.8906 22.2934 15.7885 21.9872L15.3942 20.8044C15.2449 20.3565 14.8935 20.0051 14.4456 19.8558L13.2628 19.4615C12.9566 19.3594 12.75 19.0728 12.75 18.75C12.75 18.4272 12.9566 18.1406 13.2628 18.0385L14.4456 17.6442C14.8935 17.4949 15.2449 17.1435 15.3942 16.6956L15.7885 15.5128C15.8906 15.2066 16.1772 15 16.5 15ZM16.5 17.8354C16.2653 18.203 15.953 18.5153 15.5854 18.75C15.953 18.9847 16.2653 19.297 16.5 19.6646C16.7347 19.297 17.047 18.9847 17.4146 18.75C17.047 18.5153 16.7347 18.203 16.5 17.8354Z"
                    fill="url(#paint0_linear_11_19620)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_11_19620"
                      x1="1.5"
                      y1="12.0502"
                      x2="22.5"
                      y2="12.0502"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#6366F1" />
                      <stop offset="0.5" stop-color="#8B5CF6" />
                      <stop offset="1" stop-color="#D946EF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
            <div class="nav flex-column ps-3">
              <a href="#" class="nav-link fw-bold stretched-link p-0">Generative model</a>
              <div class="fs-xs">Generation of texts and images</div>
            </div>
          </div>
          <div class="position-relative d-flex align-items-center py-2 my-1">
            <div class="bg-warning bg-opacity-10 rounded-circle lh-1 p-3">
              <Icon :icon="MessageDotIcon" class="bx text-warning fs-4 lh-1"></Icon>
            </div>
            <div class="nav flex-column ps-3">
              <a href="#" class="nav-link fw-bold stretched-link p-0">Speech recognition</a>
              <div class="fs-xs">Transforms voice speech into text</div>
            </div>
          </div>
          <div class="position-relative d-flex align-items-center py-2 my-1">
            <div class="bg-success bg-opacity-10 rounded-circle lh-1 p-3">
              <Icon :icon="FileFindIcon" class="bx text-success fs-4 lh-1"></Icon>
            </div>
            <div class="nav flex-column ps-3">
              <a href="#" class="nav-link fw-bold stretched-link p-0">Files transcription</a>
              <div class="fs-xs">Converts different types of files</div>
            </div>
          </div>
          <div class="position-relative d-flex align-items-center py-2 my-1">
            <div class="bg-info bg-opacity-10 rounded-circle lh-1 p-3">
              <Icon :icon="TerminalIcon" class="bx text-info fs-4 lh-1"></Icon>
            </div>
            <div class="nav flex-column ps-3">
              <a href="#" class="nav-link fw-bold stretched-link p-0">Code generation</a>
              <div class="fs-xs">Autocompletion and generation</div>
            </div>
          </div>
          <div class="position-relative d-flex align-items-center py-2 my-1">
            <div class="bg-danger bg-opacity-10 rounded-circle lh-1 p-3">
              <Icon :icon="SearchIcon" class="bx text-danger fs-4 lh-1"></Icon>
            </div>
            <div class="nav flex-column ps-3">
              <a href="#" class="nav-link fw-bold stretched-link p-0">Smart search</a>
              <div class="fs-xs">Responds to search queries</div>
            </div>
          </div>
        </b-col>

        <!-- Integrations links -->
        <b-col sm="6" md="4" xl="3" class="pb-1 mb-4">
          <h5 class="pb-md-1">Integrations</h5>
          <div
            class="position-relative d-flex align-items-center py-2 my-1"
            v-for="(item, idx) in footerIntegrationData"
            :key="idx"
          >
            <div class="bg-secondary rounded-circle lh-1 p-3">
              <Icon :icon="item.icon" class="bx text-primary fs-4 lh-1"></Icon>
            </div>
            <div class="nav flex-column ps-3">
              <a href="#" class="nav-link fw-bold stretched-link p-0">{{ item.title }}</a>
              <div class="fs-xs">{{ item.content }}</div>
            </div>
          </div>
        </b-col>

        <!-- Resources links -->
        <b-col md="4" xl="3" class="pb-1 mb-4">
          <h5 class="pb-md-1">Resources</h5>
          <div
            class="position-relative d-flex align-items-center py-2 my-1"
            v-for="(item, idx) in footerResourcesData"
            :key="idx"
          >
            <div class="bg-secondary rounded-circle lh-1 p-3">
              <Icon :icon="item.icon" class="bx text-primary fs-4 lh-1"></Icon>
            </div>
            <div class="nav flex-column ps-3">
              <a href="#" class="nav-link fw-bold stretched-link p-0">{{ item.title }}</a>
              <div class="fs-xs">{{ item.content }}</div>
            </div>
          </div>
        </b-col>
      </b-row>
      <div class="text-sm-center pb-3 py-sm-3 py-md-4 py-xl-5">
        <p class="nav d-block fs-sm mb-0">
          <span class="text-body">&copy; All rights reserved. Made by </span>
          <a
            class="nav-link d-inline-block p-0"
            
            target="_blank"
            rel="noopener"
            >Sepia</a
          >
        </p>
      </div>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import logoImg from '@/assets/img/animated logo.svg'
import { Icon } from '@iconify/vue'
import { footerIntegrationData, footerResourcesData } from '../data'
import MessageDotIcon from '@iconify/icons-bx/bx-message-dots'
import FileFindIcon from '@iconify/icons-bx/bx-file-find'
import TerminalIcon from '@iconify/icons-bx/bx-terminal'
import SearchIcon from '@iconify/icons-bx/bx-search'
</script>
