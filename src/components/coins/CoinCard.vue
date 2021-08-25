<template>
  <div class="coin-card">
    <div class="coin-card__icon-wrapper mr-3">
      <img
        class="coin-card__icon"
        :src="coin.icon"
        :alt="coin.id"
      >
    </div>
    <div>
      <h3>{{ coin.name }}</h3>
      <h5>Rank: {{ coin.rank }}</h5>
      <h5>{{ coin.price }} $</h5>
      <h5>Available: {{ coin.availableSupply }} {{ coin.symbol }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CoinTypes } from "@/ts/types/api/coins.types";

export default defineComponent({
  name: "CoinCard",
  props: {
    coin: {
      type: Object as PropType<CoinTypes>,
      required: true,
    },
  },
})
</script>

<style lang="scss">
@import '../../styles/_variables.scss';
.coin-card {
  display: flex;
  background-color: $secondary-light-color;
  padding: 0.8rem;
  border-radius: 0.4rem;
  min-height: 12.8rem;
  min-width: 25.6rem;

  .coin-card__icon {
    width: 3.2rem;
    height: 3.2rem;
  }

  .coin-card__icon-wrapper {
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.6rem;
    height: 3.6rem;
    border: 0.2rem solid rgba($secondary-color, 0.9);
    overflow: hidden;
  }
}
</style>