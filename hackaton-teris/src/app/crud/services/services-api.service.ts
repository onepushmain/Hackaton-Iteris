import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicesApiService {


  constructor(private http:HttpClient) { }

  export class PoliticosApiService {

    constructor(private httpClient : HttpClient) {

      public List (): Observable<PoliticoModel>{
        return this.httpClient.get<PoliticoModel[]>('https://it3yui.firebaseio.com/problemas.json');
      }
     }



}
