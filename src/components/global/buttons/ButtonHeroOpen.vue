<script setup>
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
</script>

<template>
    <div class="mainButton">
        <div class="card">
            <div class="text">
                Acessar
            </div>
            <div class="codeBox">
                <div class="code">
                    <ArrowRight />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mainButton {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 50px;
    color: #FFFFFF;
    transition: 0.3s ease-in-out;
    position: relative;
}

.card {
    width: 160px;
    background: transparent;
    border: 1px solid #FFFFFF;
    height: 60px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1.5rem;
    gap: .5rem;
    position: relative;
    transition: background-color 0.3s ease-in-out;
}

.codeBox {
    width: 50%;
    position: relative;
    z-index: 100;
}

.code {
    width: 60px;
    height: 60px;
    background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.58) 30.49%, rgba(255, 255, 255, 0) 100%);
    border-radius: 50%;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #FFFFFF;
    font-weight: 1000;
}

.text {
    font-size: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    height: 50px;
    font-weight: 400;
    z-index: 1;
}

span {
    display: flex;
    align-items: center;
    justify-content: center;
}

.mainButton:hover {
    cursor: pointer;
    background-color: white;
    color: black;
}

.mainButton:hover .card .code {
    z-index: 10;

}
</style>
