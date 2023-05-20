<template>
  <div class="content">
    <ToggleImage class="content__toggle-image" />
    <ToggleButtons class="content__toggle-buttons" />
    <ToggleDescribe class="content__toggle-describe" />

    <AboutImage class="content__about-dark" imgName="dark" />
    <AboutDescribe class="content__about-describe" />
    <AboutImage class="content__about-light" imgName="light" />
  </div>
</template>

<script lang="ts" setup>
import AboutImage from '@/components/AboutImage.vue';
import ToggleButtons from '@/components/ToggleButtons.vue';
import ToggleDescribe from '@/components/ToggleDescribe.vue';
import AboutDescribe from '@/components/AboutDescribe.vue';
import ToggleImage from '@/components/ToggleImage.vue';

// import { ref } from 'vue';

// const text = ref('Hello');
</script>

<style lang="scss">
.content {
  position: relative;
  display: grid;
  grid-template-columns: repeat(72, 1fr);
  grid-template-rows: repeat(30, 1fr);

  background: orangered;
}

.content__toggle-image {
  grid-column: 1 / 43;
  grid-row: 1 / 21;
}

.content__toggle-buttons {
  position: absolute;
  right: 0%;
  bottom: 0%;

  grid-column: 43 / 51;
  grid-row: 18 / 21;
  width: 100%;
  border: 1px solid black;
}

.content__toggle-describe {
  grid-column: 43 / 73;
  grid-row: 1 / 21;
}

.content__about-dark {
  grid-column: 1 / 22;
  grid-row: 21 / 31;
}
.content__about-describe {
  grid-column: 22 / 51;
  grid-row: 21 / 31;
}

.content__about-light {
  grid-column: 51 / 73;
  grid-row: 21 / 31;
}
</style>
