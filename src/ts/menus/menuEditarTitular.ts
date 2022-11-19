import Menu from "../interfaces/menu";

export default class MenuEditarCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual informação quer editar?`)
        console.log(`----------------------`)
        console.log(`| 1 - Nome`)
        console.log(`| 2 - Nome Social`)
        console.log(`| 3 - Endereço`)
        console.log(`| 4 - Telefones`)
        console.log(`| 5 - Documentos`)
        console.log(`****************************`)
        console.log(`| 0 - Sair`)
        console.log(`----------------------\n`)
    }
}