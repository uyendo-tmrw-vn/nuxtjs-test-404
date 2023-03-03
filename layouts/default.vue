<template>
  <NuxtErrorBoundary>
    <div class="min-h-screen">
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink
            to="/"
            class="font-bold"
          >Nuxt Dojo</NuxtLink>
          <ul class="flex gap-4">
            <li>
              <NuxtLink class="text-[#000]" to="/asdfasd">404</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-[#000]" to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-[#000]" to="/about">About</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/products"
                class="btn"
              >Merch</NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
      <div class="container mx-auto p-4 text-[#000] ">
        <slot />
      </div>
    </div>
  </NuxtErrorBoundary>

</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>