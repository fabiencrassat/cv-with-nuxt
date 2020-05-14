<template>
  <nav
    class="h-screen fixed top-0 left-0 outline-none z-10 bg-green-500 transition-all duration-300 ease-in-out"
    tabindex="0"
  >
    <div class="menu-trigger absolute sm:hidden" />
    <header
      class="py-8 px-2 sm:p-2 md:py-8 md:px-2 text-center bg-gray-900 bg-opacity-25 sm:relative"
    >
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img
        class="overflow-hidden mx-auto rounded-full border-4 border-solid border-yellow-300"
        src="/fabien-crassat.jpeg"
        :alt="$t('name')"
      />
      <h2>Fabien Crassat</h2>
    </header>
    <ul class="py-2">
      <li tabindex="0">
        <nuxt-link
          :to="localePath(this.homepage)"
          class="link block sm:text-sm py-4 pr-4 pl-12 outline-none bg-no-repeat cursor-pointer transition-all duration-150 ease-linear hover:bg-gray-900 hover:bg-opacity-25 icon-user"
        >
          <span>{{ $t('about') }}</span>
        </nuxt-link>
      </li>
      <li tabindex="0">
        <nuxt-link
          :to="localePath(this.homepage)"
          class="link block sm:text-sm py-4 pr-4 pl-12 outline-none bg-no-repeat cursor-pointer transition-all duration-150 ease-linear hover:bg-gray-900 hover:bg-opacity-25 icon-phone"
        >
          <span>{{ $t('contact') }}</span>
        </nuxt-link>
      </li>
      <li tabindex="0">
        <nuxt-link
          :to="localePath(this.homepage)"
          class="link block sm:text-sm py-4 pr-4 pl-12 outline-none bg-no-repeat cursor-pointer transition-all duration-150 ease-linear hover:bg-gray-900 hover:bg-opacity-25 icon-briefcase"
        >
          <span>{{ $t('jobs') }}</span>
        </nuxt-link>
      </li>
      <li tabindex="0">
        <nuxt-link
          :to="localePath(this.homepage)"
          class="link block sm:text-sm py-4 pr-4 pl-12 outline-none bg-no-repeat cursor-pointer transition-all duration-150 ease-linear hover:bg-gray-900 hover:bg-opacity-25 icon-colours"
        >
          <span>{{ $t('skills') }}</span>
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
  background: #5bc995;
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
    @apply text-xl opacity-0 absolute m-0 rounded bg-gray-900 bg-opacity-50 transition-all duration-150 ease-in-out;
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
.link span {
  @media (min-width: 640px) and (max-width: 767px) {
    /* Between sm and md */
    top: 50%;
    left: 80px;
    transform: translate(-15px, -50%);
    @apply opacity-0 absolute whitespace-no-wrap py-1 px-2 rounded bg-gray-900 bg-opacity-50 transition-all duration-150 ease-in-out;
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
.icon-briefcase {
  background-image: url('~assets/images/briefcase.svg');
}
.icon-colours {
  background-image: url('~assets/images/colours.svg');
}
.icon-phone {
  background-image: url('~assets/images/phone.svg');
}
.icon-user {
  background-image: url('~assets/images/user.svg');
}
</style>

<script>
export default {
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
    "skills": "My Skills",
    "name": "Fabien Crassat"
  },
  "fr": {
    "about": "A propos",
    "contact": "Contactez-moi",
    "jobs": "Mes expériences",
    "skills": "Mes compétences",
    "name": "Fabien Crassat"
  }
}
</i18n>
