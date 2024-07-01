import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: " Todo msg",
      completed: false,
    },
  ],
  theme: 'dark',
  addToDo : (todo) =>{},
  updadeToDo: (id , todo) =>{ },
  deleteToDo : (id) =>{},
  toggleComplete : (id) =>{}
});

//   export const  useToDoContext = useContext(ToDoContext);

export const useToDoContext = () => {
  return useContext(ToDoContext);
};


export const ToDoProvider = ToDoContext.Provider;
