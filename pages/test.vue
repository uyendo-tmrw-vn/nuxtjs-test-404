<template>
  <div class="w-full h-full min-h-screen bg-slate-900">
    <div class="container text-white">
      <div>
        <Accordion
          id="accordion-example-2"
          :content="awardsData"
          groupId="mainAwards"
          multiple="multiple"
        ></Accordion>
      </div>
      <ul class="list1">
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
      </ul>

      <ul class="list1">
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
      </ul>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.list1 {
  overflow-y: scroll;
  height: 200px;
  width: 500px;
}

::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px solid #ffffff;
  border-radius: 90px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}

::-webkit-scrollbar-track {
  background-image: url("/img/white-line-vertical.png");
  background-repeat: repeat-y;
  background-size: contain;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>

<script>
import awardsData from "~/assets/data/awards.json";

export default {
  data() {
    return {
      awardsData,
    };
  },
};
</script>