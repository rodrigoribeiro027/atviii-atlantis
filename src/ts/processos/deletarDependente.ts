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
            for (let indexDep = 0; indexDep < this.clientes[index].Dependentes.length; indexDep++)
            console.log(`| - ${this.clientes[index].Dependentes[indexDep].Nome}`);
        }

        let dependente = this.entrada.receberTexto('Insira o número do Documento do Dependente:')

        for (let index = 0; index < this.clientes.length; index++) {
            for (let indexDep = 0; indexDep < this.clientes[index].Dependentes.length; indexDep++)
            {
                for (let indexDoc = 0; indexDoc < this.clientes[index].Dependentes[indexDep].Documentos.length; indexDoc++) 
                {
                    
                    if (dependente == this.clientes[index].Dependentes[indexDep].Documentos[indexDoc].Numero) 
                    {
                        processo = true
                        this.clientes[index].Dependentes.splice(index, 1)
                        console.log('Cliente Dependente Excluído.');
                        
                        break;
                    }
                }
            }
        }

        if (processo != true) {
            console.log('\n***** |Cliente não encontrado| *****')
        }
    }
}