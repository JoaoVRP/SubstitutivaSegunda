import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Funcionario } from "src/app/models/funcionario";
import { Folha } from "src/app/models/folha";
import { FuncionarioService } from "./../../../../services/funcionario.service";
import { FolhaService } from "./../../../../services/folha.service";

@Component({
    selector: "app-cadastrar-folha",
    templateUrl: "./cadastrar-folha.component.html",
    styleUrls: ["./cadastrar-folha.component.css"],
})
export class CadastrarFolhaComponent implements OnInit {
    ano!: number;
    funcionarios!: Funcionario[];
    funcionarioid!: number;
    horas!: number;
    valor!: number;
    mes!: number;

    constructor(
        private funcionarioService: FuncionarioService,
        private folhaService: FolhaService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.funcionarioService.list().subscribe((funcionarios) => {
            this.funcionarios = funcionarios;
            console.table(funcionarios);
        });
    }

    create(): void {
        let folha: Folha = {
            ano: this.ano,
            mes: this.mes,
            horas: this.horas,
            valor: this.valor,
            funcionarioid: this.funcionarioid
        };
        this.folhaService.create(folha).subscribe((res) =>{
            console.log(folha)
            //this.router.navigate(["folha/listar"]);
        },(error)=>{
            window.alert("Esse cadastro já existe!")
        });
     }
}
