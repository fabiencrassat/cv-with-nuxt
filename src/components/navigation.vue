<template>
  <nav class="fixed top-0 left-0 w-24 h-full bg-gray-500 flex h-screen">
    <ul class="m-auto">
      <li class="p-4">
        <nuxt-link
          :to="localePath(this.homepage)"
          class="flex flex-col items-center"
        >
          <AboutIcon :title="$t('about')" />
        </nuxt-link>
      </li>
      <li class="p-4">
        <nuxt-link
          :to="localePath(this.homepage)"
          class="flex flex-col items-center"
        >
          <ContactIcon :title="$t('contact')" />
        </nuxt-link>
      </li>
      <li class="p-4">
        <nuxt-link
          :to="localePath(this.homepage)"
          class="flex flex-col items-center"
        >
          <JobIcon :title="$t('jobs')" />
        </nuxt-link>
      </li>
      <li class="p-4">
        <nuxt-link
          :to="localePath(this.homepage)"
          class="flex flex-col items-center"
        >
          <SkillIcon :title="$t('skills')" />
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import AboutIcon from './icons/user';
import ContactIcon from './icons/phone';
import SkillIcon from './icons/glasses';
import JobIcon from './icons/suitcase';

export default {
  components: {
    AboutIcon,
    ContactIcon,
    SkillIcon,
    JobIcon,
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
    "about": "About",
    "contact": "Contact Me",
    "jobs": "My Jobs",
    "skills": "My Skills"
  },
  "fr": {
    "about": "A propos",
    "contact": "Contactez-moi",
    "jobs": "Mes expériences",
    "skills": "Mes compétences"
  }
}
</i18n>
