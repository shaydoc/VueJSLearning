<template>
  <div>
      <h1>Basic Form Validation</h1>
      <p>
          <a href="http://simple-vue-validator.maijin.info/#configuration" target="_blank">Documentation</a> 
       </p>
      
      <vValidationSummary :errors="this.validation.errors" ></vValidationSummary>
      <form> 
               <vFormGroup
                    label="Name" 
                    :hasErrorMessage="validation.hasError('name')" 
                    :errorMessage="validation.firstError('name')"
                    helpText="This field can be up to 200 characters long"
                >
                   <vTextBox id="name" v-model.lazy="name"></vTextBox>
                </vFormGroup>

                 <vFormGroup
                    label="Date" 
                    :hasErrorMessage="validation.hasError('date')" 
                    :errorMessage="validation.firstError('date')"
                    helpText="This field should be a date YYYY-MM-DD"
                >
                   <vDateBox id="date" v-model.lazy="date"></vDateBox>
                   {{ this.date }}
                </vFormGroup>
             
             
                <vFormGroup  
                    label="Subject" 
                    :hasErrorMessage="validation.hasError('subject')" 
                    :errorMessage="validation.firstError('subject')"
                    helpText="This field can be up to 200 characters long"
                    >
                    <vTextBox id="subject" v-model.lazy="subject"></vTextBox>
                </vFormGroup>

                <vFormGroup
                    label="Message" 
                    :hasErrorMessage="validation.hasError('message')" 
                    :errorMessage="validation.firstError('message')"
                    helpText="This field can be up to 200 characters long"
                >
                   <vTextBox id="message" v-model.lazy="message"></vTextBox>
                </vFormGroup>

                <vFormGroup
                    label="Browser" 
                    :hasErrorMessage="validation.hasError('browser')" 
                    :errorMessage="validation.firstError('browser')"
                    helpText="This field can be up to 200 characters long"
                >
                   <myDataList  id="datalist" v-model.lazy="browser" inputId="browserId" :list="this.browserList" listType="browsers"  ></myDataList>
                </vFormGroup>

            <div class="form-group">
                <button id="submitButton" type="button" class="btn btn-success" @click="submit">Submit</button>
            </div>
     </form> 
     
      <modal v-if="showModal" @close="showModal = false">
            <div slot="header">
                <h2>Validation Result</h2>
            </div>
            <div slot="body">
               <blockquote v-if="this.validation.errors.length > 0">
                   <p>
                       {{ this.formState }}
                   </p>
               </blockquote>
            </div>
       </modal>
     
        
  </div>
</template>

<script>
import Vue from 'vue'
import SimpleVueValidation from 'simple-vue-validator'
import vValidationSummary from '../Components/vValidationSummary.vue'
import vFormGroup from '../Components/vFormGroup.vue'
import vTextBox from '../Components/vTextBox.vue'
import vDateBox from '../Components/vDateBox.vue'
import myDataList from '../Components/dataList.vue'
import modal from '../Components/modal.vue'

let Validator = SimpleVueValidation.Validator

Vue.use(SimpleVueValidation, {mode: 'conservative'})

export default {
    components:{ vValidationSummary, vFormGroup, vTextBox,  vDateBox,myDataList, modal},
    data(){
         return {
             showModal:false,
             title:'Send Notification',
             name:'',
             subject:'',
             message:'',
             date:'',
             formState:'',
             browser:'',
             browserList:['Chrome','Edge','Firefox','Internet Explorer','Opera','Safari']
         }
     },
    validators:{
        name: function (value) {
                return Validator.value(value)
                .required('Name is required')
                .regex(/[a-zA-Z0-9&-'_@.?!,#\-\s\wáéíóúàèìòùäëïöüÁÉÍÓÚÀÈÌÒÙÄËÏÖÜ\(\)]+$/,'Name has' + ' invalid characters');
            },
        date:function (value) {
                return Validator.value(value)
                .required('Date is required')
                .regex(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/, 'YYYY-MM-DD is the valid format');
            },
        subject: function (value) {
                return Validator.value(value)
                .required('Subject is required')
                .regex(/[a-zA-Z0-9&-'_@.?!,#\-\s\wáéíóúàèìòùäëïöüÁÉÍÓÚÀÈÌÒÙÄËÏÖÜ\(\)]+$/,'Subject has' + ' invalid characters');
            },
        message: function (value) {
                return Validator.value(value)
                .required('Message is required')
                .regex(/[a-zA-Z0-9&-'_@.?!,#\-\s\wáéíóúàèìòùäëïöüÁÉÍÓÚÀÈÌÒÙÄËÏÖÜ\(\)]+$/,'Message has' + ' invalid characters');
            },
        browser: function (value) {
                return Validator.value(value)
                .regex(/[a-zA-Z0-9&-'_@.?!,#\-\s\wáéíóúàèìòùäëïöüÁÉÍÓÚÀÈÌÒÙÄËÏÖÜ\(\)]+$/,'Browser name has' + ' invalid characters');
            }
         
     },
     methods:{
          toggle(){
          this.showModal = !this.showModal
          },
         submit(){
           var self = this;

           this.$validate().then((success)=>
           {
               if(success){
                  self.formState = 'The content validation is valid'
               }
               else{
                   self.formState = 'The content validation is invalid'
                   self.showModal = true
               }
              console.log('The content validation returned: ' + success)
              
           }) 
           
        }
     }
}
</script>

<style>
  
</style>
