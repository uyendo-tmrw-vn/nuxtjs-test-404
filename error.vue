<template>
  <NuxtLayout name="error">
    <div class="mt-7 max-w-sm mx-auto text-center card">
      <p class="mt-7 text-6xl">| Ooops.</p>
      <button class="btn my-7">Go Home...</button>
    </div>
  </NuxtLayout>
</template>
<script>
export default {
  setup() {
    if(process.server) {
      const nuxtApp = useNuxtApp()
      const error = new Error()
      error.statusCode = 404
      // nuxtApp.ssrContext.error = error
      nuxtApp.ssrContext.nuxt.error = error;
    }
  },
}
</script>