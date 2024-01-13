<script setup>
import { usetaskStore } from '~/store/store'
const taskstore = usetaskStore()
const prop = defineProps(['task'])

</script>
<template>
    <div class="icon">
        <span class="material-symbols-outlined" @click="taskstore.deletetask(task.id)" style="cursor: pointer;">delete</span>
        <span class="material-symbols-outlined" :class="{ active: task.isfav }"
            @click="taskstore.togglefav(task.id)" style="cursor:pointer">favorite</span>
    </div>
</template>