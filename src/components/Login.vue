<template>
  <div>
    <h1>Login</h1>
    <input type="text" name="firstname" v-model="firstname" placeholder="Firstname">
    <br>
    <br>
    <input type="text" name="lastname" v-model="lastname" placeholder="Lastname">
    <br>
    <br>
    <input
      v-validate="'required|email'"
      name="email"
      v-model="email"
      type="text"
      placeholder="Email"
    >
    <span>{{ errors.first('email') }}</span>
    <br>
    <br>
    <input type="password" name="password" v-model="password" placeholder="Password">
    <br>
    <br>
    <button type="button" @click="submitForm">Login</button>
    {{form}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      },
      items: []
    };
  },
  methods: {
    submitForm() {
      this.form.firstname = this.firstname;
      this.form.lastname = this.lastname;
      this.form.email = this.email;
      this.form.password = this.password;
      this.items.push(this.form);
      this.$router.push({
        name:"Data",
        params: { items: this.items }
      });
      console.log(this.form);
    }
  }
};
</script>