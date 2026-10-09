<script setup lang="ts">
const { trips } = useTrips()
</script>

<template>
  <div>
    <h1 class="text-center mb-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
      Mes <span class="text-blue-700 italic">voyages</span>
    </h1>

    <ul class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-items-center">
        <NuxtLink :to="`/voyages/nouveau`" class="group block">
          <div
            class="relative h-100 w-52 rounded-[2.5rem] border-10 border-neutral-900 bg-neutral-900 shadow-xl transition duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl"
          >
            <div class="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-neutral-900"></div>
            <div
              class="flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.8rem] bg-linear-to-b from-gray-100 to-indigo-100 p-4 text-center"
            >
              <UIcon name="i-lucide-plus" class="size-40" />
            </div>
          </div>
        </NuxtLink>
      <li v-for="trip in trips" :key="trip.id">
        <NuxtLink :to="`/voyages/${trip.id}`" class="group block">
          <!-- Le téléphone -->
          <div
            class="relative h-100 w-52 rounded-[2.5rem] border-10 border-neutral-900 bg-neutral-900 shadow-xl transition duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl"
          >
            <div class="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-neutral-900"></div>
            <!-- L'écran avec le texte -->
            <div
              class="flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.8rem] bg-linear-to-b from-gray-100 to-indigo-100 p-4 text-center"
            >
              <UIcon name="i-lucide-map-pin" class="size-8" />
              <h2 class="text-3xl font-bold">{{ trip.destination }}</h2>
              <p class="text-sm ">
                Du <p class="font-bold text-blue-800">{{ formatDay(trip.startDate) }}</p>au<p class="font-bold text-blue-800">{{ formatDay(trip.endDate) }}</p>
              </p>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>