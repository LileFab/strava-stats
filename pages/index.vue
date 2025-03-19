<template>
	<div>
		<span class="text-red-500">Home</span>
		<div v-for="activitie in activities" :key="activitie.id" class="mb-8">
			<p>{{ activitie.name }}</p>
			<p>{{ activitie.distance }}</p>
			<p>{{ activitie.elapsed_time }}</p>
			<p>{{ activitie.type }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
const { data: activities } = useFetch("/api/activities");
</script>
