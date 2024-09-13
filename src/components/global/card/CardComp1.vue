<template>
    <article>
        <div class="box">
            <h5>Você aprenderá muito</h5>
            <p>Você aprenderá muito durante o evento e sairá com uma demonstração tangível do seu trabalho.</p>
        </div>
        <span></span>
        <div class="ball"></div>
    </article>
</template>

<style scoped>
article {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}

p {
    font-size: 12px;
}

.box {
    width: 250px;
    /* Ajuste o tamanho conforme necessário */
    height: 150px;
    padding: 1.5rem;
    background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    border: 2px solid #FFFFFF;
    border-image-slice: 1;
    border-radius: 30px;
    color: white;
    gap: .5rem;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(15px);  
}

span {
    width: 2px;
    background: radial-gradient(99.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
    ;
    height: 75px;
    margin-left: 30px;
}

.ball {
    width: 20px;
    height: 20px;
    background: radial-gradient(199.1% 419.51% at 0.9% 2.98%, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0) 100%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
    ;
    border-radius: 50%;
    margin-left: 21px;
    border: 2px solid #FFFFFF;
    border-image-slice: 1;
}
</style>
