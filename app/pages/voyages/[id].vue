<script setup lang="ts">
const route = useRoute()
const { trips } = useTrips()

const trip = computed(() =>
  trips.value.find(t => t.id === route.params.id)
)

if (!trip.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Voyage introuvable',
    fatal: true
  })
}
</script>

<template>
  <div v-if="trip">
    <h1>{{ trip.destination }}</h1>
    <p>{{ trip.startDate }} → {{ trip.endDate }}</p>
    <p>Logement : {{ trip.lodging || 'non renseigné' }}</p>
  </div>
</template>