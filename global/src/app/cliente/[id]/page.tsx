"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface TipoCliente {
  cpf_cliente: string;
  nome: string;
  email: string;
  endereco: string;
  telefone: string;
  data_nasc: string;
}

export default function EditarExcluirCliente() {
  const navigate = useRouter();
  const { id } = useParams();

  const [cliente, setCliente] = useState<TipoCliente>({
    cpf_cliente: "",
    nome: "",
    email: "",
    endereco: "",
    telefone: "",
    data_nasc: "",
  });

  useEffect(() => {
    const chamadaApi = async () => {
      try {
        const response = await fetch(`http://localhost:8080/smartenergy/cliente/${id}`);
        const data = await response.json();
        setCliente(data);
      } catch (error) {
        console.error("Erro ao buscar cliente", error);
      }
    };
    if (id) {
      chamadaApi();
    }
  }, [id]);

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/smartenergy/cliente/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });

      if (response.ok) {
        alert("Cliente atualizado com sucesso!");
        navigate.push("/");
      }
    } catch (erro) {
      console.error("Falha ao atualizar cliente", erro);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/smartenergy/cliente/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Cliente excluído com sucesso!");
        navigate.push("/");
      }
    } catch (erro) {
      console.error("Falha ao excluir cliente", erro);
    }
  };

  return (
    <div style={{ padding: "50px 10%", backgroundColor: "#fff" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#000", marginBottom: "30px" }}>
        Editar Cliente
      </h1>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="idNome"
              style={{ fontSize: "1.25rem", color: "#000", display: "block", marginBottom: "5px" }}
            >
              Nome
            </label>
            <input
              type="text"
              name="nome"
              id="idNome"
              value={cliente.nome}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite o nome"
              required
              style={{
                padding: "10px",
                fontSize: "1rem",
                width: "100%",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="idEmail"
              style={{ fontSize: "1.25rem", color: "#000", display: "block", marginBottom: "5px" }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="idEmail"
              value={cliente.email}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite o email"
              required
              style={{
                padding: "10px",
                fontSize: "1rem",
                width: "100%",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          {/* Outros campos de cliente aqui */}
          <div style={{ textAlign: "right" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#008000",
                color: "#fff",
                fontSize: "1.25rem",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Atualizar
            </button>
            <button
              type="button"
              onClick={handleDelete}
              style={{
                backgroundColor: "#FF0000",
                color: "#fff",
                fontSize: "1.25rem",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
