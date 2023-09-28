<template>
  <footer class="footer p-10 text-neutral-content md:flex justify-between">
    <div>
      <p class="text-white text-lg">Front-end Internship.<br />Oumphaphone Siphachanh</p>
    </div>
    <div>
      <span class="font-extrabold text-3xl text-white">Social</span>
      <div class="grid grid-flow-col gap-4">
        <a v-for="(icon, idx) of icons" :key="idx" class="text-xl hover:text-warning cursor-pointer" :href="`${icon.link}`" target="_blank"><i :class="`${icon.name}`"></i></a>
      </div>
    </div>
  </footer>
  <div class="bg-warning h-1 w-full"></div>
  <div class="pb-20 pt-10 text-white text-center">
    <p>© 2023 - Made by Oumphaphone Siphachanh</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Icons{
  name: string
  link: string
}
const icons = ref<Icons[]>([
  {name: 'ri-facebook-fill',
    link: 'https://www.facebook.com/OUMSPC/'},
  {name: 'ri-instagram-fill',
    link: 'https://www.instagram.com/oumino_2122/'},
  {name: 'ri-youtube-fill',
    link: 'https://www.youtube.com/channel/UCW93nLsXvTn3omd4F9JR9fg'},
  {name: 'ri-whatsapp-fill',
    link: 'https://wa.me/message/EMIYOKUGJAB4M1?src=qr'}
])
</script>
