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
        <H1Heading :first="true">
          {{ $t('identity.name') }}
        </H1Heading>
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
          {{ CurriculumVitae.getPresentation() }}
        </p>
      </section>
      <section id="contact-me">
        <H1Heading>{{ $t('contact-me.name') }}</H1Heading>
        <FollowMe :links="CurriculumVitae.getFollowMe()" />
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
      <section id="educations">
        <H1Heading>{{ $t('educations.name') }}</H1Heading>
        <Educations :educations="CurriculumVitae.getEducations()" />
      </section>
      <section id="languages">
        <H1Heading>{{ $t('languages.name') }}</H1Heading>
        <Languages :languages="CurriculumVitae.getLanguages()" />
      </section>
      <section id="certifications">
        <H1Heading>{{ $t('certifications.name') }}</H1Heading>
        <Certifications :certifications="CurriculumVitae.getCertifications()" />
      </section>
      <section id="hobbies">
        <H1Heading>{{ $t('hobbies.name') }}</H1Heading>
        <Hobbies :hobbies="CurriculumVitae.getHobbies()" />
      </section>
    </main>
  </div>
</template>

<script>
import BriefcaseSvgIcon from '~/components/svgIcons/briefcase';
import Certifications from '~/components/certifications/certifications';
import ColoursSvgIcon from '~/components/svgIcons/colours';
import ContactMe from '~/components/contact-me/contact-me';
import Educations from '~/components/educations/educations';
import Experiences from '~/components/experiences/experiences';
import FollowMe from '~/components/follow-me/followMe';
import GraduationCapSvgIcon from '~/components/svgIcons/graduation-cap';
import H1Heading from '~/components/headings/h1.vue';
import Hobbies from '~/components/hobbies/hobbies.vue';
import Languages from '~/components/languages/languages';
import LanguageSvgIcon from '~/components/svgIcons/language';
import LeftSideNavigation from '~/components/navigations/leftSide.vue';
import HeartSvgIcon from '~/components/svgIcons/heart.vue';
import MedalSvgIcon from '~/components/svgIcons/medal.vue';
import Skills from '~/components/skills/skills';
import PhoneSvgIcon from '~/components/svgIcons/phone';
import UserSvgIcon from '~/components/svgIcons/user';
import CurriculumVitae from '~/lib/curriculumVitae';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BriefcaseSvgIcon,
    Certifications,
    // eslint-disable-next-line vue/no-unused-components
    ColoursSvgIcon,
    ContactMe,
    Educations,
    Experiences,
    FollowMe,
    // eslint-disable-next-line vue/no-unused-components
    GraduationCapSvgIcon,
    H1Heading,
    Hobbies,
    Languages,
    // eslint-disable-next-line vue/no-unused-components
    LanguageSvgIcon,
    LeftSideNavigation,
    // eslint-disable-next-line vue/no-unused-components
    HeartSvgIcon,
    // eslint-disable-next-line vue/no-unused-components
    MedalSvgIcon,
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
      description:
        curriculumVitae.getLastJob() + '. ' + curriculumVitae.getPresentation(),
      CurriculumVitae: curriculumVitae,
      GraduationCapSvgIcon,
      LanguageSvgIcon,
      HeartSvgIcon,
      MedalSvgIcon,
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
