export interface Trip {
  id: string
  destination: string
  startDate: string
  endDate: string
  lodging: string
}

export const useTrips = () => {
  const trips = useState<Trip[]>('trips', () => [
    {
      id: '1',
      destination: 'Bruxelles',
      startDate: '2026-10-17',
      endDate: '2026-10-24',
      lodging: 'Appartement centre-ville'
    }
  ])

  function addTrip(data: Omit<Trip, 'id'>) {
    const id_trip = crypto.randomUUID()
    const trip: Trip = { id: id_trip, ...data}
    trips.value.push(trip)
    return trip
  }

  return { trips, addTrip }
}