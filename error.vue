<template>
  <div class="h-[90vh] flex items-center justify-center">
    <div class="mt-7 max-w-[35%] bg-[#000000a1] text-[#fff] w-full mx-auto text-center card h-auto">
      <p class="mt-7 text-7xl font-bold">{{error.statusCode}}</p>
      <p class="mt-7 text-6xl">Ooops.</p>
      <p class="mt-7">{{error.message}}</p>
      <button
        class="btn my-7"
        @click="handleError"
      >Go Home...</button>
    </div>
  </div>

</template>

<script setup>
defineProps({
  error: Object
});

const handleError = () => clearError({ redirect: "/" });
</script>