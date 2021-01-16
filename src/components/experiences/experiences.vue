<!-- eslint-disable vue/html-indent -->
<template>
  <div
    v-if="
      experiences &&
      Object.keys(experiences).length !== 0 &&
      experiences.constructor === Object
    "
  >
    <div
      v-for="(value, key) in experiences"
      :key="key"
      class="max-w-sm w-full lg:max-w-full lg:flex mb-4 last:mb-0"
    >
      <div
        class="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-center"
        :lazy-background="value.jobImage"
        :title="value.job"
      />
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col leading-normal lg:w-full"
      >
        <div class="m-4">
          <p class="text-sm text-gray-700 flex">
            <svg
              class="fill-current w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
            {{ value.date }}
          </p>
          <div class="font-bold text-xl mb-2">
            {{ value.job }}
          </div>
          <ul
            v-if="value.missions && value.missions.length > 0"
            class="text-gray-700 text-base"
          >
            <li v-for="(mission, i) in value.missions" :key="i">
              {{ mission }}
            </li>
          </ul>
        </div>
        <a
          v-if="value.society && value.society.siteurl"
          :href="value.society.siteurl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-4 hover:bg-blue-100"
        >
          <SocietyContent :society="value.society" />
        </a>
        <SocietyContent
          v-else-if="value.society"
          :society="value.society"
          class="p-4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SocietyContent from './experience-society-content';

export default {
  components: {
    SocietyContent,
  },
  props: {
    experiences: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
