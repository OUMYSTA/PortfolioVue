<script setup lang="ts">
import { ref } from 'vue'

interface Menus {
  id: string
  menu: string
}

const menus = ref<Menus[]>([
  {
    id: '',
    menu: 'HOME'
  },
  {
    id: 'About',
    menu: 'ABOUT'
  },
  {
    id: 'Project',
    menu: 'PROJECT'
  },
  {
    id: 'Contact',
    menu: 'CONTACT'
  }
])
</script>
<template>
  <div class="flex justify-between items-center p-4 md:p-6 font-bold">
    <div class="flex items-center cursor-pointer">
      <img
        src="https://i.pinimg.com/564x/cb/73/f8/cb73f8f2b6ebea8dcfdd389bb0182469.jpg"
        class="mr-5 rounded-full w-8 sm:w-12 h-auto md:w-16 lg:w-20"
      />
      <span class="invisible md:visible text-lg md:text-xl lg:text-2xl text-[#FFC436] mr-4"
        >OUMPHAPHONE SIPHACHANH</span
      >
    </div>
    <div class="dropdown dropdown-end">
      <button tabindex="0" class="visible lg:invisible btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-4 h-4 md:w-8 md:h-8 stroke-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <ul tabindex="0" class="menu dropdown-content z-[1] text-white bg-black rounded-xl shadow-white shadow p-4">
      <li v-for="(menu, idx) of menus" :key="idx">
        <a
          :href="`#${menu.id}`"
          class="hover:text-warning font-bold hover:border-b-2 border-[#FFC436] text-xs"
          >{{ menu.menu }}</a
        >
      </li>
    </ul>
    </div>
    <div class="hidden lg:block">
    <ul class="inline-flex flex-shrink-0 overflow-x-hidden items-center text-white text-lg">
      <li class="ml-5" v-for="(menu, idx) of menus" :key="idx">
        <a
          :href="`#${menu.id}`"
          class="hover:text-[#FFC436] font-bold hover:border-b-2 border-[#FFC436]"
          >{{ menu.menu }}</a
        >
      </li>
    </ul></div>
  </div>
</template>
