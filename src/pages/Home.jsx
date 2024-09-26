import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [FormData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false
    })
    const [FormError, setFormError] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: ""
    })
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let errors = {}
        if(FormData.name.trim() === '') {
            errors.name= "Name is required"
        }
        if(FormData.username.trim() === '') {
            errors.username= "Username is required"
        }
        if(FormData.email.trim() === '') {
            errors.email= "Email is required"
        }
        if(FormData.mobile.trim() === '') {
            errors.mobile= "Mobile is required"
        }
        if(!FormData.checkbox) {
            errors.checkbox= "Checkbox is required"
        }
        setFormError(errors)
        console.log(errors)
        if(Object.keys(errors).length > 0) return
        else {
            alert("form submitted successfully")
            localStorage.setItem("userData", JSON.stringify(FormData))
            setFormData({
                name: "",
                username: "",
                email: "",
                mobile: "",
                checkbox: false
            })
            navigate('/selection')
        }
    }
  return (
    <div>
      <form action="" 
      onSubmit={handleSubmit}
      style={
        {
            display: "flex",
            flexDirection: "column",
            gap: '5px',
            width: "40vw",
            marginLeft: "auto",
            marginRight: "auto"
        }
      }>
        <input 
        type="text"
        name='name'
        placeholder='name'
        onChange={handleChange}
        value={FormData.name} />
        <span style={{ color: "red", height: "20px" }}>{FormError.name}</span>

        <input 
        type="text"
        name='username'
        placeholder='username'
        onChange={handleChange}
        value={FormData.username} />
        <span style={{ color: "red", height: "20px" }}>{FormError.username}</span>

        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={FormData.email}
        />
        <span style={{ color: "red", height: "20px" }}>{FormError.email}</span>

        <input 
        type="tel"
        name='mobile'
        placeholder='mobile'
        onChange={handleChange}
        value={FormData.mobile} />
        <span style={{ color: "red", height: "20px" }}>{FormError.mobile}</span>

        <div>
            <input 
            type="checkbox"
            name='checkbox'
            id='checkbox'
            onChange={handleChange} 
            checked={FormData.checkbox}/>
            <label htmlFor="checkbox">Share my registration data</label>
        </div>
        <span style={{ color: "red", height: "20px" }}>{FormError.checkbox}</span>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Home
