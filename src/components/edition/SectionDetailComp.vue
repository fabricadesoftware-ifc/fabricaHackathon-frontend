<script setup>
import { onMounted, computed } from "vue";
import { useDetailEditionStore } from "@/stores/detailEdition";
import { useCategoryStore } from "@/stores/category";
import { useEditionStore } from "@/stores/edition";
import { useProjectStore } from "@/stores/project";
import { useRoute } from "vue-router";
import CardDetailTeam from "../global/card/CardDetailTeam.vue";
import CardWinnerTeam from "../global/card/CardWinnerTeam.vue";

const useDetailEdition = useDetailEditionStore();
const useCategory = useCategoryStore();
const route = useRoute();
const useEdition = useEditionStore();
const currentEdition = route.params.edition;
const useProject = useProjectStore();

function upperCase(string) {
    return string.toUpperCase();
}

onMounted(async () => {
    await useCategory.getCategories();
    await useDetailEdition.getAllTeams(currentEdition);
    await useEdition.getEdition(currentEdition);
    await useProject.getProjects();
    await useProject.getProjectByEdition(currentEdition);
});

const categoriesWithProjects = computed(() => {
    const categories = useEdition.edition?.categories || [];
    const projects = useProject.projectsByEdition || [];
    return categories.filter(category =>
        projects.some(project => project.category === category.id)
    );
});
</script>

<template>
    <section>
        <div class="container">
            <h2 class="titleEdition">EQUIPES GANHADORAS</h2>
            <div class="editions">
                <CardWinnerTeam v-for="(object, index) in useDetailEdition.winningTeams" :key="index" :object="object"
                    :edition="currentEdition" />
            </div>
            <div class="category" v-for="item in categoriesWithProjects" :key="item.id">
                <h2 class="titleEdition">{{ upperCase(item.name) }}</h2>
                <div class="editions">
                    <div class="teste"
                        v-for="(object, index) in useProject.projectsByEdition.filter(obj => obj.category === item.id)"
                        :key="index">
                        <CardDetailTeam :object="object" :edition="currentEdition" />
                    </div>
                </div>
            </div>
        </div>
        <!-- <button>
            VER MAIS
            <span class="roundSpan">
                <ArrowTopRight size="20" />
            </span>
        </button> -->
    </section>
</template>



<style scoped>
section {
    width: 100%;
    background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    padding: 3rem 0;
}

.container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

button {
    padding: 0.5rem 1rem;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 50px;
    position: relative;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    width: 135px;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto 0;
}

button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    padding: 1.5px;
    background: linear-gradient(114.55deg,
            rgba(255, 255, 255, 0.9) 2.13%,
            rgba(255, 255, 255, 0) 98.14%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}

.roundSpan {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    border-radius: 50%;
    font-size: 0.5rem;
    color: white;
    background: transparent;
    border: 1px solid transparent;
    position: absolute;
    top: 50%;
    right: 0.4rem;
    transform: translateY(-50%);
    transition: background 0.3s ease, color 0.3s ease;
}

.roundSpan::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    padding: 1px;
    background: linear-gradient(114.55deg,
            rgba(255, 255, 255, 0.9) 2.13%,
            rgba(255, 255, 255, 0) 98.14%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}

button:hover>.roundSpan {
    background: white !important;
    color: black !important;
}

.editions {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.editions>* {
    width: 48%;
    height: 350px;
}

.titleEdition {
    color: white;
    font-weight: 400;
    font-size: 2rem;
}

.arrow-top-right-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.category {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

@media (max-width: 768px) {
    .editions>* {
        width: 100%;
    }
}
</style>
