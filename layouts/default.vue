<template>
  <div class="antialiased leading-tight font-sans text-black bg-black min-h-screen">
    <div class="flex flex-col justify-between">
      <nuxt class="min-h-screen"/>
      <links/>
    </div>
  </div>
</template>

<script>
import Links from "@/components/Links.vue"

export default {
  components: {
    Links
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
