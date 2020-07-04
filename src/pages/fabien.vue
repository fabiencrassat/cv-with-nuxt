<template>
  <div class="font-display">
    <LeftSideNavigation
      :name="CurriculumVitae.getFullName()"
      :picture="CurriculumVitae.getPicture()"
      :menu-items="[
        {
          name: $t('identity.name'),
          url: $t('identity.url'),
          svg: UserSvgIcon,
        },
        {
          name: $t('contactMe.name'),
          url: $t('contactMe.url'),
          svg: PhoneSvgIcon,
        },
        {
          name: $t('experiences.name'),
          url: $t('experiences.url'),
          svg: BriefcaseSvgIcon,
        },
        {
          name: $t('skill.name'),
          url: $t('skill.url'),
          svg: ColoursSvgIcon,
        },
      ]"
    />
    <main class="relative h-screen p-4 pt-10 sm:pt-4">
      <section :id="$t('identity.url')">
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
        <a
          target="_blank"
          aria-label="Follow me in LinkedIn"
          href="http://www.linkedin.com/in/fabiencrassat"
          rel="noopener noreferrer"
        >
          <LinkedInSvgIcon />
        </a>
        <a
          target="_blank"
          aria-label="Follow me in Viadeo"
          href="http://fr.viadeo.com/fr/profile/fabien.crassat"
          rel="noopener noreferrer"
        >
          <ViadeoSvgIcon />
        </a>
        <a
          target="_blank"
          aria-label="Follow me in Monster"
          href="http://beknown.com/fabien-crassat"
          rel="noopener noreferrer"
        >
          <MonsterInSvgIcon />
        </a>
        <a
          target="_blank"
          aria-label="Follow me in Twitter"
          href="https://twitter.com/fabiencrassat"
          rel="noopener noreferrer"
        >
          <TwitterSvgIcon />
        </a>
        <a
          target="_blank"
          aria-label="Follow me in Facebook"
          href="https://www.facebook.com/fabien.crassat"
          rel="noopener noreferrer"
        >
          <FacebookSvgIcon />
        </a>
        <a
          target="_blank"
          aria-label="Follow me in Scrum Alliance"
          href="http://www.scrumalliance.org/community/profile/fcrassat"
          rel="noopener noreferrer"
        >
          <ScrumAllianceSvgIcon />
        </a>
        <a
          target="_blank"
          aria-label="Follow me in Github"
          href="https://github.com/fabiencrassat"
          rel="noopener noreferrer"
        >
          <GithubSvgIcon />
        </a>
      </section>
      <section :id="$t('contactMe.url')">
        <H1Heading>{{ $t('contactMe.name') }}</H1Heading>
        <p>
          <svg
            id="Location_pin"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 20 20"
            enable-background="new 0 0 20 20"
            xml:space="preserve"
            class="h-5 w-5 inline fill-current text-blue-700"
          >
            <path
              d="M10,2.009c-2.762,0-5,2.229-5,4.99c0,4.774,5,11,5,11s5-6.227,5-11C15,4.239,12.762,2.009,10,2.009z M10,9.76c-1.492,0-2.7-1.209-2.7-2.7s1.208-2.7,2.7-2.7c1.49,0,2.699,1.209,2.699,2.7S11.49,9.76,10,9.76z"
            />
          </svg>
          <a
            href="http://goo.gl/maps/UJrFf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paris, France
          </a>
        </p>
      </section>
      <section :id="$t('experiences.url')">
        <H1Heading>{{ $t('experiences.name') }}</H1Heading>
        <ul class="flex flex-wrap">
          <li
            v-for="(item, index) in CurriculumVitae.getExperiences()"
            :key="index"
            class="flex-grow my-2 sm:m-4 rounded-sm border-2 border-solid border-blue-700"
          >
            <h2>
              <span class="">{{ item.job }}</span>
              <span class="whitespace-no-wrap float-right">
                {{ item.date }}
              </span>
            </h2>
            <ul>
              <li v-for="(mission, i) in item.missions" :key="i">
                {{ mission }}
              </li>
            </ul>
            <div v-if="item.society">
              <a
                v-if="item.society.siteurl"
                :href="item.society.siteurl"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ item.society.name }}, {{ item.society.address }}
              </a>
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              <p v-else>{{ item.society.name }}, {{ item.society.address }}</p>
            </div>
          </li>
        </ul>
      </section>
      <section :id="$t('skill.url')">
        <H1Heading>{{ $t('skill.name') }}</H1Heading>
      </section>
    </main>
  </div>
</template>

<script>
import BriefcaseSvgIcon from '~/components/svgIcons/briefcase';
import ColoursSvgIcon from '~/components/svgIcons/colours';
import FacebookSvgIcon from '~/components/svgIcons/facebook';
import GithubSvgIcon from '~/components/svgIcons/github';
import H1Heading from '~/components/headings/h1.vue';
import LeftSideNavigation from '~/components/navigations/leftSide.vue';
import LinkedInSvgIcon from '~/components/svgIcons/linkedin';
import MonsterInSvgIcon from '~/components/svgIcons/monster';
import PhoneSvgIcon from '~/components/svgIcons/phone';
import ScrumAllianceSvgIcon from '~/components/svgIcons/scrumalliance';
import TwitterSvgIcon from '~/components/svgIcons/twitter';
import UserSvgIcon from '~/components/svgIcons/user';
import ViadeoSvgIcon from '~/components/svgIcons/viadeo';
import CurriculumVitae from '~/lib/curriculumVitae';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BriefcaseSvgIcon,
    // eslint-disable-next-line vue/no-unused-components
    ColoursSvgIcon,
    FacebookSvgIcon,
    GithubSvgIcon,
    H1Heading,
    LeftSideNavigation,
    LinkedInSvgIcon,
    MonsterInSvgIcon,
    // eslint-disable-next-line vue/no-unused-components
    PhoneSvgIcon,
    ScrumAllianceSvgIcon,
    TwitterSvgIcon,
    // eslint-disable-next-line vue/no-unused-components
    UserSvgIcon,
    ViadeoSvgIcon,
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
