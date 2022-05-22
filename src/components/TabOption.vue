<template>
<div v-if="selecionado" class="opcao selecionado">
  <span><b> {{ tabId }} </b></span>
</div>
<div v-else class="opcao">
  <span><b> {{ tabId }} </b></span>
</div>
</template>

<script>

export default {
  name: 'TabOption',
  props: {
    tabId: String,
    selecionado: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.opcao {
  text-align: center;
  min-width: 100px;
  min-height: 18px;
  background: #1282bb;
  color: white;
  padding: 10px 5px 5px 5px;
  margin: 8px;
  display:inline-block;
  border-radius: 3px;
  border: 4px solid #1282bb;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.opcao:hover {
  cursor:pointer;
}

.selecionado {
  color: #1282bb;
  background: white;
  border: 4px solid #1282bb;
}

</style>
