<script setup>
import { useAlunosStore } from '@/stores/alunosStore';
import { onMounted } from 'vue';

const useAlunos = useAlunosStore();
const createAluno = {nome: 'João Victor Portela Rocha', matricula: 2023316511, turma: 4, whatsapp: '(47) 98830-0373', email: 'joaovictor239090@gmail.com', github: 'https://github.com/Joaovictor23t4', portfolio: '', linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-victor-portela-rocha-a59886279/', instagram: 'https://www.instagram.com/joao_tk_victor13/?next=%2F'}
// const data = ref(null);

onMounted(async () => {
    let response1 = await useAlunos.updateAluno({id: 2, nome: 'Enzo Henrique Portela Barros'});
    let response2 = await useAlunos.getAluno(1);

    console.log('Feito!', response1);
})
</script>

<template>
    <div>Home</div>
</template>

<style scoped>
</style>
