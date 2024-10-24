<template>
  <div class="infos">
    <div>
      <h3>Hackaton</h3>
      <a href="https://github.com/fabricadesoftware-ifc/fabricaHackathon-frontend"
        >GitHub</a>
      <a href="https://www.instagram.com/hackathon_ifc/">Instagram</a>
    </div>
    <div>
      <h4>Fábrica</h4>
      <a href="https://github.com/fabricadesoftware-ifc">GitHub</a>
      <a href="https://www.instagram.com/fabricadesoftware.ifc/">Instagram</a>
      <a href="https://br.linkedin.com/company/fabricadesoftware-ifc">Linkedin</a>
      <a href="https://fabricadesoftware.ifc.edu.br">Site</a>
    </div>
  </div>
</template>

<style scoped>
h3,
h4 {
  font-size: 1.17rem;
}

a {
  color: #848895;
  text-decoration: none;
  font-weight: 400;
  transition: 0.2s ease-in-out;
}

.infos {
  display: flex;
  color: white;
  font-weight: 400;
  gap: 5rem;
  justify-content: center;
}

.infos > div {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

a:hover {
  color: #fff;
}
</style>
