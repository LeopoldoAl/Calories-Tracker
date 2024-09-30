import { useMemo } from "react"
import type { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({activities}: CalorieTrackerProps) {

    // Counters
    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category  === 1 ? total + activity.calories : total ,0), [activities])

    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category  === 2 ? total + activity.calories : total ,0), [activities])

  return (
    <>
        <h2 className="text-6xl font-black text-white text-center">
            Calories Resume
        </h2>

        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
            
            <CalorieDisplay
                calories={caloriesConsumed}
                text="Consumed"
            />
            <CalorieDisplay
                calories={caloriesBurned}
                text="Burned"
            />
        </div>

        
    </>
  )
}