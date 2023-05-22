<template>
  <div class="container">
    <button @click="handleLeft">
      <img src="@/assets/images/icon-angle-left.svg" alt="angle-left" />
    </button>
    <button @click="handleRight">
      <img src="@/assets/images/icon-angle-right.svg" alt="angle-right" />
    </button>
  </div>
</template>

<script lang="ts" setup>
interface IEmits {
  (e: 'prevSlide'): void;
  (e: 'nextSlide'): void;
}

const emit = defineEmits<IEmits>();

const handleLeft = () => emit('prevSlide');
const handleRight = () => emit('nextSlide');
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 16px 0px;

    background: var(--color-text);
    border: none;

    transition: all ease var(--transition-time);
    cursor: pointer;

    &:hover {
      background: var(--color-hover);
    }

    & > img {
      width: 14px;
      height: 24px;
    }
  }
}
</style>
