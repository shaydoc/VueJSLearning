<template>
    <div>
         
        <h2>Index</h2>

          <ol>
            <li>
              <router-link :to="{name:'lifecycle'}">Vue Lifecyle</router-link>
            </li>
             <li>
               <router-link :to="{name:'arrowFunctions'}">Arrow Functions</router-link>
            </li>
            <li>
             <router-link :to="{name:'mixins'}">Mixins</router-link>
            </li>
            <li>
               <router-link :to="{name:'lodash'}">Intro to Lodash</router-link>
            </li>
            
         
            <li>  
                <router-link :to="{name:'formValidation'}">Form Validation</router-link>
            </li>
               <li>  
                <router-link :to="{name:'modal'}">Modals</router-link>
            </li>
         
        
            <li>  
                <router-link :to="{name:'templateLiterals'}">Template Literals</router-link>
            </li>
               <li>  
                <router-link :to="{name:'routerProps', params: { id: 123 } }">Router Props Abstraction</router-link>
            </li>
                <li>  
                <router-link :to="{name:'ajaxRequests'}">Ajax, Axios and async/await</router-link>
            </li>
        
        
            <li>
               <router-link :to="{name:'propSync'}">props.sync</router-link>
            </li>
            <li>
               <router-link :to="{name:'functionalPage'}">Functional Components</router-link>
            </li>     
        </ol>
           
    </div>
</template>

<script>


export default {
}
</script>
 