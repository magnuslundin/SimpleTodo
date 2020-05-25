import { mount, createLocalVue } from '@vue/test-utils';
import TodoAddItem from './../src/components/TodoAddItem.vue';
import { IconsPlugin } from 'bootstrap-vue';

const localVue = createLocalVue();
localVue.use(IconsPlugin);

describe('TodoAddItemComponent', () => {
  var wrapper;
  beforeEach(() => {
    wrapper = mount(TodoAddItem, {
      localVue
     });
  });

  test('emits added items', () => {
    const todoItem = 'myNewTodo';
    const addNewItemInput = wrapper.find('input[type=text]');
    const addButton = wrapper.find('button');

    addNewItemInput.setValue(todoItem);
    addButton.trigger('click');
    wrapper.vm.addItem(); /* TODO: Investigate click trigger not firing addItem() */

    expect(wrapper.emitted().itemAdded[0]).toEqual([todoItem]);
  });
});