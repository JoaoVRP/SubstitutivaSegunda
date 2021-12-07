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
        "salarioliquido"
    ];

    constructor(private service: FolhaService) {}

    ngOnInit(): void {
        this.service.list().subscribe((folhas) => {
            this.folhas = folhas;
            console.log(folhas);
        });
    }
}
