"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegistrationPage: React.FC = () => {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        router.push('/debhord');
    };

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            {isSignUp ? (
                <div style={{ width: '350px', padding: '40px', background: 'white', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', color: 'black' }}>
                    <h2 style={{ color: 'black', fontWeight: 'bold' }}>Criar uma conta</h2>
                    <p style={{ color: 'black' }}>Já tem uma conta? <a href="#" onClick={toggleSignUp} style={{ color: 'pink' }}>Log in</a></p>
                    <form id="registrationForm" onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="username" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nome de usuário</label>
                            <input type="text" id="username" name="username" required style={{ width: 'calc(100% - 20px)', padding: '10px', fontSize: '16px', border: '1px solid #ccc', boxShadow: '0 0 5px 2px green', borderRadius: '5px' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Endereço de email</label>
                            <input type="email" id="email" name="email" required style={{ width: 'calc(100% - 20px)', padding: '10px', fontSize: '16px', border: '1px solid #ccc', boxShadow: '0 0 5px 2px green', borderRadius: '5px' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Senha</label>
                            <input type="password" id="password" name="password" required style={{ width: 'calc(100% - 20px)', padding: '10px', fontSize: '16px', border: '1px solid #ccc', boxShadow: '0 0 5px 2px green', borderRadius: '5px' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <input type="checkbox" name="recaptcha" required /> Não sou um robô
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <input type="submit" value="Criar uma conta" style={{ width: '100%', backgroundColor: 'white', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', padding: '15px', borderRadius: '5px' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <p style={{ fontSize: '14px' }}>Ao criar uma conta, você concorda com nossos <a href="#">Termos de uso</a> e <a href="#">Política de Privacidade</a>.</p>
                        </div>
                    </form>
                </div>
            ) : (
                <div style={{ width: '350px', padding: '40px', background: 'white', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', color: 'black' }}>
                    <h2 style={{ color: 'black', fontWeight: 'bold' }}>Entrar</h2>
                    <p style={{ color: 'black' }}>Entre para acessar sua conta</p>
                    <form id="loginForm" onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Endereço de email</label>
                            <input type="email" id="email" name="email" required style={{ width: 'calc(100% - 20px)', padding: '10px', fontSize: '16px', border: '1px solid #ccc', boxShadow: '0 0 5px 2px green', borderRadius: '5px' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Senha</label>
                            <input type="password" id="password" name="password" required style={{ width: 'calc(100% - 20px)', padding: '10px', fontSize: '16px', border: '1px solid #ccc', boxShadow: '0 0 5px 2px green', borderRadius: '5px' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <input type="checkbox" name="recaptcha" required /> Não sou um robô
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <input type="submit" value="Entrar" style={{ width: '100%', backgroundColor: 'white', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', padding: '15px', borderRadius: '5px' }} />
                        </div>
                    </form>
                    <p style={{ color: 'black' }}>Não tem uma conta? <a href="#" onClick={toggleSignUp} style={{ color: 'pink' }}>Criar uma conta</a></p>
                </div>
            )}
        </div>
    );
};

export default RegistrationPage;
