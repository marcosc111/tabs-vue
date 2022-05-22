import TabMain from "../components/TabMain.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Tabs/TabMain",
  component: TabMain,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TabMain },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<TabMain v-bind="args" />',
});

export const DuasOpcoes = Template.bind({});
DuasOpcoes.args = {
  titulo: 'Duas opções',
  tabsData: [
    {
      tabId: 'Tab 1',
      tabContent: 'Esse é o conteúdo da tab 1'
    },
    {
      tabId: 'Tab 2',
      tabContent: 'Esse é o conteúdo da tab número 2'
    },
  ],
};

export const TresOpcoes = Template.bind({});
TresOpcoes.args = {
  titulo: 'Três opções',
  tabsData: [
    {
      tabId: 'Tab 1',
      tabContent: 'Esse é o conteúdo da tab 1'
    },
    {
      tabId: 'Tab 2',
      tabContent: 'Esse é o conteúdo da tab número 2'
    },
    {
      tabId: 'Tab 3',
      tabContent: 'Terceiro conteúdo'
    },
  ],
};

export const QuatroOpcoes = Template.bind({});
QuatroOpcoes.args = {
  titulo: 'Quatro opções',
  tabsData: [
    {
      tabId: 'Tab 1',
      tabContent: 'Esse é o conteúdo da tab 1'
    },
    {
      tabId: 'Tab 2',
      tabContent: 'Esse é o conteúdo da tab número 2'
    },
    {
      tabId: 'Tab 3',
      tabContent: 'Terceiro conteúdo'
    },
    {
      tabId: 'Tab 4',
      tabContent: 'Quarta página'
    }
  ],
};

