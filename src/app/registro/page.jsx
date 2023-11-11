"use client"
import React, { useState } from 'react';
import style from "../registro/style.css"

export default function Register() {
  const [placa, setPlaca] = useState('');
  const [cpf, setCPF] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    try {
      
      const response = await fetch("/api/base/base-register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ placa, cpf }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status === 'ok') {
          setMessage('Registro efetuado com sucesso');
        } else {
          setMessage('Placa ou CPF incorretos');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="div-register"> 
      <h1 id="register">REGISTRO DE PLACA E CPF</h1> 
      {message && <p className="bg-white text-black text-center text-lg">{message}</p>}
      <div className="form-registration"> 
        <div>
          <label htmlFor="placa">Placa:</label>
          <input
            type="text"
            id="placa"
            placeholder="Digite a placa do veículo"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            placeholder="Digite o CPF do proprietário"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
          />
        </div>
        <div>
          <button id="botaoRegister" onClick={handleSubmit}>REGISTRAR</button>
        </div>
      </div>
    </div>
  );
}
