<template>
  <div>
    <LeftSideNavigation :homepage="homepage" />
    <main class="ml-24 p-3">
      <h1>{{ $t('greeting') }}</h1>

      <p>test pipeline</p>

      <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
        English
      </nuxt-link>

      <nuxt-link v-if="$i18n.locale !== 'fr'" :to="switchLocalePath('fr')">
        Français
      </nuxt-link>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
        sapien in pharetra ornare. Praesent aliquam arcu nec tellus ornare, id
        rhoncus eros laoreet. Vivamus a bibendum mauris. Nam at diam elementum,
        ultrices ligula a, blandit lectus. Vivamus tincidunt lorem quis leo
        imperdiet, vel tristique orci ultrices. Maecenas feugiat sapien et massa
        placerat rhoncus. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Fusce nec ligula eget ante
        auctor elementum. Sed euismod justo in massa scelerisque tristique.
        Vestibulum elementum nunc at neque euismod, non sagittis massa iaculis.
        Mauris scelerisque, felis vitae placerat dignissim, turpis metus
        condimentum nisl, ac eleifend massa mi ut nisi. Fusce tincidunt
        facilisis leo a bibendum. Vestibulum non volutpat massa. Sed blandit
        pretium pulvinar. Mauris vel ipsum in quam sodales bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
        sapien in pharetra ornare. Praesent aliquam arcu nec tellus ornare, id
        rhoncus eros laoreet. Vivamus a bibendum mauris. Nam at diam elementum,
        ultrices ligula a, blandit lectus. Vivamus tincidunt lorem quis leo
        imperdiet, vel tristique orci ultrices. Maecenas feugiat sapien et massa
        placerat rhoncus. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Fusce nec ligula eget ante
        auctor elementum. Sed euismod justo in massa scelerisque tristique.
        Vestibulum elementum nunc at neque euismod, non sagittis massa iaculis.
        Mauris scelerisque, felis vitae placerat dignissim, turpis metus
        condimentum nisl, ac eleifend massa mi ut nisi. Fusce tincidunt
        facilisis leo a bibendum. Vestibulum non volutpat massa. Sed blandit
        pretium pulvinar. Mauris vel ipsum in quam sodales bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
        sapien in pharetra ornare. Praesent aliquam arcu nec tellus ornare, id
        rhoncus eros laoreet. Vivamus a bibendum mauris. Nam at diam elementum,
        ultrices ligula a, blandit lectus. Vivamus tincidunt lorem quis leo
        imperdiet, vel tristique orci ultrices. Maecenas feugiat sapien et massa
        placerat rhoncus. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Fusce nec ligula eget ante
        auctor elementum. Sed euismod justo in massa scelerisque tristique.
        Vestibulum elementum nunc at neque euismod, non sagittis massa iaculis.
        Mauris scelerisque, felis vitae placerat dignissim, turpis metus
        condimentum nisl, ac eleifend massa mi ut nisi. Fusce tincidunt
        facilisis leo a bibendum. Vestibulum non volutpat massa. Sed blandit
        pretium pulvinar. Mauris vel ipsum in quam sodales bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
        sapien in pharetra ornare. Praesent aliquam arcu nec tellus ornare, id
        rhoncus eros laoreet. Vivamus a bibendum mauris. Nam at diam elementum,
        ultrices ligula a, blandit lectus. Vivamus tincidunt lorem quis leo
        imperdiet, vel tristique orci ultrices. Maecenas feugiat sapien et massa
        placerat rhoncus. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Fusce nec ligula eget ante
        auctor elementum. Sed euismod justo in massa scelerisque tristique.
        Vestibulum elementum nunc at neque euismod, non sagittis massa iaculis.
        Mauris scelerisque, felis vitae placerat dignissim, turpis metus
        condimentum nisl, ac eleifend massa mi ut nisi. Fusce tincidunt
        facilisis leo a bibendum. Vestibulum non volutpat massa. Sed blandit
        pretium pulvinar. Mauris vel ipsum in quam sodales bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
        sapien in pharetra ornare. Praesent aliquam arcu nec tellus ornare, id
        rhoncus eros laoreet. Vivamus a bibendum mauris. Nam at diam elementum,
        ultrices ligula a, blandit lectus. Vivamus tincidunt lorem quis leo
        imperdiet, vel tristique orci ultrices. Maecenas feugiat sapien et massa
        placerat rhoncus. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Fusce nec ligula eget ante
        auctor elementum. Sed euismod justo in massa scelerisque tristique.
        Vestibulum elementum nunc at neque euismod, non sagittis massa iaculis.
        Mauris scelerisque, felis vitae placerat dignissim, turpis metus
        condimentum nisl, ac eleifend massa mi ut nisi. Fusce tincidunt
        facilisis leo a bibendum. Vestibulum non volutpat massa. Sed blandit
        pretium pulvinar. Mauris vel ipsum in quam sodales bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
        sapien in pharetra ornare. Praesent aliquam arcu nec tellus ornare, id
        rhoncus eros laoreet. Vivamus a bibendum mauris. Nam at diam elementum,
        ultrices ligula a, blandit lectus. Vivamus tincidunt lorem quis leo
        imperdiet, vel tristique orci ultrices. Maecenas feugiat sapien et massa
        placerat rhoncus. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Fusce nec ligula eget ante
        auctor elementum. Sed euismod justo in massa scelerisque tristique.
        Vestibulum elementum nunc at neque euismod, non sagittis massa iaculis.
        Mauris scelerisque, felis vitae placerat dignissim, turpis metus
        condimentum nisl, ac eleifend massa mi ut nisi. Fusce tincidunt
        facilisis leo a bibendum. Vestibulum non volutpat massa. Sed blandit
        pretium pulvinar. Mauris vel ipsum in quam sodales bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
        sapien in pharetra ornare. Praesent aliquam arcu nec tellus ornare, id
        rhoncus eros laoreet. Vivamus a bibendum mauris. Nam at diam elementum,
        ultrices ligula a, blandit lectus. Vivamus tincidunt lorem quis leo
        imperdiet, vel tristique orci ultrices. Maecenas feugiat sapien et massa
        placerat rhoncus. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Fusce nec ligula eget ante
        auctor elementum. Sed euismod justo in massa scelerisque tristique.
        Vestibulum elementum nunc at neque euismod, non sagittis massa iaculis.
        Mauris scelerisque, felis vitae placerat dignissim, turpis metus
        condimentum nisl, ac eleifend massa mi ut nisi. Fusce tincidunt
        facilisis leo a bibendum. Vestibulum non volutpat massa. Sed blandit
        pretium pulvinar. Mauris vel ipsum in quam sodales bibendum.
      </p>
    </main>
  </div>
</template>

<script>
import LeftSideNavigation from '~/components/navigations/leftSide.vue';

export default {
  components: {
    LeftSideNavigation,
  },
  data() {
    return {
      homepage: '/fabien',
    };
  },
  head() {
    return {
      title: 'Curriculum Vitae | Fabien',
    };
  },
};
</script>
