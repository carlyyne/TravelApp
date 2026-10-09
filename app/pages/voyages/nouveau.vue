<script setup lang="ts">
import { today, getLocalTimeZone } from '@internationalized/date'

const currentDate = today(getLocalTimeZone())
const inputDate = useTemplateRef('inputDate')
const toast = useToast()
const { addTrip } = useTrips()

// Champs texte
const state = reactive({
  destination: '',
  lodging: '',
  description: '',
})

// Intervalle de dates
const modelValue = shallowRef({
  start: currentDate,
  end: currentDate.add({ days: 7 })
})

// Validation simple : renvoie la liste des erreurs
function validate(values: typeof state) {
  const errors = []
  if (!values.destination) {
    errors.push({ name: 'destination', message: 'La destination est obligatoire' })
  }
  return errors
}

function onSubmit() {
  const { start, end } = modelValue.value
  if (!start || !end) {
    toast.add({ title: 'Choisis une date de début et de fin', color: 'error' })
    return
  }

  const trip = addTrip({
    destination: state.destination,
    lodging: state.lodging,
    description: state.description,
    startDate: start.toString(), // "2026-10-17"
    endDate: end.toString(),
  })

  toast.add({ title: 'Voyage créé', color: 'success' })
  navigateTo(`/voyages/${trip.id}`)
}

</script>

<template>
    <div class="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center">

        <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl text-center">Mon prochain <span class="text-blue-700 italic">voyage</span></h1>

        <UForm
        :state="state"
        :validate="validate"
        class="mx-auto my-6 w-full max-w-lg space-y-4 rounded-2xl border border-gray-100 p-4 shadow-[0_25px_250px_-25px_rgba(0,50,150,50)]"
        @submit="onSubmit"
        >
            <UFormField label="Destination" name="destination">
                <UInput v-model="state.destination" placeholder="Ville ou pays..." class="w-full"/>
            </UFormField>

            <UFormField label="Logement" name="lodging">
                <UInput v-model="state.lodging" placeholder="Adresse ou nom de l'hébergement..." class="w-full" />
            </UFormField>

            <UFormField label="Date de début - Date de fin">
                <UInputDate ref="inputDate" v-model="modelValue" range>
                    <template #trailing>
                        <UPopover :reference="inputDate?.inputsRef[0]?.$el">
                        <UButton
                            color="neutral"
                            variant="link"
                            size="sm"
                            icon="i-lucide-calendar"
                            aria-label="Select a date range"
                            class="px-0"
                        />

                        <template #content>
                            <UCalendar v-model="modelValue" class="p-2" :number-of-months="2" range />
                        </template>
                        </UPopover>
                    </template>
                </UInputDate>
            </UFormField>

            <UFormField label="Description" name="description">
                <UTextarea v-model="state.description" placeholder="Avec qui pars-tu ? Pour quelle occasion ? Dis-moi tout :)" class="w-full" />
            </UFormField>

            <UButton type="submit" class="bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800">
                Ajouter
            </UButton>

        </UForm>
    </div>
</template>
