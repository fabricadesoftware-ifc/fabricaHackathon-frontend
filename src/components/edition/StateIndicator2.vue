<script setup>
import { onMounted, shallowRef, computed } from 'vue';

import { formattedDate, parseDate } from '@/composables/edition/editionUtils';

const props = defineProps({
  start_date: {
    type: String, 
    required: true,
  },
  finish_date: {
    type: String,
    required: true,
  },
});

const currentDate = shallowRef(null);

const state = computed(() => {
  if (!currentDate.value) return 'soon'; 

  const now = parseDate(formattedDate(currentDate.value));
  const start = parseDate(formattedDate(props.start_date));
  const finish = parseDate(formattedDate(props.finish_date));

  if (now < start) {
    return 'soon';
  } else if (now > finish) {
    return 'past';
  } else {
    return 'now';
  }
});

onMounted(() => {
  currentDate.value = new Date();
});
</script>

<template>
  <div class="container-indicator">
    <div class="box-indicator" :class="state === 'past' ? 'past' : state === 'soon' ? 'soon' : 'now'">
      <p class="reactive-text-indicator">
        {{ state === 'soon' ? 'NÃO INICIADO' : state === 'past' ? 'FINALIZADO' : 'EM ANDAMENTO' }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.container-indicator {
  position: absolute;
  top: 8px;
  right: 15px;
  z-index: 999;
  cursor: default;
}

.container-indicator:hover .now {
  box-shadow: 0 0 5px #fe5c2b;
}

.container-indicator:hover .past {
  box-shadow: 0 0 5px #666666;
}

.container-indicator:hover .soon {
  box-shadow: 0 0 5px #eaee18;
}
.default-ball {
width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
}

.past {
    border: 2px solid rgb(71,71,71);
    background: rgb(71,71,71);
    background: linear-gradient(90deg, rgba(71,71,71,0.5) 0%, rgba(71,71,71,1) 100%);
  
}

.soon {
    border: 2px solid rgb(143,154,26);
    background: rgb(143,154,26);
    background: linear-gradient(90deg, rgba(143,154,26,0.5) 0%, rgba(143,154,26,1) 100%);
}

.now {
  border: 2px solid rgb(254,92,43);
  background: rgb(254,92,43);
  background: linear-gradient(90deg, rgba(254,92,43,0.5) 0%, rgba(254,92,43,1) 100%);
}

.box-indicator {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 24px;
  align-items: center;
  padding: 4px 25px;
  transition: 0.3s ease-in-out;
}

.reactive-text-indicator {
  font-size: 17px;
}
</style>
