import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  export class PoliticosApiService {

    constructor(private httpClient : HttpClient) {

      public List (): Observable<PoliticoModel>{
        return this.httpClient.get<PoliticoModel[]>('https://it3yui.firebaseio.com/problemas.json');
      }
     }
  }

  }
}
