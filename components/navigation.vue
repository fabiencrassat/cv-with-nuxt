<template>
  <nav class="fixed top-0 left-0 w-64 h-full bg-gray-500 flex h-screen">
    <ul class="m-auto">
      <li>
        <nuxt-link
          :to="localePath(this.homepage)"
          class="flex flex-col items-center"
        >
          <UserIcon :title="$t('about')" />
          <span class="uppercase">
            {{ $t('about') }}
          </span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import UserIcon from './icons/user';

export default {
  components: {
    UserIcon,
  },
  props: {
    homepage: {
      type: String,
      default: '/',
    },
  },
};
</script>

<i18n>
{
  "en": {
    "about": "About"
  },
  "fr": {
    "about": "A propos"
  }
}
</i18n>
