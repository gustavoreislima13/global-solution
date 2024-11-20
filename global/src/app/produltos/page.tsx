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
        <div style={{ padding: '50px 10%', backgroundColor: '#fff' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#000', marginBottom: '30px' }}>Produtos</h1>
            <div style={{ backgroundColor: '#fff', padding: '40px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#000', marginBottom: '20px' }}>Cadastro de Produtos</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="idNn" style={{ fontSize: '1.25rem', color: '#000', display: 'block', marginBottom: '5px' }}>Eletrodoméstico</label>
                        <input type="text" name="eletrodomestico" id="idNn" value={produto.eletrodomestico}
                            onChange={(evento) => handleChange(evento)} placeholder="Digite o eletrodoméstico" required
                            style={{ padding: '10px', fontSize: '1rem', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="idMa" style={{ fontSize: '1.25rem', color: '#000', display: 'block', marginBottom: '5px' }}>Marca</label>
                        <input type="text" name="marca" id="idMa" value={produto.marca} onChange={(evento) => handleChange(evento)} placeholder="Digite a marca" required
                            style={{ padding: '10px', fontSize: '1rem', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="idEf" style={{ fontSize: '1.25rem', color: '#000', display: 'block', marginBottom: '5px' }}>Eficiência energética</label>
                        <input type="text" name="eficiencia_energetica" id="idEf" value={produto.eficiencia_energetica} onChange={(evento) => handleChange(evento)} placeholder="Digite a eficiência energética" required
                            style={{ padding: '10px', fontSize: '1rem', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="idCs" style={{ fontSize: '1.25rem', color: '#000', display: 'block', marginBottom: '5px' }}>Consumo energético</label>
                        <input type="number" name="consumo_energetico" id="idCs" value={produto.consumo_energetico} onChange={(evento) => handleChange(evento)} placeholder="Digite o consumo energético" required
                            style={{ padding: '10px', fontSize: '1rem', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="idCpf" style={{ fontSize: '1.25rem', color: '#000', display: 'block', marginBottom: '5px' }}>CPF</label>
                        <input type="number" name="cpf_cliente" id="idCpf" value={produto.cpf_cliente} onChange={(evento) => handleChange(evento)} placeholder="Digite o CPF" required
                            style={{ padding: '10px', fontSize: '1rem', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <button type="submit"
                            style={{ backgroundColor: '#008000', color: '#fff', fontSize: '1.25rem', fontWeight: 'bold', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#000', marginTop: '50px' }}>Listagem de Produtos</h2>
            <div style={{ overflowX: 'auto', marginTop: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f0f0f0' }}>
                            <th style={{ padding: '15px', borderBottom: '1px solid #ddd', fontSize: '1.25rem', textAlign: 'left' }}>Eletrodoméstico</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #ddd', fontSize: '1.25rem', textAlign: 'left' }}>Marca</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #ddd', fontSize: '1.25rem', textAlign: 'left' }}>Eficiência energética</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #ddd', fontSize: '1.25rem', textAlign: 'left' }}>Consumo energético</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #ddd', fontSize: '1.25rem', textAlign: 'left' }}>CPF</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #ddd', fontSize: '1.25rem', textAlign: 'left' }}>Editar | Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produtos.length > 0 && produtos.map(p => (
                                <tr key={p.cpf_cliente}>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>{p.eletrodomestico}</td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>{p.marca}</td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>{p.eficiencia_energetica}</td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>{p.consumo_energetico}</td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>{p.cpf_cliente}</td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}><Link href="/">Editar</Link> | <Link href="/">Excluir</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={6} style={{ padding: '15px', textAlign: 'right', fontWeight: 'bold' }}>Total de informações: {produtos.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}