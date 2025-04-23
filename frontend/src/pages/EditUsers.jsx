import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export const EditUsers = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:5000/users`)
      .then(response => {
        const foundUser = response.data.find(user => user._id === id)
        if (foundUser) {
          setUser(foundUser)
        } else {
          console.error('User not found')
        }
      })
      .catch(error => console.error('Error fetching user:', error))
  }, [id])

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:5000/users/${id}`, user)
      navigate('/')
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{
      padding: '30px',
      maxWidth: '400px',
      margin: '40px auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Edit User</h2>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '6px'
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '6px'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '6px'
          }}
        />
      </div>

      <button type="submit" style={{
        width: '100%',
        padding: '12px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Update User
      </button>
    </form>
  )
}
