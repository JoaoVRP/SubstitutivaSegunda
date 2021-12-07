import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Folha } from "../models/folha";

@Injectable({
    providedIn: "root",
})
export class FolhaService {
    private baseURL = "http://localhost:5000/api/folha";

    constructor(private http: HttpClient) {}

    list(): Observable<Folha[]> {
        return this.http.get<Folha[]>(`${this.baseURL}/list`);
    }

    getById(id: number): Observable<Folha> {
        return this.http.get<Folha>(`${this.baseURL}/getbyid/${id}`);
    }

    create(folha: Folha): Observable<Folha> {
        return this.http.post<any>(`${this.baseURL}/create`, folha);
    }
}
