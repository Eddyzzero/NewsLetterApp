import { Injectable } from "@angular/core";
import axios from "axios";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

//importantion de ma cle API et requete 
export class NewsService {
    private newsUrl = 'https://newsapi.org/v2/everything';
    private apiKey = '6494f8e1e40149fb95132af2a0612294';

    constructor() { }

    getNew(): Observable<any> {
        return new Observable( observe => {
            axios.get(this.newsUrl, {
                params: {
                    q: 'exemple',
                    langague: 'fr',
                    
                },
                headers: {
                     // Utilisez le schéma d'authentification approprié (Bearer, Basic, etc.)
                    Authorization: `Bearer ${this.apiKey}`
                }
            }).then(response => {
                observe.next(response.data.articles);
                observe.complete();
            }).catch( error => { observe.error(error)})
        }) 
    }
}
