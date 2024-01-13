<script setup>
import { usetaskStore } from '~/store/store'
const taskstore = usetaskStore()
const newtask = ref('')
const handletask = ()=>{
    if(newtask.value.length >0){
        taskstore.addtask({
            title : newtask.value,
            isfav : false,
            id : new Date().getTime()
        })
        newtask.value = ''
    }
}

</script>
<template>
    <div>
        <nav>
            <div class="imageH">
                <img src="/pinia.png" alt="pina">
                <h1>Pinia Tasks</h1>
            </div>
            <form @submit.prevent="handletask">
                <input type="text" class="search" placeholder="I need to ..." v-model="newtask">
                <button class="add" type="submit">Add</button>
            </form>
        </nav>
    </div>
  </template>
  