<template>
  <div>
      <h1>Ajax, Axios and async/await</h1>
      
       <h2>
           Axios
       </h2>
       <code>
           <pre>
               
import axios from 'axios'

export default {
        //GETS
        getCallCentreStats(){
            return axios.get('api/callstats')
        },
        getDeparmentEntityChannels(code){
            return axios.get(`api/channels/${code}`)
        },
        getPercentageFacts(arrayOfFacts, from, to){
            return axios.get(`api/percentage-facts?facts=${arrayOfFacts.join("|"")}&from=${from}&to={to}`)
        },
}

           </pre>
       </code>

      <h2>Single calls</h2>
      <code>
          <pre>
async fetchData(){
    const {data} =  await Api.getCallCentreStats()
    this.monthlyFigures = data
}              
          </pre>
      </code>
      <h2>
          Multiple calls in Parallel
      </h2>
      <code>
          <pre>
async fetchData(){
    try
    {
        const [ {data:entityChannels}, {data:percentages}] = 
            await Promise.all([Api.getDeparmentEntityChannels('nidirect'),
                                Api.getPercentageFacts([77,80,146],this.fromTime,this.toTime)                                
            ])
    
    
            this.channels = entityChannels
            this.percentages = percentages
    
    }
    catch(err){
        console.log(err)
    }
}
          </pre>
    </code>
  

  </div>
</template>

<script>
export default {

}
</script>

<style>
  
</style>
