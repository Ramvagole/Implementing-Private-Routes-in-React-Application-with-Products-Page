import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link,Routes,Route } from 'react-router-dom'
import { Home } from './Home'
import { Product } from './Products'
import { Detail } from './Detail'
import { About } from './About'
import { Login } from './Login'
import { Preview } from './Preview'
function App() {
  return (
    <>
      <div>
        <Link to="/">HOME</Link><br></br>
        <Link to="/product">PRODUCTS</Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/product/:id' element={<Preview><Detail/></Preview>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
