import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import MenuOpcaoAcomodacoes from "../menus/menuAcomodacao"
import Acomodacao from "../modelos/acomodacao"
import Cliente from "../modelos/cliente"
import Hospedagem from "../modelos/hospedagem"
import ListagemTitulares from "./listagemTitulares"


export default class CadastroHospedagem  extends Processo{
    private armazemHospedagens!:Hospedagem []
    private especificoCliente!: Cliente
    private armazemClientes!:Cliente[]
    private acomodacoes!: Acomodacao[]
    constructor()
    {
    super()
        this.menu = new MenuOpcaoAcomodacoes()
        this.armazemHospedagens = Armazem.InstanciaUnica.getHospedagens
        this.armazemClientes = Armazem.InstanciaUnica.Clientes
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        this.processo = new  ListagemTitulares()
        this.processo.processar()
        let NumeroCliente = this.entrada.receberTexto('insira o Numero De Documento Do Cliente Titular:')
        this.armazemClientes.forEach(cliente => {
            for(let i = 0; i< cliente.Documentos.length; i++){
                if (cliente.Documentos[i].Numero === NumeroCliente) {                
                    this.especificoCliente = cliente
                }
            }
            
        })

        this.menu.mostrar()
        
        let EscolhaAcomodacoes = this.entrada.receberNumero('escolha sua Acomodacao:')
        switch (EscolhaAcomodacoes) {
            case 1:
                this.armazemHospedagens.push(new Hospedagem(this.especificoCliente,this.acomodacoes[0]))
                break;
            case 2:
                this.armazemHospedagens.push(new Hospedagem(this.especificoCliente,this.acomodacoes[1]))
                break;
            case 3:
                this.armazemHospedagens.push(new Hospedagem(this.especificoCliente,this.acomodacoes[2]))
                break;
            case 4:
                this.armazemHospedagens.push(new Hospedagem(this.especificoCliente,this.acomodacoes[3]))
                break;
            case 5:
                this.armazemHospedagens.push(new Hospedagem(this.especificoCliente,this.acomodacoes[4]))
                break;
            case 6:
                this.armazemHospedagens.push(new Hospedagem(this.especificoCliente,this.acomodacoes[5]))
                break;
            default:
                break;
        }
    }
};