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
.box {
  width: 200px;
  height: 80px;
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

.ball {
  position: relative;
  right: 1px;
  width: 20px;
  height: 20px;
  background: radial-gradient(199.1% 419.51% at 0.9% 2.98%, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0) 100%)
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  ;
  border-radius: 50%;
  margin-left: 25px;
  border: 2px solid #FFFFFF;
  border-image-slice: 1;
}

article {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  /* align-items: center; */
}

span {
  width: 2px;
  background: radial-gradient(99.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  ;
  height: 65px;
  margin-left: 35px;
}

p {
  font-size: 12px;
  font-family: 'Inter', sans-serif;
}

h5 {
  font-family: 'Inter', sans-serif;
}
</style>