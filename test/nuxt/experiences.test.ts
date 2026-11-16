import { mount } from '@vue/test-utils';
import { expect, it } from 'vitest';
import { nextTick } from 'vue';
import Experiences from '../../app/components/experiences.vue';

it('shows every experience for printing and restores the screen limit afterward', async () => {
  const experiences = Object.fromEntries(
    Array.from({ length: 7 }, (_, index) => [
      `experience-${index}`,
      { job: `Job ${index}` },
    ]),
  );
  const component = mount(Experiences, {
    props: { experiences },
    global: {
      mocks: { $t: (key: string) => key },
      stubs: ['CardImage', 'CardItem'],
    },
  });

  expect(component.findAll('.max-w-sm')).toHaveLength(5);
  expect(component.find('button').exists()).toBe(true);

  window.dispatchEvent(new Event('beforeprint'));
  await nextTick();
  window.dispatchEvent(new Event('beforeprint'));
  await nextTick();

  expect(component.findAll('.max-w-sm')).toHaveLength(7);
  expect(component.find('button').exists()).toBe(false);

  window.dispatchEvent(new Event('afterprint'));
  await nextTick();

  expect(component.findAll('.max-w-sm')).toHaveLength(5);
  expect(component.find('button').exists()).toBe(true);

  window.dispatchEvent(new Event('afterprint'));
  await nextTick();
  await component.find('button').trigger('click');
  window.dispatchEvent(new Event('beforeprint'));
  await nextTick();
  window.dispatchEvent(new Event('afterprint'));
  await nextTick();

  expect(component.findAll('.max-w-sm')).toHaveLength(7);
  expect(component.find('button').exists()).toBe(false);

  component.unmount();
});
