import { useState } from "react"
import { categories } from "../data/categories"

export default function Form() {

    const [activity, setActivity] = useState({
        category:1,
        name:'',
        calorie:0
    })

  return (
    <form
        className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Category:</label>
            <select
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                id="category"
                value={activity.category}
            >
                {categories.map(category => (
                    <option
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className="font-bold">Activity:</label>
            <input 
                type="text" 
                id="name"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ex. Food, Orange Juice, Salad, Exercise, Lifting, Bicycle"
                value={activity.name}
            />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calories:</label>
            <input 
                type="number" 
                id="calories"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calories. ex. 300 or 500"
                value={activity.calorie}
            />
        </div>

        <input 
            type="submit" 
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
        value="Save Food or Save Exercise"
        />

    </form>
  )
}
