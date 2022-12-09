import { ref, readonly } from "vue";

export default function useCircleProgress(total: number = 2) {
  const current = ref(1);

  if (total < 2) {
    total = 2;
    console.warn(
      `useCircleProgress: Total cannot be less than 2. Using 2 as fallback value`,
    );
  }

  return {
    total,
    current: readonly(current),
    goToPrevious() {
      if (current.value === 1) {
        current.value = total;
      } else {
        current.value -= 1;
      }
    },
    goToNext() {
      if (current.value === total) {
        current.value = 1;
      } else {
        current.value += 1;
      }
    },
  };
}
