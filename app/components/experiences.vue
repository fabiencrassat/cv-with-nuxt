<template>
  <div>
    <div
      v-for="(value, key) in showingExperiences"
      :key="key"
      class="max-w-sm w-full lg:max-w-full lg:flex mb-4 last:mb-0"
    >
      <CardImage :experience="value" />
      <CardItem :experience="value" />
    </div>
    <div
      v-if="showingElements < experiencesMaxLength"
      class="flex items-center justify-center"
    >
      <button
        class="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
        type="submit"
        @click="showMore"
      >
        {{ $t('showMore') }}
      </button>
    </div>
    <div v-else />
  </div>
</template>

<script>
import CardImage from './experiences/card-image';
import CardItem from './experiences/card-item';

export default {
  name: 'ExperiencesItem',
  components: {
    CardImage,
    CardItem,
  },
  props: {
    experiences: {
      required: true,
      type: Object,
    },
  },
  data() {
    const defaultShowingElements = 5;
    return {
      defaultShowingElements,
      experiencesMaxLength: Object.keys(this.experiences).length,
      showingElements: defaultShowingElements,
      showingElementsBeforePrint: null,
      showingExperiences: this.getShowingExperiences(
        this.experiences,
        defaultShowingElements,
      ),
    };
  },
  mounted() {
    window.addEventListener('beforeprint', this.showAllExperiences);
    window.addEventListener('afterprint', this.restoreScreenExperiences);
  },
  beforeUnmount() {
    window.removeEventListener('beforeprint', this.showAllExperiences);
    window.removeEventListener('afterprint', this.restoreScreenExperiences);
  },
  methods: {
    getShowingExperiences(experiences, itemToShow) {
      const experienceKeys = Object.keys(experiences);
      const visibleKeys = experienceKeys.slice(0, itemToShow);
      const showingExperiences = {};
      for (const key of visibleKeys) {
        showingExperiences[key] = experiences[key];
      }
      return showingExperiences;
    },
    showAllExperiences() {
      if (this.showingElementsBeforePrint === null) {
        this.showingElementsBeforePrint = this.showingElements;
      }
      this.showingElements = this.experiencesMaxLength;
      this.showingExperiences = this.experiences;
    },
    restoreScreenExperiences() {
      if (this.showingElementsBeforePrint === null) {
        return;
      }
      this.showingElements = this.showingElementsBeforePrint;
      this.showingExperiences = this.getShowingExperiences(
        this.experiences,
        this.showingElements,
      );
      this.showingElementsBeforePrint = null;
    },
    showMore() {
      this.showingElements += this.experiencesMaxLength;
      this.showingExperiences = this.getShowingExperiences(
        this.experiences,
        this.showingElements,
      );
    },
  },
};
</script>
