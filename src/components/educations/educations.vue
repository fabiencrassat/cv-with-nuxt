<!-- eslint-disable vue/html-indent -->
<template>
  <div
    v-if="
      educations &&
      Object.keys(educations).length !== 0 &&
      educations.constructor === Object
    "
    class="px-12"
  >
    <ul class="relative">
      <li
        v-for="(value, key) in educations"
        :key="key"
        class="relative w-full my-16 ml-8 last:mb-5 first:mt-5"
      >
        <span class="absolute top-0 left-0" />
        <div class="text-lg">
          {{ value.label }}
        </div>
        <div class="italic text-gray-700">
          {{ value.description }}
        </div>
        <div class="year">
          <span class="absolute text-right">{{
            value.dates ? value.dates[1] : value.date
          }}</span>
          <span class="absolute text-right">{{
            value.dates ? value.dates[0] : ''
          }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    educations: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  // INFO: Remove data() when coverage is successful with vue-jest@4.x.x
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
