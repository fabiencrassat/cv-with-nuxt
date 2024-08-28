<template>
  <p class="text-xs">
    <nuxt-link
      v-if="$i18n.locale !== 'en'"
      :to="switchLocalePath('en')"
      class="block transition-all duration-150 ease-linear"
    >
      Switch language
    </nuxt-link>
    <nuxt-link
      v-if="$i18n.locale !== 'fr'"
      :to="switchLocalePath('fr')"
      class="block transition-all duration-150 ease-linear"
    >
      Changer de langue
    </nuxt-link>
  </p>
</template>

<script>
export default {
  // INFO: Remove data() when coverage is successful with vue-jest@4.x.x
  data() {
    return {};
  },
};
</script>
