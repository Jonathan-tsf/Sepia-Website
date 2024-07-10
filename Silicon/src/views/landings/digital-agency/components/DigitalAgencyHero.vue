<template>
  <div>
    <Jarallax
      custom-class="jarallax position-relative d-flex align-items-center min-vh-100 bg-light mb-5 py-lg-5 pt-5"
      :custom-style="{ backgroundImage: `url(${heroBg})` }"
      :options="{ imgPosition: '0% 100%', speed: 0.5 }"
    >
      <b-container class="position-relative zindex-5 py-5">
        <b-row class="justify-content-md-start justify-content-center">
          <b-col
            md="6"
            sm="8"
            class="order-md-1 order-2 d-flex flex-column justify-content-between mt-4 pt-2 text-md-start text-center"
          >
            <div class="mb-md-5 pb-xl-5 mb-4">
              <h1 class="display-2 mb-md-5 mb-3 pb-3">
                Information by <span class="text-gradient-primary">Conversation</span> <br>
                <span class="text-container">
                  <span class="transition" :class="{'exit': exiting, 'enter': entering}">
                    {{ currentText }}
                  </span>
                </span>
                Everyone
              </h1>

              <div class="d-md-flex align-items-md-start">
                <router-link
                  to="/contacts-1"
                  class="btn btn-lg btn-primary flex-shrink-0 me-md-4 mb-md-0 mb-sm-4 mb-3"
                >
                  Work with Us
                </router-link>
                <p class="d-lg-block d-none mb-0 ps-md-3">
                  Sepia aims to change how businesses convey, sell, or create information through Intelligent Assistants (IA). <br> IA are successors to the ages-old chatbots and thanks to LLM technology, they're more intelligent than ever. 
                </p>
              </div>
            </div>

            <div
              class="d-inline-flex align-items-center justify-content-center justify-content-md-start position-relative"
            >
              <a
                href="#acronym"
                data-scroll
                data-scroll-offset='50px'
                class="btn btn-video btn-icon rounded-circle shadow-sm flex-shrink-0 stretched-link me-3"
                aria-label="Scroll for more"
              >
                <i class="fas fa-chevron-down"></i>
              </a>
              <span class="fs-sm">See more</span>
            </div>
          </b-col>

          <b-col sm="6" cols="9" class="order-md-2 order-1">
            <Vue3Lottie
              class="mx-auto"
              background-color="transparent"
              :speed="1"
              loop
              autoplay
              :animation-data="digitalAgencyAnim"
            />
          </b-col>
        </b-row>
      </b-container>
    </Jarallax>

    <!-- Chat Button -->
    <button @click="toggleChat" :class="{'chat-button': true, 'open': showChat}">
      <i :class="showChat ? 'fas fa-plus' : 'fas fa-comments'"></i>
    </button>

    <!-- Chat Window -->
    <transition name="slide-fade">
      <div v-if="showChat" class="chat-window">
        <div class="chat-header">
          <img :src="logo" alt="Logo" class="chat-logo">
          <div class="chat-title">
            <h3>Sépia Assistant</h3>
            <span>Responds instantly, 24/7</span>
          </div>
          <button @click="toggleChat" class="close-button">&times;</button>
        </div>
        <div class="chat-body" id="chatbot-messages">
        </div>
        <div class="chat-footer">
          <input type="text" id="chatbot-input" placeholder="Type your message here..." @input="clearTypingIndicator"/>
          <button @click="sendMessage" id="chatbot-send">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTextAnimation } from '@/composables/useTextAnimation'
import heroBg from '@/assets/img/landing/digital-agency/hero-bg.svg'
import logo from '@/assets/img/animated logo.svg'
import { Vue3Lottie } from 'vue3-lottie'
import digitalAgencyAnim from '@/assets/json/animation-digital-agency.json'
import Jarallax from '@/components/Jarallax.vue'
import '@fortawesome/fontawesome-free/css/all.css'

// Import the external SCSS file
import '@/assets/scss/components/textAnimation.scss'

const { currentText, exiting, entering } = useTextAnimation()
const showChat = ref(false)
const isTyping = ref(false)
const messages = ref([])

const toggleChat = () => {
  showChat.value = !showChat.value
}

const sendMessage = () => {
  const inputField = document.getElementById('chatbot-input') as HTMLInputElement;
  const message = inputField.value;
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  console.log('Send button clicked, message:', message);
  if (message.trim() !== "") {
    isTyping.value = true;
    appendMessage('User', message, time);
    fetch('http://54.144.246.156/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message })
    })
    .then(response => {
      console.log('Response received:', response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      isTyping.value = false;
      console.log('Data received:', data);
      const botTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      clearTypingIndicator();
      appendMessage('Bot', data.response, botTime);
    })
    .catch(error => {
      isTyping.value = false;
      clearTypingIndicator();
      console.error('Error:', error);
    });
    inputField.value = '';
  }
}

const clearTypingIndicator = () => {
  const typingIndicator = document.querySelector('.typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

const appendTypingIndicator = () => {
  const messagesDiv = document.getElementById('chatbot-messages');
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'typing-indicator';
  
  // Styling for the typing indicator
  typingIndicator.style.display = 'flex';
  typingIndicator.style.alignItems = 'center';
  typingIndicator.style.justifyContent = 'flex-start';
  typingIndicator.style.height = '24px';
  typingIndicator.style.margin = '5px 0';

  // Creating the dots
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('div');
    dot.style.width = '8px';
    dot.style.height = '8px';
    dot.style.marginRight = '4px';
    dot.style.backgroundColor = '#211833';
    dot.style.borderRadius = '50%';
    dot.style.animation = 'wave 1.2s linear infinite';
    dot.style.animationDelay = `-${1.1 - i * 0.1}s`;
    typingIndicator.appendChild(dot);
  }

  messagesDiv.appendChild(typingIndicator);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Chatbot logic
onMounted(() => {
  const inputField = document.getElementById('chatbot-input');

  console.log('Mounted and attaching event listeners.');

  if (inputField) {
    console.log('Elements found, attaching event listeners.');

    inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  } else {
    console.error('Input field not found.');
  }
});

function appendMessage(sender, message, time) {
  messages.value.push({ id: Date.now(), sender, content: message, time });

  const messagesDiv = document.getElementById('chatbot-messages');
  const wrapper = document.createElement('div');
  const newMessage = document.createElement('div');
  newMessage.className = 'message-content';
  newMessage.textContent = message;

  const senderName = document.createElement('div');
  senderName.className = 'sender-name';
  senderName.textContent = sender === 'User' ? 'Moi' : 'Sépia Assistant';
  
  const timeStamp = document.createElement('div');
  timeStamp.className = 'message-time';
  timeStamp.textContent = time;
  
  if (sender === 'User') {
    newMessage.style.backgroundColor = '#211833'; // Bleu pour l'utilisateur
    newMessage.style.alignSelf = 'flex-end'; // Aligné à gauche
    newMessage.style.color = '#fff'; // Texte blanc pour contraste
    newMessage.style.borderRadius = '10px';
    newMessage.style.padding = '10px';
    newMessage.style.marginBottom = '5px';
    newMessage.style.maxWidth = '80%';
    senderName.style.alignSelf = 'flex-end';
    timeStamp.style.alignSelf = 'flex-end';
    newMessage.style.fontSize = '14px';
  } else {
    newMessage.style.backgroundColor = '#ececec'; // Gris pour le bot
    newMessage.style.alignSelf = 'flex-start'; // Aligné à droite
    newMessage.style.color = '#000';
    newMessage.style.borderRadius = '10px';
    newMessage.style.padding = '10px';
    newMessage.style.marginBottom = '5px';
    newMessage.style.maxWidth = '80%';
    senderName.style.alignSelf = 'flex-start';
    timeStamp.style.alignSelf = 'flex-start';
    newMessage.style.fontSize = '14px';

    // Ajout du logo animé SVG pour les messages du bot
    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.alt = 'Logo';
    logoImg.className = 'message-logo';
    logoImg.style.width = '20px';
    logoImg.style.height = '20px';
    wrapper.style.display = 'flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.justifyContent = 'flex-start';
    wrapper.style.flexDirection = 'row';
    logoImg.style.alignSelf = 'flex-end';
    logoImg.style.marginBottom = '8px';
    logoImg.style.marginRight = '10px';
    wrapper.appendChild(logoImg);
    wrapper.appendChild(newMessage);
  }

  senderName.style.fontSize = '12px';
  timeStamp.style.fontSize = '12px';
  senderName.style.color = 'black';
  timeStamp.style.color = 'black';

  messagesDiv.appendChild(senderName);
  if (sender === 'Bot') {
    messagesDiv.appendChild(wrapper);
  } else {
    messagesDiv.appendChild(newMessage);
  }
  messagesDiv.appendChild(timeStamp);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  if (isTyping.value) {
    appendTypingIndicator(messagesDiv);
  }
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes wave {
  0%, 60%, 100% {
    transform: initial;
  }
  30% {
    transform: translateY(-8px);
  }
}
`;
document.head.appendChild(style);
</script>

<style scoped>
/* Transition for chat window */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Style for the chat button */
.chat-button {
  position: fixed;
  bottom: 40px; /* Adjusted to be higher */
  right: 20px;
  background-color: #211833;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: transform 0.5s;
  border: 2px solid white;
}

.chat-button:hover {

  outline: 2px solid #211833;
}

.chat-button.open {
  transform: rotate(45deg);
}

/* Style for the chat window */
.chat-window {
  position: fixed;
  bottom: 120px; /* Adjusted to be higher */
  right: 20px;
  width: 450px; /* Increased width */
  height: 550px; /* Increased height */
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.chat-header {
  background-color: #211833;
  color: white;
  padding: 5px 10px; /* Reduced padding */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid #ccc; 
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-logo {
  width: 30px;
  height: 30px;
}

.chat-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
}

.chat-title h3 {
  margin: 0;
  font-size: 14px;
}

.chat-title span {
  font-size: 12px;
  color: #ccc;
}

.close-button {
  background: none;
  border: none;
  color: white;
  font-size: 35px; /* Increased font size */
  cursor: pointer;
}

.chat-body {
  padding: 10px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.chat-footer {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: white; /* Changed background color to white */
}

#chatbot-input {
  flex: 1;
  padding: 5px; 
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 14px; 
  background-color: white;
  padding-left: 10px;
  color: black
}

#chatbot-send {
  background-color: #211833;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

#chatbot-send i {
  color: white;
}

#chatbot-send:hover {
  background-color: #211833;
}
</style>
