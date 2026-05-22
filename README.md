# 📝 To‑Do App

A clean, modern, React‑based task manager designed to help you stay organized and productive.  
Create tasks, edit them, mark them as completed, and remove them — all with a simple, intuitive interface and persistent storage.


## 🚀 Features

### ✔ Create Tasks  
Add new tasks with a title and an automatic creation date.

### ✔ Edit Tasks  
Update a task’s title without changing its position in the list.  
Edited tasks receive a new “Edited on…” timestamp.

### ✔ Complete Tasks  
Mark tasks as completed with a single click.  
Completed tasks are visually highlighted with a green border and button.

### ✔ Delete Tasks  
Remove tasks instantly.

### ✔ Persistent Storage  
All tasks are saved in `localStorage`, so they remain even after refreshing or closing the browser.

### ✔ State Management with `useReducer`  
All task operations (create, update, delete, toggle complete) are handled through a reducer for predictable, scalable state logic.


### 🧱 Components  
The project is organized into reusable components, including:

- **TaskCreator** – handles creating and editing  tasks  
- **TaskCard** – displays each task with its actions  
- **TaskList** – renders the full list of tasks  

### 🧩 App.js

The **App** component manages the core logic of the application: 

- Initializes the **useReducer** hook to handle all task actions  
  (create, edit, delete, complete)

- Loads the task list from **localStorage** when the app starts

- Saves updated tasks back into **localStorage** whenever the reducer changes state.

- Passes props to child components. 


### 💾 Local Storage  
On every state change, the task list is saved to `localStorage`.  
On page load, the app restores tasks automatically.


## 🛠 Technologies Used

- React 
- React Icons
- LocalStorage API
- GitHub 

## 🌐 Live Demo

👉 You can view a live demo here :  



