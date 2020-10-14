<template>
  <div class="widget crypto">
    <h1>Crypto Wallet</h1>
    <CoinFinder @onChange="fetchSelectedCoins" @onMount="fetchSelectedCoins" />
    <div class="coin-card-container" v-if="coinStats.length > 0 && coinStats[0] !== {}">
      <div v-for="stats in coinStats" :key="stats.name" class="coin-card">
        <span class="coin-card-name">{{ stats.name }}</span>
        <div>
          <div class="coin-card-price">EUR: {{ stats.eur }}</div>
          <div :class="['coin-card-change', stats.eur_24h_change < 0 ? 'red' : 'green' ]">24H: {{ Math.floor(stats.eur_24h_change) }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import * as CryptoService from "../../cryptocurrency";
import Cross from "./cross.vue";
import SearchIcon from "./search.vue";
import CoinFinder from "./coinFinder.vue";

export default Vue.extend({
  components: {
    Cross,
    SearchIcon,
    CoinFinder,
  },
  data: () => ({
    coinStats: [],
    coins: [],
  }),
  mounted() {
    const hasCoins = window.localStorage.getItem("COINS");
    if (hasCoins) {
      this.$set(this, "coins", JSON.parse(hasCoins));
    }
    this.fetchSelectedCoins();
  },
  methods: {
    fetchSelectedCoins(selected) {
      const coins = [selected !== undefined ? selected : this.coins][0].map(({ code }) => code); // ! wtf is this
      CryptoService.getCoinsToday(coins)
        .then((response) => {
          this.$set(this, "coinStats", response);
        });
    },
  },
});
</script>

<style lang="scss" scoped>
.widget {
  padding: 12px;
}

h1 {
  font-size: 2.5rem;
  margin: 0 0 8px 0;
  text-align: center;
}

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

.coin-card-container {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;

  .coin-card {
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0px 1px 2px rgba(0,16,75,0.2);
    padding: 12px;

    &-name {
      font-size: 1.5rem;
      margin-bottom: 12px;
    }

    &-price {
      font-size: 1rem;
    }

    .red {
      color: red;
    }
    .green {
      color: green;
    }
  }
}
</style>
