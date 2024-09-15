<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    object: Object
});
</script>

<template>
    <article :style="{ backgroundImage: `url(${object.img})` }">
        <div class="allBlur">
            <div class="info">
                <div class="button">
                    <div class="roundTop"></div>
                    <div class="testeButton">
                        <router-link :to="object.route">
                            <button>
                                <span>-></span>
                            </button>
                        </router-link>
                    </div>
                </div>
                <div class="roundBottom"></div>
                <div class="text">
                    <h3>{{ object.title }}</h3>
                    <p>{{ object.description }}</p>
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

.roundTop {
    /* width: 20px;
    height: 20px; */
    margin-bottom: auto;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    align-items: center;
}

.roundTop::before {
    /* background-color: red; */
    content: '';
    width: 25px;
    height: 25px;
    /* background-color: #131316; */
    border-radius: 50%;
    position: relative;
    margin-top: -.41px;
    margin-right: -2.5px;
    box-shadow:  6px -8.5px  0px 0px #131316;
    z-index: 1;
    transform: rotate(20deg);

}

.roundBottom{
 /* width: 20px;
    height: 20px; */
    margin-bottom: auto;
    margin-left: auto;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    align-items: center;
}

.roundBottom::before {
    content: '';
    width: 25px;
    height: 25px;
    /* background-color: #131316; */
    border-radius: 50%;
    margin-right: -2.7px;
    margin-top: -.5px;
    position: relative;
    box-shadow:  6px -8px  0px 0px #131316;
    z-index: 1;
    transform: rotate(28deg);

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
    background: rgba(0, 0, 0, 0.5);
    /* padding: 1.5rem; */
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
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
}

.testeButton {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #131316;
    padding: .75rem 2rem ;
    border-radius: 0px 0px 0px 10px;
}



button {
    width: 100%;
    width: 3rem;
    height: 3rem;
    background: transparent;
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: .75rem;
    margin-right: -10px;
    margin-top: -10px; 
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
</style>
