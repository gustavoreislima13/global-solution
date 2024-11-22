"use client";
import { TipoProdulto } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa6";

export default function Produtos() {

    const navigate = useRouter()

    const [produtos, setProdutos] = useState<TipoProdulto[]>([])
    const chamadaApi = async () => {
        try {
            const response = await fetch(" http://localhost:8080/smartenergy/eletro"); // Adicione a URL correta da API aqui.
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
                        <label htmlFor="idCs" style={{ fontSize: '1.25rem', color: '#000', display: 'block', marginBottom: '5px' }}>Potencia</label>
                        <input type="number" name="potencia" id="idP" value={produto.potencia} onChange={(evento) => handleChange(evento)} placeholder="Digite a potencia" required
                            style={{ padding: '10px', fontSize: '1rem', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="idCpf" style={{ fontSize: '1.25rem', color: '#000', display: 'block', marginBottom: '5px' }}>CPF do cliente</label>
                        <input type="number" name="cpf_cliente" id="idCpf" value={produto.cpf_cliente} onChange={(evento) => handleChange(evento)} placeholder="Digite o CPF do cliente" required
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
                        <th style={{ padding: '15px', borderBottom: '1px solid #ddd', fontSize: '1.25rem', textAlign: 'left' }}>Id</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #ddd', fontSize: '1.25rem', textAlign: 'left' }}>Eletrodoméstico</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #ddd', fontSize: '1.25rem', textAlign: 'left' }}>Marca</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #ddd', fontSize: '1.25rem', textAlign: 'left' }}>Eficiência energética</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #ddd', fontSize: '1.25rem', textAlign: 'left' }}>Potencia</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #ddd', fontSize: '1.25rem', textAlign: 'left' }}>CPF</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #ddd', fontSize: '1.25rem', textAlign: 'left' }}>Editar | Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produtos.length > 0 && produtos.map(p => (
                                <tr key={p.id_eletro}>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>{p.id_eletro}</td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>{p.eletrodomestico}</td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>{p.marca}</td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>{p.eficiencia_energetica}</td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>{p.potencia}</td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>{p.cpf_cliente}</td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}><Link href="./[id]"><CiEdit/></Link> | <Link href="#" onClick={() => handleDelete(p.id_eletro)}><FaTrash/></Link></td>
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