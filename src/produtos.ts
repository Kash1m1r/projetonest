import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produtomodel";
import { ProdutosService } from "./produtos.services";

@Controller('produtos')
export default class ProdutosController {
    constructor(private produtosService: ProdutosService){

    }

    @Get()
    obterTodos(): Produto[]{
        return this.produtosService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtosService.obterUm(params.id);
    }

    @Post()
    criar(@Body() produto: Produto) {
        this.produtosService.criar(produto);
    }

    @Put()
    alterar(@Body() produto: Produto): Produto {
        return this.produtosService.alterar(produto);
    }

    @Delete(':id')
    apagar(@Param() params) {
       this.produtosService.apagar(params.id);
    }

}
//5545