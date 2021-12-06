import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Categoria } from "src/app/models/categoria";
import { Funcionario } from "src/app/models/funcionario";
import { CategoriaService } from "src/app/services/categoria.service";
import { FuncionarioService } from "./../../../../services/funcionario.service";

@Component({
    selector: "app-cadastrar-funcionario",
    templateUrl: "./cadastrar-funcionario.component.html",
    styleUrls: ["./cadastrar-funcionario.component.css"],
})
export class CadastrarFuncionarioComponent implements OnInit {
    nome!: string;
    cargo!: string;

    constructor(
        private funcionarioService: FuncionarioService,
        private categoriaService: CategoriaService,
        private router: Router
    ) {}

    ngOnInit(): void {
       
    }

    create(): void {
        let funcionario: Funcionario = {
            nome: this.nome,
            cargo: this.cargo
        };
        this.funcionarioService.create(funcionario).subscribe((funcionario) => {
            this.router.navigate(["funcionario/listar"]);
        });
    }
}
