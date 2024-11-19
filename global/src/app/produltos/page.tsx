"use client"

import { useState } from "react"

export default function Produltos() {

    const [produlto, setProdultos] = useState<TipoProdulto>({
        eletrodomestico:"",
        marca:"",
        eficiencia_energetica:"",
        consumo_energetico:"",
        cpf_cliente:0.0,
    })

    const handleChange = (evento:React.ChangeEvent <HTMLInputElement>)=>{
        const{name,value} = evento.target;
        setProdultos({...Produltos,[name]:value})
    }


  return (
    <div>
        <h1>Produltos</h1>
        <div>
                <h2>Cadastro de Produltos</h2>
            <form>
                <div>
                    <label htmlFor="idNn">Eletrodomestico</label>
                    <input type="text" name="eletrodomestico" id="idNn" value={produlto.eletrodomestico} 
                    onChange={(evento)=>  handleChange(evento)} placeholder="digite o eletrodomestico" required/>
                </div>
                <div>
                    <label htmlFor="idMa">Marca</label>
                    <input type="text" name="marca" id="idMa" value={produlto.marca} onChange={(evento)=>  handleChange(evento)} placeholder="digite a marca" required/>
                </div>
                <div>
                    <label htmlFor="idEf">Eficiencia energetica</label>
                    <input type="text" name="eficiencia_energetica" id="idEf" value={produlto.eficiencia_energetica} onChange={(evento)=>  handleChange(evento)} placeholder="digite a eficiencia Energetica" required/>
                </div>
                <div>
                    <label htmlFor="idCs">Consumo energetico</label>
                    <input type="number" name="consumo_energetica" id="idCs" value={produlto.consumo_energetica} onChange={(evento)=>  handleChange(evento)} placeholder="digite a consumo Energetica" required/>
                </div>
                <div>
                    <label htmlFor="idCpf">CPF</label>
                    <input type="number" name="cpf_cliente" id="idCpf" value={produlto.cpf_cliente} onChange={(evento)=>  handleChange(evento)} placeholder="digite o cpf" required/>
                </div>
            </form>
        </div>
    </div>
  )
}
