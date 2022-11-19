import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";


export default class DeletarDependente extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear()
        var processo = false

        for (let index = 0; index < this.clientes.length; index++) 
        {
            console.log(`| ${index + 1}: ${this.clientes[index].Nome}`);
        }

        let cliente = this.entrada.receberTexto('| Insira o número do documento do Titular:')

        for (let index = 0; index < this.clientes.length; index++) 

        {
            for (let indexDoc = 0; indexDoc < this.clientes[index].Documentos.length; indexDoc++) 
            {
                if (cliente == this.clientes[index].Documentos[indexDoc].Numero)
                {
                    processo = true

                    this.clientes.splice(index, 1)
                    
                    console.log('Cliente Titular Excluído.');
                    
                    break;
                }
            }
        }
        if (processo != true) {
            console.log('\n***** |Cliente não encontrado| *****')
        }
    }
}