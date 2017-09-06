<template>
  <div>
      <button class="btn btn-primary" @click="increment" >Increment</button>
      <button class="btn btn-danger" @click="decrement" >Decrement</button>
  </div>
</template>

<script>
export default {
   props:['dataIn'],
   methods:{
       increment(){
            this.$emit('update:dataIn', this.dataIn + 1)
       },
       decrement(){
            this.$emit('update:dataIn', this.dataIn - 1)
       }
   }
}
</script>

<style>
  
</style>
