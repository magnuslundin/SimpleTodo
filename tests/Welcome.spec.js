import { mount } from '@vue/test-utils'
import Welcome from './../src/components/Welcome.vue'

describe('WelcomeComponent', () => {
  var wrapper
  beforeEach(() => {
    wrapper = mount(Welcome)
  })

  test('creates a jumbotron', () => {
    const jumbotron = wrapper.find('.jumbotron')

    expect(jumbotron.exists()).toBe(true)
  })

  test('emits accepted event', () => {
    const button = wrapper.find('button')

    button.trigger('click')

    expect(wrapper.emitted().accepted).toBeTruthy()
  })
})
