<template>
  <div class="navmenu">
    <img class="navmenu__logo" src="@/assets/images/logo.svg" alt="" />
    <div class="navmenu__list">
      <div class="navmenu__item" v-for="item in items" :key="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = ['Home', 'Shop', 'About', 'Contact'];
</script>

<style lang="scss" scoped>
@mixin animFadeHover($opacity) {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -8px;
  width: 80%;
  height: 2px;

  background: var(--color-background);

  opacity: $opacity;
  transform: translateX(-50%);
}

.navmenu {
  display: flex;
  align-items: center;
  width: 80%;
  // border: 1px solid black;

  &__logo {
    width: 62px;
    height: 14px;
    margin-right: 60px;
  }

  &__list {
    display: flex;
  }

  &__item {
    position: relative;
    color: var(--color-background);

    font-size: 1.1rem;
    text-transform: lowercase;

    cursor: pointer;

    &::after {
      transition: opacity ease var(--transition-time);

      @include animFadeHover(0);
    }

    &:hover::after {
      @include animFadeHover(1);
    }

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
}
</style>
