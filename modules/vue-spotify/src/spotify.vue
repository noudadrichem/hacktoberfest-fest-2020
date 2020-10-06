<template>
<div>
    <h1>Hello {{ text }}</h1>
    <p>{{ plusFive }}</p>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import * as x from '../../spotify';

export default Vue.extend({
  data: () => ({
    text: "world",
    sumUp: 30,
  }),
  mounted() {
    console.log("example on mount...", x);
  },
});
</script>

<style lang="scss" scoped>

</style>
