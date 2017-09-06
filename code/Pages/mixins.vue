<template>
  <div>
    <h1>All about Mixins</h1>
   
     <h4>Mixin a filter -  {{ "truncate and capitalize this string" | truncate(23) | capitalize }} </h4>
     <code>
         <pre>
            <h4>Mixin a filter - { { "truncate and capitalize this string" | truncate(23) | capitalize } } </h4>
         </pre>
     </code>

        
    <h4>Mixins a method, assumes "this" of current component -  {{ transformDomainId() }}  </h4>
     
     <code>
       <pre>
        import filters from '../Mixins/filters.js'
        import domainId from '../Mixins/domainId.js'

        export default {
            components:{
            },
            mixins:[filters,domainId],
            data(){
                return {
                    domainId: 12048
                }
            }
        }
       </pre>
     </code>

  </div>
</template>

<script>
import filters from '../Mixins/filters.js'
import domainId from '../Mixins/domainId.js'

export default {
  components:{
  },
  mixins:[filters,domainId],
  data(){
       return {
           domainId: 12048
       }
  }
  
}
</script>

<style>
  
</style>
