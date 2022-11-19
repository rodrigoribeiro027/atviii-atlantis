import Acomodacao from "./acomodacao";
import Cliente from "./cliente";

export default class Hospedagem 
{
    
    private cliente!: Cliente;
    private acomodacao!: Acomodacao;
    
    constructor(cliente:Cliente,acomodacao:Acomodacao) 
    {
        this.cliente = cliente
        this.acomodacao = acomodacao
    }

    public get getAcomodacao() { return this.acomodacao }
    public get getCliente()    { return this.cliente    }
    
}