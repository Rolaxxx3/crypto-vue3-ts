<template>
  <footer class="footer p-6">
    <hr class="mb-4 footer__separator">
    Copyright &copy; {{ getCurrentYear }} Ruslan Hryshyn (Rolaxxx3). All rights reserved.
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Footer',
  setup() {
    const getCurrentYear = computed(() : number => {
      const currentDate: Date = new Date()
      return currentDate.getFullYear();
    })
    return {
      getCurrentYear,
    }
  },
})
</script>

<style lang="scss">
@import "../../styles/_variables.scss";

.footer {
  flex: 0 0 auto;
  background-color: $secondary-color;
  font-size: 1.2rem;
  color: $accent-color;

  .footer__separator {
    @extend .border-t-1 !optional;
    border-color: $accent-color;
    border-radius: 2px;
  }
}
</style>
