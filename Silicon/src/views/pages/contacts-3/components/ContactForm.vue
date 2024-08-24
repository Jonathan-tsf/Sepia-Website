<template>
  <section
    class="bg-size-cover bg-position-bottom-center bg-repeat-0 py-5"
    :style="{ backgroundImage: `url(${bg})` }"
  >
    <b-container class="pt-5 pb-lg-4 pb-xl-5">
      <!-- Breadcrumb -->
      <b-nav class="pt-lg-4" aria-label="breadcrumb">
        <b-breadcrumb class="mb-0">
          <b-breadcrumb-item href="/">
            <Icon :icon="HomeAltIcon" class="fs-lg me-1" />
            Home
          </b-breadcrumb-item>
          <b-breadcrumb-item active>Contacts</b-breadcrumb-item>
        </b-breadcrumb>
      </b-nav>

      <b-row class="pt-md-2 pt-lg-5 pb-2 pb-md-4">
        <b-col xxl="4" xl="5" lg="6" class="pt-3 mt-3">
          <h1 class="h3 mb-2">Want to work with us?</h1>
          <h2 class="display-1 text-gradient-primary pb-sm-2 pb-md-3 mb-3">Let's talk!</h2>
          <div class="nav d-block lead pt-lg-5">
            <a href="mailto:info.bysepia@gmail.com" class="nav-link fw-normal text-decoration-underline p-0 mb-4"
              >info.bysepia@gmail.com</a
            >
          </div>
          <!-- Mention for response time -->
          <p class="mt-4 text-muted">
            One of our managers will respond within 12 hours.
          </p>
        </b-col>
        <b-col lg="6" class="offset-xl-1 offset-xxl-2 pt-3 pt-md-4 pt-lg-3 mt-3">
          <b-form @submit.prevent="handleSubmit">
            <b-row class="g-4">
              <b-col sm="6">
                <b-form-group label="Full name" label-for="fn" label-class="fs-base">
                  <b-form-input id="fn" v-model="formData.fullName" type="text" class="form-control-lg" required></b-form-input>
                  <b-form-invalid-feedback>Please enter your full name!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col sm="6">
                <b-form-group label="Email" label-for="email" label-class="fs-base">
                  <b-form-input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    class="form-control-lg"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback
                    >Please provide a valid email address!</b-form-invalid-feedback
                  >
                </b-form-group>
              </b-col>

              <b-col sm="6">
                <b-form-group label="Phone Number (Optional)" label-for="phone" label-class="fs-base">
                  <b-form-input id="phone" v-model="formData.phone" type="tel" class="form-control-lg"></b-form-input>
                </b-form-group>
              </b-col>

              <b-col sm="6">
                <b-form-group label="Preferred Contact Method" label-for="contactMethod" label-class="fs-base">
                  <b-form-select
                    id="contactMethod"
                    v-model="formData.contactMethod"
                    class="form-control-lg"
                    :options="contactMethodOptions"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>

              <b-col sm="12">
                <b-form-group label="Business Name" label-for="business" label-class="fs-base">
                  <b-form-input id="business" v-model="formData.businessName" type="text" class="form-control-lg" required></b-form-input>
                  <b-form-invalid-feedback>Please enter your business name!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col cols="12">
                <b-button size="lg" variant="primary" type="submit" class="w-100 w-sm-auto"
                  >Contact Us</b-button
                >
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import bg from '@/assets/img/contacts/bg.svg';
import { Icon } from '@iconify/vue';
import HomeAltIcon from '@iconify/icons-bx/bx-home-alt';

// Define form data and language options
const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  language: '',
  businessName: '',
  contactMethod: '',
});

const languageOptions = [
  { value: 'English', text: 'English' },
  { value: 'French', text: 'French' },
  { value: 'Spanish', text: 'Spanish' },
  // Add more languages as needed
];

const contactMethodOptions = [
  { value: 'Email', text: 'Email' },
  { value: 'Phone', text: 'Phone' },
];

// Handle form submission
const handleSubmit = async () => {
  try {
    const response = await fetch('https://chatbotsepia.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      alert('Your message has been sent!');
      // Réinitialiser le formulaire après l'envoi
      formData.value = {
        fullName: '',
        email: '',
        phone: '',
        language: '',
        businessName: '',
        contactMethod: '',
      };
    } else {
      alert('There was an error sending your message.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error sending your message.');
  }
};
</script>
