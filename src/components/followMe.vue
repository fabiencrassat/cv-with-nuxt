<template>
  <div class="flex flex-wrap">
    <a
      v-for="(value, key) in links"
      :key="key"
      class="hover:text-blue-700 p-2 m-2 first:ml-0"
      target="_blank"
      :aria-label="value.label"
      :href="sanitizeUrl(value.url)"
      rel="noopener noreferrer"
      :title="value.label"
    >
      <component :is="value.svg" />
    </a>
  </div>
</template>

<script>
import { sanitizeUrl } from '@braintree/sanitize-url';
// eslint-disable-next-line sort-imports
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
      required: true,
      type: Object,
    },
  },
  // eslint-disable-next-line sort-keys
  data() {
    return {
      sanitizeUrl,
    };
  },
};
</script>

<style scoped>
svg {
  @apply h-8 w-8;
}
</style>
