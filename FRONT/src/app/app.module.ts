import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
// Imports dos componentes internos
import { AppComponent } from "./app.component";
import { ListarProdutoComponent } from "./components/views/produto/listar-produto/listar-produto.component";

@NgModule({
    declarations: [AppComponent, ListarProdutoComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
