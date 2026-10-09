<script setup>
const route = useRoute()
const id = route.params.id
const day = route.params.day
</script>

<template>
<UButton class="mb-2" icon="i-lucide-arrow-left" size="md" color="primary" variant="solid" @click="$router.back()"></UButton>
<h1 class="text-center mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">{{day}}</h1>
</template>