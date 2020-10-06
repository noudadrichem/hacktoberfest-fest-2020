<template>
  <div class="widget crypto">
    <h2>Crypto!</h2>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as CryptoService from "../../cryptocurrency";

export default Vue.extend({
  data: () => ({
      iota: null
  }),
  mounted() {
    console.log("CryptoService", CryptoService);

    CryptoService.getCoinToday("iota")
        .then(({ iota }) => {
            console.log('coinData...', iota);
            this.$set(this, 'iota', iota)
        })
  },
});
</script>

<style lang="scss" scoped>
</style>
