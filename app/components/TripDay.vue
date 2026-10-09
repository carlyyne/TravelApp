<script setup>
const props = defineProps(['Trip'])
const days = getTripDays(props.Trip.startDate, props.Trip.endDate)
</script>

<template>
    <div class="grid grid-cols-4 space-y-4 space-x-4">
        <li v-for="(day, i) in days" class="list-none" >
            <NuxtLink :to="`/voyages/${Trip.id}/${day}`">
                <UPageCard
                    :title="`Jour ${i + 1}`"
                    :description=day
                    icon="i-lucide-arrow-right"
                    spotlight
                    spotlight-color="secondary"
                >
                </UPageCard>
            </NuxtLink>
        </li>
    </div>
</template>