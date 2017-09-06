<template>
<div>
<h1>Modals in Vue</h1>
<button type="button" class="btn btn-primary" @click="toggle" >Show Modal</button>
  <!-- use the modal component, pass in the prop -->
        <modal v-if="showModal" @close="showModal = false">
            <div slot="header">
                <h2>My Modal</h2>
            </div>
            <div slot="body">
               <p>Modal Body</p>
            </div>
        </modal>
</div>
</template>

<script>
import Modal from '../Components/modal.vue'

export default {
  components:{ modal:Modal },
  data(){
      return {
          showModal:false
      }
  },
  methods:{
      toggle(){
          this.showModal = !this.showModal
      }
  }
}
</script>

<style>
 
</style>
