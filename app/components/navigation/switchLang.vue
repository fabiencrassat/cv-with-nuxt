<template>
  <p class="text-xs">
    <SwitchLocalePathLink
      v-if="locale !== 'en'"
      locale="en"
      class="block transition-all duration-150 ease-linear"
    >
      Switch language
    </SwitchLocalePathLink>
    <SwitchLocalePathLink
      v-if="locale !== 'fr'"
      locale="fr"
      class="block transition-all duration-150 ease-linear"
    >
      Changer de langue
    </SwitchLocalePathLink>
  </p>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
</script>
