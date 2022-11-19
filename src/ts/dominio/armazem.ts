import { timeStamp } from "console";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import Hospedagem from "../modelos/hospedagem";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private hospedagens:Hospedagem [] = []
    private clientes: Cliente[] = []
    private acomodacoes: Acomodacao[] = []
    private constructor() { }
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.clientes
    }
    public get Acomodacoes(){
        return this.acomodacoes
    }
    public get getHospedagens(){
        return this.hospedagens
    }

}