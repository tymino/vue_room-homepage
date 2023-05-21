<template>
  <div class="container">
    <button>
      <img src="@/assets/images/icon-angle-left.svg" alt="angle-left" />
    </button>
    <button>
      <img src="@/assets/images/icon-angle-right.svg" alt="angle-right" />
    </button>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container {
  display: flex;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0px;

    background: var(--color-text);
    border: none;

    transition: all ease var(--transition-time);
    cursor: pointer;

    &:hover {
      background: var(--color-dark-gray);
    }

    & > img {
      width: 14px;
      height: 24px;
    }
  }
}
</style>
