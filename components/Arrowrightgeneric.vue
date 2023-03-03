<template>
  <svg
    id="a"
    xmlns="http://www.w3.org/2000/svg"
    class="w-full h-auto"
    viewBox="0 0 6.14 10.75"
  >
    <polygon
      class="b"
      :fill="fill"
      points=".7 10.75 0 10.04 4.72 5.36 0 .71 .7 0 6.14 5.36 .7 10.75"
    />
  </svg>
</template>

<script>
export default {
  props: {
    fill: String,
  },
};
</script>