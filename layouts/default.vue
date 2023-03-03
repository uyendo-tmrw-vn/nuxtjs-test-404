<template>
  <NuxtErrorBoundary>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink
            to="/"
            class="font-bold"
          >Nuxt Dojo</NuxtLink>
          <ul class="flex gap-4">
            <li>
              <NuxtLink to="/asdfasd">404</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">About</NuxtLink>
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
      <div class="container mx-auto p-4">
        <slot />
      </div>
    </div>

    <template #error="{ error }">
      <div>
        <p>
          Oh no, something broke when loading the lesson!
          <code>{{ error }}</code>
        </p>
        <p>
          <button
            class="hover:cursor-pointer"
            @click="clearError(error)"
          >
            Go to the first lesson
          </button>
        </p>
      </div>
    </template>

  </NuxtErrorBoundary>

</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>