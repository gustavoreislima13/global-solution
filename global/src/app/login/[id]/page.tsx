'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationPage() {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formDatae, setFormData] = useState({
        cpf_admin: "",
        senha: ""
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formDatae, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const url = isSignUp ? "http://localhost:8080/smartenergy/admin" : "http://localhost:8080/smartenergy/admin";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formDatae),
            });

            if (response.ok) {
                if (isSignUp) {
                    alert("Conta criada com sucesso!");
                } else {
                    alert("Login realizado com sucesso!");
                }
                router.push("/debhord");
            } else {
                alert("Erro ao tentar realizar a operação. Verifique os dados e tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao tentar realizar a operação", error);
        }
    };

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="flex h-screen items-center justify-center bg-white">
            {isSignUp ? (
                <div className="w-80 p-10 bg-white rounded-lg shadow-md text-black">
                    <h2 className="text-black font-bold text-2xl mb-4">Criar uma conta</h2>
                    <p className="text-black mb-6">Já tem uma conta? <a href="#" onClick={toggleSignUp} className="text-green-600">Log in</a></p>
                    <form id="registrationForm" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="cpf_admin" className="block font-bold mb-2">CPF</label>
                            <input type="text" id="cpf_admin" name="cpf_admin" value={formDatae.cpf_admin} onChange={handleInputChange} required className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="senha" className="block font-bold mb-2">Senha</label>
                            <input type="password" id="senha" name="senha" value={formDatae.senha} onChange={handleInputChange} required className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600" />
                        </div>
                        <div className="mb-5">
                            <input type="checkbox" name="recaptcha" required /> Não sou um robô
                        </div>
                        <div className="mb-5">
                            <input type="submit" value="Criar uma conta" className="w-full bg-green-600 text-white font-bold p-4 rounded-lg cursor-pointer hover:bg-green-700" />
                        </div>
                        <div className="mb-5">
                            <p className="text-sm">Ao criar uma conta, você concorda com nossos <a href="#" className="underline">Termos de uso</a> e <a href="#" className="underline">Política de Privacidade</a>.</p>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="w-80 p-10 bg-white rounded-lg shadow-md text-black">
                    <h2 className="text-black font-bold text-2xl mb-4">Entrar</h2>
                    <p className="text-black mb-6">Entre para acessar sua conta</p>
                    <form id="loginForm" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="cpf_admin" className="block font-bold mb-2">CPF</label>
                            <input type="text" id="cpf_admin" name="cpf_admin" value={formDatae.cpf_admin} onChange={handleInputChange} required className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="senha" className="block font-bold mb-2">Senha</label>
                            <input type="password" id="senha" name="senha" value={formDatae.senha} onChange={handleInputChange} required className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-600" />
                        </div>
                        <div className="mb-5">
                            <input type="checkbox" name="recaptcha" required /> Não sou um robô
                        </div>
                        <div className="mb-5">
                            <input type="submit" value="Entrar" className="w-full bg-green-600 text-white font-bold p-4 rounded-lg cursor-pointer hover:bg-green-700" />
                        </div>
                    </form>
                    <p className="text-black">Não tem uma conta? <a href="#" onClick={toggleSignUp} className="text-green-600">Criar uma conta</a></p>
                </div>
            )}
        </div>
    );
}
