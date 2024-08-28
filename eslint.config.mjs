import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default createConfigForNuxt(
  {
    features: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: true,
      },
      tooling: true,
    },
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
  js.configs.all,
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      '@stylistic/arrow-parens': ['error', 'always'],
      'one-var': ['error', 'never'],
    },
  },
);
