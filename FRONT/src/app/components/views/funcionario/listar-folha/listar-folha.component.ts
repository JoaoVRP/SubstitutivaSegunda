import { Component, OnInit } from "@angular/core";
import { Folha } from "src/app/models/folha";
import { FolhaService } from "src/app/services/folha.service";

@Component({
    selector: "app-listar-folha",
    templateUrl: "./listar-folha.component.html",
    styleUrls: ["./listar-folha.component.css"],
})
export class ListarFolhaComponent implements OnInit {
    folhas: Folha[] = [];
    colunasExibidas: String[] = [
        "ano",
        "mes",
        "valor",
        "horas",
        "nome",
        "cargo",
        "salariobruto",
        "imposto",
        "inss",
        "fgts",
        "salarioliquido",
        "acoes"
    ];

    constructor(private service: FolhaService) {}

    ngOnInit(): void {
        this.service.list().subscribe((folhas) => {
            this.folhas = folhas;
            console.log(folhas);
        });
    }
    delete(id:number): void {
        var resposta = window.confirm("Deseja deletar essa folha?");
        if (resposta == true){
            this.service.delete(id).subscribe((res) =>{
                this.service.list().subscribe((folhas) => {
                    this.folhas = folhas;
                    console.log(folhas);
                });
            },(error)=>{
                window.alert("Esse cadastro já existe!")
            });
        }

        /*let folha: Folha = {
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
    */}
}
