<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectStore } from '@/stores/project'
import Medal from 'vue-material-design-icons/Medal.vue'
import getImage from '@/composables/image'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  object: Object,
  edition: Number,
  project: Object,
  indexTeam: Number
})

const selectedProject = ref(null)
const projectStore = useProjectStore()

function upperCase(string) {
  return string.toUpperCase()
}

const route = useRoute()

function formatPodium(value) {
  if (value === 0) {
    return { color: '#Daa520', class: '1º' }
  } else if (value === 1) {
    return { color: '#C0C0C0', class: '2º' }
  } else if (value === 2) {
    return { color: '#cd7f32', class: '3º' }
  }
}

onMounted(async () => {
  await projectStore.getProjectByEdition(route.params.edition)
  selectedProject.value = projectStore.projectsByEdition.find(
    (project) => project.team_id === props.object.idTeam
  )
})
</script>

<template>
  <article
    :style="{
      backgroundImage: `url(${getImage(props.object.photo.url ?? props.object.img)})`
    }"
  >
    <div class="allBlur">
      <div class="podium">
        <p :style="{ color: formatPodium(indexTeam).color, fontWeight: 700 }">
          {{ formatPodium(indexTeam).class }}
        </p>
        <Medal :style="{ color: formatPodium(indexTeam).color }" />
      </div>
      <div class="info">
        <div class="text">
          <h3>{{ upperCase(props.object.project.name) }}</h3>
          <p>{{ object.description }}</p>
        </div>
        <div class="button">
          <router-link :to="`/editions/${props.edition}/teams/${props.object.project.team_id}`">
            <button>
              {{ route.fullPath == '/editions/' ? 'Edição' : 'Ver equipe' }}
              <span> -> </span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
article {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  background-size: cover;
  border-radius: 15px;
}

.info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.allBlur {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  padding: 2.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
}

h3 {
  font-size: 2rem;
  color: white;
}

.button {
  margin-top: 1rem;
  width: 100%;
}

button {
  width: 100%;
  padding: 1rem;
  background: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 0.75rem;
}

p {
  color: #ccc;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
}

a {
  text-decoration: none;
  color: white;
}

button:hover {
  background: white;
  color: black;
}

.podium {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}

span {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
