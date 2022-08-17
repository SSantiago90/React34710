import React, { useState } from "react";
import "./userform.css";

function UserForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefono: "",
  });
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(userData);

    setUserData({
      name: "",
      email: "",
      telefono: "",
    });
  }
  function inputChangeHandler(evt) {
    const input = evt.target;

    const value = input.value;
    const inputName = input.name;

    let copyUserData = { ...userData };

    copyUserData[inputName] = value;
    setUserData(copyUserData);
  }

  function handleReset(evt) {
    setUserData({
      name: "",
      email: "",
      telefono: "",
    });
  }

  return (
    <div className="form-container">
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Nombre</label>
          <input
            value={userData.name}
            onChange={inputChangeHandler}
            name="name"
            type="text"
            placeholder="Nombre"
          />
        </div>

        <div className="form-item">
          <label htmlFor="telefono">Telefono</label>
          <input
            value={userData.telefono}
            onChange={inputChangeHandler}
            name="telefono"
            type="text"
            placeholder="Telefono"
          />
        </div>

        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            value={userData.email}
            onChange={inputChangeHandler}
            name="email"
            type="text"
            placeholder="Correo"
          />
        </div>

        <div>
          <button type="submit">Enviar</button>
          <button type="reset">Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
