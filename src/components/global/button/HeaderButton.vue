<script setup>
import ArrowTopRight from "vue-material-design-icons/ArrowTopRight.vue";

defineProps({
	text: String,
});
</script>

<template>
	<div class="button-container">
		<button>
			{{ text }}
		</button>
		<router-link><ArrowTopRight /></router-link>
	</div>
</template>

<style scoped>
.button-container {
	display: flex;
	align-items: center;
}

button {
	background: transparent;
	border: 1px solid #fff;
	padding: 0.7rem 2rem;
	border-radius: 27px;
	color: #fff;
	font-weight: 600;
	display: flex;
	align-items: center;
	position: relative;
	transition: 0.5s ease-in-out;
	cursor: pointer;
}

a {
	text-decoration: none;
	width: 50px;
	height: 50px;
	background: #fff;
	border-radius: 50%;
	color: #000;
	margin-left: -10px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.5s ease-in-out;
}

.button-container:hover {
	button {
		background: #fff;
		color: #000;
	}

	a {
		background: black;
		color: #fff;
		border: 2px solid #fff;
		z-index: 3;
	}
}

span {
	display: flex;
	justify-content: center;
}
</style>
