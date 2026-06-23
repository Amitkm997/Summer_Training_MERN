import React from 'react'   
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate=useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const [errors,setErrors]=useState({});
    console.log(errors)
    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value,
        })
    };

    const validate=()=>{
        let newError={}

        if(!user.email.trim()){
            newError.email="Email is Required"
        }

        if(!user.password.trim()){
            newError.password="Password is Required"
        }

        return newError;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const validateErrors=validate();

        if(Object.keys(validateErrors).length>0){
            setErrors(validateErrors);
            return;
        }

        alert("Login Successfully");
        navigate('/')

        setUser({
            email:"",
            password:"",
        })

        setErrors({});

    }
    return (
        <>
            <div className='min-h-screen flex justify-center items-center gb-gray-200'>
                <div className='bg-white shadow-lg rounded-xl p-8 w-full max-w-md'>
                    <h1 className='text-3xl font-bold text-center text-blue-600 mb-6'>Login</h1>

                    <form onSubmit={handleSubmit}>
                        {/* Email  */}
                        <div className='mb-4'>
                            <label className='block font-medium mb-2'>Email</label>
                            <input className='w-full border border-gray-300 rounded-lg p-3' type="email" name="email" value={user.email} onChange={handleChange}  />
                            {errors.email && (
                                <p className='text-red-400'>{errors.email}</p>
                            )}
                        </div>
                        {/* password  */}
                        <div>
                            <label className='block font-medium mb-2'>Password</label>
                            <input className='w-full border border-gray-300 rounded-lg p-3' type="password" name='password' value={user.password} onChange={handleChange}/>
                            {errors.password && (
                                <p className='text-red-400'>{errors.password}</p>
                            )}
                        </div>

                        <button className='w-full bg-blue-600 text-white py-3 mt-4 rounded-lg hover:bg-blue-700' type='submit'>Login</button>
                    </form>
                    <p className='text-center mt-4 text-gray-600'>Dont'have an account</p>{" "}
                    <span className='text-blue-600 cursor-pointer'>Register</span>

                </div>
            </div>
        </>
    )
}
