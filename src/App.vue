<template>
  <Header />
  <div class="app__content p-6">
    <router-view />
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from "@/components/common/Footer.vue";
import Header from "@/components/common/Header.vue";

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
  },
})
</script>

<style lang="scss">
@import 'styles/main.scss';
.app__content {
  flex: 1 0 auto;
}
</style>
