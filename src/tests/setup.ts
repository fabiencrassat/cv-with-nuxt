import { config } from '@vue/test-utils';

config.global.mocks = {
  switchLocalePath: (lang: string) => lang,
};
