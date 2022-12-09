<script setup lang="ts">
import useCircleProgress from "../composables/useCircleProgress";
import CircleProgress from "../components/CircleProgress.vue";

const { total, current, goToPrevious, goToNext } = useCircleProgress();
</script>

<template>
  <div :class="$style.container">
    <button :disabled="current === 1" @click="goToPrevious">Previous</button>
    <CircleProgress :current="current" :total="total" />
    <button :disabled="current === total" @click="goToNext">Next</button>
  </div>
</template>

<style module>
.container {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.container button:hover:not(:disabled) {
  cursor: pointer;
}
</style>
