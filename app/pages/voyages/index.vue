<script setup lang="ts">
const { trips } = useTrips()
</script>

<template>
    <div>
        <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Mes <span class="text-blue-700 italic">voyages</span></h1>
        <ul>
            <li v-for="trip in trips" :key="trip.id">
                <NuxtLink :to="`/voyages/${trip.id}`">
                {{ trip.destination }} ({{ trip.startDate }} → {{ trip.endDate }})
                </NuxtLink>
             </li>
        </ul>
    </div>
</template>