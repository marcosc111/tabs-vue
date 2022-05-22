<template>
  <TabMain titulo="Tabs com VUE" :tabsData="tData"></TabMain>
</template>

<script>
import TabMain from "./components/TabMain.vue";

// dados da aplicação (podem vir de uma consulta no servidor)

export default {
  components: {
    TabMain,
  },
  name: "App",
  data() {
    return {
      tData: [
        {
          tabId: "Tab 1",
          tabContent: "Esse é o conteúdo da tab 1",
        },
        {
          tabId: "Tab 2",
          tabContent: "Esse é o conteúdo da tab número 2",
        },
        {
          tabId: "Tab 3",
          tabContent: "Terceiro conteúdo",
        },
        {
          tabId: "Tab 4",
          tabContent: "Quarta página",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
