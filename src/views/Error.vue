<template>
  <div class="flex justify-center">
    <ErrorCard
      :message="message"
      :code="code"
      :description="description"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ErrorCard from '@/components/common/ErrorCard.vue';

export default defineComponent({
  name: "Error",
  components: {
    ErrorCard,
  },
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
})
</script>
