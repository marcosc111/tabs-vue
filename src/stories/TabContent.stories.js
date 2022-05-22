import TabContent from '../components/TabContent.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Tabs/TabContent',
  component: TabContent,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TabContent },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<TabContent v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  conteudoTab: "Texto da tab",
};

export const TextoGrande = Template.bind({});
TextoGrande.args = {
  conteudoTab: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Aenean aliquam molestie leo, vitae iaculis nisl.Sapien in monti palavris qui num significa nadis i pareci latim.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. A ordem dos tratores não altera o pão duris.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Suco de cevadiss deixa as pessoas mais interessantis.Aenean aliquam molestie leo, vitae iaculis nisl. Copo furadis é disculpa de bebadis, arcu quam euismod magna.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Sapien in monti palavris qui num significa nadis i pareci latim.Cevadis im ampola pa arma uma pindureta.",
};

export const SemTexto = Template.bind({});
SemTexto.args = {
  conteudoTab: "",
};