import React from "react";
import { useState } from "react";
import "./Form.css"

export const Form = () => {

  const [form , setForm] = useState({
    

  })
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }



  return (
    <div className="Formulario w-100">
      <form className=" w-25  p-3 h-100  border h-75" onSubmit={handlesubmit}>
      <h1>REGISTRATE</h1>
      <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">
            nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
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
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
