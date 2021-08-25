<template>
  <header class="header p-6">
    <nav>
      <router-link
        v-for="(link, index) in NAVIGATIONS_LINKS"
        :key="`navigation_link_${index}`"
        class="header__link"
        :to="link.path"
        :class="{ 'header__link--active': currentRouteName === link.path.name }"
      >
        {{ link.title }}
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute, RouteLocationNormalized } from 'vue-router';
import NAVIGATIONS_LINKS from "@/ts/constants/NAVIGATIONS_LINKS";

export default defineComponent({
  name: 'Header',
  setup() {
    const route: RouteLocationNormalized = useRoute();
    const currentRouteName = computed(() => {
      return route.name;
    })
    return {
      NAVIGATIONS_LINKS,
      currentRouteName,
    }
  },
})
</script>

<style lang="scss">
@import "../../styles/_variables.scss";

.header {
  background-color: $secondary-color;

  .header__link {
    color: $secondary-light-color;
    font-size: 1.4rem;
    margin: $spacing * 3;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      transition: 0.3s ease-in-out;
      text-decoration: underline;
    }
  }
  .header__link--active {
    color: $accent-color;
    text-decoration: underline;
  }
}
</style>