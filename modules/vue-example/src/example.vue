<template>
<div>
    <h1>Hello {{ text }}</h1>
    <p>{{ plusFive }}</p>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import * as x from "../../ts-example";

export default Vue.extend({
  data: () => ({
    text: "world",
    sumUp: 32,
  }),
  computed: {
      plusFive() {
          return x.sum(this.sumUp, 5);
      }
  },
  mounted() {
    console.log("example on mount...", x);
  },
});
</script>

<style lang="scss" scoped>
h1 {
  color: grey;
}
</style>
