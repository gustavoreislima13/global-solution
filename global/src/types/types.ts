export type TipoProdulto = {
    id_eletro:string;
    eletrodomestico:string;
    marca:string;
    eficiencia_energetica:string;
    potencia:string;
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
  
