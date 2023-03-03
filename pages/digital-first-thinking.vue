<template>
  <NuxtLayout name="works">
  <div
    class="
      relative
      w-full
      h-full
      flex flex-col
      lg:flex-row
      items-center
      justify-start
      lg:justify-center lg:min-h-screen
      bg-tmrw-yellow
    "
  >
    <Head>
      <Title>Award-winning Digital Agency in Singapore - TMRW</Title>
      <Meta
        name="description"
        content="Founded in 2015, TMRW is an award-winning digital creative agency built on insight and guided by an idea-centric, media-neutral approach."
      />
      <Meta
        name="image"
        property="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-digital.jpg"
      />
      <Meta
        name="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-digital.jpg"
      />
      <Meta name="og:url" :content="'https://tmrw.com.sg' + $route.path" />
      <Link
        rel="stylesheet"
        href="https://use.typekit.net/owf4cjy.css"
        prefetch
        preconnect
      />
    </Head>
    <div class="w-full lg:h-screen relative lg:absolute top-0 left-0">
      <video
        class="w-full h-full object-cover"
        autoplay
        muted
        playsInline
        autoBuffer
        border="0"
      >
        <source
          :src="config.imgBaseUrl + '/video/digital-first-thinking.mp4'"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="content-fade-in-delayed text-white"></div>
  </div>
</NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig();
</script>

<style scoped lang="scss">
video {
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
  @include fade-in("2500ms");
}
</style>