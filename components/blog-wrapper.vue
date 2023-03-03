<template>
  <div class="blog-detail-wrapper">
    <slot />
  </div>
</template>

<style lang="scss">
.blog-detail-wrapper {
  // @apply bg-red-500;

  .blog-detail-text img {
    @apply w-auto max-w-max
  }
}
</style>