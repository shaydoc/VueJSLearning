<template>
    <div>
      <h1>Vue Router and the Props abstraction</h1>
     <blockquote>
      <p>
          Using $route in your component creates a tight coupling with the route which limits the flexibility of the component as it can only be used on certain urls.

To decouple this component from the router use props:
      </p>
      </blockquote>
      <code>
          <pre>
const routes =[{ name: 'routerProps',
                 path: '/routerprops/:id',
                 component: routerProps,
                 props:true }]


//tight coupling
this.$route.params.id - calling $route inside your component

 //decoupling -let vue-router inject route param as a prop
const myComp = {
  props: ['id']
}
          </pre>
      </code>
     

      <p> 
          The value of the router parameter is <strong>{{ this.$route.params.id }}</strong>
      </p>

       <p>
        Using props instead, the value router passes in to our id prop is still <strong>{{ id }}</strong>
      </p>
  </div>
</template>

<script>
export default {
    props:['id']
}
</script>

<style>
  
</style>
