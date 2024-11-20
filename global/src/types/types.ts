export type TipoProdulto = {
    eletrodomestico:string;
    marca:string;
    eficiencia_energetica:string;
    consumo_energetico:string;
    cpf_cliente:number;
}


export type TipoAdmin = {
    cpf_admin: string;
    nome: string; 
    email: string; 
    senha: string; 
};

export type TipoCliente = {
    cpf_cliente: string; 
    nome: string; 
    email: string; 
    endereco: string; 
    telefone: number; 
    data_nasc: string; 
  };
  
