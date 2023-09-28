<script setup lang="ts">
import AboutComponent from '@/layouts/AboutLayout.vue';
import IntroComponent from '@/layouts/IntroLayout.vue'
import NavbarComponent from './components/NavbarComponent.vue'
import ProjectComponent from '@/layouts/ProjectLayout.vue';
import ContactComponent from '@/layouts/ContactLayout.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div class="md:container">
    <header class="sticky top-0 backdrop-filter backdrop-blur z-50">
      <NavbarComponent />
    </header>
    <main>
      <section id="/"><IntroComponent /></section>
      <section id="About"><AboutComponent /></section>
      <section id="Project"><ProjectComponent /></section>
      <section id="Contact"><ContactComponent /></section>
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>
