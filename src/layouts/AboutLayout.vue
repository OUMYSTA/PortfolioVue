<script setup lang="ts">
import { ref } from 'vue'

interface Skills {
  label: string
}

const skills = ref<Skills[]>([
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript Basics' },
  { label: 'vue' },
  { label: 'Python' },
  { label: 'C#' },
  { label: 'SQL Basics' },
  { label: 'TailwindCSS' },
  { label: 'GIT Basics' },
  { label: 'Github' },
  { label: 'TypeScript' },
  { label: 'Photoshop' },
  { label: 'Responsive Basics' }
])
</script>
<template>
  <div class="mx-10 md:mx-20">
    <div class="container">
      <div class="grid place-items-center place-content-center pt-24 md:pt-44">
        <h1 class="text-3xl md:text-5xl flex text-white font-extrabold">ABOUT ME</h1>
        <div class="m-6 bg-[#FFC436] w-12 h-2 rounded"></div>
      </div>
    </div>
    <div class="md:grid grid-cols-2 text-white font-extrabold pt-10 md:pt-20 text-4xl">
      <div>
        <h2 class="text-2xl md:text-3xl">Get to know me</h2>
        <div class="grid md:place-items-center mt-8 gap-8">
          <p
            class="flex flex-wrap text-sm w-full sm:text-base md:text-xl md:leading-loose font-bold mr-10 leading-loose"
          >
            Hi, I'm Oumphaphone Siphachanh, 20 years old. I'm a computer science student. I'm
            interested in designing and coding websites. I love cats. I like to play guitar when I'm
            free. And <span class="text-warning">I'm a membership:</span>
          </p>
          <div class="flex max-[360px]:flex-col justify-center ml-20 items-center gap-8">
            <img
              src="https://scontent.fvte3-1.fna.fbcdn.net/v/t39.30808-6/369259623_607702998181260_2653707724072833992_n.png?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHQ9MNJYFc3Lkcat-V6p_n0RjYjd30o9H1GNiN3fSj0fW_WOy3hRSmbzRMdLFiHZdVMmliILMjHvK5ncSvEoBX4&_nc_ohc=rEF7YZfkBw8AX-y1MJh&_nc_ht=scontent.fvte3-1.fna&oh=00_AfAOyqm1351iXo2DuaklGmWjVL-nlfXvkC3sO-r2QQX-9w&oe=65195B3F"
              class="rounded-full w-36 md:w-48 lg:w-52 h-auto"
            />
            <img
              src="https://scontent.fvte3-1.fna.fbcdn.net/v/t39.30808-6/309464607_466644348827541_4979072672079178878_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeF5oAS5q_bbiB1C8jglMYFaRkCOhOXWk4pGQI6E5daTiqYLrGw3QMtexR0D6jo09YS5ZnEkQVbmhChcYi-ApKQz&_nc_ohc=prRPGwhaYJwAX9yS-Gz&_nc_ht=scontent.fvte3-1.fna&oh=00_AfDj74D59iAIqNrAlejHysURh-pb7CIU5SsHPv7EBE1OEA&oe=651908DE"
              class="rounded-full w-36 md:w-48 lg:w-52 h-auto"
            />
          </div>
          <div class="flex justify-center">
            <a href="#Contact" class="btn btn-warning rounded-2xl btn-md md:btn-lg font-bold">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div class="md:ml-14 mt-8 md:mt-0">
        <h2 class="text-2xl md:text-3xl">My Skills</h2>
        <div class="flex items-center text-warning-content flex-wrap font-bold mt-10 w-auto">
          <div v-for="(skill, idx) of skills" :key="idx">
            <div class="bg-warning mr-2 md:mr-2 mb-5 p-2 rounded-xl text-xs md:text-sm">
              {{ skill.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
