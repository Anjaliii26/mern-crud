import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { AddUser } from './pages/AddUser'
import { EditUsers } from './pages/EditUsers'
import './App.css'

function App() {

  return (
    <Router>
      <nav style={{
  padding: '15px 30px',
  backgroundColor: '#282c34',
  color: 'white',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '20px',
}}>
  <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
  <Link to="/add" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Add User</Link>
</nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUsers />} />
      </Routes>



    </Router>
  )
}

export default App
