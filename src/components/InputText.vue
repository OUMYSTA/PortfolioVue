<script setup lang="ts">
import { useField } from 'vee-validate';

const prop = defineProps<{name: string; label: string; type: string; placeholder: string}>()

const {value, errorMessage} = useField(() => prop.name)
</script>
<template>
  <div>
    <div class="flex flex-col gap-2">
        <label :for="name" class="font-bold">{{ label }}</label>
        <input
        v-model="value"
         :type="type"
         :id="name"
         :name="name"
         :placeholder="placeholder"
         :class="{'input-error':errorMessage}"
         class="input input-sm md:input-lg input-bordered input-warning md:w-72">
         <small class="text-error" v-if="errorMessage">{{ errorMessage }}</small>
    </div>
  </div>
</template>
