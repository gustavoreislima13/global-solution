'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import '@/app/globals.css';

export default function RegistrationPage() {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        cpf_admin: "",
        nome: "",
        email: "",
        senha: ""
    });
    const [isLoading, setIsLoading] = useState(false); 

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const url = isSignUp
                ? "http://localhost:8080/smartenergy/admin"
                : "http://localhost:8080/smartenergy/admin";

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                if (isSignUp) {
                    alert("Conta criada com sucesso!");
                } else {
                    alert("Login realizado com sucesso!");
                }
                router.push("/dashboard"); 
            } else {
                const errorMessage = await response.text();
                alert(`Erro ao tentar realizar a operação: ${errorMessage}`);
            }
        } catch (error) {
            console.error("Erro ao tentar realizar a operação", error);
            alert("Erro ao tentar realizar a operação. Verifique sua conexão e tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="flex h-screen items-center justify-center bg-white">
            <div className="w-80 p-10 bg-white rounded-lg shadow-md text-black">
                <h2 className="text-black font-bold text-2xl mb-4">{isSignUp ? "Criar uma conta" : "Entrar"}</h2>
                <p className="text-black mb-6">
                    {isSignUp ? (
                        <>
                            Já tem uma conta? <a href="#" onClick={toggleSignUp} className="text-green-600">Faça login</a>
                        </>
                    ) : (
                        <>
                            Não tem uma conta? <a href="#" onClick={toggleSignUp} className="text-green-600">Criar uma conta</a>
                        </>
                    )}
                </p>
                <form id={isSignUp ? "registrationForm" : "loginForm"} onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="cpf_admin" className="block font-bold mb-1">CPF</label>
                        <input
                            type="text"
                            id="cpf_admin"
                            name="cpf_admin"
                            value={formData.cpf_admin}
                            onChange={handleInputChange}
                            placeholder="digite seu cpf no formato xxxxxxxxxxx"
                            required
                            className="w-full p-2 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600"
                        />
                    </div>
                    {isSignUp && (
                        <>
                            <div className="mb-5">
                                <label htmlFor="nome" className="block font-bold mb-1">Nome</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                    placeholder="digite seu nome"
                                    required
                                    className="w-full p-2 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block font-bold mb-1">Endereço de email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="digite seu email"
                                    required
                                    className="w-full p-2 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600"
                                />
                            </div>
                        </>
                    )}
                    <div className="mb-5">
                        <label htmlFor="senha" className="block font-bold mb-1">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            value={formData.senha}
                            onChange={handleInputChange}
                            placeholder="digite sua senha com até 8 dígitos"
                            required
                            className="w-full p-2 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600"
                        />
                    </div>
                    <div className="mb-5">
                        <input type="checkbox" name="recaptcha" required /> Não sou um robô
                    </div>
                    <div className="mb-5">
                        <button type="submit" disabled={isLoading} className={`w-full p-4 font-bold text-white rounded-lg ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}>{isLoading ? "Carregando..." : (isSignUp ? "Criar uma conta" : "Entrar")}</button>
                    </div>
                    {isSignUp && (
                        <div className="mb-5">
                            <p className="text-sm">Ao criar uma conta, você concorda com nossos <a href="#" className="underline">Termos de uso</a> e <a href="#" className="underline">Política de Privacidade</a>.</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
