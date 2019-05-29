<template>
  <div id="test-app">
    <router-view></router-view>
  </div>
</template>

<script>
import Registration from './components/Registration.vue'
import Data from './components/Data.vue'

export default {
  name: 'test-app',
  components: {
    Registration
  },
  data(){
    return {
      message:"Hi All"
    }
  },

  methods:{
  parentSubmit(event){
   console.log(event);
  }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
