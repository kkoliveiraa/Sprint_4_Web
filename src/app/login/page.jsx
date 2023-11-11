"use client"
import { useState } from "react";
import "./style.css"; 

export default function Login() {
  const [msg, setMsg] = useState("");

  const [formData, setFormData] = useState({
    placa: "",
    cpf: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/base/base-user-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("VALIDADO!!!!");
        if (result.status === "ok") {
          setMsg("Login efetuado com Sucesso!!");
          setTimeout(() => {
            setMsg("");
          }, 5000);
        } else {
          setMsg("Placa ou CPF incorretos!");
          setTimeout(() => {
            setMsg("");
          }, 5000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="div-login">
      <h1 id="login">LOGIN</h1>

      <h2 className="bg-white text-black text-center text-lg">{msg}</h2>

      <div className="form-registration">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend></legend>
            <div>
              <label htmlFor="idPlaca">Placa:</label>
              <input
                type="text"
                name="placa"
                id="idPlaca"
                placeholder="Digite a placa do veículo."
                value={formData.placa}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idCPF">CPF:</label>
              <input
                type="text"
                name="cpf"
                id="idCPF"
                placeholder="Digite o CPF do proprietário."
                value={formData.cpf}
                onChange={handleChange}
              />
            </div>
            <div>
              <button id="botaoForms">LOGIN</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
