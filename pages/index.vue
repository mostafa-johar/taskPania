<script setup>
import { usetaskStore } from '~/store/store'
  const taskstore = usetaskStore()
  const filter = ref('all')
</script>

<template>
  <div class="home">
    <Nav />
    
    <!-- Tasks list -->
    <section class="taskList">
      <div class="twoBtn">
        <button @click="filter='all'">All Tasks</button>
        <button @click="filter='fav'">Fav Tasks</button>
      </div>

      <!-- all tasks -->
      <section v-if="filter == 'all'">
        <p>you have <strong>{{ taskstore.total }}</strong> tasks left to do.</p>
        <div class="task" v-for="(task, index) in taskstore.tasks" :key="task.id">
          <Icon  :task = "task"/>
          {{ task.title }}
        </div>
      </section>

      <!-- fav tasks -->
      <section v-if="filter == 'fav'">
        <p>you have <strong>{{ taskstore.CountFav }}</strong> tasks left to do. </p>
        <div class="task" v-for="(task, index) in taskstore.getFav" :key="task.id">
          <Icon  :task = "task"/>
          {{ task.title }}
        </div>
      </section>

    </section>

</div>
</template>
