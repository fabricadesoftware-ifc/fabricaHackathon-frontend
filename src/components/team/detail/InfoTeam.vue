<script setup>
import { onMounted } from 'vue';
import { useTeamStore } from '@/stores/team';
import router from '@/router';
const teamsStore = useTeamStore();
import RoundButtonGradient from '@/components/global/buttons/RoundButtonGradient.vue';

const base64Format = (photo) => {
    if (!photo) {
        return 'https://www.portaldoholanda.com.br/sites/default/files/imagecache/portal2014_fotonoticiagrande/portaldoholanda-626973-imagem-foto-amazonas.jpg';
    } else {
        return `data:image/jpeg;base64,${photo}`;
    }
};

const redirectToProject = () => {
    if (teamsStore.team?.deploy_link) {
        window.open(teamsStore.team.deploy_link, '_blank');
    }
    else {
        window.open("https://google.com", '_blank');
    }
};

onMounted(async () => {
    await teamsStore.getTeam(router.currentRoute.value.params.id);
});
</script>

<template>
    <section v-if="teamsStore.team">
        <div class="container">
            <div class="titles">
                <div class="rowOne">
                    <h2>{{ teamsStore.team.name ? teamsStore.team.name.toUpperCase() : '' }}</h2>
                </div>
                <div class="rowTwo">
                    <h2>INTEGRANTES</h2>
                </div>
                <div>
                    <h2>NOTA</h2>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <h2>PROJETO</h2>
                    <RoundButtonGradient @click="redirectToProject" />
                </div>
            </div>
            <div class="infos">
                <div class="rowOne">
                    <p>HACKATHON uma plataforma ou ambiente digital projetado para facilitar e gerenciar competições
                        criativas e colaborativas. Nele, participantes se reúnem virtualmente para resolver desafios,
                        propor soluções inovadoras e desenvolver projetos relacionados à tecnologia, programação, design
                        ou outras áreas.</p>
                </div>
                <div class="rowTwo">
                    <p v-for="item in teamsStore.team.students" :key="item">
                        {{ item.name }}
                    </p>
                </div>
                <div>
                    <p class="grade">9.7</p>
                </div>
            </div>
        </div>
        <div class="image">
            <img :src="base64Format(teamsStore.team.photo_base64_team?.photo_base64)" alt="">
        </div>
    </section>
</template>


<style scoped>
section {
    width: 100%;
}

.container {
    width: 70%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
}

.titles {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.image {
    width: 70%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    height: 550px;
}

.image img {
    width: 100%;
    border-radius: 15px;
}

.titles>div>h2 {
    font-size: 3rem;
    font-weight: 300;
    color: #fff;
}

.infos {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: flex-start;
}

.infos>div {
    display: flex;
    align-items: flex-start;
}

p {
    color: #7D7D7D;
    margin: 0;
}

.rowOne {
    width: 100%;
    height: 120px;
}

.rowTwo {
    width: 100%;
    height: 80px;
}

.grade {
    font-size: 2.5rem;
    font-weight: 300;
}
</style>
