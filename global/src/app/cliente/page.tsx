'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa6";
import '@/app/globals.css';

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
      const response = await fetch(" http://localhost:8080/smartenergy/cliente"); 
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
      const response = await fetch("http://localhost:8080/smartenergy/cliente", {
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

        navigate.push("/dashboard");
      }
    } catch (erro) {
      console.error("Falha ao cadastrar cliente", erro);
    }
  };

  return (
    <div className="p-12 bg-white">
      <h1 className="text-5xl font-bold text-black mb-8">Clientes</h1>
      <div className="bg-white p-10 shadow-md rounded-lg">
        <h2 className="text-4xl font-bold text-black mb-5">Cadastro de Clientes</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="idCpf" className="text-xl text-black block mb-2">CPF</label>
            <input
              type="text"
              name="cpf_cliente"
              id="idCpf"
              value={cliente.cpf_cliente}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite o CPF no formato xxxxxxxxxxx"
              required
              className="p-3 text-lg w-full rounded-lg border border-gray-300"
            />
          </div>
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
              className="p-3 text-lg w-full rounded-lg border border-gray-300"
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
              className="p-3 text-lg w-full rounded-lg border border-gray-300"
            />
          </div>
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
              className="p-3 text-lg w-full rounded-lg border border-gray-300"
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
              placeholder="Digite o telefone com ddd no formato 11111111111"
              required
              className="p-3 text-lg w-full rounded-lg border border-gray-300"
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
              className="p-3 text-lg w-full rounded-lg border border-gray-300"
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-green-600 text-white text-xl font-bold p-3 rounded-lg hover:bg-green-700"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
      <h2 className="text-4xl font-bold text-black mt-12">Listagem de Clientes</h2>
      <div className="overflow-x-auto mt-5">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 border-b text-xl text-left">CPF</th>
              <th className="p-4 border-b text-xl text-left">Nome</th>
              <th className="p-4 border-b text-xl text-left">Email</th>
              <th className="p-4 border-b text-xl text-left">Endereço</th>
              <th className="p-4 border-b text-xl text-left">Telefone</th>
              <th className="p-4 border-b text-xl text-left">Data de Nascimento</th>
              <th className="p-4 border-b text-xl text-left">Editar | Excluir</th>
            </tr>
          </thead>
          <tbody>
            {clientes.length > 0 &&
              clientes.map((c) => (
                <tr key={c.cpf_cliente}>
                  <td className="p-4 border-b">{c.cpf_cliente}</td>
                  <td className="p-4 border-b">{c.nome}</td>
                  <td className="p-4 border-b">{c.email}</td>
                  <td className="p-4 border-b">{c.endereco}</td>
                  <td className="p-4 border-b">{c.telefone}</td>
                  <td className="p-4 border-b">{c.data_nasc}</td>
                  <td className="p-4 border-b">
                    <Link href={`/cliente/${c.cpf_cliente}`}><CiEdit /></Link> | <Link href="/"><FaTrash /></Link>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={7} className="p-4 text-right font-bold">
                Total de clientes: {clientes.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
