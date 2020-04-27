<template>
  <main>
    <h1>{{ $t('greeting') }}</h1>

    <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
      English
    </nuxt-link>

    <nuxt-link v-if="$i18n.locale !== 'fr'" :to="switchLocalePath('fr')">
      Français
    </nuxt-link>
  </main>
</template>

<script>
export default {};
</script>
