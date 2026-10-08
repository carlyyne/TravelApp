<script setup lang="ts">
const { trips } = useTrips()
</script>

<template>
    <div>
        <h1> Mes voyages</h1>
        <ul>
            <li v-for="trip in trips" :key="trip.id">
                <NuxtLink :to="`/voyages/${trip.id}`">
                {{ trip.destination }} ({{ trip.startDate }} → {{ trip.endDate }})
                </NuxtLink>
             </li>
        </ul>
    </div>
</template>