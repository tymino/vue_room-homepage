<template>
  <div class="navmenu">
    <div
      class="navmenu__empty-block"
      :class="{ 'navmenu__empty-block--active': isOpenMenu }"
    ></div>
    <img
      class="navmenu__burger"
      src="@/assets/images/icon-hamburger.svg"
      alt="hamburger"
      @click="handleOpen"
    />
    <img class="navmenu__logo" src="@/assets/images/logo.svg" alt="logo" />
    <div class="navmenu__list" :class="{ 'navmenu__list--active': isOpenMenu }">
      <img
        class="navmenu__list-close"
        src="@/assets/images/icon-close.svg"
        alt="logo"
        @click="handleClose"
      />
      <div class="navmenu__item" v-for="item in items" :key="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNavmenu } from '@/composables/useNavmenu';

const { items, isOpenMenu, handleOpen, handleClose } = useNavmenu();
</script>

<style lang="scss" scoped>
@mixin animFadeHoverItem($opacity) {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -8px;
  width: 80%;
  height: 2px;

  opacity: $opacity;

  background: var(--color-background);
  transform: translateX(-50%);
}

.navmenu {
  display: flex;
  align-items: center;
  width: 80%;

  &__burger {
    display: none;
    width: 20px;
    height: 14px;
  }

  &__logo {
    width: 62px;
    height: 14px;
    margin-right: 60px;
  }

  &__list {
    display: flex;

    &-close {
      display: none;
    }
  }

  &__item {
    position: relative;
    color: var(--color-background);

    font-size: 1.1rem;
    text-transform: lowercase;

    cursor: pointer;

    &::after {
      @include animFadeHoverItem(0);
      transition: opacity ease var(--transition-time);
    }

    &:hover::after {
      @include animFadeHoverItem(1);
    }

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
}

@media (max-width: 700px) {
  .navmenu {
    justify-content: center;

    &__empty-block {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--color-text);

      opacity: 0;
      transition: opacity ease var(--transition-time);
      z-index: -1;

      &--active {
        opacity: 0.6;
        z-index: 8;
      }
    }

    &__burger {
      position: absolute;
      left: 0;
      display: block;
      cursor: pointer;
    }

    &__logo {
      margin-right: 0px;
    }

    &__list {
      position: fixed;
      left: 0;
      top: -200px;

      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100vw;
      height: 90px;

      background: var(--color-background);
      transition: top ease-out var(--transition-time);

      z-index: 9;

      &--active {
        top: 0;
      }

      &-close {
        position: absolute;
        left: 9%;
        height: 0;

        display: block;
        width: 16px;
        height: 16px;

        cursor: pointer;
      }
    }

    &__item {
      color: var(--color-text);
      font-weight: var(--font-600);

      &:not(:last-child) {
        margin-right: 16px;
      }

      &:last-child {
        margin-right: 9%;
      }
    }
  }
}
</style>
