<script setup>
import OrangeButton from '../global/buttons/OrangeButton.vue';
</script>

<template>
    <article class="info">
        <div class="texts">
            <h2>
                TRANSFORMANDO
                <span>IDEAS EM INOVAÇÃO:</span>
            </h2>
            <div class="desc">
                <h3>O FUTURO COMEÇA AQUI!</h3>
                <p>
                    HACKATHON uma plataforma ou ambiente digital projetado para facilitar e gerenciar competições
                    criativas e colaborativas. Nele, participantes se reúnem virtualmente para resolver desafios, propor
                    soluções inovadoras e desenvolver projetos relacionados à tecnologia, programação, design ou outras
                    áreas.
                </p>
            </div>
        </div>
        <div class="sub">
            HACKATHON uma plataforma ou ambiente digital projetado para facilitar e gerenciar competições criativas e
            colaborativas. Nele, participantes se reúnem virtualmente para resolver desafios, propor soluções inovadoras
            e desenvolver projetos relacionados à tecnologia, programação, design ou outras áreas.
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
    font-size: 4vw;
    display: flex;
    flex-direction: column;
    font-weight: 400;
}

h3 {
    font-size: 2vw;
    font-weight: 400;
}

p {
    font-size: .90vw;
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

.sub{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: .90vw;
    color: #fff;
}
</style>