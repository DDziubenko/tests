import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const wrapper = shallowMount(HelloWorld);
  it('string msg test', () => {
    const message = 'Welcome';
    expect(wrapper.vm.$data.message).toStrictEqual('');
    wrapper.vm.changeMessage(message);
    expect(wrapper.vm.$data.message).toStrictEqual('Welcome');
  });
  it('setData test', () => {
    wrapper.setData({ message: '1' });
    expect(wrapper.vm.$data.message).toStrictEqual('1');
    wrapper.setData({ message: '2' });
    expect(wrapper.vm.$data.message).toStrictEqual('2');
  });
  it('computed test', () => {
    wrapper.vm.changeMessage('');
    expect(wrapper.vm.isMsg).toBe(false);
    wrapper.vm.changeMessage('msg');
    expect(wrapper.vm.isMsg).toBe(true);
    wrapper.vm.changeMessage('');
  });
  it('should matchSnapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
