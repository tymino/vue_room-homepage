<template>
  <div class="container">
    <div class="wrapper">
      <h1 class="title">{{ activeDescribe.header }}</h1>
      <p>{{ activeDescribe.body }}</p>
      <button class="button">
        <span>shop now</span>
        <img src="@/assets/images/icon-arrow.svg" alt="arrow" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IDescribe } from '@/types/IDescribe';

interface IProps {
  activeDescribe: IDescribe;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 80%;
  max-width: 80%;
}

.title {
  margin-bottom: 20px;
  font-size: 2.6rem;
}

.button {
  display: flex;
  align-items: center;
  margin-top: 20px;

  background: none;
  border: none;

  & > span {
    margin-right: 20px;

    color: var(--color-text);
    font-size: 1.1rem;
    font-weight: var(--font-700);
    letter-spacing: 12px;
    text-transform: uppercase;
    transition: color ease var(--transition-time);
  }

  & > img {
    width: 40px;
    height: 12px;
    transition: opacity ease var(--transition-time);
  }

  &:hover {
    & > span {
      color: var(--color-hover);
    }

    & > img {
      opacity: 0.4;
    }
  }
}

@media (max-width: 500px) {
  .title {
    font-size: 1.8rem;
  }

  .button {
    & > span {
      font-size: 0.9rem;
    }
  }
}
</style>
