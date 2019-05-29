<template>
  <div id='app'>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { firstname: 'Aman', lastname: 'raj', email: 'aman@gmail.com', password: '1234raj' },
          { firstname: 'Ankit', lastname: 'kumar', email: 'aman19@gmail.com', password: '123raj' },
        ]
      }
    },
    mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => 
      console.log(response)
      )
  },
  created(){
            console.log(this.$route.params)*
      this.items = this.$route.params.items;
  }
  }
</script>