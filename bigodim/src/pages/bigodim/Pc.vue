<template>
  <q-layout v-if="$q.screen.width > 600" view="hHh lpR fFf">
    <div class="row col-12" style="padding-inline: 20px">

      <!-- Cabeçalho -->
      <div class="row col-12 justify-center text-center" style="background-color: #f5f5f5; padding: 20px;">
        <div class="col-12" style="font-size: 50px; font-weight: bold; color: #003366;">
          Paulo Bigodim
        </div>
        <div class="col-12" style="font-size: 20px; color: #666;">
          Prefeito de Santa Luzia
        </div>
      </div>

      <!-- Foto -->
      <div class="row col-12 justify-center" style="margin-top: 30px;">
        <q-img :src="foto" alt="Foto de Paulo Bigodim" style="height: 300px; width: 300px; border-radius: 50%;"/>
      </div>

      <!-- História -->
      <div class="row col-12 justify-center" style="margin-top: 30px;">
        <div class="text-h5" style="color: #003366; font-weight: bold;">História</div>
        <p class="q-mt-md" style="font-size: 18px; text-align: center; color: #333;">
          Paulo Bigodim iniciou sua trajetória política com o objetivo de transformar Santa Luzia, destacando-se pela
          ética, comprometimento e amor à sua cidade. Com anos de experiência, tem trabalhado em diversas áreas para
          promover o crescimento e bem-estar da população.
        </p>
      </div>

      <!-- Projetos -->
      <div class="row col-12 justify-center" style="margin-top: 30px;">
        <div class="text-h5" style="color: #003366; font-weight: bold;">Projetos</div>
        <p class="q-mt-md" style="font-size: 18px; text-align: center; color: #333;">
          Durante seu mandato, Paulo Bigodim tem implementado projetos inovadores nas áreas de educação, saúde e
          infraestrutura, sempre com foco em melhorar a qualidade de vida da população de Santa Luzia.
        </p>
      </div>

      <!-- Carreira Política -->
      <div class="row col-12 justify-center" style="margin-top: 30px;">
        <div class="text-h5" style="color: #003366; font-weight: bold;">Carreira Política</div>
        <p class="q-mt-md" style="font-size: 18px; text-align: center; color: #333;">
          Paulo Bigodim foi eleito prefeito de Santa Luzia com um plano claro de ação para o desenvolvimento sustentável
          da cidade. Ao longo de sua carreira, tem se destacado pelo seu compromisso com a transparência e a inovação
          nas políticas públicas.
        </p>
      </div>

      <!-- Contato -->
      <div class="col-12 justify-center text-center" style="margin-top: 30px; margin-bottom: 30px;">
        <div class="text-h5" style="color: #003366; font-weight: bold;">Contato</div>
        <p class="q-mt-md" style="font-size: 18px; text-align: center; color: #333;">
          Para mais informações ou agendar uma reunião, entre em contato através do e-mail: <a
          href="mailto:paulo.bigodim@santaluzia.com.br">paulo.bigodim@santaluzia.com.br</a>
        </p>
      </div>

    </div>
  </q-layout>
</template>

<script setup>
import foto from '/public/imagens/foto.png'
</script>

<style scoped>
/* Estilo geral */
.q-layout {
  background-color: #fafafa;
}

/* Títulos */
.text-h5 {
  font-size: 24px;
  font-weight: bold;
  color: #003366;
}

p {
  font-size: 18px;
  text-align: center;
  color: #333;
}
</style>
