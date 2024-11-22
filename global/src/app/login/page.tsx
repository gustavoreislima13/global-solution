"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationPage() {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        cpf_admin: "",
        nome: "",
        email: "",
        senha: ""
    });
    const [isLoading, setIsLoading] = useState(false); // Para controlar o estado de carregamento

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
                router.push("/dashboard"); // Redirecionar para a dashboard
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
        <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <div style={{ width: '350px', padding: '40px', background: 'white', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', color: 'black' }}>
                <h2 style={{ color: 'black', fontWeight: 'bold' }}>{isSignUp ? "Criar uma conta" : "Entrar"}</h2>
                <p style={{ color: 'black' }}>
                    {isSignUp ? (
                        <>
                            Já tem uma conta? <a href="#" onClick={toggleSignUp} style={{ color: '#4CAF50' }}>Log in</a>
                        </>
                    ) : (
                        <>
                            Não tem uma conta? <a href="#" onClick={toggleSignUp} style={{ color: '#4CAF50' }}>Criar uma conta</a>
                        </>
                    )}
                </p>
                <form id={isSignUp ? "registrationForm" : "loginForm"} onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="cpf_admin" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>CPF</label>
                        <input
                            type="text"
                            id="cpf_admin"
                            name="cpf_admin"
                            value={formData.cpf_admin}
                            onChange={handleInputChange}
                            required
                            style={{ width: 'calc(100% - 20px)', padding: '10px', fontSize: '16px', border: '1px solid #ccc', boxShadow: '0 0 5px 2px green', borderRadius: '5px' }}
                        />
                    </div>
                    {isSignUp && (
                        <>
                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="nome" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nome</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                    required
                                    style={{ width: 'calc(100% - 20px)', padding: '10px', fontSize: '16px', border: '1px solid #ccc', boxShadow: '0 0 5px 2px green', borderRadius: '5px' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Endereço de email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    style={{ width: 'calc(100% - 20px)', padding: '10px', fontSize: '16px', border: '1px solid #ccc', boxShadow: '0 0 5px 2px green', borderRadius: '5px' }}
                                />
                            </div>
                        </>
                    )}
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="senha" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            value={formData.senha}
                            onChange={handleInputChange}
                            required
                            style={{ width: 'calc(100% - 20px)', padding: '10px', fontSize: '16px', border: '1px solid #ccc', boxShadow: '0 0 5px 2px green', borderRadius: '5px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <input type="checkbox" name="recaptcha" required /> Não sou um robô
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <button type="submit" disabled={isLoading} style={{ width: '100%', backgroundColor: '#4CAF50', color: 'white', fontWeight: 'bold', border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer', padding: '15px', borderRadius: '5px' }}>
                            {isLoading ? "Carregando..." : (isSignUp ? "Criar uma conta" : "Entrar")}
                        </button>
                    </div>
                    {isSignUp && (
                        <div style={{ marginBottom: '20px' }}>
                            <p style={{ fontSize: '14px' }}>Ao criar uma conta, você concorda com nossos <a href="#">Termos de uso</a> e <a href="#">Política de Privacidade</a>.</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
