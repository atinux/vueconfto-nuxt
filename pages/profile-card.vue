<template>
  <div class="p-8">
    <h1 class="md:hidden text-white">Please use a computer to visit this page.</h1>
    <div class="hidden md:block mx-auto mb-24" style="width: 600px">
      <input class="block w-full mb-6" type="range" min="250" max="600" v-model="width1">
      <div :style="{ 'max-width': `${width1}px` }" class="mx-auto mb-12">
        <profile-card></profile-card>
      </div>
    </div>

    <div class="hidden md:block mx-auto" style="width: 600px">
      <input class="block w-full mb-6" type="range" min="250" max="600" v-model="width2">
      <div :style="{ 'max-width': `${width2}px` }" class="mx-auto">
        <profile-card></profile-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue"

export default {
  name: "ProfileCardPage",
  components: {
    ProfileCard
  },
  data() {
    return {
      width1: 420,
      width2: 300,
    }
  }
}
</script>
