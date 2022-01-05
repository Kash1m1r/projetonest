import { Injectable } from "@nestjs/common";
import { Produto } from "./produtomodel";

@Injectable()
export class ProdutosService {
    produtos: Produto[] = [
        new Produto("AAA1", "Livro Segmentação da Engenharia", 66.00),
        new Produto("AAA2", "Livro Karl Marx", 50.00),
        new Produto("AAA3", "Livro Star Wars", 120.00),
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto { 
        return this.produtos[0];
    }

    criar(produto: Produto) {
        this.produtos.push(produto);
    }

    alterar(produto: Produto): Produto {
        return produto;
    }
    apagar(id: number) {
        this.produtos.pop();
    }
}