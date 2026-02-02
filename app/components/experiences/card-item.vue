<template>
  <div
    class="bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col leading-normal lg:w-full"
  >
    <div class="m-4">
      <CardDates :date="experience.date" />
      <CardTitle :title="experience.job" />
      <CardContent :items="experience.missions" />
    </div>
    <a
      v-if="experience.society && sanitizeUrl !== 'about:blank'"
      :href="sanitizeUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="p-4 hover:bg-blue-100"
    >
      <SocietyContent :society="experience.society" />
    </a>
    <SocietyContent
      v-else
      :society="experience.society"
      class="p-4"
    />
  </div>
</template>

<script>
import { sanitizeUrl } from '@braintree/sanitize-url';
import CardContent from './card-content';
import CardDates from './card-dates';
import CardTitle from './card-title';
import SocietyContent from './society-content';

export default {
  components: {
    CardContent,
    CardDates,
    CardTitle,
    SocietyContent,
  },
  props: {
    experience: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      sanitizeUrl: sanitizeUrl(this.experience.society.siteurl),
    };
  },
};
</script>
