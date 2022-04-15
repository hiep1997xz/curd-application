import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import fireDb from '../firebase'
import './AddEdit.css'

const initialState = {
  name: '',
  email: '',
  contact: '',
}

const AddEdit = () => {
  const [state, setState] = useState(initialState)
  const [data, setData] = useState({})

  const history = useHistory()

  const { name, email, contact } = state

  const handleInputChage = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !contact) {
      toast.error('Please provide value in each input fiel')
    } else {
      fireDb.child('contacts').push(state, (err) => {
        if (err) {
          toast.error(err)
        } else {
          toast.success('Contact Added Successfully')
        }
      })
      setTimeout(() => {
        history.push('/')
      }, 500)
    }
  }

  return (
    <div style={{ marginTop: 100 }}>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
        onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name....."
          value={name}
          onChange={handleInputChage}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email....."
          value={email}
          onChange={handleInputChage}
        />

        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your Contact....."
          value={contact}
          onChange={handleInputChage}
        />

        <button type="submit" className="btn">
          Save
        </button>
      </form>
    </div>
  )
}

export default AddEdit
