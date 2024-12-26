<script setup>
import { reactive } from "vue";
import users from "../dataStore/data";
import router from "../router/router";
const formInput = reactive({
  email: "",
  password: "",
});

function login() {
    const data=JSON.parse(localStorage.getItem('users'))
    const user = data.find(item => item.email === formInput.email)
  if (
    formInput.email === user.email &&
    formInput.password === user.password
  ) {
    localStorage.setItem("isLoggin", 1)
    users.loggin=!users.loggin
    router.push({ name: "dashboard" });
  } else {
    alert("Login Failed");
  }
}
</script>

<template>

  <h1 class="text-center text-2xl">Login</h1>
  <form @submit.prevent="login" class="max-w-sm mx-auto">
    <div class="mb-5">
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your email</label
      >
      <input
        v-model="formInput.email"
        type="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <div class="mb-5">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your password</label
      >
      <input
        v-model="formInput.password"
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Login
    </button>
  </form>
</template>

<style scoped></style>
