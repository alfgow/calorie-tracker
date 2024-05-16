import { Activity } from "../types"

//? Acciones: type que describe que está pasando en nuestra aplicación
export type ActivityActions = {
   type:'save-activity', 
   payload:{newActivity:Activity}
}

//! Dado que tenemos un estado inicial como objeto, vamos a asignarle un type, mismo que declaramos en types/index.ts, para este caso el type es activity (category, name, calories)
type ActivityState = {
    activities: Activity[]
}

//? El estado inicial del reducer, en este caso es una lista vacía de actividades
//! A nuestro estado inicial, le podemos asigar el type ActivityState en el que trabajamos antes (van como en cadena)
export const initialState: ActivityState = {
    activities: []
}

//? Reducer, es el que une nuestros estado inicial con las acciones
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions 
)=>{
    if (action.type === 'save-activity') {
        //! Este code maneja la logica para actualizar el state
      return{
        ...state,
        activities: [...state.activities, action.payload.newActivity]
      }
    }
    return state
}