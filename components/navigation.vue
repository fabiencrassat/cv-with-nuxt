<template>
  <nav class="fixed top-0 left-0 w-64 h-full bg-gray-500 flex h-screen">
    <ul class="m-auto">
      <li>
        <nuxt-link :to="localePath(this.homepage)">
          {{ $t('home') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath(this.homepage)">
          {{ $t('home') }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    homepage: {
      type: String,
      default: '/',
    },
  },
};
</script>

<i18n src="./navigation.locales.json"></i18n>
