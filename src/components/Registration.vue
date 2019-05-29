<template>
    <div id="test-app">
     <TextInput :name="Name" @submitEvent="parentSubmit" @changeInputEvent="getInputValue"/>
    </div>
</template>

<script>
import TextInput from './TextInput.vue'

export default {
    name: 'test-app',
  components: {
    TextInput
  },
  data(){
    return {
      Name:"Aman deep Raj"
    }
  },
  methods:{
  getInputValue(event){
   console.log(event);
  },
  parentSubmit(event){
   console.log(event);
  }
  }
}
</script>

