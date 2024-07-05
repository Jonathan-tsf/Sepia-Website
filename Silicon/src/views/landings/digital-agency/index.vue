<template>
  <Navbar />

  <DigitalAgencyHero />
  
  <Acronym />
  
  <Features />

  <Projects />

  <Services />

  <DigitalAgencyFooter />

  <BackToTop />

</template>

<script setup lang="ts">
import Navbar from '@/layouts/partials/Navbar.vue'
import DigitalAgencyHero from '@/views/landings/digital-agency/components/DigitalAgencyHero.vue'
import Acronym from '@/views/landings/digital-agency/components/Acronym.vue'
import Features from '@/views/landings/digital-agency/components/Features.vue'
import Projects from '@/views/landings/digital-agency/components/Projects.vue'
import Services from '@/views/landings/digital-agency/components/Services.vue'
import Clients from '@/views/landings/digital-agency/components/Clients.vue'
import Testimonial from '@/views/landings/digital-agency/components/Testimonial.vue'
import atmosphere from '@/assets/img/landing/digital-agency/cover.jpg'
import Awards from '@/views/landings/digital-agency/components/Awards.vue'
import Blog from '@/views/landings/digital-agency/components/Blog.vue'
import DigitalAgencyFooter from '@/views/landings/digital-agency/components/DigitalAgencyFooter.vue'
import BackToTop from '@/layouts/partials/BackToTop.vue'
</script>
