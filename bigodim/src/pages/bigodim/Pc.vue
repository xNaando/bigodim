<template>
  <q-layout v-if="$q.screen.width > 600" view="hHh lpR fFf">
    <div class="row col-12" style="padding-inline: 100px">
      <div class="row col-12 justify-center text-center" style="background-color: #f5f5f5; padding: 20px;">
        <div class="col-12" style="font-size: 50px; font-weight: bold; color: #003366;">
          Paulo Bigodim
        </div>
        <div class="col-12" style="font-size: 20px; color: #666;">
          Prefeito de Santa Luzia
        </div>
      </div>
      <div class="row col-12" style="margin-top: 30px; height: 500px;">
        <div class="col-6 row justify-end align-center">
          <div>
            <q-img :src="foto" alt="Foto de Paulo Bigodim"
                   style="height: 500px; width: 500px; border-radius: 50%;"/>
          </div>
        </div>
        <div class="col-6">
          <div>
            <div class="text-h4" style="color: #003366; font-weight: bold; margin-top: 20px">Paulo Henrique Paulino e
              Silva
            </div>
            <p class="q-mt-md" style="font-size: 22px; color: #333; text-align: justify;">
              Paulo Henrique Paulino e Silva, amplamente conhecido como Paulo Bigodinho, nasceu e foi criado em Santa
              Luzia, Minas Gerais. Formado em Gestão Pública, com especializações em Gestão de Pessoas e Educação
              Inclusiva, Paulo sempre demonstrou um profundo compromisso com sua comunidade local.
            </p>
            <p class="q-mt-md" style="font-size: 22px; color: #333; text-align: justify;">
              Sua trajetória política teve início há oito anos, quando foi eleito vereador de Santa Luzia. Durante seus
              mandatos, destacou-se por sua dedicação em abordar questões cruciais para os cidadãos, especialmente nas
              áreas de saúde, educação e infraestrutura. Sua atuação proativa e presença constante nas comunidades
              locais fortaleceram sua reputação como um representante acessível e comprometido.
            </p>
          </div>
        </div>
      </div>
      <div class="row col-12" style="margin-top: 50px; height: 500px;">
        <div class="col-6 text-end">
          <p class="q-mt-md" style="font-size: 22px; color: #333; text-align: justify;">
            Em 2024, Paulo Bigodinho decidiu candidatar-se ao cargo de prefeito pelo partido Avante. Sua campanha foi
            marcada por uma forte conexão com os eleitores, simbolizada pela "onda laranja", cor predominante em seus
            materiais de campanha. Enfrentando adversários influentes, como Wander do Delegado (PSD) e a ex-prefeita
            Roseli Pimentel, Paulo destacou-se por suas propostas centradas na inclusão social, melhoria dos serviços
            públicos e desenvolvimento econômico sustentável.
          </p>
          <p class="q-mt-md" style="font-size: 22px; color: #333; text-align: justify;">
            A eleição municipal de 6 de outubro de 2024 foi histórica para Santa Luzia. Paulo Bigodinho foi eleito no
            primeiro turno, obtendo 43,10% dos votos válidos, totalizando 47.306 votos. Sua vitória representou a
            primeira vez em mais de três décadas que um candidato nascido na sede do município assumiu a prefeitura,
            quebrando um ciclo de administrações anteriores oriundas de outras regiões.
          </p>
        </div>
        <div class="col-6 row q-pl-lg">
          <div>
            <q-img :src="foto2" alt="Foto de Paulo Bigodim"
                   style="height: 500px; width: 500px; border-radius: 50%;"/>
          </div>
        </div>
      </div>
      <div class="row col-12" style="margin-top: 50px; height: 500px;">
        <div class="col-6 row justify-end q-pr-lg">
          <div>
            <q-img :src="foto3" alt="Foto de Paulo Bigodim"
                   style="height: 500px; width: 500px; border-radius: 50%;"/>
          </div>
        </div>
        <div class="col-6">
          <div>
            <p class="q-mt-md" style="font-size: 22px; color: #333; text-align: justify;">
              A campanha eleitoral não foi isenta de desafios. Paulo enfrentou acusações e ataques pessoais, incluindo
              conflitos com o deputado estadual Christiano Xavier, ex-prefeito de Santa Luzia. Em setembro de 2024,
              Xavier registrou um boletim de ocorrência contra Paulo por calúnia, difamação, ameaça e injúria, alegando
              ter sido chamado de "criminoso" e "moleque". Em resposta, Paulo afirmou que não se intimidaria e que
              continuaria sua campanha focada nas necessidades da população.
            </p>
            <p class="q-mt-md" style="font-size: 22px; color: #333; text-align: justify;">
              A posse de Paulo Bigodinho ocorreu em 1º de janeiro de 2025, em uma cerimônia realizada na Rua Direita, no
              Centro Histórico de Santa Luzia. Em seu discurso de posse, ele relembrou sua trajetória como vereador e os
              desafios enfrentados durante a campanha. Destacou a necessidade de reestruturar os serviços de saúde, com
              ênfase na implantação de tratamentos especializados, como a hemodiálise, para atender melhor os cidadãos
              que enfrentam longas distâncias em busca de atendimento.
            </p>
          </div>
        </div>
      </div>
      <div class="row col-12" style="margin-top: 50px; height: 500px;">
        <div class="col-6 text-end">
          <p class="q-mt-md" style="font-size: 22px; color: #333; text-align: justify;">
            Em 2024, Paulo Bigodinho decidiu candidatar-se ao cargo de prefeito pelo partido Avante. Sua campanha foi
            marcada por uma forte conexão com os eleitores, simbolizada pela "onda laranja", cor predominante em seus
            materiais de campanha. Enfrentando adversários influentes, como Wander do Delegado (PSD) e a ex-prefeita
            Roseli Pimentel, Paulo destacou-se por suas propostas centradas na inclusão social, melhoria dos serviços
            públicos e desenvolvimento econômico sustentável.
          </p>
          <p class="q-mt-md" style="font-size: 22px; color: #333; text-align: justify;">
            A eleição municipal de 6 de outubro de 2024 foi histórica para Santa Luzia. Paulo Bigodinho foi eleito no
            primeiro turno, obtendo 43,10% dos votos válidos, totalizando 47.306 votos. Sua vitória representou a
            primeira vez em mais de três décadas que um candidato nascido na sede do município assumiu a prefeitura,
            quebrando um ciclo de administrações anteriores oriundas de outras regiões.
          </p>
        </div>
        <div class="col-6 row q-pl-lg">
          <div>
            <q-img :src="foto2" alt="Foto de Paulo Bigodim"
                   style="height: 500px; width: 500px; border-radius: 50%;"/>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script setup>
import foto from '/public/imagens/foto.png'
import foto2 from '/public/imagens/foto2.png'
import foto3 from '/public/imagens/foto3.png'
import foto4 from '/public/imagens/foto4.png'
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
</style>
