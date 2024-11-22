'use client';
import { TipoProdulto } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa6";
import '@/app/globals.css';

export default function Produtos() {

    const navigate = useRouter()

    const [produtos, setProdutos] = useState<TipoProdulto[]>([])
    const chamadaApi = async () => {
        try {
            const response = await fetch(" http://localhost:8080/smartenergy/eletro");
            const data = await response.json();
            setProdutos(data);
        } catch (error) {
            console.error("Falha na listagem");
        }
    }

    useEffect(() => {
        chamadaApi();
    }, [])

    const [produto, setProduto] = useState<TipoProdulto>({
        id_eletro:"",
        eletrodomestico: "",
        marca: "",
        eficiencia_energetica: "",
        potencia: "",
        cpf_cliente: 0.0,
    })

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evento.target;
        setProduto({ ...produto, [name]: value });
    }

    const handleDelete = async (id_eletro: string) => {
        try {
            const response = await fetch(`http://localhost:8080/smartenergy/eletro/${id_eletro}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert("Checkpoint excluído com sucesso.");
                chamadaApi();
            }
        } catch (error) {
            console.error("Falha ao remover o checkpoint: ", error);
        }
    };

    const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(produto)
            });

            if (response.ok) {
                alert("Produto cadastrado!");
                setProduto({
                    id_eletro:"",
                    eletrodomestico: "",
                    marca: "",
                    eficiencia_energetica: "",
                    potencia: "",
                    cpf_cliente: 0.0,
                });

                navigate.push("/");

            }

        } catch (erro) {
            console.error("Falha", erro);
        }
    }

    return (
        <div className="p-12 bg-white">
            <h1 className="text-5xl font-bold text-black mb-8">Produtos</h1>
            <div className="bg-white p-10 shadow-md rounded-lg">
                <h2 className="text-4xl font-bold text-black mb-5">Cadastro de Produtos</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="idNn" className="text-xl text-black block mb-2">Eletrodoméstico</label>
                        <input type="text" name="eletrodomestico" id="idNn" value={produto.eletrodomestico}
                            onChange={(evento) => handleChange(evento)} placeholder="Digite o eletrodoméstico" required
                            className="p-3 text-lg w-full rounded-lg border border-gray-300" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="idMa" className="text-xl text-black block mb-2">Marca</label>
                        <input type="text" name="marca" id="idMa" value={produto.marca} onChange={(evento) => handleChange(evento)} placeholder="Digite a marca" required
                            className="p-3 text-lg w-full rounded-lg border border-gray-300" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="idEf" className="text-xl text-black block mb-2">Eficiência energética</label>
                        <input type="text" name="eficiencia_energetica" id="idEf" value={produto.eficiencia_energetica} onChange={(evento) => handleChange(evento)} placeholder="Digite a eficiência energética" required
                            className="p-3 text-lg w-full rounded-lg border border-gray-300" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="idCs" className="text-xl text-black block mb-2">Potência</label>
                        <input type="number" name="potencia" id="idP" value={produto.potencia} onChange={(evento) => handleChange(evento)} placeholder="Digite a potência" required
                            className="p-3 text-lg w-full rounded-lg border border-gray-300" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="idCpf" className="text-xl text-black block mb-2">CPF do cliente</label>
                        <input type="number" name="cpf_cliente" id="idCpf" value={produto.cpf_cliente} onChange={(evento) => handleChange(evento)} placeholder="Digite o CPF do cliente" required
                            className="p-3 text-lg w-full rounded-lg border border-gray-300" />
                    </div>
                    <div className="text-right">
                        <button type="submit"
                            className="bg-green-600 text-white text-xl font-bold p-3 rounded-lg hover:bg-green-700">
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
            <h2 className="text-4xl font-bold text-black mt-12">Listagem de Produtos</h2>
            <div className="overflow-x-auto mt-5">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-4 border-b text-xl text-left">Id</th>
                            <th className="p-4 border-b text-xl text-left">Eletrodoméstico</th>
                            <th className="p-4 border-b text-xl text-left">Marca</th>
                            <th className="p-4 border-b text-xl text-left">Eficiência energética</th>
                            <th className="p-4 border-b text-xl text-left">Potência</th>
                            <th className="p-4 border-b text-xl text-left">CPF</th>
                            <th className="p-4 border-b text-xl text-left">Editar | Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produtos.length > 0 && produtos.map(p => (
                                <tr key={p.id_eletro}>
                                    <td className="p-4 border-b">{p.id_eletro}</td>
                                    <td className="p-4 border-b">{p.eletrodomestico}</td>
                                    <td className="p-4 border-b">{p.marca}</td>
                                    <td className="p-4 border-b">{p.eficiencia_energetica}</td>
                                    <td className="p-4 border-b">{p.potencia}</td>
                                    <td className="p-4 border-b">{p.cpf_cliente}</td>
                                    <td className="p-4 border-b"><Link href={`/produltos/${p.id_eletro}`}><CiEdit/></Link> | <Link href="#" onClick={() => handleDelete(p.id_eletro)}><FaTrash/></Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={6} className="p-4 text-right font-bold">Total de informações: {produtos.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
