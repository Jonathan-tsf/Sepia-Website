<template>
  <b-container class="mt-4 mb-5 pt-2 pb-lg-5">
    <b-row class="gy-4">
      <b-col lg="7" md="6">
        <img :src="podcast" alt="Cover" class="rounded-3" />
      </b-col>
      <b-col lg="5" md="6">
        <div class="ms-xl-5 ms-lg-4 ps-xxl-34">
          <h3 class="h6 mb-2">
            <svg
              class="me-2 mt-n1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
            >
              <path
                d="M20 12.5003v-1.707c0-4.44199-3.479-8.16099-7.755-8.28999-2.204-.051-4.251.736-5.816 2.256S4 8.31831 4 10.5003v2c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2v-10c0-1.63699.646-3.16599 1.821-4.30599s2.735-1.739 4.363-1.691c3.208.096 5.816 2.918 5.816 6.28999v9.707h2c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2z"
                fill="url(#A)"
              />
              <path d="M7 12.5003h2v8H7v-8zm8 0h2v8h-2v-8z" fill="url(#A)" />
              <defs>
                <linearGradient
                  id="A"
                  x1="2"
                  y1="11.5437"
                  x2="22"
                  y2="11.5437"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#6366f1" />
                  <stop offset=".5" stop-color="#8b5cf6" />
                  <stop offset="1" stop-color="#d946ef" />
                </linearGradient>
              </defs>
            </svg>
            Podcast
          </h3>
          <h1 class="display-5 pb-md-3">How to Choose a Fantastic SEO Agency</h1>
          <div class="d-flex align-items-center flex-wrap text-muted mb-lg-5 mb-md-4 mb-3">
            <div class="fs-xs border-end pe-3 me-3 mb-2">
              <b-badge class="bg-faded-primary text-primary fs-base">Startups</b-badge>
            </div>
            <div class="fs-sm border-end pe-3 me-3 mb-2">10 hours ago</div>
            <div class="d-flex mb-2">
              <div class="d-flex align-items-center me-3">
                <Icon :icon="LikeIcon" class="fs-base me-1" />
                <span class="fs-sm">18</span>
              </div>
              <div class="d-flex align-items-center me-3">
                <Icon :icon="CommentIcon" class="fs-base me-1" />
                <span class="fs-sm">4</span>
              </div>
              <div class="d-flex align-items-center">
                <Icon :icon="ShareAltIcon" class="fs-base me-1" />
                <span class="fs-sm">2</span>
              </div>
            </div>
          </div>
          <p class="mb-0 fs-lg">
            Massa massa sapien tristique cras enim. Diam at tempus tempus iaculis mattis et. Platea
            facilisis cursus congue diam in amet. Velit urna cras leo viverra mauris aenean arcu,
            cursus. Commodo rhoncus sit vulputate maecenas augue amet arcu libero. Lobortis enim,
            ut dui rutrum tempor at rutrum aenean pharetra. Quis vulputate egestas sed arcu.
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import podcast from '@/assets/img/blog/podcasts/06.jpg'
import { Icon } from '@iconify/vue'
import ShareAltIcon from '@iconify/icons-bx/bx-share-alt'
import CommentIcon from '@iconify/icons-bx/comment'
import LikeIcon from '@iconify/icons-bx/bx-like'
</script>
