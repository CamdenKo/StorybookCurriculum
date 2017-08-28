const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

let nextTodoId = 0

export const addTodo = text => ({ type: ADD_TODO, text, id: nextTodoId++ })
export const deleteTodo = id => ({ type: DELETE_TODO, id })
export const toggleTodo = id => ({ type: TOGGLE_TODO, id })

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        id: action.id,
        text: action.text,
        completed: false,
      }]
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case TOGGLE_TODO:
      return state.map((todo) => { return todo.id === action.id ? { ...todo, completed: !todo.completed } : todo })
    default:
      return state
  }
}
