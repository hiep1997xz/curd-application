import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import AddEdit from './pages/AddEdit'
import Home from './pages/Home'
import View from './pages/View'

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddEdit} />
        <Route path="/update/:id" component={AddEdit} />
        <Route path="/view/:id" component={View} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  )
}

export default App
