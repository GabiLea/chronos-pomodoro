// useReducer -> hook do React que recebe um reducer e um estado inicial
// reducer -> função que recebe o estado atual e uma ação, e retorna o novo estado
// state -> o estado atual
// action -> a ação disparada, geralmente é um objeto com type e (opicionalmente) payload
// type -> o tipo da ação, geralmente uma string (pode ser um enum, constante, etc)
// payload -> os dados extras enviados junto com a action, se necessario para atualizar o etado

import type { TaskModel } from "../../models/TaskModel"

export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
} as const;

export type TaskActionWithPayload =
| {
  type: typeof TaskActionTypes.START_TASK
  payload: TaskModel
}
| {
  type: typeof TaskActionTypes.INTERRUPT_TASK
  payload: TaskModel
}

export type TaskActionWithoutPayload ={
  type: typeof TaskActionTypes.RESET_STATE
}

export type TaskActionModel = 
| TaskActionWithPayload
| TaskActionWithoutPayload