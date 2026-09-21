<template>
  <div class="grid gap-4 md:grid-cols-2">
    <article
      v-for="(item, key) in items"
      :key="key"
      class="relative flex h-full flex-col rounded-lg border-l-4 border-blue-700 bg-white p-5 shadow-lg"
    >
      <div class="flex items-start gap-4">
        <component
          :is="item.svg"
          class="mt-1 w-8 shrink-0 text-blue-700"
        />
        <div>
          <p class="text-sm font-semibold uppercase tracking-wide text-blue-700">
            {{ item.date }}
          </p>
          <h2 class="mt-2 text-xl font-bold text-gray-900">
            {{ item.title }}
          </h2>
        </div>
      </div>
      <p class="mt-4 text-justify leading-relaxed text-gray-700">
        {{ item.description }}
      </p>
    </article>
  </div>
</template>

<script>
import BriefcaseSvgIcon from '~/components/svgIcons/briefcase';
import BrowserSvgIcon from '~/components/svgIcons/browser';
import CodeSvgIcon from '~/components/svgIcons/code';
import LaptopSvgIcon from '~/components/svgIcons/laptop';

export default {
  name: 'WatchAndSharingItem',
  components: {
    BriefcaseSvgIcon,
    BrowserSvgIcon,
    CodeSvgIcon,
    LaptopSvgIcon,
  },
  props: {
    items: {
      required: true,
      type: Object,
    },
  },
};
</script>
