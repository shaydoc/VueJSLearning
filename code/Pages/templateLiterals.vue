<template>
      <div>
      <h1>Template Literals</h1>
      <code>
          <pre>
   data(){
        return {
            x:23,
            y:54
        }
    },
 computed:{
        templateLiteral(){
            return `I am a template literal, where x is ${this.x} and y is ${this.y}, the value of x * 2 is ${this.x*2}, and the value of y squared is ${this.y*this.y}`
        }
    }              
          </pre>
      </code>
      <p>
         {{ templateLiteral }}
      </p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            x:23,
            y:54
        }
    },
    computed:{
        templateLiteral(){
            return `I am a template literal, where x is ${this.x} and y is ${this.y}, the value of x * 2 is ${this.x*2}, and the value of y squared is ${this.y*this.y}`
        }
    }
}
</script>

<style>
    
</style>
