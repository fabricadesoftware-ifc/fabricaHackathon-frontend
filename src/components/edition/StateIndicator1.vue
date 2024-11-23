<script setup>
import { onMounted, shallowRef, computed, ref } from 'vue';

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

const currentDate = ref(null);

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
    <div class="box-indicator">
      <div class="default-ball" :class="state === 'past' ? 'past' : state === 'soon' ? 'soon' : 'now'"></div>
      <p class="reactive-text-indicator">
        {{ state === 'soon' ? 'NÃO INICIADO' : state === 'past' ? 'FINALIZADO' : 'EM ANDAMENTO' }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.container-indicator {
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 999999;
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

  background-color: #666666;
}

.soon {
  background-color: #eaee18;
}

.now {
  background-color: #fe5c2b;
}

.box-indicator {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  border: 1.5px solid white;
  border-radius: 24px;
  align-items: center;
  padding: 4px 15px;
  background-color: rgba(0, 0, 0, 0.50);
}

.reactive-text-indicator {
  font-size: 15px;
}
</style>
