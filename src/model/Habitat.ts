import { Animal } from "./Animal";

export class Habitat {
    private lista_de_animais: Array<Animal>;
    private nome: string;

    constructor(_lista_de_animais: Array<Animal>, _nome: string) {
        this.nome = _nome;
        this.lista_de_animais = _lista_de_animais;
    }

    public getListaDeAnimais(): Array<Animal> {
        return this.lista_de_animais;
    }

    public setListaDeAnimais(lista_de_animais: Array<Animal>): void {
        this.lista_de_animais = lista_de_animais;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }
}