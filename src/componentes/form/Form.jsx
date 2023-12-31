import React from "react";
import { useState } from "react";
import "./Form.css"

export const Form = ({onFormSubmit}) => {


  const [form , setForm] = useState({
    nombre: "",
    apellido: "",
    telefono:"",
    email:"",
    confirmEmail:"",
    contraseña:""

  })

  const [error , setError] = useState("")
    const handlesubmit = (e) => {
        e.preventDefault();

        if (form.email === form.confirmEmail){
          setError("");
          console.log("enviado" , form);
          if (onFormSubmit) {
            onFormSubmit();
          }
          resetForm()

        }
        else{
          setError('los correos electronicos no coinciden');
        }
        
      }



    const handleForm = (e) => {
      setForm({
        ...form,
        [e.target.name] : e.target.value,
      })
      

    }

    const resetForm = () => {
      setForm({
        nombre: "",
        apellido: "",
        telefono:"",
        email:"",
        confirmEmail:"",
        contraseña:""
      })
    }

    const isSubmitDisabled = form.email !== form.confirmEmail;



  return (
    <div className="Formulario w-100 h-100">
      <form className=" w-25  p-3 h-100  border" onSubmit={handlesubmit}>
      <h1>REGISTRATE</h1>
      <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">
            nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={form.nombre}
            name="nombre"
            onChange={handleForm}
          />
        </div>
        <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">
            apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={form.apellido}
            name="apellido"
            onChange={handleForm}
          />
        </div>
      <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">
            telefono
          </label>
          <input
            type="phone"
            className="form-control"
            id="exampleInputPassword1"
            value={form.telefono}
            name="telefono"
            onChange={handleForm}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={form.email}
            name="email"
            onChange={handleForm}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            confirm email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={form.confirmEmail}
            name="confirmEmail"
            onChange={handleForm}
          />
          <div id="emailHelp" className="form-text">
           Los correos electronicos deben coincidir.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={form.contraseña}
            name="contraseña"
            onChange={handleForm}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};
