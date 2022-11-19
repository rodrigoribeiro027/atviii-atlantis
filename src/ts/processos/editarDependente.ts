import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import MenuEditarDependente from "../menus/menuEditDependente";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class EditarDependente extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.menu = new MenuEditarDependente()
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear()
        var processo = false
        var dependente = this.entrada.receberTexto('| Insira o número do documento do dependente:')

        for (var index = 0; index < this.clientes.length; index++) {
            for (var indexDep = 0; indexDep < this.clientes[index].Dependentes.length; indexDep++) {
                for (var indexDoc = 0; indexDoc < this.clientes[index].Dependentes[indexDep].Documentos.length; indexDoc++) {
                    if (dependente == this.clientes[index].Dependentes[indexDep].Documentos[indexDoc].Numero) {
                        processo = true

                        this.menu.mostrar()
                        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
                        switch (this.opcao) {
                            
                            case 1:
                                var novoNomeDep = this.entrada.receberTexto('| Insira o novo nome do cliente: ')
                                this.clientes[index].Dependentes[indexDep].setNome = novoNomeDep;
                                break;

                            case 2:
                                var NovoNomeSocialDependente = this.entrada.receberTexto('| Insira o novo nome social do cliente: ')
                                this.clientes[index].Dependentes[indexDep].setNomeSocial = NovoNomeSocialDependente;
                                break;

                            case 3:
                                for (var indexDoc = 0; indexDoc < this.clientes[index].Dependentes[indexDep].Documentos.length; indexDoc++) {
                                    console.log(`| ${indexDoc} - (${this.clientes[index].Dependentes[indexDep].Documentos[indexDoc].Tipo}): ${this.clientes[index].Dependentes[indexDep].Documentos[indexDoc].Numero}`);
                                }

                                var opcaoDoc = this.entrada.receberNumero('| Insira a opção a ser editada: ')

                                for (var indexDocOpc = 0; indexDocOpc < this.clientes[index].Dependentes[indexDep].Documentos.length; indexDocOpc++) {
                                    if (opcaoDoc == indexDocOpc) {
                                        var NovoNumero = this.entrada.receberTexto('| Insira o novo numero: ')
                                        var NovaDataExpedicao = this.entrada.receberData('| Qual a data de expedição do documento?')
                                        var documentoDependente = new Documento(NovoNumero, this.clientes[index].Dependentes[indexDep].Documentos[indexDoc].Tipo, NovaDataExpedicao)
                                        this.clientes[index].Dependentes[indexDep].Documentos[indexDocOpc] = documentoDependente
                                    }
                                }
                                break;
                                
                            case 0:
                                console.log(" |Até mais| ");
                                break;
                            
                            default:
                                console.log('***** |Opção não entendida| *****')
                        }
                    }
                }
            }
        }

        if (processo != true) {
            console.log('\n***** |Cliente não encontrado| *****')
        }
    }
}