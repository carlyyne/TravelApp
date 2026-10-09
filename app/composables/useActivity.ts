export interface Activity {
  id: string
  tripId: string
  day: string          // "2026-10-17"
  title: string
  time: string         // "14:30"
  location: string
  isFree: boolean
  note?: string
  lat?: number
  lng?: number
}

export const useActivity = () => {
    const activities = useState<Activity[]>('activities', () => [])

    function addActivity(data: Omit<Activity, 'id'>) {
        const activity: Activity = { ...data, id: crypto.randomUUID() }
        activities.value.push(activity)
        return activity
    }

    function removeActivity(id: string) {
        activities.value = activities.value.filter(a => a.id !== id)
    }

//   function editActivity(id: string){

//   }

    function getDayActivity(tripId: string, day: string){
        return activities.value
        .filter(a => a.day == day && a.tripId == tripId)
        .sort((a,b) => a.time.localeCompare(b.time))
    }

  return { activities, addActivity, removeActivity, getDayActivity }
}