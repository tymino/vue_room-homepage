<template>
  <picture>
    <source
      :srcset="require(`@/assets/images/mobile-image-hero-${activeSlide}.jpg`)"
      media="(max-width: 720px)"
    />
    <img
      :src="require(`@/assets/images/desktop-image-hero-${activeSlide}.jpg`)"
      alt="hero"
    />
  </picture>
</template>

<script lang="ts" setup>
interface IProps {
  activeSlide: number;
}

defineProps<IProps>();
</script>

<style scoped></style>
