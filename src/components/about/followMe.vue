<template>
  <div class="flex justify-around flex-wrap">
    <a
      v-for="(item, index) in links"
      :key="index"
      class="hover:text-blue-700 p-2 m-2"
      target="_blank"
      :aria-label="item.label"
      :href="item.url"
      rel="noopener noreferrer"
      :title="item.label"
    >
      <component :is="item.svg" />
    </a>
  </div>
</template>

<script>
import FacebookSvgIcon from '~/components/svgIcons/facebook';
import GithubSvgIcon from '~/components/svgIcons/github';
import LinkedInSvgIcon from '~/components/svgIcons/linkedin';
import MonsterInSvgIcon from '~/components/svgIcons/monster';
import PhoneSvgIcon from '~/components/svgIcons/phone';
import ScrumAllianceSvgIcon from '~/components/svgIcons/scrumalliance';
import TwitterSvgIcon from '~/components/svgIcons/twitter';
import ViadeoSvgIcon from '~/components/svgIcons/viadeo';

export default {
  // Import and expose components usable in dependencies injection
  components: {
    FacebookSvgIcon,
    GithubSvgIcon,
    LinkedInSvgIcon,
    MonsterInSvgIcon,
    PhoneSvgIcon,
    ScrumAllianceSvgIcon,
    TwitterSvgIcon,
    ViadeoSvgIcon,
  },
  props: {
    links: {
      // Example: [{ label: 'Foo', url: 'Bar', svg: 'component' }]
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
svg {
  @apply h-8 w-8;
}
</style>
