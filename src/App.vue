<script setup>
import SidebarComponent from './components/SidebarComponent.vue';
</script>

<template>
  <h1 class="bg-black text-white p-5 border-b border-b-white text-2xl">A Wonderful Blog</h1>
 <section class="flex">
<aside>
  <sidebar-component/>
</aside>
  <main class="p-5 w-full">
    <router-view></router-view>
  </main>
  <router-view name="right"></router-view>
 </section>
</template>

<style scoped>


</style>
