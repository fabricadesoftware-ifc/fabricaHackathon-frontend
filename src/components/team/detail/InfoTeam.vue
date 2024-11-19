<script setup>
import { onMounted, computed } from 'vue';
import { useTeamStore } from '@/stores/team';
import { useStudentStore } from '@/stores/student';
import router from '@/router';
import RoundButtonGradient from '@/components/global/buttons/RoundButtonGradient.vue';
import Instagram from 'vue-material-design-icons/Instagram.vue';
import Github from 'vue-material-design-icons/Github.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';

const teamsStore = useTeamStore();
const studentsStore = useStudentStore();

const base64Format = (photo) => {
    if (!photo) {
        return 'https://www.portaldoholanda.com.br/sites/default/files/imagecache/portal2014_fotonoticiagrande/portaldoholanda-626973-imagem-foto-amazonas.jpg';
    } else {
        return `data:image/jpeg;base64,${photo}`;
    }
};

const redirectToProject = () => {
    if (teamsStore.team?.project?.repository_link) {
        window.open(teamsStore.team?.project?.repository_link, '_blank');
    } else {
        window.open("https://google.com", '_blank');
    }
};

const associateStudentsWithProfiles = computed(() => {
    const users = teamsStore.team?.students || [];
    const studentProfiles = studentsStore.studentProfiles || [];

    return users.map(user => {
        const profile = studentProfiles.find(profile => profile.user.id === user.id);
        return {
            ...user,
            studentProfile: profile || null,
        };
    });
});

onMounted(async () => {
    await studentsStore.getStudentProfile();
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
                    <h2>{{ teamsStore.team?.project?.name?.toUpperCase() }}</h2>
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
                <div class="rowThree">
                    <div v-for="item in associateStudentsWithProfiles" :key="item.id">
                        <div class="member">{{ item.studentProfile?.user?.name }}
                            <!-- {{ item }} -->
                            <div class="iconsInfo">
                                <a :href="item.instagram">
                                    <Instagram size="20" style="color: magenta;" />
                                </a>
                                <a :href="item.github">
                                    <Github size="20" style="color: #c1c1c1;" />
                                </a>
                                <a :href="item.linkedin">
                                    <Linkedin size="20" style="color: blue;" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="grade">9.7</p>
                </div>
            </div>
        </div>
        <div class="image">
            <img :src="base64Format(teamsStore.team?.project?.project_photo_base64.photo_base64)"
                alt="Imagem do Projeto">
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

.member {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #c1c1c1;
    border-left: 1px solid #c1c1c1;
    padding-left: 1rem;
    flex: 1 1 calc(33.33% - 1rem);
    box-sizing: border-box;
}

.iconsInfo {
    display: flex;
    gap: .5rem;
}

.rowOne {
    width: 100%;
    height: 120px;
}

.rowTwo {
    width: 100%;
    height: 120px;
}

.rowThree {
    width: 100%;
    height: 120px;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.grade {
    font-size: 2.5rem;
    font-weight: 300;
}
</style>
