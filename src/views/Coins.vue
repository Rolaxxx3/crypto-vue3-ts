<template>
  <div class="coins">
    <h1>Coins page</h1>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3 mt-6">
      <CoinCard
        v-for="(item, index) in coins"
        :key="`coin_card_${index}`"
        :coin="item"
      />
    </div>
    <div
      class="coins__load-more mt-6"
      @click="loadMore()"
    >
      <h4>
        Load More
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue"
import { CoinTypes, CoinsResponseType } from '@/ts/types/api/coins.types';
import api from "@/api/ApiCaller";
import CoinCard from "@/components/coins/CoinCard.vue";
import { AxiosResponse } from "axios";

export default defineComponent({
  name: 'Coins',
  components: {CoinCard},
  setup() {
    let currentPage = 1;
    const coins: Ref<Array<CoinTypes>> = ref([])
    async function fetchCoins() {
      const { data }: AxiosResponse<CoinsResponseType> = await api.coinService.getCoins({ page: currentPage })
      coins.value = [...coins.value, ...data.coins]
    }
    async function loadMore() {
      currentPage++
      await fetchCoins()
    }

    fetchCoins();

    return {
      coins,
      loadMore,
    }
  },
})
</script>

<style lang="scss">
@import '../styles/_variables.scss';

.coins {
  .coins__load-more {
    display: flex;
    justify-content: center;
    padding: .5rem;
    cursor: pointer;

    &:hover {
      transition: 0.3s ease-in-out;
      background-color: rgba($secondary-light-color, 0.5);
    }
  }
}
</style>
