<script setup lang="ts">
import { useForm } from 'vee-validate'
import InputText from '@/components/InputText.vue'
import { type Schema, schema } from '@/Schema/Schema'

const { handleSubmit, handleReset } = useForm<Schema>({ validationSchema: schema })

const onSubmit = handleSubmit(() => {
  window.alert('submit successfully')
  handleReset()
})
</script>

<template>
  <div class="md:container md:pb-20 md:px-52">
    <div class="grid place-items-center place-content-center pt-24 md:pt-44">
      <h1 class="text-3xl md:text-5xl text-white font-extrabold">CONTACT</h1>
      <div class="m-6 bg-[#FFC436] w-12 h-2 rounded"></div>
    </div>
    <div class="flex justify-center items-center">
      <div class="bg-white rounded-2xl p-4 md:p-6 mt-10">
        <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
          <InputText name="name" label="name" type="text" placeholder="enter your name" />
          <InputText name="email" label="email" type="email" placeholder="enter your email" />
          <InputText name="message" label="message" type="text" placeholder="enter your text" />
          <button class="btn btn-warning" type="submit">submit</button>
        </form>
      </div>
    </div>
  </div>
</template>


