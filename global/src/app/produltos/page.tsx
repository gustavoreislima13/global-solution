"use client";
import { TipoProdulto } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Produtos() {

    const navigate = useRouter()

    const [produtos, setProdutos] = useState<TipoProdulto[]>([])
    const chamadaApi = async () => {
        try {
            const response = await fetch(""); // Adicione a URL correta da API aqui.
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
        eletrodomestico: "",
        marca: "",
        eficiencia_energetica: "",
        consumo_energetico: "",
        cpf_cliente: 0.0,
    })

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evento.target;
        setProduto({ ...produto, [name]: value });
    }

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
                    eletrodomestico: "",
                    marca: "",
                    eficiencia_energetica: "",
                    consumo_energetico: "",
                    cpf_cliente: 0.0,
                });

                navigate.push("/");

            }

        } catch (erro) {
            console.error("Falha", erro);
        }
    }

    return (
        <div>
            <h1>Produtos</h1>
            <div>
                <h2>Cadastro de Produtos</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="idNn">Eletrodoméstico</label>
                        <input type="text" name="eletrodomestico" id="idNn" value={produto.eletrodomestico}
                            onChange={(evento) => handleChange(evento)} placeholder="Digite o eletrodoméstico" required />
                    </div>
                    <div>
                        <label htmlFor="idMa">Marca</label>
                        <input type="text" name="marca" id="idMa" value={produto.marca} onChange={(evento) => handleChange(evento)} placeholder="Digite a marca" required />
                    </div>
                    <div>
                        <label htmlFor="idEf">Eficiência energética</label>
                        <input type="text" name="eficiencia_energetica" id="idEf" value={produto.eficiencia_energetica} onChange={(evento) => handleChange(evento)} placeholder="Digite a eficiência energética" required />
                    </div>
                    <div>
                        <label htmlFor="idCs">Consumo energético</label>
                        <input type="number" name="consumo_energetico" id="idCs" value={produto.consumo_energetico} onChange={(evento) => handleChange(evento)} placeholder="Digite o consumo energético" required />
                    </div>
                    <div>
                        <label htmlFor="idCpf">CPF</label>
                        <input type="number" name="cpf_cliente" id="idCpf" value={produto.cpf_cliente} onChange={(evento) => handleChange(evento)} placeholder="Digite o CPF" required />
                    </div>
                    <div>
                        <button type="submit"
                            className="block ms-auto me-6 bg-[#4CF214] hover:bg-[#4CF214] text-white font-bold py-2 px-4 rounded">Cadastra</button>
                    </div>
                </form>
            </div>
            <h2>Listagem de Produtos</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Eletrodoméstico</th>
                            <th>Marca</th>
                            <th>Eficiência energética</th>
                            <th>Consumo energético</th>
                            <th>CPF</th>
                            <th>Editar | Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // Aguardando a chamada da API antes de renderizar os produtos
                            produtos.length > 0 && produtos.map(p => (
                                <tr key={p.cpf_cliente}>
                                    <td>{p.eletrodomestico}</td>
                                    <td>{p.marca}</td>
                                    <td>{p.eficiencia_energetica}</td>
                                    <td>{p.consumo_energetico}</td>
                                    <td>{p.cpf_cliente}</td>
                                    <td><Link href="/">Editar</Link>| <Link href="/">Excluir</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}>Total de informacoes: -{produto.cpf_cliente}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
