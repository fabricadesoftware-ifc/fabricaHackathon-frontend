<script setup>
</script>

<template>
    <div class="all">
        <div class="alignBalls">
        <span class="one"></span>
        <span class="two"></span>
        <span class="three"></span>
        <span class="four"></span>
        <span class="five"></span>
        <span class="six"></span>
    </div>
    </div>
</template>

<style scoped>
.all {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: start;
    height: 100%;
}

.alignBalls {
    display: flex;
    align-items: center;
    justify-content: center;
}

.one,
.two,
.three,
.four,
.five,
.six {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px solid transparent;
    position: relative;
    overflow: hidden;
}

.two {
    margin-left: -20px;
}

.three {
    margin-left: -20px;
}

.one,
.two,
.three {
    border: 1px solid white;
}

.four {
    margin-left: -20px;
    background: #FFFFFF3D;
    padding: -1px;

}

.four::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -4px;
    border-radius: 50%;
    padding: 5px;
    background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(216, 216, 216, 0) 0%, #D8D8D8 100%);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}

.five {
    margin-left: -20px;
    background: #FFFFFF12;

}

.four::before,
.five::before,
.six::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -4px;
    border-radius: 50%;
    padding: 5px;
    background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(216, 216, 216, 0) 0%, #D8D8D8 100%);
    border-image-source: linear-gradient(114.55deg, rgba(255, 255, 255, 0.52) 2.13%, rgba(255, 255, 255, 0) 98.14%);

    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}


.six {
    margin-left: -20px;
    background: #00000050;
}
</style>
