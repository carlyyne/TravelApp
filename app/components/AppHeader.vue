<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Accueil',
    to: '/',
  },
  {
    label: 'Mes voyages',
    to: '/voyages',
  },
  {
    label: 'Créer mon voyage',
    to: '/voyages/nouveau',
  }
])
</script>

<template>
  <UHeader title="TravelApp">
    <UNavigationMenu :items="items" />
    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>