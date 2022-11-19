import Processo from "../abstracoes/processo";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamilaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";
import DiretorFamíliaMais from "../diretores/diretorFamíliaMais";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretor = new DiretorSolteiroSimples()
        this.acomodacoes.push(diretor.construir())
        
        let diretor2 = new DiretorSolteiroMais()
        this.acomodacoes.push(diretor2.construir())

        let diretor3 = new DiretorCasalSimples()
        this.acomodacoes.push(diretor3.construir())
        
        let diretor4 = new DiretorFamilaSimples()
        this.acomodacoes.push(diretor4.construir())

        let diretor5 = new DiretorFamiliaSuper()
        this.acomodacoes.push(diretor5.construir())

        let diretor6 = new DiretorFamíliaMais()
        this.acomodacoes.push(diretor6.construir())

        
        
    }
}