<template>
  <div>
    <div
      v-for="(item, index) in experiences"
      :id="item.id"
      :key="index"
      class="max-w-sm w-full lg:max-w-full lg:flex mb-4 last:mb-0"
    >
      <div
        class="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-center"
      >
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <img
          :src="item.jobImage"
          :alt="item.job"
          class="h-48 w-full object-cover"
        />
      </div>
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal lg:w-full"
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
            {{ item.date }}
          </p>
          <div class="font-bold text-xl mb-2">
            {{ item.job }}
          </div>
          <ul
            v-if="item.missions && item.missions.length > 0"
            class="text-gray-700 text-base"
          >
            <li v-for="(mission, i) in item.missions" :key="i">
              {{ mission }}
            </li>
          </ul>
        </div>
        <a
          v-if="item.society && item.society.siteurl"
          :href="item.society.siteurl"
          target="_blank"
          rel="noopener noreferrer"
          class="p-4 hover:bg-blue-100"
        >
          <SocietyContent :society="item.society" />
        </a>
        <SocietyContent
          v-else-if="item.society"
          :society="item.society"
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
      // Example: {}
      type: Object,
      default: () => {},
    },
  },
};
</script>
