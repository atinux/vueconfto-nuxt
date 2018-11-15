<template>
  <div class="sm:p-6 text-center">
    <router-link to="/" class="p-2 block border-t border-grey-darker sm:inline-block sm:border-none text-grey no-underline font-bold" exact-active-class="text-white">Home</router-link>
    <span class="hidden sm:inline-block text-grey mx-3">|</span>
    <router-link to="/contact-list" class="p-2 block border-t border-grey-darker sm:inline-block sm:border-none text-grey no-underline font-bold" exact-active-class="text-white">Contact List</router-link>
    <span class="hidden sm:inline-block text-grey mx-3">|</span>
    <router-link to="/profile-card" class="p-2 block border-t border-grey-darker sm:inline-block sm:border-none text-grey no-underline font-bold" exact-active-class="text-white">Profile Card</router-link>
    <span class="hidden sm:inline-block text-grey mx-3">|</span>
    <router-link to="/landing-page" class="p-2 block border-t border-grey-darker sm:inline-block sm:border-none text-grey no-underline font-bold" exact-active-class="text-white">Landing Page</router-link>
  </div>
</template>
