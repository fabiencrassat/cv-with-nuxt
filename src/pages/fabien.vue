<template>
  <div>
    <LeftSideNavigation :homepage="homepage" />
    <main class="relative h-screen p-4">
      <section id="about">
        <H1Heading>About me</H1Heading>
        <p>
          <span class="text-lg text-blue-700 italic whitespace-no-wrap">
            39 years
          </span>
          &nbsp;/&nbsp;
          <span class="text-lg text-blue-700 italic whitespace-no-wrap">
            Paris
          </span>
          &nbsp;/&nbsp;
          <span class="text-lg text-blue-700 italic whitespace-no-wrap">
            Agile and Lean Startup Coach
          </span>
        </p>
        <p>{{ description }}</p>
      </section>
      <section id="contact-me">
        <H1Heading>Contact me</H1Heading>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Location_pin"
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
          <a target="_blank" href="http://goo.gl/maps/UJrFf">Paris, France</a>
        </p>
      </section>
      <section id="my-jobs">
        <H1Heading>My work</H1Heading>
      </section>
      <section id="my-skills">
        <H1Heading>My skills</H1Heading>
      </section>
    </main>
  </div>
</template>

<script>
import H1Heading from '~/components/headings/h1.vue';
import LeftSideNavigation from '~/components/navigations/leftSide.vue';

export default {
  components: {
    H1Heading,
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
