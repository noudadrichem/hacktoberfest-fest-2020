<template>
  <div class="popup">
    <v-select multiple :options="availableCoins" v-model="selected" />
  </div>
</template>

<script>
import Vue from "vue";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);

import * as CryptoService from "../../cryptocurrency";

export default Vue.extend({
  name: "CoinFinder",
  data: () => ({
    availableCoins: [],
    selected: [{ code: "iota", label: "iota" }],
  }),
  watch: {
    selected(next) {
      window.localStorage.setItem("COINS", JSON.stringify(next));
    },
  },
  mounted() {
    const hasCoins = window.localStorage.getItem("COINS");
    if (hasCoins) {
      this.$set(this, "coins", JSON.parse(hasCoins));
    }
    this.fetchAvailableCoins();
  },
  methods: {
    fetchAvailableCoins() {
      const coins = CryptoService.getAvailableCoinIds().then((coins) => {
        const options = coins.map((coin) => ({
          code: coin.id,
          label: coin.name,
        }));
        this.$set(this, "availableCoins", options);
      });
    },
  },
});
</script>

<style>
</style>
