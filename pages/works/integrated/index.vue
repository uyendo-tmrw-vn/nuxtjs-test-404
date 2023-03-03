<template>
  <div
    class="
      grid grid-cols-1
      lg:pt-12 lg:px-12
      w-full
      h-full
      min-h-screen
      gap-0
      lg:gap-1
      work-animation
    "
  >
    <Head>
      <Title>TMRW SG | Works | Integrated</Title>
      <Meta
        name="description"
        content="Strategy built on insights. Ideas that exist beyond boundaries. Campaigns centred around communities."
      />
      <Meta
        name="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works.jpg"
      />
      <Meta name="og:url" :content="'https://tmrw.com.sg' + $route.path" />
      <Link
        rel="stylesheet"
        href="https://use.typekit.net/owf4cjy.css"
        prefetch
        preconnect
      />
    </Head>
    <Workoverview :workData="workData" gtmCategory="Integrated" />
  </div>
</template>

<script setup>
import Pluscircle1 from "../../../components/pluscircle.vue";
const config = useRuntimeConfig();
</script>
<script>
import workData from "~/assets/data/work-integrated.json";

export default {
  data() {
    return {
      workData,
    };
  },
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.backToTop();
  },
};
</script>
