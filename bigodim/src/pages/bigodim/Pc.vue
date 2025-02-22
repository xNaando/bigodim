<template>
  <q-layout v-if="$q.screen.width > 600" view="hHh lpR fFf">
    <div class="row col-12" style="padding-inline: 100px">
      <div class="row col-12 justify-center text-center" style="padding: 20px; line-height: 1.2">
        <div class="col-12" style="font-size: 50px; font-weight: bold; color: #003366;">
          Paulo Bigodim
        </div>
        <div class="col-12" style="font-size: 20px; color: #666;">
          Prefeito de Santa Luzia
        </div>
      </div>
      <div class="row col-12 items-center" style="margin-top: 30px; height: 500px;">
        <div class="col-6 row justify-end align-center q-pr-lg">
          <div>
            <q-img :src="foto" alt="Foto de Paulo Bigodim"
                   style="height: 500px; width: 600px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"/>
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
      <div class="row col-12 items-center" style="margin-top: 50px; height: 500px;">
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
                   style="height: 500px; width: 600px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"/>
          </div>
        </div>
      </div>
      <div class="row col-12 items-center" style="margin-top: 50px; height: 500px;">
        <div class="col-6 row justify-end q-pr-lg">
          <div>
            <q-img :src="foto3" alt="Foto de Paulo Bigodim"
                   style="height: 500px; width: 600px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"/>
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
      <div class="row col-12 items-center" style="margin-top: 100px; height: 500px;">
        <div class="col-6 text-end">
          <p class="q-mt-md" style="font-size: 22px; color: #333; text-align: justify;">
            Na área da educação, Paulo enfatizou a importância da inclusão, anunciando planos para capacitar
            professores, modernizar escolas e implementar programas que promovam a inclusão de todas as crianças. Uma de
            suas primeiras iniciativas foi a proposta de incorporar o símbolo do autismo nos uniformes e materiais
            escolares, bem como em placas de identificação de unidades de saúde e demais equipamentos públicos,
            reforçando o compromisso com a conscientização e inclusão.
          </p>
          <p class="q-mt-md" style="font-size: 22px; color: #333; text-align: justify;">
            Para impulsionar o desenvolvimento econômico, o novo prefeito propôs a desburocratização da máquina pública,
            visando atrair novos investimentos e apoiar o empreendedorismo local. Reconhecendo a posição geográfica
            estratégica de Santa Luzia, Paulo planejou transformar a cidade em um polo de inovação e progresso,
            utilizando a tecnologia como ferramenta para aproximar a administração pública dos cidadãos.
          </p>
        </div>
        <div class="col-6 row q-pl-lg">
          <div>
            <q-img :src="foto4" alt="Foto de Paulo Bigodim"
                   style="height: 500px; width: 600px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"/>
          </div>
        </div>
      </div>
      <div class="row col-12" style="margin-top: 80px">
        <div>
          <p class="q-mt-md" style="font-size: 22px; color: #333; text-align: justify;">
            Além disso, Paulo Bigodinho enfatizou a importância da participação popular em seu governo. Comprometeu-se a
            manter um governo de portas abertas, realizando reuniões comunitárias e consultas públicas para garantir que
            a população tenha voz ativa nas decisões que impactam a cidade. Sua gestão busca unir Santa Luzia,
            promovendo transparência, inclusão e desenvolvimento sustentável para todos os seus habitantes.
          </p>
        </div>
        <div class="row col-12" style="margin-top: 30px">
          <div class="col">
            <video
              class="no-margin no-padding"
              :src="video"
              autoplay
              loop
              muted
              playsinline
              style="height: 500px; width: 100%;"
            ></video>
          </div>
          <div class="col">
            <video
              class="no-margin no-padding"
              :src="video2"
              autoplay
              loop
              muted
              playsinline
              style="height: 500px; width: 100%;"
            ></video>
          </div>
          <div class="col">
            <video
              class="no-margin no-padding"
              :src="video3"
              autoplay
              loop
              muted
              playsinline
              style="height: 500px; width: 100%;"
            ></video>
          </div>
          <div class="col">
            <video
              class="no-margin no-padding"
              :src="video4"
              autoplay
              loop
              muted
              playsinline
              style="height: 500px; width: 100%;"
            ></video>
          </div>
        </div>
      </div>
      <div class="row col-12" style="margin-top: 30px">
        <div>
          <p class="q-mt-md" style="font-size: 22px; color: #333; text-align: justify; margin-bottom: 50px">
            Paulo Bigodinho se tornou um símbolo de renovação e compromisso com Santa Luzia, trazendo uma gestão focada
            no bem-estar da população e no desenvolvimento sustentável da cidade. Sua trajetória política é marcada pela
            proximidade com o povo, pela transparência e pelo desejo genuíno de transformar a vida dos cidadãos para
            melhor. Com uma visão moderna e inclusiva, ele tem trabalhado incansavelmente para melhorar a saúde, a
            educação e a economia local, sempre ouvindo as necessidades da comunidade. Sua liderança representa um novo
            capítulo para Santa Luzia, onde o progresso e a qualidade de vida são prioridades.
          </p>
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
import video from '/public/videos/video.mp4'
import video2 from '/public/videos/video2.mp4'
import video3 from '/public/videos/video3.mp4'
import video4 from '/public/videos/video4.mp4'
</script>

<style scoped>
/* Estilo geral */
.q-layout {
  background: linear-gradient(to bottom right, #e0f7fa, #ffffff); /* Fundo gradiente */
}

/* Títulos */
.text-h5 {
  font-size: 24px;
  font-weight: bold;
  color: #003366;
}

/* Estilo das imagens */
.q-img {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra nas imagens */
}

/* Estilo dos parágrafos */
p {
  line-height: 1.6; /* Aumenta o espaçamento entre linhas */
  margin-bottom: 20px; /* Espaçamento inferior */
}
</style>
