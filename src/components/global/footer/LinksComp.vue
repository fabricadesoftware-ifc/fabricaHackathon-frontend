<template>
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
</template>

<style scoped>
a {
    color: #848895;
    text-decoration: none;
    font-weight: 400;
    transition: .2s ease-in-out;
}

.infos {
    display: flex;
    gap: 1rem;
    color: white;
    font-weight: 400;
    gap: 2rem;
    justify-content: center;
}

.infos>div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

a:hover {
    color: #fff;
}
</style>