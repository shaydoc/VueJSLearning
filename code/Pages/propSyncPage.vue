<template>
  <div>
      <h1>Prop Sync</h1>
      <propSyncComp :dataIn.sync="inputValue"></propSyncComp>

       <h3>The Input Value is:</h3>
      {{ inputValue }}
  </div>
</template>

<script>
import propSyncComp from '../Components/propSync.vue'

export default {
   components:{ propSyncComp },
   data(){
      return {
          inputValue:10
      }
   }
}
</script>

<style>
  
</style>
