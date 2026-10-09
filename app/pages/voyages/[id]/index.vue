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
    <UButton class="mb-2" icon="i-lucide-arrow-left" size="md" color="primary" variant="solid" @click="$router.back()"></UButton>

  <div v-if="trip" class="m-4">
    <h3 class="text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-xl italic"><mark class="px-3 py-1 text-white bg-blue-800 rounded-md">{{ trip.startDate }} → {{ trip.endDate }}</mark></h3>
    <h1 class="mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-linear-to-r to-sky-400 from-blue-800">{{ trip.destination }}</span></h1>

    <USeparator class="mb-3 mt-3 italic" label="Mes Informations"  />

    <UPageCard
    spotlight
    spotlight-color="secondary"
    >
    <ul class="divide-y divide-default">
        <li class="flex items-start gap-3 py-3 first:pt-0">
            <UIcon name="i-lucide-map-pin" class="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
                <p class="text-xs uppercase tracking-wide text-muted">Destination</p>
                <p class="font-medium">{{ trip.destination }}</p>
            </div>
        </li>

        <li class="flex items-start gap-3 py-3">
            <UIcon name="i-lucide-calendar-days" class="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
                <p class="text-xs uppercase tracking-wide text-muted">Dates</p>
                <p class="font-medium">{{ formatDay(trip.startDate) }} → {{ formatDay(trip.endDate) }}</p>
            </div>
        </li>

        <li class="flex items-start gap-3 py-3">
            <UIcon name="i-lucide-bed-double" class="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
                <p class="text-xs uppercase tracking-wide text-muted">Logement</p>
                <p class="font-medium" :class="{ 'italic text-muted font-normal': !trip.lodging }">
                {{ trip.lodging || 'Non renseigné' }}
                </p>
            </div>
        </li>

        <li class="flex items-start gap-3 py-3 last:pb-0">
        <UIcon name="i-lucide-notebook-pen" class="mt-0.5 size-5 shrink-0 text-primary" />
        <div>
            <p class="text-xs uppercase tracking-wide text-muted">Notes</p>
            <p class="font-medium" :class="{ 'italic text-muted font-normal': !trip.description }">
            {{ trip.description || 'Aucune description' }}
            </p>
        </div>
        </li>
    </ul>
    </UPageCard>

    <USeparator class="mb-3 mt-3 italic" label="Mon programme" />

    <TripDay :Trip="trip"/>
  </div>
</template>