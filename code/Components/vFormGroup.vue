<template>
  <div class="form-group" v-bind:class="{ 'validation': this.hasErrorMessage  }">
        <label class="control-label">
            <img class="required" src="/content/UXM2/Images/required.png" alt="Required information">
            {{ this.label }}
            <span class="help-block">{{this.helpText}}</span>
            <span class="validation-error">{{ this.errorMessage }}</span>
        </label>
        <slot></slot>
    </div>
</template>

<script>
export default {
  props:['label','hasErrorMessage','helpText','errorMessage']
}
</script>

<style>
   
</style>
