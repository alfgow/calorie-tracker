import { ChangeEvent, useState } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";

export default function Form() {
	const [activity, setActivity] = useState<Activity>({
		category: 1,
		name: "",
		calories: 0,
	});

	const handleChange = (
		e:
			| ChangeEvent<HTMLSelectElement>
			| ChangeEvent<HTMLInputElement>
	) => {
		const isNumberFiel = ["category", "calories"].includes(
			e.target.id
		);

		console.log(isNumberFiel);

		setActivity({
			...activity,
			[e.target.id]: isNumberFiel
				? +e.target.value
				: e.target.value,
		});
	};

	const isValidActivity = () => {
		const { name, calories } = activity;
		return name.trim() !== "" && calories > 0;
	};

	return (
		<form className="p-10 space-y-5 bg-white rounded-lg shadow">
			<div className="grid grid-cols-1 gap-3">
				<label htmlFor="category">Categoria:</label>
				<select
					name=""
					id="category"
					className="w-full p-2 bg-white border rounded-lg border-slate-300"
					value={activity.category}
					onChange={handleChange}
				>
					<option value="">
						-- Seleccione --
					</option>
					{categories.map((category) => (
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
					className="p-2 border rounded-lg border-slate-300"
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
					className="p-2 border rounded-lg border-slate-300"
					placeholder="Calorias, Ej. 300, 500"
					value={activity.calories}
					onChange={handleChange}
				/>
			</div>
			<input
				type="submit"
				className="w-full p-2 font-bold text-white uppercase bg-gray-800 cursor-pointer hover:bg-gray-900 rounded-xl disabled:opacity-10"
				value={
					activity.category === 1
						? "Guardar Comida"
						: "Guardar Ejercicio"
				}
				disabled={!isValidActivity()}
			/>
		</form>
	);
}
