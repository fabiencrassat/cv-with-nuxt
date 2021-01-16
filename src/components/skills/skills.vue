<!-- eslint-disable vue/html-indent -->
<template>
  <div
    v-if="
      skills &&
      Object.keys(skills).length !== 0 &&
      skills.constructor === Object
    "
  >
    <div
      v-for="(skillsGroupValue, skillsGroupKey) in skills"
      :key="skillsGroupKey"
      class="flex bg-white shadow-lg rounded-lg md:mx-auto max-w-md md:max-w-2xl mb-4 last:mb-0"
    >
      <div class="flex items-start px-4 py-6 w-full">
        <component :is="skillsGroupValue.svg" class="w-12 mr-4" />
        <div class="w-full">
          <h2 class="text-lg font-semibold text-gray-900 mt-2 mb-4">
            {{ skillsGroupValue.label }}
          </h2>
          <ProgressBar
            v-for="(skill, index) in skillsGroupValue.items"
            :key="index"
            class="mb-4"
            :label="skill.label"
            :percentage="skill.percentage"
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
      default() {
        return {};
      },
    },
  },
};
</script>
