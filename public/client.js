/* global Vue */

// var app = new Vue({
//   el: "#app",
//   data: {
//     canvas: "Hello Vue!"
//   },
//   methods: {
//     hello(str) {
//       console.log(str)
//     }
//   },
//   mounted() {
//     this.$nextTick(() => {
//       this.hello("world")
//     });
//   }
// });


Vue.createApp({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    announceCount(event) {
      alert(`The count is... ${this.count}!`);
    },
  },
  computed: {
    countPlusOne() {
      return this.count + 1
    }
  }
}).mount('#app')