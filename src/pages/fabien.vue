<template>
  <div>
    <LeftSideNavigation :homepage="homepage" />
    <main class="relative h-screen">
      <h1>{{ title }}</h1>

      <p>{{ description }}</p>

      <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
        English
      </nuxt-link>

      <nuxt-link v-if="$i18n.locale !== 'fr'" :to="switchLocalePath('fr')">
        Français
      </nuxt-link>

      <div
        class="helper absolute text-center text-3xl font-bold bg-gray-900 bg-opacity-25 px-12 py-10"
      >
        RESIZE THE WINDOW
        <p class="block text-black text-opacity-25 text-xs">
          Breakpoints on 640px and 768px
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.helper {
  color: #ffea92;
  top: 50%;
  left: 50%;
  border-radius: 20px;
  transform: translate(-50%, -50%);
}
</style>

<script>
import LeftSideNavigation from '~/components/navigations/leftSide.vue';

export default {
  components: {
    LeftSideNavigation,
  },
  data() {
    return {
      description: this.$i18n.t('page.description'),
      homepage: '/fabien',
      path: this.$nuxt.$route.path,
      shortTitle: this.$i18n.t('page.shortTitle'),
      title: this.$i18n.t('page.title'),
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.path,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: this.title,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: this.shortTitle,
        },
        {
          hid: 'application-name',
          name: 'application-name',
          content: this.shortTitle,
        },
      ],
    };
  },
};
</script>
