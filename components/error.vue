

<template>
  <NuxtLayout :name="layout">
    <!-- <NuxtPage /> -->

    <div className="container h-[45vh] flex flex-col items-center justify-center text-lg">

      <nuxt-link
        to="/"
        class="flex items-center mt-[10px] mb-5"
      >
        <figure class="max-w-[70px]">
          <Tmrwlogo />
        </figure>
      </nuxt-link>
      <div className='text-[2.2rem] font-medium'> {{ error.statusCode }} | Page Not Found</div>
    </div>

  </NuxtLayout>

</template>

<script setup>
defineProps({
  error: Object
});
const handleError = () => clearError({ redirect: "/" });

const layout = "error";
</script>
