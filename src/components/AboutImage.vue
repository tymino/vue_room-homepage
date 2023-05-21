<template>
  <img
    :src="require(`@/assets/images/image-about-${imgName}.jpg`)"
    :alt="`about-${imgName}`"
  />
</template>

<script lang="ts" setup>
interface IProps {
  imgName: string;
}

defineProps<IProps>();
</script>
