<script setup>

</script>
 
<template>
 <aside class="w-[450px] bg-black text-white p-5">
    <ul>
        <li>
            Tags
        </li>
         <li>
            <router-link :to="{name:'post',params:{tag:'Travel'}}">Travel</router-link>
        </li>
       <li>
            <router-link :to="{name:'post',params:{tag:'Food'}}">Food</router-link>
        </li>
        <li>
            <router-link :to="{name:'post',params:{tag:'Life Style'}}">Life Style</router-link>
        </li>
    </ul>
 </aside>
    
</template>

<style>

</style>