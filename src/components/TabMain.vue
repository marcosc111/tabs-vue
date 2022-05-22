<template>
  <div class="main">
    <h1 class="titulo">{{ titulo }}</h1>
    <li class="tab-option" v-for="(tab, index) in tabsData" :key="tab.id">
      <TabOption :selecionado="(index == currentActiveTab.index)" :tabId="tab.tabId" @click="switchTab(index)"></TabOption>
    </li>
    <TabContent :conteudoTab="tabsData[currentActiveTab.index].tabContent"></TabContent>
  </div>
</template>

<script>
import { reactive } from 'vue'
import TabContent from "./TabContent.vue";
import TabOption from "./TabOption.vue";

export default {
  components: {
    TabContent,
    TabOption,
  },
  name: "TabMain",
  props: {
    titulo: String,
    tabsData: Array
  },
  data() {
    return {
      currentActiveTab,
      switchTab
    }
  },
};

const currentActiveTab = reactive({index: 0});

function switchTab(index) {
  currentActiveTab.index = index;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: rgb(255, 146, 102);
    display: inline-block;
    text-align: center;
    border-radius: 10px;
    padding: 5px;
    width: auto;
    max-width: 700px;
    overflow-wrap: break-word;
    color: white;
}
.titulo {
    display: block;
    margin: 20px;
}
.tab-option {
  display: inline-block;
}
</style>
