<template>
  <div class="error-card py-5 rounded">
    <div class="text-center">
      <h2 class="error-card__title">
        {{ code }} {{ message }}
      </h2>
      <p class="error-card__description">
        {{ description }}
      </p>
    </div>
    <component
      :is="errorSvg"
      class="error-card__error-icon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed } from "vue";

export default defineComponent({
  name: "ErrorCard",
  props: {
    message: {
      type: String,
      required: true,
    },
    code: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const errorSvg = computed(() => defineAsyncComponent(
      () => {
        const importPath = `../../assets/svg/errors/error-${props.code}.svg`;
        return import(importPath);
      }),
    );
    return {
      errorSvg,
    }
  },
})
</script>

<style lang="scss">
@import "~/src/styles/_variables.scss";

.error-card {
  background-color: $secondary-color;
  color: $accent-color;
  max-width: 51.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 25.6rem;

  .error-card__error-icon {
    width: 6.4rem;
    height: 6.4rem;
    fill: $accent-color;
  }
}
</style>