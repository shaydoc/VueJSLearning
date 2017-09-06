<template>
<div>
  <h1>Vue JS Lifecycle</h1>

   <img src="https://vuejs.org/images/lifecycle.png" width="584px" />
</div>
</template>

<script>
export default {
    beforeCreate(){
      console.log('before create')
    },
    created(){
    console.log('created')
    },
    beforeMount(){
     console.log('before mount')
    },
    mounted(){
      console.log('mounted')
    },
    beforeUpdate(){
     console.log('before update')
    },
    updated(){
    console.log('update')
    },
    beforeDestroy(){
     console.log('before destroyed')
    },
    destroyed(){
     console.log('destroyed')
    }

}
</script>

<style>
  
</style>
