<script setup>
import OrangeButton from "../global/buttons/OrangeButton.vue";
</script>

<template>
  <article class="info">
    <div class="texts">
      <h2>TRANSFORMANDO IDEIAS EM SOLUÇÕES INOVADORAS</h2>
      <div class="desc">
        <h3>O FUTURO COMEÇA AQUI!</h3>
        <p>
          Seja parte de uma jornada criativa com nossa plataforma desenvolvida para
          gerenciar hackathons de forma colaborativa. Envolva-se em competições que unem
          estudantes e profissionais para resolver desafios do mundo real, trazendo
          inovação através da tecnologia, design, programação, e mais.
        </p>
      </div>
    </div>
    <div class="sub">
      Fábrica-Hackathon é um sistema web criado para gerenciar hackathons de maneira
      completa, desde o registro de participantes até a avaliação final dos projetos.
      Nossa plataforma centraliza todas as edições passadas e futuras, permitindo que os
      participantes acompanhem sua evolução, submetam projetos e recebam feedbacks de
      jurados. Com ferramentas avançadas para organizadores e competidores, simplificamos
      o processo de inscrição, organização e avaliação de projetos, transformando ideias
      em soluções inovadoras e práticas.
      <div class="button">
        <OrangeButton label="Edições" />
      </div>
    </div>
  </article>
</template>

<style scoped>
.info {
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: 60vh;
}

.button {
  width: 50%;
  height: 20%;
}

h2 {
  color: #fff;
  font-size: 3.7vw;
  font-weight: 400;
  max-width: 85%;
  text-wrap: balance;
}

h3 {
  font-size: 2vw;
  font-weight: 400;
}

p {
  font-size: 0.9vw;
  color: #fff;
}

.desc {
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
}

.texts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sub {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 0.9vw;
  color: #fff;
}
</style>
