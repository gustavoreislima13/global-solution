"use client"
import { headers } from "next/headers";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Produtos() {

    const navigate = useRouter()

    const [produto, setProduto] = useState<TipoProduto>({
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
                        className="block ms-auto me-6 bg-[#4CF214] hover:bg-[#4CF214] text-white font-bold py-2 px-4 rounded">CADASTRAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
