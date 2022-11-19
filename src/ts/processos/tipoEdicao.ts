import Processo from "../abstracoes/processo";
import MenuTipoEditar from "../menus/menuTipoEditar";
import EditarTitular from "./editarClienteTitular";
import EditarDependente from "./editarDependente";

export default class TipoEdicao extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoEditar()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new EditarTitular() //Edicao Cliente
                this.processo.processar()
                break
            case 2:
                this.processo = new EditarDependente() //Edicao Dependente
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}