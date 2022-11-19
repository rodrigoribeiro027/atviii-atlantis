import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Impressor from "../interfaces/impressor";
import ImpressoraCliente from "../impressores/impressorCliente";

export default class ListarDependenteEspecifico extends Processo {
    private clientes:Cliente[] = []
    private impressor!:Impressor
    private ClienteTitular !:Cliente
    
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {

        this.clientes.forEach(cliente => {
            if (cliente.Titular != null) {
            this.impressor = new ImpressoraCliente(cliente)
            console.log(this.impressor.imprimir())
            }
        })
        let Titular = this.entrada.receberTexto('Qual o nome do Titular?')
        console.log('Iniciando a Busca de um cliente...')
        
        this.clientes.forEach(cliente =>{
            if(Titular === cliente.Nome){
                this.ClienteTitular = cliente
            }
        })
        console.log('Encontramos o Cliente\n',this.ClienteTitular.Dependentes)
    }
}