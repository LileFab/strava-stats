<template>
	<div class="border rounded-xl border-black font-Roboto p-2">
		<p class="font-Oswald text-center">{{ props.activitie.name }}</p>
		<p>Distance total : {{ props.activitie.distance }} km</p>
		<p>Temps total : {{ props.activitie.elapsed_time }} min</p>
	</div>
</template>

<script setup lang="ts">
import { type Activity } from "~/types/types";

const props = defineProps<{ activitie: Activity }>();
</script>
