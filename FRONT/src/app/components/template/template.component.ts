import {
    Component,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    EventEmitter,
} from "@angular/core";
import { ItemVenda } from "src/app/models/item-venda";

@Component({
    selector: "app-template",
    templateUrl: "./template.component.html",
    styleUrls: ["./template.component.css"],
})
export class TemplateComponent implements OnInit {
    itens: ItemVenda[] = [];
    @Output()
    totalItens = new EventEmitter<number>();
    constructor() {}

    // ngOnChanges(changes: SimpleChanges): void {
    //     console.log(changes);
    //     this.itens = JSON.parse(localStorage.getItem("itens")!) || [];
    //     this.totalItens.emit(
    //         this.itens.reduce((total, item) => {
    //             return total + item.quantidade;
    //         }, 0)
    //     );
    // }

    ngOnInit(): void {}
}
