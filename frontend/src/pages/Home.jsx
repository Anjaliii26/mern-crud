import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

export const Home = () => {

    const [users, setUsers] = React.useState([])
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users')
            setUsers(response.data)
        } catch (error) {
            console.error('Error fetching users:', error)
        }
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`)
            fetchUsers()
        } catch (error) {
            console.error('Error deleting user:', error)
        }
    }

    React.useEffect(() => {
        fetchUsers()
    }, [])

  return (
    <div style={{ padding: '20px' }}>
        <h2>User List</h2>

        <ul style={{ listStyle: 'none', padding: 0 }}>
  {users.map(user => (
    <li key={user._id} style={{
      backgroundColor: '#f0f0f0',
      margin: '10px 0',
      padding: '15px',
      borderRadius: '6px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <span>{user.name} | {user.email}</span>
      <div>
        <Link to={`/edit/${user._id}`} style={{
          marginRight: '10px',
          color: '#007bff',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>Edit</Link>
        <button onClick={() => deleteUser(user._id)} style={{
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          padding: '6px 10px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>Delete</button>
      </div>
    </li>
  ))}
</ul>


    </div>
   
  )
}
