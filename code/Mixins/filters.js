
export default {
   filters:{
       capitalize(item){
          return item.toUpperCase()
       },
       truncate(item, length){
           return item.substring(0,length || 10) + '...'
       }
   }
}