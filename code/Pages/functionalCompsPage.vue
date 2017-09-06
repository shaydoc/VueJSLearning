<template>
    <div>
        <functionalComp size="1" title="Heading 1"></functionalComp>   
        <functionalComp size="2" title="Heading 2"></functionalComp>   
        <functionalComp size="3" title="Heading 3"></functionalComp>   
        <functionalComp size="4" title="Heading 4"></functionalComp>              
        <functionalComp size="5" title="I am a functional component with no data state and no 'this' context. I must be implemented with a render function and some props"></functionalComp>   
   </div>
</template>

<script>
import functionalComp from '../Components/functionalComponents.vue'
export default {
  components:{ functionalComp  }
}

</script>

<style>
    
</style>
