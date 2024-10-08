<script setup></script>

<template>
    <article>
        <div class="ball">
            <div class="point"></div>
        </div>
        <span></span>
        <div class="card">
            <div class="codeBox">
            <div class="code">
                &lt;/&gt;
            </div>
        </div>
            <div class="text">
                Não há maneira melhor de aprender 
            </div>
        </div>
    </article>    
</template>


<style scoped>
.ball {
    position: relative;
    top: 2px;
    width: 20px;
    height: 20px;
    background: radial-gradient(199.1% 419.51% at 0.9% 2.98%, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0) 100%)
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
    ;
    border-radius: 50%;
    margin-left: 21px;
    border: 2px solid #FFFFFF;
    border-image-slice: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.point{
    width: 50%;
    height: 50%;
    background-color: #FFFFFF;
    border-radius: 50%;
    margin: auto;
}

.card{
    width: 180px;
    background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    height: 70px;
    /* border: 2px solid #FFFFFF; */
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    backdrop-filter: blur(15px);  
    gap: .5rem;
}

.codeBox{
    width: 50%;
}

.code{
    width: 50px;
    height: 50px;
    background: #FFFFFF6B;
    border-radius: 50%;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}

.text{
    color: #FFFFFF;
    font-size: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    height: 50px;
    font-family: 'Inter', sans-serif;
    position: relative;
    right: 5px;
}

article {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
}
span {
    position: relative;
    top: 2px;
    width: 2px;
    background: radial-gradient(99.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
    ;
    height: 75px;
    margin-left: 32px;
}
</style>