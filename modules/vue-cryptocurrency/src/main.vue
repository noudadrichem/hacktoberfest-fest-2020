<template>
  <div class="widget crypto">
    <CoinFinder />
    <ul class="tab-container">
      <li class="tab" v-for="coin in coins" :key="coin.code">
        {{ coin.label }}
      </li>
      <li class="tab search">
        <Search />
      </li>
    </ul>

    <!-- <pre>{{ $data.coinStats }}</pre> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import * as CryptoService from "../../cryptocurrency";
import Cross from "./cross.vue";
import Search from "./search.vue";
import CoinFinder from "./coinFinder.vue";

export default Vue.extend({
  components: {
    Cross,
    Search,
    CoinFinder,
  },
  data: () => ({
    coinStats: [],
    coins: [],
  }),
  mounted() {
    const hasCoins = window.localStorage.getItem("COINS");
    if (hasCoins) {
        console.log('has coins..?')
      this.$set(this, "coins", JSON.parse(hasCoins));
    }
    this.fetchSelectedCoins();
    this.fetchAvailableCoins();
  },
  methods: {
    fetchSelectedCoins() {
      const tmp = [];
      const coins = this.coins.map(({ code }) => code);
      CryptoService.getCoinsToday(coins).then((response) => {
        this.$set(this, "coinStats", response);
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.tab-container {
  display: flex;

  .tab {
    flex: 1;
    padding: 8px;
    margin: 3px;
    background: lightgrey;

    &.search {
      max-width: 32px;
    }
  }
}
</style>
