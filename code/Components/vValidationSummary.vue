<template>
  <div class="error-summary" v-if="this.errors.length > 0">
            <div class="error-heading">
                Please review and correct the following errors:
            </div>
            <div class="error-body">
                <ul>
                    <li v-for="item in this.errors">{{ item.message }}</li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
   props:['errors']
}
</script>

<style>
  
</style>
