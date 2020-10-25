<template>
  <section class="py-1 px-12">
    <ul class="relative">
      <li
        v-for="(item, index) in educations"
        :id="item.id"
        :key="index"
        class="relative w-full my-16 mx-8"
      >
        <span class="absolute top-0 left-0" />
        <div class="text-lg">
          {{ item.label }}
        </div>
        <div class="italic text-gray-700">
          {{ item.description }}
        </div>
        <div class="year">
          <span class="absolute text-right">{{
            item.dates ? item.dates[1] : item.date
          }}</span>
          <span class="absolute text-right">{{
            item.dates ? item.dates[0] : ''
          }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    educations: {
      // Example: {}
      type: Object,
      default: () => {},
    },
  },
  // TODO: Remove data() when coverage is successful with vue-jest@4.x.x
  data() {
    return {};
  },
};
</script>

<style scoped>
ul::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
li > span {
  left: -25px;
  height: 110%;
  border: 2px solid #fff;
}
li > span::before,
li > span::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  border: 2px solid #fff;
  border-radius: 50%;
  left: -7px;
  background: #4e9bfa;
}
li > span::before {
  top: -15px;
}
li > span::after {
  top: 100%;
}
.year span {
  left: -85px;
  width: 40px;
}
.year span:first-child {
  top: -20px;
}
.year span:last-child {
  top: 100%;
}
</style>
