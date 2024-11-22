'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import '@/app/globals.css';

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
  const { cpf_cliente } = useParams();

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
        const response = await fetch(`http://localhost:8080/smartenergy/cliente/${cpf_cliente}`);
        const data = await response.json();
        setCliente(data);
      } catch (error) {
        console.error("Erro ao buscar cliente", error);
      }
    };
    if (cpf_cliente) {
      chamadaApi();
    }
  }, [cpf_cliente]);

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/smartenergy/cliente/${cpf_cliente}`, {
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
      const response = await fetch(`http://localhost:8080/smartenergy/cliente/${cpf_cliente}`, {
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
    <div className="p-12 bg-white">
      <h1 className="text-5xl font-bold text-black mb-8">Editar Cliente</h1>
      <div className="bg-white p-10 shadow-md rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="idNome" className="text-xl text-black block mb-2">Nome</label>
            <input
              type="text"
              name="nome"
              id="idNome"
              value={cliente.nome}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite o nome"
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="idEmail" className="text-xl text-black block mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="idEmail"
              value={cliente.email}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite o email"
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600"
            />
          </div>
          {/* Outros campos de cliente aqui */}
          <div className="mb-5">
            <label htmlFor="idEndereco" className="text-xl text-black block mb-2">Endereço</label>
            <input
              type="text"
              name="endereco"
              id="idEndereco"
              value={cliente.endereco}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite o endereço"
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="idTelefone" className="text-xl text-black block mb-2">Telefone</label>
            <input
              type="text"
              name="telefone"
              id="idTelefone"
              value={cliente.telefone}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite o telefone"
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="idDataNasc" className="text-xl text-black block mb-2">Data de Nascimento</label>
            <input
              type="date"
              name="data_nasc"
              id="idDataNasc"
              value={cliente.data_nasc}
              onChange={(evento) => handleChange(evento)}
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600"
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-green-600 text-white text-xl font-bold p-4 rounded-lg mr-4 cursor-pointer hover:bg-green-700"
            >
              Atualizar
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-600 text-white text-xl font-bold p-4 rounded-lg cursor-pointer hover:bg-red-700"
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
