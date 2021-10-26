import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ItemVenda } from "src/app/models/item-venda";
import { Produto } from "src/app/models/produto";
import { ProdutoService } from "src/app/services/produto.service";

@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
    produtos: Produto[] = [];
    itens: ItemVenda[] = JSON.parse(localStorage.getItem("itens")!) || [];

    constructor(
        private produtoService: ProdutoService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.produtoService.list().subscribe((produtos) => {
            this.produtos = produtos;
        });
    }

    adicionar(produto: Produto): void {
        let item: ItemVenda = {
            produto: produto,
            produtoId: produto.id!,
            quantidade: 1,
            preco: produto.preco,
        };
        this.itens.push(item);
        localStorage.setItem("itens", JSON.stringify(this.itens));
        this.router.navigate(["home/carrinho"]);
    }
}
