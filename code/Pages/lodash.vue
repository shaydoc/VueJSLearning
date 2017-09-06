<template>
<div>
  <h1>Lodash</h1>
 
  <a href="https://lodash.com/" target="_blank">Lodash</a>

   <code>
          <pre>
              _.map(list, (item)=> item.id)    
          </pre>
    </code>
  

</div>
</template>

<script>
import _ from 'lodash'

export default {
   created(){
       let res = _.chain(this.list)
                  .map((item)=> item.id)
                  .value()
       console.log(res)
   },
   data(){
       return {
           list: [  { id:1, name:'Shay' }, 
                    { id:2, name:'Richard' }, 
                    { id:3, name:'Declan' },
                    { id:4, name:'Adam' }
                 ]
       }
   }
}
</script>

<style>
  
</style>
