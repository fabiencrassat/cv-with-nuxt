<script setup>
/* global useLocaleHead */
import { sanitizeUrl } from '@braintree/sanitize-url';

// eslint-disable-next-line no-useless-assignment
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
  identifierAttribute: 'id',
});
// eslint-disable-next-line no-useless-assignment
const title = 'TBD';
</script>

<script>
export default {
  name: 'DefaultLayout',
  // eslint-disable-next-line sort-keys
  data() {
    return {
      sanitizeUrl,
    };
  },
};
</script>

<template>
  <div>
    <Html
      :lang="head.htmlAttrs.lang"
      :dir="head.htmlAttrs.dir"
    >
      <Head>
        <Title>{{ title }}</Title>
        <template
          v-for="link in head.link"
          :key="link.id"
        >
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="sanitizeUrl(link.href)"
            :hreflang="link.hreflang"
          />
        </template>
        <template
          v-for="meta in head.meta"
          :key="meta.id"
        >
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body>
        <slot />
      </Body>
    </Html>
  </div>
</template>
