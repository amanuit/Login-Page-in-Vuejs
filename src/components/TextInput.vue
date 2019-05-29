<template>
  <div>
    {{name}}
    <input type="text" :value="name" @input="getInputName">
    <button @click="submit">Click me</button>
  </div>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    getInputName(event){
      this.$emit("changeInputEvent",event.target.value);
    },
    submit(name) {
      this.$emit("submitEvent", name);
    }
  }
};
</script>
