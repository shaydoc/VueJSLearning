<template>
<div>
 
        <div class="jumbotron">
            <div class="container">
              <h2><router-link :to="{name:'dashboard'}">Vue Learnings</router-link></h2>
            </div>
        </div>
     <div class="container">
      <transition name="component-fade" mode="out-in">
            <router-view></router-view>        
      </transition>
     </div>
    
</div>
</template>

<script>
 

export default {
 methods:{
     toggle(){
         return false
     }
 }
}
</script>
<style>

</style>

 