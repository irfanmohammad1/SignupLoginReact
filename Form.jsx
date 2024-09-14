import React, { useEffect, useState } from "react";
import "./Form.css";

function Form(){
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const[isSuccess, setIsSuccess] = useState(false)

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!formData.name || !formData.email || !formData.password){
            alert("All fields are mandatory!");
            return;
        }else{
        }
        console.log(formData);
        setIsSuccess(true);
        setFormData({
            name: '',
            email: '',
            password: ''
        });
    
        // Optionally hide the success message after some time (e.g., 3 seconds)
        setTimeout(() => {
            setIsSuccess(false);
        }, 3000);
        
    }

    return(
        <>
        <pre>{(isSuccess)?<h3 className="ui-define">Hello {formData.name}, You've Registered Successfully</h3>:""}</pre>
        <form className="container" onSubmit={handleSubmit}>
            <div className="header">
                <h2>Registration Form</h2>
            </div>
            <div>
                <input type="text" placeholder="Enter Your Name" name="name" value={formData.name} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" placeholder="Enter Your Email" name="email" value={formData.email} onChange={handleChange}></input>
            </div>
            <div>
                <input type="password" placeholder="Enter Your Password" name="password" value={formData.password} onChange={handleChange}></input>
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
        </>
    )
}
export default Form;

