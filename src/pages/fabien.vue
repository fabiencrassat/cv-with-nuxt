<script setup>
/* global useI18n, useHead */

import BriefcaseSvgIcon from '~/components/svgIcons/briefcase';
import ColoursSvgIcon from '~/components/svgIcons/colours';
import CurriculumVitae from '~/lib/curriculumVitae';
import GraduationCapSvgIcon from '~/components/svgIcons/graduation-cap';
import HeartSvgIcon from '~/components/svgIcons/heart.vue';
import LanguageSvgIcon from '~/components/svgIcons/language';
import MedalSvgIcon from '~/components/svgIcons/medal.vue';
import PhoneSvgIcon from '~/components/svgIcons/phone';
import UserSvgIcon from '~/components/svgIcons/user';

const { locale } = useI18n();
const curriculumVitae = new CurriculumVitae(locale.value);
const description = `${curriculumVitae.getLastJob()}. ${curriculumVitae.getPresentation()}`;
const shortTitle = `${curriculumVitae.getFullName()} CV`;
const title = `${curriculumVitae.getFullName()} | Curriculum Vitae`;

useHead({
  meta: [
    { content: description, name: 'description' },
    { content: title, name: 'og:site_name' },
    { content: title, name: 'og:title' },
    { content: description, name: 'og:description' },
    { content: shortTitle, name: 'apple-mobile-web-app-title' },
    { content: shortTitle, name: 'application-name' },
  ],
});
</script>

<script>
export default {
  name: 'FabienPage',
};
</script>

<template>
  <div class="font-display">
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <NavigationLeftSide
      :name="curriculumVitae.getFullName()"
      :picture="curriculumVitae.getPicture()"
      :menu-items="[
        {
          name: $t('identity.name'),
          url: 'identity',
          svg: UserSvgIcon,
        },
        {
          name: $t('contact-me.name'),
          url: 'contact-me',
          svg: PhoneSvgIcon,
        },
        {
          name: $t('experiences.name'),
          url: 'experiences',
          svg: BriefcaseSvgIcon,
        },
        {
          name: $t('skills.name'),
          url: 'skills',
          svg: ColoursSvgIcon,
        },
        {
          name: $t('educations.name'),
          url: 'educations',
          svg: GraduationCapSvgIcon,
        },
        {
          name: $t('languages.name'),
          url: 'languages',
          svg: LanguageSvgIcon,
        },
        {
          name: $t('certifications.name'),
          url: 'certifications',
          svg: MedalSvgIcon,
        },
        {
          name: $t('hobbies.name'),
          url: 'hobbies',
          svg: HeartSvgIcon,
        },
      ]"
    />
    <main class="p-4">
      <section id="identity">
        <HeadingsH1 :first="true">
          {{ $t('identity.name') }}
        </HeadingsH1>
        <p class="text-justify">
          <span class="text-lg text-blue-700 italic whitespace-no-wrap">
            {{ $t('identity.years', { years: 43 }) }}
          </span>
          &nbsp;/&nbsp;
          <span class="text-lg text-blue-700 italic whitespace-no-wrap">
            Paris
          </span>
          &nbsp;/&nbsp;
          <span class="text-lg text-blue-700 italic">
            {{ curriculumVitae.getLastJob() }}
          </span>
        </p>
        <p class="text-justify">
          {{ curriculumVitae.getPresentation() }}
        </p>
      </section>
      <section id="contact-me">
        <HeadingsH1>{{ $t('contact-me.name') }}</HeadingsH1>
        <FollowMe :links="curriculumVitae.getFollowMe()" />
        <ContactMe />
      </section>
      <section id="experiences">
        <HeadingsH1>{{ $t('experiences.name') }}</HeadingsH1>
        <Experiences :experiences="curriculumVitae.getExperiences()" />
      </section>
      <section id="skills">
        <HeadingsH1>{{ $t('skills.name') }}</HeadingsH1>
        <Skills :skills="curriculumVitae.getSkills()" />
      </section>
      <section id="educations">
        <HeadingsH1>{{ $t('educations.name') }}</HeadingsH1>
        <Educations :educations="curriculumVitae.getEducations()" />
      </section>
      <section id="languages">
        <HeadingsH1>{{ $t('languages.name') }}</HeadingsH1>
        <Languages :languages="curriculumVitae.getLanguages()" />
      </section>
      <section id="certifications">
        <HeadingsH1>{{ $t('certifications.name') }}</HeadingsH1>
        <Certifications :certifications="curriculumVitae.getCertifications()" />
      </section>
      <section id="hobbies">
        <HeadingsH1>{{ $t('hobbies.name') }}</HeadingsH1>
        <Hobbies :hobbies="curriculumVitae.getHobbies()" />
      </section>
    </main>
  </div>
</template>
