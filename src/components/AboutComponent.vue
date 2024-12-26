<script setup>
import { ref, reactive } from "vue";
const date=new Date();
const data=reactive({
    gender:'',
    date:date.toISOString().slice(0,10)
})



</script>

<template>

    <br>{{ data.gender }}
    <br>{{ data.date }}
    <h1> This is About Component changed</h1>

    <input v-model="data.gender" type="radio" value="male" name="gender">
    <input type="radio" v-model="data.gender" value="female" name="gender">
    <input type="date" v-model="data.date">

</template>

<style scoped>
</style>
