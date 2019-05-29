<template>
  <div>
  {{ msg }}
  <button @click="submit">Click me</button>
</div>
</template>

<script>
export default {
  props:["msg"],
  methods:{
    submit(event){
      this.$emit("submitEvent",event)
    }
  }
}
</script>

<style>

</style>
