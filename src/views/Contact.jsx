import React from 'react'
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import './contact.css'

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: ""
    }
  });

  console.log(watch("email"));
  return (
    <div>
      <Navbar  />
      <main className='bg-indigo-600 w-full h-screen mt-16'>
        <form className='w-1/3 mx-auto mt-20 bg-slate-300 p-10 rounded-lg'
          onSubmit={handleSubmit((data) => {
            alert(JSON.stringify(data));
          })}
        >
          <label>First Name</label>
          <input {...register("firstname", { required: true, maxLength: 10 })} />
          {errors.firstname && <p>Your Firstname is required</p>}
          <label>Last Name</label>
          <input {...register("lastname", { required: true, maxLength: 10 })} />
          {errors.lastname && <p>You lastname is required</p>}
          <label>Email Address</label>
          <input
            {...register("email", { required: true, maxLength: 10 })}
          />
          {errors.email && <p>Please Enter Email</p>}
          <input type="submit" />
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default Contact