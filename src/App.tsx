import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import PomodoroPage from './pages/PomodoroPage'
import RegistrationForm from './components/RegistrationForm'
import TodoList from './components/TodoList'
import { Route, Routes, Navigate, Link, Router} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
      <nav>
        <ul>
          <li><Link to="/">To-Do List</Link></li>
          <li><Link to="/pomodoro">Pomodoro Timer</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/pomodoro" element={<PomodoroTimer />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
