<template>
  <div class="content">
    <!-- <img
      class="content__test"
      src="@/assets/images/desktop-design-slide-2.jpg"
      alt="angle-left"
    /> -->
    <picture class="content__toggle-image">
      <source
        srcset="@/assets/images/mobile-image-hero-1.jpg"
        media="(max-width: 720px)"
      />
      <img src="@/assets/images/desktop-image-hero-1.jpg" alt="hero" />
    </picture>

    <div class="content__toggle-buttons">
      <button>
        <img src="@/assets/images/icon-angle-left.svg" alt="angle-left" />
      </button>
      <button>
        <img src="@/assets/images/icon-angle-right.svg" alt="angle-right" />
      </button>
    </div>

    <div class="content__toggle-describe">
      <div class="content__toggle-describe-content">
        <h1></h1>
        <p></p>
        <button>
          <span>shop now</span>
          <img src="@/assets/images/icon-arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>

    <img
      class="content__about-dark"
      src="@/assets/images/image-about-dark.jpg"
      alt="about-dark"
    />
    <div class="content__footer-describe">
      <h2>About our furniture</h2>
      <p>
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </p>
    </div>
    <img
      class="content__about-light"
      src="@/assets/images/image-about-light.jpg"
      alt="about-light"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const text = ref('Hello');
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
.content__footer-describe {
  grid-column: 22 / 51;
  grid-row: 21 / 31;
}

.content__about-light {
  grid-column: 51 / 73;
  grid-row: 21 / 31;
}
</style>
