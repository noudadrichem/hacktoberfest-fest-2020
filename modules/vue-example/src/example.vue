<template>
<div>
    <h1>Hello {{ text }}</h1>
    <p>{{ plusFive }}</p>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import * as quickmathz from "../../ts-example";

export default Vue.extend({
  data: () => ({
    text: "world",
    sumUp: 17,
  }),
  computed: {
      plusFive() {
          return quickmathz.sum(this.sumUp, 5);
      }
  },
  mounted() {
    console.log("example on mount...", quickmathz);
  },
});
</script>

<style lang="scss" scoped>
h1 {
  color: grey;
}
</style>
