<template>
  <div
    class="
      relative
      w-full
      h-full
      flex flex-col
      items-center
      justify-center
      lg:min-h-screen
      bg-tmrw-yellow
    "
  >
    <Head>
      <Title>TMRW SG - Works</Title>
      <Meta
        name="description"
        content="Strategy built on insights. Ideas that exist beyond boundaries. Campaigns centred around communities."
      />
      <Meta
        name="image"
        property="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works.jpg"
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
    <div
      class="
        w-full
        lg:h-screen
        relative
        lg:absolute
        top-0
        left-0
        overflow-x-hidden
      "
    >
      <video
        class="
          h-full
          object-cover
          w-[120%]
          max-w-[120%]
          ml-[-10%]
          lg:ml-0 lg:max-w-none lg:w-full
        "
        autoplay
        muted
        playsInline
        autoBuffer
      >
        <source
          :src="'https://cdn.tmrw.com.sg/tmrw-assets' + '/video/works.mp4'"
          type="video/mp4"
        />
      </video>
    </div>
    <div
      class="
        content-fade-in-delayed
        works-links
        flex flex-col
        lg:flex-row lg:space-x-[5.05vw]
        mb-10
        lg:mb-0
      "
    >
      <a
        data-gtm-category="Portfolio"
        data-gtm-action="Clicked_Portfolio_Link"
        data-gtm-label="Activation"
        class="
          btn-gtm
          lg:w-24 lg:text-center
          hover:lg:font-bold hover:lg:scale-150
          transition-all
          duration-200
          ease-in-out
        "
        href="/works/activation/"
        >Activation</a
      >
      <a
        data-gtm-category="Portfolio"
        data-gtm-action="Clicked_Portfolio_Link"
        data-gtm-label="Design"
        class="
          btn-gtm
          lg:w-24 lg:text-center
          hover:lg:font-bold hover:lg:scale-150
          transition-all
          duration-200
          ease-in-out
        "
        href="/works/design/"
        >Design</a
      >
      <a
        data-gtm-category="Portfolio"
        data-gtm-action="Clicked_Portfolio_Link"
        data-gtm-label="Digital"
        class="
          btn-gtm
          lg:w-24 lg:text-center
          hover:lg:font-bold hover:lg:scale-150
          transition-all
          duration-200
          ease-in-out
        "
        href="/works/digital/"
        >Digital</a
      >
      <a
        data-gtm-category="Portfolio"
        data-gtm-action="Clicked_Portfolio_Link"
        data-gtm-label="Integrated"
        class="
          btn-gtm
          lg:w-24 lg:text-center
          hover:lg:font-bold hover:lg:scale-150
          transition-all
          duration-200
          ease-in-out
        "
        href="/works/integrated/"
        >Integrated</a
      >
      <a
        data-gtm-category="Portfolio"
        data-gtm-action="Clicked_Portfolio_Link"
        data-gtm-label="TVC"
        class="
          btn-gtm
          lg:w-24 lg:text-center
          hover:lg:font-bold hover:lg:scale-150
          10
          lg:pr-10
        "
        href="/works/tvc/"
        >TVC</a
      >
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>

<style scoped lang="scss">
video {
  object-position: 50% 77%;
}
.works-links {
  font-size: 1.2rem;
  @media screen and (min-width: 992px) {
    position: absolute;
    top: 50vh;
    padding-top: calc(35vh - 5px);
    font-size: 1.1vw;
  }
  @apply uppercase font-normal text-center lg:text-left space-y-3 lg:space-y-0;
  a {
    @apply hover:opacity-60 transition-opacity duration-300 ease-in-out;
  }
}
p {
  @apply text-white;
}
@mixin fade-in($waitTime) {
  animation: wait #{$waitTime}, fade-in 300ms #{$waitTime};
  animation-fill-mode: forwards;
}

@keyframes wait {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.content-fade-in-delayed {
  @include fade-in("4000ms");
}
</style>