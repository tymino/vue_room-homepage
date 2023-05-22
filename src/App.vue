<template>
  <div class="content">
    <ToggleImage class="content__toggle-image" :activeSlide="activeSlide" />
    <ToggleButtons
      class="content__toggle-buttons"
      @prevSlide="prevSlide"
      @nextSlide="nextSlide"
    />
    <ToggleDescribe
      class="content__toggle-describe"
      :activeDescribe="activeDescribe"
    />

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

import { useSlider } from '@/composables/useSlider';

const { activeSlide, activeDescribe, switchSlide } = useSlider();

const prevSlide = () => switchSlide(-1);
const nextSlide = () => switchSlide(1);
</script>

<style lang="scss">
.content {
  position: relative;
  display: grid;
  grid-template-columns: repeat(72, 1fr);
  grid-template-rows: repeat(30, 1fr);
  height: 100vh;

  background: var(--color-background);
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

@media (max-width: 975px) {
  .content {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 1fr);
  }

  .content__toggle-image {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .content__toggle-buttons {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    width: 20%;
    min-width: 110px;
  }

  .content__toggle-describe {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    padding: 60px 0;
  }

  .content__about-dark {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
  }
  .content__about-describe {
    grid-column: 1 / 2;
    grid-row: 6 / 7;
    padding: 60px 0;
  }

  .content__about-light {
    grid-column: 1 / 2;
    grid-row: 7 / 8;
  }
}
</style>
