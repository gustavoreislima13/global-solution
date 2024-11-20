"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface TipoCliente {
  cpf_cliente: string;
  nome: string;
  email: string;
  endereco: string;
  telefone: string;
  data_nasc: string;
}

export default function Clientes() {
  const navigate = useRouter();

  const [clientes, setClientes] = useState<TipoCliente[]>([]);
  const chamadaApi = async () => {
    try {
      const response = await fetch(" http://localhost:8080/smartenergy/cliente"); // Adicione a URL correta da API aqui.
      const data = await response.json();
      setClientes(data);
    } catch (error) {
      console.error("Falha na listagem de clientes", error);
    }
  };

  useEffect(() => {
    chamadaApi();
  }, []);

  const [cliente, setCliente] = useState<TipoCliente>({
    cpf_cliente: "",
    nome: "",
    email: "",
    endereco: "",
    telefone: "",
    data_nasc: "",
  });

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    try {
      const response = await fetch("/api/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });

      if (response.ok) {
        alert("Cliente cadastrado!");
        setCliente({
          cpf_cliente: "",
          nome: "",
          email: "",
          endereco: "",
          telefone: "",
          data_nasc: "",
        });

        navigate.push("/");
      }
    } catch (erro) {
      console.error("Falha ao cadastrar cliente", erro);
    }
  };

  return (
    <div style={{ padding: "50px 10%", backgroundColor: "#fff" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#000", marginBottom: "30px" }}>
        Clientes
      </h1>
      <div style={{ backgroundColor: "#fff", padding: "40px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#000", marginBottom: "20px" }}>
          Cadastro de Clientes
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="idCpf" style={{ fontSize: "1.25rem", color: "#000", display: "block", marginBottom: "5px" }}>
              CPF
            </label>
            <input
              type="text"
              name="cpf_cliente"
              id="idCpf"
              value={cliente.cpf_cliente}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite o CPF"
              required
              style={{ padding: "10px", fontSize: "1rem", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="idNome" style={{ fontSize: "1.25rem", color: "#000", display: "block", marginBottom: "5px" }}>
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
              style={{ padding: "10px", fontSize: "1rem", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="idEmail" style={{ fontSize: "1.25rem", color: "#000", display: "block", marginBottom: "5px" }}>
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
              style={{ padding: "10px", fontSize: "1rem", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="idEndereco" style={{ fontSize: "1.25rem", color: "#000", display: "block", marginBottom: "5px" }}>
              Endereço
            </label>
            <input
              type="text"
              name="endereco"
              id="idEndereco"
              value={cliente.endereco}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite o endereço"
              required
              style={{ padding: "10px", fontSize: "1rem", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="idTelefone" style={{ fontSize: "1.25rem", color: "#000", display: "block", marginBottom: "5px" }}>
              Telefone
            </label>
            <input
              type="text"
              name="telefone"
              id="idTelefone"
              value={cliente.telefone}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite o telefone"
              required
              style={{ padding: "10px", fontSize: "1rem", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="idDataNasc" style={{ fontSize: "1.25rem", color: "#000", display: "block", marginBottom: "5px" }}>
              Data de Nascimento
            </label>
            <input
              type="date"
              name="data_nasc"
              id="idDataNasc"
              value={cliente.data_nasc}
              onChange={(evento) => handleChange(evento)}
              required
              style={{ padding: "10px", fontSize: "1rem", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ textAlign: "right" }}>
            <button
              type="submit"
              style={{ backgroundColor: "#008000", color: "#fff", fontSize: "1.25rem", fontWeight: "bold", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" }}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#000", marginTop: "50px" }}>Listagem de Clientes</h2>
      <div style={{ overflowX: "auto", marginTop: "20px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={{ padding: "15px", borderBottom: "1px solid #ddd", fontSize: "1.25rem", textAlign: "left" }}>CPF</th>
              <th style={{ padding: "15px", borderBottom: "1px solid #ddd", fontSize: "1.25rem", textAlign: "left" }}>Nome</th>
              <th style={{ padding: "15px", borderBottom: "1px solid #ddd", fontSize: "1.25rem", textAlign: "left" }}>Email</th>
              <th style={{ padding: "15px", borderBottom: "1px solid #ddd", fontSize: "1.25rem", textAlign: "left" }}>Endereço</th>
              <th style={{ padding: "15px", borderBottom: "1px solid #ddd", fontSize: "1.25rem", textAlign: "left" }}>Telefone</th>
              <th style={{ padding: "15px", borderBottom: "1px solid #ddd", fontSize: "1.25rem", textAlign: "left" }}>Data de Nascimento</th>
              <th style={{ padding: "15px", borderBottom: "1px solid #ddd", fontSize: "1.25rem", textAlign: "left" }}>Editar | Excluir</th>
            </tr>
          </thead>
          <tbody>
            {clientes.length > 0 &&
              clientes.map((c) => (
                <tr key={c.cpf_cliente}>
                  <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>{c.cpf_cliente}</td>
                  <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>{c.nome}</td>
                  <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>{c.email}</td>
                  <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>{c.endereco}</td>
                  <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>{c.telefone}</td>
                  <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>{c.data_nasc}</td>
                  <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                    <Link href="/">Editar</Link> | <Link href="/">Excluir</Link>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={7} style={{ padding: "15px", textAlign: "right", fontWeight: "bold" }}>
                Total de clientes: {clientes.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}