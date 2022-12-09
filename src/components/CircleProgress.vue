<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    size?: number;
    total: number;
    current: number;
    gap?: number;
    color?: string;
  }>(),
  {
    size: 6,
    gap: 2,
    color: "#000",
  },
);

const widthValue = computed(() => `${props.size}px`);
const gapValue = computed(() => `${props.gap}px`);
</script>

<template>
  <div :class="$style.container">
    <div
      v-for="item in total"
      :key="item"
      :class="{
        [$style.circle]: true,
        [$style.elongated]: item === current,
      }"
    ></div>
  </div>
</template>

<style module>
.container {
  display: flex;
  gap: v-bind(gapValue);
}
.circle {
  --circle-width: v-bind(widthValue);
  --circle-height: v-bind(widthValue);
  --circle-radius: calc(var(--circle-width) / 2);
  transition: all ease-in-out 0.3s;
  width: var(--circle-width);
  height: var(--circle-height);
  background: v-bind(color);
  border-radius: var(--circle-radius);
}
.circle.elongated {
  width: calc(var(--circle-width) * 3.33);
  border-radius: calc(var(--circle-radius) * 33.33);
}
</style>
