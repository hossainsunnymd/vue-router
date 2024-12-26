<script setup>
import users from '../dataStore/data.js'
import router from '../router/router';

 function logout(){
    localStorage.removeItem('isLoggin')
    router.push({name:'login'})
    users.loggin=false
 }

</script>

<template>
    
        <section class="w-[450px] h-screen bg-black text-white" >
           
                <ul class="space-y-5">
                    <li>
                        <router-link :to="{name:'home'}">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'about'}">About</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'contact'}">Contact</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'blog'}">Blog</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'dashboard'}">Dashboard</router-link>
                    </li>
                    <li v-if="!users.loggin">
                        <router-link :to="{name:'login'}">Login</router-link>
                    </li>
                    <li v-if="users.loggin">
                        <a @click="logout" href="#">Logout</a>
                    </li>
                    <li>
                        <router-link :to="{name:'signUp'}">Sign Up</router-link>
                    </li>
                </ul>
           
        </section>
    
</template>

<style scoped>
    
</style>