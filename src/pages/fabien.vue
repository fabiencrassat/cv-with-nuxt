<template>
  <div class="font-display">
    <LeftSideNavigation
      :name="CurriculumVitae.getFullName()"
      :picture="CurriculumVitae.getPicture()"
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
      ]"
    />
    <main class="p-4 pt-10 sm:pt-4">
      <section id="identity">
        <H1Heading>{{ $t('identity.name') }}</H1Heading>
        <p class="text-justify">
          <span class="text-lg text-blue-700 italic whitespace-no-wrap">
            39 years
          </span>
          &nbsp;/&nbsp;
          <span class="text-lg text-blue-700 italic whitespace-no-wrap">
            Paris
          </span>
          &nbsp;/&nbsp;
          <span class="text-lg text-blue-700 italic">
            {{ CurriculumVitae.getLastJob() }}
          </span>
        </p>
        <p class="text-justify">
          {{ description }}
        </p>
        <FollowMe :links="CurriculumVitae.getFollowMe()" />
      </section>
      <section id="contact-me">
        <H1Heading>{{ $t('contact-me.name') }}</H1Heading>
        <ContactMe />
      </section>
      <section id="experiences">
        <H1Heading>{{ $t('experiences.name') }}</H1Heading>
        <Experiences :experiences="CurriculumVitae.getExperiences()" />
      </section>
      <section id="skills">
        <H1Heading>{{ $t('skills.name') }}</H1Heading>
        <Skills :skills="CurriculumVitae.getSkills()" />
      </section>
    </main>
  </div>
</template>

<script>
import BriefcaseSvgIcon from '~/components/svgIcons/briefcase';
import ColoursSvgIcon from '~/components/svgIcons/colours';
import ContactMe from '~/components/contact-me/contact-me';
import Experiences from '~/components/experiences/experiences';
import FollowMe from '~/components/about/followMe';
import H1Heading from '~/components/headings/h1.vue';
import LeftSideNavigation from '~/components/navigations/leftSide.vue';
import Skills from '~/components/skills/skills';
import PhoneSvgIcon from '~/components/svgIcons/phone';
import UserSvgIcon from '~/components/svgIcons/user';
import CurriculumVitae from '~/lib/curriculumVitae';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BriefcaseSvgIcon,
    // eslint-disable-next-line vue/no-unused-components
    ColoursSvgIcon,
    ContactMe,
    Experiences,
    FollowMe,
    H1Heading,
    LeftSideNavigation,
    // eslint-disable-next-line vue/no-unused-components
    PhoneSvgIcon,
    Skills,
    // eslint-disable-next-line vue/no-unused-components
    UserSvgIcon,
  },
  data() {
    // eslint-disable-next-line no-use-before-define
    const curriculumVitae = new CurriculumVitae(this.$i18n.locale);

    return {
      BriefcaseSvgIcon,
      ColoursSvgIcon,
      description: curriculumVitae.getPresentation(),
      CurriculumVitae: curriculumVitae,
      path: this.$nuxt.$route.path,
      PhoneSvgIcon,
      shortTitle: this.$i18n.t('page.shortTitle', {
        name: curriculumVitae.getFullName(),
      }),
      title: this.$i18n.t('page.title', {
        name: curriculumVitae.getFullName(),
      }),
      UserSvgIcon,
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
