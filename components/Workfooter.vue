<template>
  <div
    class="
      flex flex-col
      justify-end
      items-center
      lg:flex-row
      space-y-5
      lg:space-x-4 lg:space-y-0
      py-3
    "
  >
    <div class="flex flex-row items-center my-3 lg:my-0">
      <span
        class="
          ml-3
          lg:ml-0
          mr-3
          mb-2
          uppercase
          text-tmrw-dark-grey
          font-semibold
          text-sm
          pt-1
        "
      ></span
      ><span class="w-3 border border-transparent rounded-full mr-4 lg:mr-8">
        <Arrowfooter />
      </span>
    </div>
    <div
      class="
        flex flex-wrap flex-row
        lg:flex-nowrap
        justify-center
        lg:justify-start
        gap-6
        lg:gap-12 lg:pr-12
      "
    >
      <nuxt-link to="/works/activation/"
        ><FooterItem
          categoryTitle="Activation"
          categoryPath="/works/activation/"
      /></nuxt-link>
      <nuxt-link to="/works/design/"
        ><FooterItem categoryTitle="Design" categoryPath="/works/design/"
      /></nuxt-link>
      <nuxt-link to="/works/digital/"
        ><FooterItem categoryTitle="Digital" categoryPath="/works/digital/"
      /></nuxt-link>
      <nuxt-link to="/works/integrated/"
        ><FooterItem
          categoryTitle="Integrated"
          categoryPath="/works/integrated/"
      /></nuxt-link>
      <nuxt-link to="/works/tvc/"
        ><FooterItem categoryTitle="tvc" categoryPath="/works/tvc/"
      /></nuxt-link>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    current: String,
  },
};
</script>