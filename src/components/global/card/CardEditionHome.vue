<script setup>
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  object: Object
})

const base64Format = (photo) => {
  if (photo == null) {
    return 'https://www.portaldoholanda.com.br/sites/default/files/imagecache/portal2014_fotonoticiagrande/portaldoholanda-626973-imagem-foto-amazonas.jpg'
  } else {
    return photo
  }
}

</script>

<template>
  <article :style="{ backgroundImage: `url(${base64Format(object.img)})` }">
    <div class="allBlur">
      <div class="info">
        <div class="text">
          <h3>{{ object.title }}</h3>
          <p>{{ object.description }}</p>
        </div>
        <router-link class="button" :to="object.route">
          Edição
          <ArrowRight size="15" />
        </router-link>
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
  background-position: center;
  /* Centraliza a imagem */
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
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
}

h3 {
  font-size: 1rem;
  color: white;
}

.button {
  margin-top: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
  color: white;
  border: 1px solid white;
  border-radius: 3rem;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 0.75rem;
  text-decoration: none;
}

.button:hover {
  background-color: white;
  color: black;
}

p {
  color: #ccc;
  font-size: 0.75rem;
  font-weight: 300;
}
</style>
