<template>
  <div>
    <div
      v-for="(skillsGroup, indexSkills) in skills"
      :key="indexSkills"
      class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl mb-4"
    >
      <div class="flex items-start px-4 py-6 w-full">
        <component :is="skillsGroup.svg" class="w-12 mr-4" />
        <div class="w-full">
          <h2 class="text-lg font-semibold text-gray-900 -mt-1 mb-4">
            {{ skillsGroup.label }}
          </h2>
          <ProgressBar
            v-for="(item, index) in skillsGroup.items"
            :key="index"
            class="mb-4"
            :label="item.label"
            :percentage="item.percentage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BriefcaseSvgIcon from '~/components/svgIcons/briefcase';
import BrowserSvgIcon from '~/components/svgIcons/browser';
import CodeSvgIcon from '~/components/svgIcons/code';
import ColoursSvgIcon from '~/components/svgIcons/colours';
import LaptopSvgIcon from '~/components/svgIcons/laptop';
import ProgressBar from '~/components/progress-bars/progress-bar';

export default {
  components: {
    BriefcaseSvgIcon,
    BrowserSvgIcon,
    CodeSvgIcon,
    ColoursSvgIcon,
    LaptopSvgIcon,
    ProgressBar,
  },
  props: {
    skills: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
