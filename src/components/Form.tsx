import { ChangeEvent, useState } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";

export default function Form() {

    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

        const isNumberFiel = ['category', 'calories'].includes(e.target.id);

        console.log(isNumberFiel);
        

        setActivity({
            ...activity,
            [e.target.id]: isNumberFiel ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = ()=>{
        
    }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category">Categoria:</label>
            <select 
                name="" 
                id="category" 
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                value={activity.category}
                onChange={handleChange}
            >
                <option value="">-- Seleccione --</option>
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
            <label htmlFor="name">Actividad:</label>
            <input 
                type="text" 
                id="name" 
                className="border border-slate-300 p-2 rounded-lg" 
                placeholder="Ej. Comida, Jugo de Naranja, Ejercicio, Pesas, Etc"
                value={activity.name}
                onChange={handleChange}
            />
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories">Calorias:</label>
            <input 
                type="number" 
                id="calories" 
                className="border border-slate-300 p-2 rounded-lg" 
                placeholder="Calorias, Ej. 300, 500"
                value={activity.calories}
                onChange={handleChange}
            />
        </div>
        <input 
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-xl"
            value={"Guardar..."}
        />
    </form>
  )
}
