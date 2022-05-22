import TabOption from '../components/TabOption.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Tabs/TabOption',
  component: TabOption,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TabOption },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<TabOption v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  selecionado: false,
  tabId: "default"
};

export const TextoGrande = Template.bind({});
TextoGrande.args = {
  selecionado: false,
  tabId: "texto muito maior do que o default"
};

export const SemTexto = Template.bind({});
SemTexto.args = {
  selecionado: false,
  tabId: ""
};