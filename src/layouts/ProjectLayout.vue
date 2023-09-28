<script setup lang="ts">
import { reactive } from 'vue'
interface Tools {
  name: string
}

interface Project {
  img: string
  name: string
  btn: string
  tools: Tools[]
}

const projects = reactive<Project[]>([
  {
    img: 'https://github.com/AOI-SK/Panda-climbing-bamboo-game/blob/main/Panda/Panda/Resources/survival.png?raw=true',
    name: 'Panda Climbing Bamboo Game',
    btn: 'https://github.com/OUMYSTA/PandaClimbingBamboo',
    tools: [{ name: 'C#' }, { name: 'Photoshop' }]
  },
  {
    img: 'https://i.pinimg.com/564x/a2/36/03/a23603e7596faaf552cc11c914cc1cc2.jpg',
    name: 'Cat blog',
    btn: 'https://github.com/OUMYSTA/learnrouter',
    tools: [{ name: 'HTML' }, { name: 'TailwindCSS' }, { name: 'vue' }, { name: 'TypeScript' }]
  },
  {
    img: 'https://i.pinimg.com/564x/57/27/83/572783f9ac21f5dd63661decef1cc75b.jpg',
    name: 'Web Landing Page',
    btn: 'https://github.com/OUMYSTA/Lombok_landingpage',
    tools: [{ name: 'HTML' }, { name: 'TailwindCSS' }, { name: 'vue' }, { name: 'TypeScript' }]
  }
])
</script>

<template>
  <div class="sm:mx-14 md:mx-20">
    <div class="grid place-items-center place-content-center pt-24 md:pt-44">
      <h1 class="text-3xl md:text-5xl text-white font-extrabold">PROJECT</h1>
      <div class="m-6 bg-[#FFC436] w-12 h-2 rounded"></div>
    </div>
    <div
      class="grid max-xl:grid xl:grid-cols-3 place-items-center mt-10 gap-x-4 gap-y-8 lg:gap-10"
    >
      <div v-for="(project, idx) of projects" :key="idx">
        <div class="text-black">
          <div class="card w-72 lg:w-72 h-fit bg-base-100">
            <figure>
              <img :src="`${project.img}`" class="h-28 md:h-36 lg:h-48 w-full object-fill" />
            </figure>
            <div class="card-body grid place-items-center">
              <h2 class="card-title text-center text-sm md:text-base lg:text-xl">
                {{ project.name }}
              </h2>
              <a
                target="_blank"
                :href="`${project.btn}`"
                class="btn btn-warning rounded-xl md:rounded-2xl px-6 md:px-10 w-fit mt-1 md:mt-2 text-[12px] md:text-base"
                >code</a
              >
              <div class="card-actions justify-end mt-4">
                <div class="flex flex-wrap justify-center gap-3">
                  <div
                    class="badge badge-outline mr-2 md:mr-5 text-[9px] md:text-base"
                    v-for="(tool, idx) of project.tools"
                    :key="idx"
                  >
                    {{ tool.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <a
        target="_blank"
        href="https://github.com/OUMYSTA"
        class="btn btn-warning rounded-2xl btn-md md:btn-lg font-bold mt-10"
      >
        see more
      </a>
    </div>
  </div>
</template>
