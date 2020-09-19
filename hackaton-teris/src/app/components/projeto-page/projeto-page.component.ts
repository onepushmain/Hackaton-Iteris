import { Component, OnInit } from '@angular/core';
import { ServicesApiService } from 'src/app/crud/services/services-api.service';
import { ServicesModel } from 'src/app/Model/services-model';

@Component({
  selector: 'app-projeto-page',
  templateUrl: './projeto-page.component.html',
  styleUrls: ['./projeto-page.component.css']
})
export class ProjetoPageComponent implements OnInit {

  lista: ServicesModel[];
  prioridade = 0;
  constructor(private politicosApi: ServicesApiService) { }

  ngOnInit(): void {
     this.politicosApi.List().subscribe(lista => {
      this.lista = lista;

      //console.log(this.lista);
     });
  }
}
