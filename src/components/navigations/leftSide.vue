<template>
  <nav class="z-10 sticky top-0 bg-blue-700 text-gray-200">
    <div
      class="flex justify-between items-center py-1 sm:py-0 bg-gray-900 bg-opacity-25 text-center"
    >
      <div id="menuToggle" class="block relative mx-2 text-left">
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <input
          v-model="checkbox"
          type="checkbox"
          class="block absolute cursor-pointer opacity-0 z-50 w-10 h-8 top-0 sm:hidden"
          :title="$t('menu')"
        />
        <span
          class="z-40 block relative bg-gray-200 w-8 h-1 my-1 rounded-sm transition-transform duration-500 ease-in-out sm:hidden"
        />
        <span
          class="z-40 block relative bg-gray-200 w-8 h-1 my-1 rounded-sm transition duration-500 ease-in-out sm:hidden"
        />
        <span
          class="z-40 block relative bg-gray-200 w-8 h-1 my-1 rounded-sm transition-transform duration-500 ease-in-out sm:hidden"
        />
        <div
          id="menu"
          class="z-20 fixed top-0 left-0 bg-blue-700 w-screen sm:w-24 md:w-56 h-screen transform -translate-x-full sm:translate-x-0 transition-transform duration-500 ease-in-out overflow-y-auto"
        >
          <header
            class="py-8 pl-2 pr-6 sm:p-2 md:py-8 md:px-2 text-center bg-gray-900 bg-opacity-25 sm:relative"
          >
            <ProfilePicture
              class="overflow-hidden mx-auto sm:w-16 sm:h-16 md:w-24 md:h-24"
              :name="name"
              :picture="picture"
            />
            <Name class="pt-4" :name="name" />
            <SwitchLang class="pt-4" />
          </header>
          <ul>
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              @click="closeMenu"
            >
              <nuxt-link
                :to="'#' + item.url"
                class="link block sm:text-sm p-4 outline-none bg-no-repeat cursor-pointer hover:bg-gray-900 hover:bg-opacity-25 sm:text-center md:text-left"
                :title="item.name | capitalize"
              >
                <component
                  :is="item.svg"
                  class="h-5 w-5 sm:h-8 sm:w-8 md:h-5 md:w-5"
                />
                <span class="ml-3 capitalize sm:hidden md:inline">
                  {{ item.name }}
                </span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <ProfilePicture
        class="w-16 h-16 mx-1 sm:hidden"
        :name="name"
        :picture="picture"
      />
      <Name class="mx-1 sm:hidden" :name="name" />
      <SwitchLang class="mx-1 sm:hidden" />
    </div>
  </nav>
</template>

<script>
import Name from './name';
import ProfilePicture from './profilePicture';
import SwitchLang from './switchLang';
export default {
  components: {
    Name,
    ProfilePicture,
    SwitchLang,
  },
  filters: {
    // eslint-disable-next-line object-shorthand
    capitalize: function (value) {
      return value.replace(/\w\S*/g, function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      });
    },
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    // eslint-disable-next-line vue/prop-name-casing
    'menu-items': {
      // Example: [{ name: 'Page 1', url: 'page1', svg: 'component' }]
      type: Array,
      default: () => [],
    },
  },
  data() {
    return { checkbox: false };
  },
  methods: {
    // eslint-disable-next-line object-shorthand
    closeMenu: function () {
      this.checkbox = !this.checkbox;
    },
  },
};
</script>

<style scoped>
#menuToggle input {
  left: -3px;
}

#menuToggle input ~ span {
  transform-origin: 5px 0px;
}

#menuToggle input ~ span:nth-last-child(2) {
  transform-origin: left;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span {
  transform: rotate(45deg) translate(5px, -4px);
}
/* But let's hide the middle one. */
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
/* And the last one should go the other direction */
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(2px, 7px);
}

/*
 * Slide the menu in from the left
 */
#menuToggle input:checked ~ #menu {
  transform: none;
}

li:not(:last-child)::after {
  content: '';
  width: 95%;
  border-bottom: #27598f solid 1px;
  display: block;
  margin: auto;
}
</style>

<i18n>
{
  "en": {
    "menu": "Menu"
  },
  "fr": {
    "menu": "Menu"
  }
}
</i18n>
