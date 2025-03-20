<template>
	<div class="my-10 border border-black rounded-md p-1 text-center">
		<p>
			Nombre d'activitées :
			{{ activities?.length }}
		</p>
		<p>Nombre total de km : {{ totalKm }} km</p>
		<p>Temps total : {{ totalTime }} h</p>
	</div>
	<div class="grid grid-cols-3 gap-6">
		<ActivityCard
			v-for="activitie in activities"
			:key="activitie.id"
			:activitie="activitie"
		/>
	</div>
</template>

<script lang="ts" setup>
const { data: activities } = useFetch("/api/activities");
const totalKm = computed(() => {
	return activities.value
		?.reduce((sum, activity) => sum + activity.distance, 0)
		.toFixed(2);
});
const totalTime = computed(() => {
	return activities.value
		?.reduce((sum, activity) => sum + activity.moving_time / 60, 0)
		.toFixed(2);
});
</script>
