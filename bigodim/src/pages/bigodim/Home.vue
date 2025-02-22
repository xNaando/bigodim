<template>
  <div class="pagina">
    <Pc/>
    <Celular/>
  </div>
</template>

<script setup>
import Pc from "pages/bigodim/Pc.vue";
import Celular from "pages/bigodim/Celular.vue";
</script>

<style scoped>
.q-header {
  padding: 10px 20px;
}

.q-btn {
  font-size: 16px;
  font-weight: 500;
}

.pagina {
  overflow: hidden;
}
</style>
