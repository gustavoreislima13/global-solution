'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import '@/app/globals.css';
import { TipoProdulto } from "@/types/types";


export default function EditarExcluirProduto() {
  const navigate = useRouter();
  const { id_eletro } = useParams();

  const [produto, setProduto] = useState<TipoProdulto>({
    id_eletro: 0.0,
    eletrodomestico: "",
    marca: "",
    eficiencia_energetica: "",
    potencia: 0.0,
    cpf_cliente: "",
  });

  useEffect(() => {
    const chamadaApi = async () => {
      try {
        const response = await fetch(`http://localhost:8080/smartenergy/eletro/${id_eletro}`);
        const data = await response.json();
        setProduto(data);
      } catch (error) {
        console.error("Erro ao buscar produto", error);
      }
    };
    if (id_eletro) {
      chamadaApi();
    }
  }, [id_eletro]);

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/smartenergy/eletro/${id_eletro}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });

      if (response.ok) {
        alert("Produto atualizado com sucesso!");
        navigate.push("/dashboard");
      }
    } catch (erro) {
      console.error("Falha ao atualizar produto", erro);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/smartenergy/eletro/${id_eletro}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Produto excluído com sucesso!");
        navigate.push("/");
      }
    } catch (erro) {
      console.error("Falha ao excluir produto", erro);
    }
  };

  return (
    <div className="p-12 bg-white">
      <h1 className="text-5xl font-bold text-black mb-8">Editar Produto</h1>
      <div className="bg-white p-10 shadow-md rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="idEletrodomestico" className="text-xl text-black block mb-2">Eletrodoméstico</label>
            <input
              type="text"
              name="eletrodomestico"
              id="idEletrodomestico"
              value={produto.eletrodomestico}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite o nome do eletrodoméstico"
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="idMarca" className="text-xl text-black block mb-2">Marca</label>
            <input
              type="text"
              name="marca"
              id="idMarca"
              value={produto.marca}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite a marca do produto"
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="idEficienciaEnergetica" className="text-xl text-black block mb-2">Eficiência Energética</label>
            <input
              type="text"
              name="eficiencia_energetica"
              id="idEficienciaEnergetica"
              value={produto.eficiencia_energetica}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite a eficiência energética"
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="idPotencia" className="text-xl text-black block mb-2">Potência</label>
            <input
              type="number"
              name="potencia"
              id="idPotencia"
              value={produto.potencia}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite a potência do produto"
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="idCpfCliente" className="text-xl text-black block mb-2">CPF do Cliente</label>
            <input
              type="text"
              name="cpf_cliente"
              id="idCpfCliente"
              value={produto.cpf_cliente}
              onChange={(evento) => handleChange(evento)}
              placeholder="Digite o CPF do cliente"
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
