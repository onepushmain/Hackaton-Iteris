import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesModel } from './services-model';

@Injectable({
  providedIn: 'root'
})

export class ServicesApiService {


  constructor(private http: HttpClient) { }
    public List(): Observable<ServicesModel[]>{
       return this.http.get<ServicesModel[]>('https://it3yui.firebaseio.com/problemas.json');
  }

}
