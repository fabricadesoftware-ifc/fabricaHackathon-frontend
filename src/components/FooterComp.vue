<script setup>

</script>


<template>
    <footer>
        <div class="logo">
            <img src="../public/logoHackaton.png" alt="">
        </div>
        <div class="socials">
            <button>X</button>
            <button>X</button>
            <button>X</button>
            <button>X</button>
            <button>X</button>
        </div>
        <div class="infos">
            <div>
                <h3>Hackaton</h3>
                <router-link to="/">Grants</router-link>
                <router-link to="/">Generator</router-link>
                <router-link to="/">Carrers</router-link>
                <router-link to="/">Disclaimer</router-link>
            </div>
            <div>
                <h3>Get Connected</h3>
                <router-link to="/">Services</router-link>
                <router-link to="/">Blog</router-link>
                <router-link to="/">Newsletter</router-link>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    width: 100%;
    padding: 1rem;
    height: 430px;
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
}

img {
    width: 40%;
    margin: 0 auto;
}

.logo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.socials {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
}

button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #1A1A1E;
    border: 0;
    color: white;
}

h3{
    color: white;
}

a{
    color: #848895;
    text-decoration: none;
    font-weight: 400;
}
.infos{
    display: flex;
    gap: 1rem;
    color: white;
    font-weight: 400;
    gap: 2rem;
    justify-content: center;
}

.infos > div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
