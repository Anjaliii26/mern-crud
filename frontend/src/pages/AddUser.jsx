import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const AddUser = () => {

    const[user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/users', user)
            navigate('/')
        } catch (error) {
            console.error('Error adding user:', error)
        }
    }



  return (
    <form onSubmit={handleSubmit} style={{
        padding: '30px',
        maxWidth: '400px',
        margin: '30px auto',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add User</h2>
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label><br />
          <input type="text" name="name" value={user.name} onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label><br />
          <input type="email" name="email" value={user.email} onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label><br />
          <input type="password" name="password" value={user.password} onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            required />
        </div>
        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Submit
        </button>
      </form>
      
  );
}
