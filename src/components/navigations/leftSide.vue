<template>
  <nav
    class="h-screen fixed top-0 left-0 outline-none z-10 bg-blue-700 transition-all duration-300 ease-in-out text-gray-200"
    tabindex="0"
  >
    <div class="menu-trigger absolute sm:hidden bg-blue-700" />
    <header
      class="py-8 px-2 sm:p-2 md:py-8 md:px-2 text-center bg-gray-900 bg-opacity-25 sm:relative"
    >
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img
        class="overflow-hidden mx-auto rounded-full border-4 border-solid border-blue-300"
        src="/fabien-crassat.jpeg"
        :alt="$t('name')"
      />
      <h2 class="pt-4">
        Fabien Crassat
      </h2>
      <p class="text-xs pt-4">
        <nuxt-link
          v-if="$i18n.locale !== 'en'"
          :to="switchLocalePath('en')"
          class="block transition-all duration-150 ease-linear"
        >
          Switch language
        </nuxt-link>
        <nuxt-link
          v-if="$i18n.locale !== 'fr'"
          :to="switchLocalePath('fr')"
          class="block transition-all duration-150 ease-linear"
        >
          Changer de langue
        </nuxt-link>
      </p>
    </header>
    <ul class="py-2">
      <li tabindex="0">
        <nuxt-link
          :to="$t('about.id')"
          class="link block sm:text-sm p-4 outline-none bg-no-repeat cursor-pointer transition-all duration-150 ease-linear hover:bg-gray-900 hover:bg-opacity-25"
        >
          <svg
            version="1.1"
            id="User"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 20 20"
            enable-background="new 0 0 20 20"
            xml:space="preserve"
            class="h-5 w-5 inline mr-3 fill-current"
          >
            <path
              d="M7.725,2.146c-1.016,0.756-1.289,1.953-1.239,2.59C6.55,5.515,6.708,6.529,6.708,6.529 s-0.313,0.17-0.313,0.854C6.504,9.1,7.078,8.359,7.196,9.112c0.284,1.814,0.933,1.491,0.933,2.481c0,1.649-0.68,2.42-2.803,3.334 C3.196,15.845,1,17,1,19v1h18v-1c0-2-2.197-3.155-4.328-4.072c-2.123-0.914-2.801-1.684-2.801-3.334c0-0.99,0.647-0.667,0.932-2.481 c0.119-0.753,0.692-0.012,0.803-1.729c0-0.684-0.314-0.854-0.314-0.854s0.158-1.014,0.221-1.793c0.065-0.817-0.398-2.561-2.3-3.096 c-0.333-0.34-0.558-0.881,0.466-1.424C9.439,0.112,8.918,1.284,7.725,2.146z"
            />
          </svg>

          <span>{{ $t('about.name') }}</span>
        </nuxt-link>
      </li>
      <li tabindex="0">
        <nuxt-link
          :to="$t('contact.id')"
          class="link block sm:text-sm p-4 outline-none bg-no-repeat cursor-pointer transition-all duration-150 ease-linear hover:bg-gray-900 hover:bg-opacity-25"
        >
          <svg
            version="1.1"
            id="Phone"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 20 20"
            enable-background="new 0 0 20 20"
            xml:space="preserve"
            class="h-5 w-5 inline mr-3 fill-current"
          >
            <path
              d="M11.229,11.229c-1.583,1.582-3.417,3.096-4.142,2.371c-1.037-1.037-1.677-1.941-3.965-0.102 c-2.287,1.838-0.53,3.064,0.475,4.068c1.16,1.16,5.484,0.062,9.758-4.211c4.273-4.274,5.368-8.598,4.207-9.758 c-1.005-1.006-2.225-2.762-4.063-0.475c-1.839,2.287-0.936,2.927,0.103,3.965C14.324,7.812,12.811,9.646,11.229,11.229z"
            />
          </svg>
          <span>{{ $t('contact.name') }}</span>
        </nuxt-link>
      </li>
      <li tabindex="0">
        <nuxt-link
          :to="$t('jobs.id')"
          class="link block sm:text-sm p-4 outline-none bg-no-repeat cursor-pointer transition-all duration-150 ease-linear hover:bg-gray-900 hover:bg-opacity-25"
        >
          <svg
            version="1.1"
            id="Briefcase"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 20 20"
            enable-background="new 0 0 20 20"
            xml:space="preserve"
            class="h-5 w-5 inline mr-3 fill-current"
          >
            <path
              d="M9,10h2v2h9c0,0-0.149-4.459-0.2-5.854C19.75,4.82,19.275,4,17.8,4h-3.208 c-0.497-0.938-1.032-1.945-1.197-2.256C13.064,1.121,12.951,1,12.216,1H7.783C7.048,1,6.936,1.121,6.604,1.744 C6.439,2.055,5.904,3.062,5.408,4H2.199c-1.476,0-1.945,0.82-2,2.146C0.145,7.473,0,12,0,12h9V10z M7.649,2.916 C7.879,2.484,7.957,2.4,8.466,2.4h3.067c0.509,0,0.588,0.084,0.816,0.516c0.086,0.16,0.318,0.6,0.575,1.084h-5.85 C7.331,3.516,7.563,3.076,7.649,2.916z M11,15H9v-2H0.5c0,0,0.124,1.797,0.199,3.322C0.73,16.955,0.917,18,2.499,18H17.5 c1.582,0,1.765-1.047,1.8-1.678C19.387,14.754,19.5,13,19.5,13H11V15z"
            />
          </svg>
          <span>{{ $t('jobs.name') }}</span>
        </nuxt-link>
      </li>
      <li tabindex="0">
        <nuxt-link
          :to="$t('skills.id')"
          class="link block sm:text-sm p-4 outline-none bg-no-repeat cursor-pointer transition-all duration-150 ease-linear hover:bg-gray-900 hover:bg-opacity-25"
        >
          <svg
            version="1.1"
            id="Colours"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 20 20"
            enable-background="new 0 0 20 20"
            xml:space="preserve"
            class="h-5 w-5 inline mr-3 fill-current"
          >
            <path
              d="M3.179,5.998c-0.423-0.35-1.057-0.29-1.408,0.132L0.494,7.669c-0.35,0.423-0.291,1.058,0.131,1.407 l7.888,6.542L4.706,7.264L3.179,5.998z M7.013,2.683l-1.82,0.829C4.694,3.74,4.471,4.337,4.698,4.836l4.25,9.325l0.213-9.179 L8.339,3.178C8.109,2.678,7.513,2.455,7.013,2.683z M14.211,2.887c0.013-0.55-0.427-1.01-0.976-1.023l-2-0.046 c-0.549-0.013-1.009,0.427-1.022,0.976L9.974,13.037l4.19-8.167L14.211,2.887z M19.191,3.837l-1.779-0.913 c-0.489-0.25-1.096-0.055-1.347,0.434L9.674,15.814c-0.251,0.489-0.056,1.096,0.434,1.347l1.779,0.913 c0.489,0.251,1.095,0.056,1.346-0.433l6.391-12.456C19.875,4.694,19.68,4.088,19.191,3.837z M12.799,16.293 c-0.252,0.492-0.855,0.686-1.346,0.434c-0.492-0.252-0.685-0.854-0.433-1.346c0.252-0.492,0.854-0.685,1.346-0.433 C12.858,15.199,13.051,15.802,12.799,16.293z"
            />
          </svg>
          <span>{{ $t('skills.name') }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 230px;
  transform: translateX(-230px);
  @media (max-width: 640px) {
    &:focus {
      box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6);
      transform: translateX(0);
    }
  }
  @screen sm {
    width: 90px;
    transform: translateX(0);
  }
  @screen md {
    width: 240px;
  }
}
.menu-trigger {
  width: 40px;
  height: 40px;
  left: 100%;
}
.menu-trigger:before,
.menu-trigger:after {
  content: '';
  height: 2px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  @apply w-1/2 rounded bg-white absolute;
}
.menu-trigger:after {
  top: 55%;
}
nav:focus .menu-trigger {
  @apply pointer-events-none;
}
header img {
  width: 100px;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
  @screen sm {
    width: 60px;
  }
  @screen md {
    width: 100px;
  }
}
header h2 {
  @media (min-width: 640px) and (max-width: 767px) {
    /* Between sm and md */
    top: 50%;
    left: 100px;
    min-width: 200px;
    transform: translate(-20px, -50%);
    @apply text-xl pt-0 opacity-0 absolute m-0 rounded bg-gray-900 bg-opacity-75 transition-all duration-150 ease-in-out;
  }
}
header:hover h2 {
  @media (min-width: 640px) and (max-width: 767px) {
    /* Between sm and md */
    transform: translateY(-50%);
    @apply opacity-100;
  }
}
.link {
  background-position: left 15px center;
  background-size: auto 20px;
  @media (min-width: 640px) and (max-width: 767px) {
    /* Between sm and md */
    background-size: 30px auto;
    height: 60px;
    @apply bg-center relative;
  }
}
.link svg {
  @media (min-width: 640px) and (max-width: 767px) {
    @apply w-8 h-8 mx-3;
  }
}
.link span {
  @media (min-width: 640px) and (max-width: 767px) {
    /* Between sm and md */
    top: 50%;
    left: 80px;
    transform: translate(-15px, -50%);
    @apply opacity-0 absolute whitespace-no-wrap py-1 px-2 rounded bg-gray-900 bg-opacity-75 transition-all duration-150 ease-in-out;
  }
}
.link span:before {
  @media (min-width: 640px) and (max-width: 767px) {
    /* Between sm and md */
    content: '';
    top: 50%;
    left: -5px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid rgba(0, 0, 0, 0.5);
    transform: translateY(-50%);
    @apply w-0 h-0 absolute;
  }
}
.link:hover span {
  @media (min-width: 640px) and (max-width: 767px) {
    /* Between sm and md */
    transform: translateY(-50%);
    @apply opacity-100;
  }
}
</style>

<script>
export default {
  // TODO: Remove data() when coverage is successful with vue-jest@4.x.x
  data() {
    return {};
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
    "about": {
      "name": "About",
      "id": "#about"
    },
    "contact": {
      "name": "Contact Me",
      "id": "#contact-me"
    },
    "jobs": {
      "name": "My Jobs",
      "id": "#my-jobs"
    },
    "skills": {
      "name": "My Skills",
      "id": "#my-skills"
    },
    "name": "Fabien Crassat"
  },
  "fr": {
    "about": {
      "name": "A propos",
      "id": "#about"
    },
    "contact": {
      "name": "Contactez-moi",
      "id": "#contact-me"
    },
    "jobs": {
      "name": "Mes expériences",
      "id": "#my-jobs"
    },
    "skills": {
      "name": "Mes compétences",
      "id": "#my-skills"
    },
    "name": "Fabien Crassat"
  }
}
</i18n>
