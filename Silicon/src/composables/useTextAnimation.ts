import { ref, onMounted } from 'vue';

export function useTextAnimation() {
  const currentText = ref('For');
  const exiting = ref(false);
  const entering = ref(false);

  const startAnimation = () => {
    setInterval(() => {
      exiting.value = true;
      setTimeout(() => {
        exiting.value = false;
        currentText.value = currentText.value === 'For' ? 'By' : 'For';
        entering.value = true;
        setTimeout(() => {
          entering.value = false;
        }, 700); // Match with CSS animation duration
      }, 700); // Match with CSS animation duration
    }, 3500); // Duration of one complete cycle
  };

  onMounted(() => {
    startAnimation();
  });

  return {
    currentText,
    exiting,
    entering
  };
}
