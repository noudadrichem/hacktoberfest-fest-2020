<template>
<div>
    <h1>Hello {{ text }}</h1>
    <p>{{ plusFive }}</p>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import * as spotify from "../../spotify";

export default Vue.extend({
  data: () => ({
    text: "world",
    sumUp: 30,
  }),
  
  mounted() {
    console.log("example on mount...");
  },
});
</script>

<style lang="scss" scoped>
h1 {
  color: grey;
}
</style>
