<template>
  <div class="flex flex-col my-4 lg:my-10 pb-8 lg:pb-18">
    <h3 class="font-bold text-2xl uppercase text-tmrw-red tracking-widest mb-3">
      Results
    </h3>
    <p class="font-normal text-xl tracking-normal text-tmrw-dark-grey">
      Please get
      <nuxt-link
        to="/contact/"
        class="underline underline-offset-4 hover:!text-black hover:font-bold"
        >in touch</nuxt-link
      >
      to find out more.
    </p>
  </div>
</template>
	
	<script>
export default {
  props: {
    current: String,
  },
};
</script>