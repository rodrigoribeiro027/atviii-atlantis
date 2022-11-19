import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import MenuEditarCliente from "../menus/menuEditarTitular";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

export default class EditarTitular extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.menu = new MenuEditarCliente()
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear()
        var processo = false
        var cliente = this.entrada.receberTexto('| Insira o número do documento do cliente:')

        for (var index = 0; index < this.clientes.length; index++) {

            for (var indexDoc = 0; indexDoc < this.clientes[index].Documentos.length; indexDoc++) {

                if (cliente == this.clientes[index].Documentos[indexDoc].Numero) {

                    processo = true

                    this.menu.mostrar()
                    this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
                    switch (this.opcao) {
                        case 1:
                            var novoNome = this.entrada.receberTexto('| Insira o novo nome do cliente: ')
                            this.clientes[index].setNome = novoNome;
                            break;
                        case 2:
                            var novoNomeSocial = this.entrada.receberTexto('| Insira o novo nome social do cliente: ')
                            this.clientes[index].setNomeSocial = novoNomeSocial;
                            break;
                        case 3:
                            var novaRua = this.entrada.receberTexto('| Insira a nova rua: ')
                            var novoBairro = this.entrada.receberTexto('| Insira o novo bairro: ')
                            var novaCidade = this.entrada.receberTexto('| Insira a nova cidade: ')
                            var novoEstado = this.entrada.receberTexto('| Insira o novo estado: ')
                            var novoPais = this.entrada.receberTexto('| Insira o novo país: ')
                            var novoCodigoPostal = this.entrada.receberTexto('| Insira o novo código postal: ')
                            var endereco = new Endereco(novaRua, novoBairro, novaCidade, novoEstado, novoPais, novoCodigoPostal)
                            this.clientes[index].Endereco = endereco
                            break;
                        case 4:
                            for (var indexTel = 0; indexTel < this.clientes[index].Telefones.length; indexTel++) {
                                console.log(`| ${indexTel} - (${this.clientes[index].Telefones[indexTel].Ddd}) ${this.clientes[index].Telefones[indexTel].Numero}`);
                            }

                            var opcaoTel = this.entrada.receberNumero('| Insira a opção a ser editada: ')

                            for (var indexTelOpc = 0; indexTelOpc < this.clientes[index].Telefones.length; indexTelOpc++) {
                                if (opcaoTel == indexTelOpc) {
                                    var novoDdd = this.entrada.receberTexto('| Insira o novo DDD: ')
                                    var novoNumero = this.entrada.receberTexto('| Insira o novo numero: ')
                                    var telefone = new Telefone(novoDdd, novoNumero)

                                    this.clientes[index].Telefones[indexTelOpc] = telefone
                                }
                            }
                            break;
                        case 5:
                            for (var indexDoc = 0; indexDoc < this.clientes[index].Documentos.length; indexDoc++) {
                                console.log(`| ${indexDoc} - (${this.clientes[index].Documentos[indexDoc].Tipo}): ${this.clientes[index].Documentos[indexDoc].Numero}`);
                            }

                            var opcaoDoc = this.entrada.receberNumero('| Insira a opção a ser editada: ')

                            for (var indexDocOpc = 0; indexDocOpc < this.clientes[index].Documentos.length; indexDocOpc++) {
                                if (opcaoDoc == indexDocOpc) {
                                    var novoNumero = this.entrada.receberTexto('| Insira o novo numero: ')
                                    var novaDataExpedicao = this.entrada.receberData('| Qual a data de expedição do documento?')
                                    var documento = new Documento(novoNumero, this.clientes[index].Documentos[indexDoc].Tipo, novaDataExpedicao)

                                    this.clientes[index].Documentos[indexDocOpc] = documento
                                }
                            }
                            break;
                        case 0:
                            console.log("Até mais!");
                            break;
                        default:
                            console.log('Opção não entendida... :(')
                    }
                }
            }
        }
        if (processo != true) {
            console.log('\nCliente não encontrado :(')
        }
    }
}