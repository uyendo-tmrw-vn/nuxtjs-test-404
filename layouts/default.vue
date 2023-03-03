<template>
  <!-- <div class="flex flex-col lg:flex-row flex-wrap">
    <Header />
    <div class="content pt-16 lg:pt-0 lg:pl-24 w-full z-10">
      <NuxtLayout />
    </div>
  </div> -->
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  watch: {
    item: {
      handler(val) {
        // do stuff
        console.log(val);
      },
      deep: true
    }
  }
};
</script>